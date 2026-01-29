import { Button } from "@/components/ui/button";
import { ArrowRight, Star, CheckCircle, Zap } from "lucide-react";

const CTA = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="section-container relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-primary/30 mb-8">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-foreground font-medium">Setup takes 5 minutes</span>
          </div>

          <h2 className="heading-2 mb-4">Stop dreading content updates</h2>
          <p className="body-text mb-8 max-w-xl mx-auto">
            Your portfolio should be a living document, not a codebase you avoid touching. 
            Start shipping content as fast as you ship code.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-10">
            {[
              "Free forever",
              "No credit card",
              "Open source",
              "5 min setup",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button variant="hero" size="xl">
              Start Building Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Star className="h-5 w-5" />
              Star on GitHub
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Join <span className="text-foreground font-medium">500+ developers</span> who update their portfolios without touching code
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
