import { FileEdit, RefreshCw, Globe, ArrowRight } from "lucide-react";

const Architecture = () => {
  const steps = [
    {
      icon: FileEdit,
      step: "1",
      title: "Write in Notion",
      description: "Use the app you already have. No new UI to learn. Works on mobile too.",
    },
    {
      icon: RefreshCw,
      step: "2",
      title: "Blink syncs it",
      description: "Run `blink sync` or set up auto-sync. Your content flows to Convex.",
    },
    {
      icon: Globe,
      step: "3",
      title: "Site updates instantly",
      description: "Real-time subscriptions mean zero delay. No rebuild. No deploy.",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-primary/5" />
      
      <div className="section-container relative">
        <div className="text-center mb-6">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">How It Works</p>
          <h2 className="heading-2 mb-4">Simple by design</h2>
          <p className="body-text max-w-xl mx-auto">
            No complex architecture. No vendor lock-in. Just Notion → Convex → Your site.
          </p>
        </div>

        {/* Flow Diagram */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-0 my-16 max-w-4xl mx-auto">
          {[
            { label: "Notion", sublabel: "Your content lives here" },
            { label: "Blink CLI", sublabel: "Syncs in seconds" },
            { label: "Convex", sublabel: "Real-time database" },
            { label: "Your Site", sublabel: "Always up to date" },
          ].map((item, index) => (
            <div key={index} className="flex items-center">
              <div className={`bg-card border rounded-xl p-5 text-center min-w-[140px] lg:min-w-[160px] ${
                index === 3 ? "border-primary/30 glow-amber-sm" : "border-border"
              }`}>
                <p className="font-semibold text-foreground text-sm lg:text-base">{item.label}</p>
                <p className="text-xs text-muted-foreground mt-1">{item.sublabel}</p>
              </div>
              {index < 3 && (
                <div className="hidden lg:flex items-center px-3">
                  <ArrowRight className="h-5 w-5 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Step Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 text-center card-hover relative"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {step.step}
              </div>
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 mt-2">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;
