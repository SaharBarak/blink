import { useState } from "react";
import { Copy, Check } from "lucide-react";

const CodeExamples = () => {
  const [activeTab, setActiveTab] = useState("hooks");
  const [copied, setCopied] = useState(false);

  const tabs = [
    { id: "hooks", label: "React Hooks" },
    { id: "component", label: "Component" },
    { id: "schema", label: "Schema" },
    { id: "cli", label: "CLI" },
  ];

  const codeBlocks: Record<string, string> = {
    hooks: `// src/hooks/useContent.ts
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";

export function useBlogPosts() {
  return useQuery(api.blog.list);
}

export function useProjects() {
  return useQuery(api.projects.list);
}

export function useAvailability() {
  return useQuery(api.availability.get);
}

export function useNowBySection() {
  return useQuery(api.now.bySection);
}`,
    component: `// src/components/BlogList.tsx
"use client";
import { useBlogPosts } from "@/hooks/useContent";
import { BlogCard } from "./BlogCard";

export function BlogList() {
  const posts = useBlogPosts();

  if (!posts) return <BlogListSkeleton />;

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {posts.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
}`,
    schema: `// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  blog: defineTable({
    notionId: v.string(),
    title: v.string(),
    slug: v.string(),
    date: v.string(),
    tags: v.array(v.string()),
    excerpt: v.string(),
    content: v.string(),
    coverImage: v.optional(v.string()),
    published: v.boolean(),
    syncedAt: v.number(),
  })
    .index("by_slug", ["slug"])
    .index("by_date", ["date"])
    .index("by_published", ["published"]),
});`,
    cli: `$ blink sync

🔄 Syncing Notion → Convex...

📦 Projects        ✅ 4 items synced
📦 Freelance       ✅ 3 items synced
📦 Blog            ✅ 8 items synced
📦 Research        ✅ 5 items synced
📦 Contributions   ✅ 6 items synced
📦 Ideas           ✅ 4 items synced
📦 Now             ✅ 7 items synced
📦 About           ✅ 1 item synced
📦 Availability    ✅ 1 item synced
📦 Site Copy       ✅ 6 items synced

✨ Synced 45 items in 2.3s`,
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(codeBlocks[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="docs" className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Developer Experience First</h2>
          <p className="body-text">Clean APIs, TypeScript everywhere</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl overflow-hidden">
            {/* Tab Bar */}
            <div className="flex items-center justify-between border-b border-border px-4">
              <div className="flex gap-1 overflow-x-auto">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-4 py-3 text-sm font-medium transition-colors relative whitespace-nowrap ${
                      activeTab === tab.id
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                    )}
                  </button>
                ))}
              </div>
              <button
                onClick={handleCopy}
                className="p-2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {copied ? (
                  <Check className="h-4 w-4 text-success" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>

            {/* Code Block */}
            <pre className="p-6 text-sm font-mono overflow-x-auto bg-background/50">
              <code>
                {codeBlocks[activeTab].split('\n').map((line, i) => (
                  <div key={i} className="leading-relaxed">
                    {line.startsWith('//') || line.startsWith('$') || line.startsWith('🔄') || line.startsWith('📦') || line.startsWith('✨') ? (
                      <span className="text-primary">{line}</span>
                    ) : line.includes('export') || line.includes('import') || line.includes('const') || line.includes('function') ? (
                      <span className="text-foreground">{line}</span>
                    ) : line.includes('✅') ? (
                      <span className="text-success">{line}</span>
                    ) : (
                      <span className="text-muted-foreground">{line}</span>
                    )}
                  </div>
                ))}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CodeExamples;
