import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db
      .query("freelance")
      .withIndex("by_published", (q) => q.eq("published", true))
      .collect()
      .then((items) => items.sort((a, b) => a.order - b.order));
  },
});

export const getById = query({
  args: { id: v.id("freelance") },
  handler: async (ctx, args) => {
    return await ctx.db.get(args.id);
  },
});

export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("freelance")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

export const upsert = mutation({
  args: {
    notionId: v.string(),
    title: v.string(),
    client: v.optional(v.string()),
    description: v.string(),
    url: v.string(),
    logo: v.optional(v.string()),
    colors: v.object({
      bg: v.string(),
      accent: v.string(),
      text: v.string(),
      textMuted: v.optional(v.string()),
    }),
    testimonial: v.optional(v.string()),
    tags: v.array(v.string()),
    order: v.number(),
    published: v.boolean(),
    // Profile fields
    slug: v.optional(v.string()),
    vision: v.optional(v.string()),
    status: v.optional(v.string()),
    startDate: v.optional(v.string()),
    targetDate: v.optional(v.string()),
    currentFocus: v.optional(v.string()),
    milestones: v.optional(v.array(v.object({
      title: v.string(),
      date: v.optional(v.string()),
      completed: v.boolean(),
      description: v.optional(v.string()),
    }))),
    todos: v.optional(v.array(v.object({
      task: v.string(),
      completed: v.boolean(),
      priority: v.optional(v.string()),
    }))),
    team: v.optional(v.array(v.object({
      name: v.string(),
      github: v.string(),
      role: v.optional(v.string()),
    }))),
    links: v.optional(v.array(v.object({
      label: v.string(),
      url: v.string(),
      type: v.string(),
    }))),
    githubRepo: v.optional(v.string()),
    npmPackage: v.optional(v.string()),
    techStack: v.optional(v.array(v.string())),
    widgets: v.optional(v.array(v.object({
      type: v.string(),
      config: v.optional(v.any()),
    }))),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("freelance")
      .withIndex("by_notion_id", (q) => q.eq("notionId", args.notionId))
      .first();

    const data = {
      ...args,
      syncedAt: Date.now(),
    };

    if (existing) {
      await ctx.db.patch(existing._id, data);
      return existing._id;
    } else {
      return await ctx.db.insert("freelance", data);
    }
  },
});

export const remove = mutation({
  args: { notionId: v.string() },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("freelance")
      .withIndex("by_notion_id", (q) => q.eq("notionId", args.notionId))
      .first();

    if (existing) {
      await ctx.db.delete(existing._id);
    }
  },
});
