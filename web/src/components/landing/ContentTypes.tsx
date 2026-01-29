import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContentTypes = () => {
  const types = [
    {
      id: "projects",
      name: "Projects",
      schema: `// Projects
projects: defineTable({
  title: v.string(),
  subtitle: v.string(),
  description: v.string(),
  url: v.string(),
  logo: v.optional(v.string()),
  colors: v.object({
    bg: v.string(),
    accent: v.string(),
    text: v.string(),
  }),
  order: v.number(),
  published: v.boolean(),
})`,
      preview: [
        { title: "Wessley", url: "wess...", order: 1 },
        { title: "Karen", url: "kare...", order: 2 },
      ],
    },
    {
      id: "blog",
      name: "Blog",
      schema: `// Blog
blog: defineTable({
  title: v.string(),
  slug: v.string(),
  date: v.string(),
  tags: v.array(v.string()),
  excerpt: v.string(),
  content: v.string(),
  coverImage: v.optional(v.string()),
  published: v.boolean(),
})`,
      preview: [
        { title: "Hello World", url: "hello...", order: 1 },
        { title: "Getting Started", url: "getti...", order: 2 },
      ],
    },
    {
      id: "freelance",
      name: "Freelance",
      schema: `// Freelance
freelance: defineTable({
  client: v.string(),
  project: v.string(),
  description: v.string(),
  testimonial: v.optional(v.string()),
  nda: v.boolean(),
  published: v.boolean(),
})`,
      preview: [
        { title: "Acme Corp", url: "acme...", order: 1 },
        { title: "Startup Inc", url: "start...", order: 2 },
      ],
    },
    {
      id: "now",
      name: "Now",
      schema: `// Now
now: defineTable({
  section: v.string(),
  items: v.array(v.object({
    text: v.string(),
    link: v.optional(v.string()),
  })),
  order: v.number(),
})`,
      preview: [
        { title: "Working on", url: "work...", order: 1 },
        { title: "Learning", url: "lear...", order: 2 },
      ],
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Built for Developer Portfolios</h2>
          <p className="body-text">10 content types, fully customizable</p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="projects" className="w-full">
            <TabsList className="w-full flex flex-wrap justify-center gap-2 bg-transparent mb-8">
              {types.map((type) => (
                <TabsTrigger
                  key={type.id}
                  value={type.id}
                  className="px-4 py-2 rounded-lg border border-border bg-card data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary transition-all"
                >
                  {type.name}
                </TabsTrigger>
              ))}
              <span className="px-4 py-2 text-muted-foreground text-sm">+6 more</span>
            </TabsList>

            {types.map((type) => (
              <TabsContent key={type.id} value={type.id}>
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Notion Preview */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-border bg-secondary/50">
                      <span className="text-sm font-medium text-foreground">Notion Database</span>
                    </div>
                    <div className="p-4">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-border">
                            <th className="text-left py-2 px-3 text-muted-foreground font-medium">Title</th>
                            <th className="text-left py-2 px-3 text-muted-foreground font-medium">URL</th>
                            <th className="text-left py-2 px-3 text-muted-foreground font-medium">Order</th>
                          </tr>
                        </thead>
                        <tbody>
                          {type.preview.map((row, i) => (
                            <tr key={i} className="border-b border-border/50 last:border-0">
                              <td className="py-2 px-3 text-foreground">{row.title}</td>
                              <td className="py-2 px-3 text-muted-foreground">{row.url}</td>
                              <td className="py-2 px-3 text-muted-foreground">{row.order}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  {/* Schema Code */}
                  <div className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="px-4 py-3 border-b border-border bg-secondary/50">
                      <span className="text-sm font-medium text-foreground">Schema</span>
                    </div>
                    <pre className="p-4 text-sm font-mono overflow-x-auto">
                      <code className="text-muted-foreground">
                        {type.schema.split('\n').map((line, i) => (
                          <div key={i} className="leading-relaxed">
                            {line.includes('//') ? (
                              <span className="text-primary">{line}</span>
                            ) : line.includes(':') ? (
                              <>
                                <span className="text-foreground">{line.split(':')[0]}:</span>
                                <span className="text-muted-foreground">{line.split(':').slice(1).join(':')}</span>
                              </>
                            ) : (
                              <span>{line}</span>
                            )}
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default ContentTypes;
