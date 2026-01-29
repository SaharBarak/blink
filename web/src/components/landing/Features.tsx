import { Zap, Shield, Smartphone, Package, Rocket, Pencil, Terminal, Link } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Zap,
      title: "Instant Sync",
      description: "Edit in Notion, see it live in seconds. Not minutes. Seconds.",
      highlight: true,
    },
    {
      icon: Shield,
      title: "Type-Safe",
      description: "Full TypeScript. Catch errors before they hit production.",
      highlight: false,
    },
    {
      icon: Smartphone,
      title: "Mobile Editing",
      description: "Fix typos from your phone. Update your availability from bed.",
      highlight: true,
    },
    {
      icon: Package,
      title: "10 Content Types",
      description: "Projects, Blog, Freelance, Now page, About, and more built-in.",
      highlight: false,
    },
    {
      icon: Rocket,
      title: "Zero Rebuilds",
      description: "No more waiting for Vercel. No more watching build logs.",
      highlight: true,
    },
    {
      icon: Pencil,
      title: "You Know Notion",
      description: "No new UI to learn. No training for your team. Just Notion.",
      highlight: false,
    },
    {
      icon: Terminal,
      title: "5-Minute Setup",
      description: "One command creates everything. Databases, schema, hooks.",
      highlight: false,
    },
    {
      icon: Link,
      title: "Auto-Sync Option",
      description: "Set up webhooks once. Never run sync manually again.",
      highlight: false,
    },
  ];

  return (
    <section id="features" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative">
        <div className="text-center mb-6">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Features</p>
          <h2 className="heading-2 mb-4">Built for developers who ship</h2>
          <p className="body-text max-w-xl mx-auto">
            Not another bloated CMS. Just the features you need to keep your portfolio fresh.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-card border rounded-xl p-6 card-hover ${
                feature.highlight ? "border-primary/30" : "border-border"
              }`}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${
                feature.highlight ? "bg-primary/20 group-hover:bg-primary/30" : "bg-primary/10 group-hover:bg-primary/20"
              }`}>
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
