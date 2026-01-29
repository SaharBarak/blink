import { Database, Server, Code, Terminal } from "lucide-react";

const Included = () => {
  const categories = [
    {
      icon: Database,
      title: "Notion Setup",
      items: [
        "10 databases",
        "Proper types",
        "Select options",
        "Multi-selects",
        "JSON fields",
      ],
    },
    {
      icon: Server,
      title: "Convex Backend",
      items: [
        "Type-safe schema",
        "Upsert mutations",
        "Indexed queries",
        "Real-time subs",
        "Blog engagement",
      ],
    },
    {
      icon: Code,
      title: "Next.js App",
      items: [
        "React hooks",
        "SSR support",
        "Loading states",
        "Dark/light mode",
        "Responsive",
      ],
    },
    {
      icon: Terminal,
      title: "Blink CLI",
      items: [
        "blink setup",
        "blink seed",
        "blink sync",
        "blink watch",
        "Verbose logging",
      ],
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Batteries Included</h2>
          <p className="body-text">Everything you need to ship</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <category.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Included;
