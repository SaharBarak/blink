import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Get all site copy
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("siteCopy").collect();
  },
});

// Get copy by section
export const getBySection = query({
  args: { section: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("siteCopy")
      .withIndex("by_section", (q) => q.eq("section", args.section))
      .first();
  },
});

// Get all copy as a map keyed by section
export const getAllSections = query({
  args: {},
  handler: async (ctx) => {
    const all = await ctx.db.query("siteCopy").collect();
    const map: Record<string, { label: string; title: string; subtitle?: string }> = {};

    for (const item of all) {
      map[item.section] = {
        label: item.label,
        title: item.title,
        subtitle: item.subtitle,
      };
    }

    return map;
  },
});

// Upsert site copy (used by sync script)
export const upsert = mutation({
  args: {
    notionId: v.string(),
    section: v.string(),
    label: v.string(),
    title: v.string(),
    subtitle: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("siteCopy")
      .withIndex("by_notion_id", (q) => q.eq("notionId", args.notionId))
      .first();

    const data = {
      notionId: args.notionId,
      section: args.section,
      label: args.label,
      title: args.title,
      subtitle: args.subtitle,
      syncedAt: Date.now(),
    };

    if (existing) {
      await ctx.db.patch(existing._id, data);
      return existing._id;
    } else {
      return await ctx.db.insert("siteCopy", data);
    }
  },
});
