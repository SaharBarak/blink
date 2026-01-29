import { X, Check, Sparkles, Clock, Frown, Smile } from "lucide-react";

const ProblemSolution = () => {
  const oldWay = [
    "Open VS Code",
    "Find the right file",
    "Edit TypeScript/JSON",
    "Commit changes",
    "Push to GitHub",
    "Wait for Vercel build",
    "Finally live",
  ];

  const newWay = [
    "Open Notion app",
    "Edit your content",
    "Done. It's live.",
  ];

  return (
    <section className="section-padding relative">
      <div className="section-container">
        {/* Section intro */}
        <div className="text-center mb-8">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">The Problem</p>
          <h2 className="heading-2 mb-4">
            Your portfolio is <span className="text-error">stuck in 2019</span>
          </h2>
          <p className="body-text max-w-2xl mx-auto">
            You hardcoded your content. Now every typo fix requires a full dev cycle. 
            You avoid updating your site because it's a hassle. Sound familiar?
          </p>
        </div>

        {/* Pain point callouts */}
        <div className="grid md:grid-cols-3 gap-4 mb-16 max-w-3xl mx-auto">
          {[
            { icon: Clock, text: "10+ minutes to fix a typo" },
            { icon: Frown, text: "Can't update from your phone" },
            { icon: X, text: "Dreading any content change" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 bg-error/5 border border-error/20 rounded-lg p-4">
              <item.icon className="h-5 w-5 text-error shrink-0" />
              <span className="text-sm text-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">The Solution</p>
          <h2 className="heading-2 mb-4">
            What if updates were <span className="text-primary">instant?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Old Way */}
          <div className="bg-card border border-border rounded-2xl p-8 relative overflow-hidden opacity-60">
            <div className="absolute top-0 right-0 w-32 h-32 bg-error/5 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-error/10 flex items-center justify-center">
                  <X className="h-5 w-5 text-error" />
                </div>
                <div>
                  <h3 className="heading-3 text-foreground">Before Blink</h3>
                  <p className="text-sm text-error font-medium">5-10 minutes per change</p>
                </div>
              </div>

              <div className="space-y-3">
                {oldWay.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-muted-foreground"
                  >
                    <span className="w-6 h-6 rounded-full bg-secondary text-xs flex items-center justify-center text-muted-foreground">
                      {index + 1}
                    </span>
                    <span className="line-through">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Blink Way */}
          <div className="bg-card border border-primary/30 rounded-2xl p-8 relative overflow-hidden glow-amber-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Check className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="heading-3 text-foreground">With Blink</h3>
                  <p className="text-sm text-primary font-medium">30 seconds. From anywhere.</p>
                </div>
              </div>

              <div className="space-y-3">
                {newWay.map((step, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-foreground"
                  >
                    <span className="w-6 h-6 rounded-full bg-primary/20 text-xs flex items-center justify-center text-primary font-medium">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border space-y-3">
                {[
                  { icon: Smile, text: "Update from your phone in bed" },
                  { icon: Sparkles, text: "No technical knowledge needed" },
                  { icon: Check, text: "Changes appear in real-time" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-primary text-sm">
                    <item.icon className="h-4 w-4" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
