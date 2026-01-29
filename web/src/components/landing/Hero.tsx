import { Button } from "@/components/ui/button";
import { Zap, ArrowRight, Github, Clock, RefreshCw } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-noise pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 animate-fade-up">
            <Zap className="h-4 w-4 text-primary" />
            <span className="text-sm text-muted-foreground">
              Open Source · MIT License · Free Forever
            </span>
          </div>

          {/* Headline */}
          <h1 className="heading-1 mb-6 animate-fade-up animation-delay-100">
            <span className="text-foreground">Edit. </span>
            <span className="text-primary animate-blink-glow">Blink. </span>
            <span className="text-foreground">Live.</span>
          </h1>

          {/* Pain-focused subheadline */}
          <p className="text-xl md:text-2xl text-foreground font-medium mb-4 animate-fade-up animation-delay-200">
            Stop waiting 10 minutes to fix a typo on your portfolio.
          </p>
          
          <p className="body-text max-w-2xl mx-auto mb-4 animate-fade-up animation-delay-200">
            Blink turns Notion into your CMS. Edit content on your phone, 
            see it live in seconds. No git commits. No deploys. No waiting.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-10 animate-fade-up animation-delay-300">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>5 min setup</span>
            </div>
            <div className="flex items-center gap-2">
              <RefreshCw className="h-4 w-4 text-primary" />
              <span>Real-time sync</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="h-4 w-4 text-primary" />
              <span>$0/month</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Start Building Free
              <ArrowRight className="h-5 w-5" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Github className="h-5 w-5" />
              Star on GitHub
            </Button>
          </div>

          {/* Social proof */}
          <p className="text-sm text-muted-foreground mb-16 animate-fade-up animation-delay-400">
            Trusted by <span className="text-foreground font-medium">500+ indie developers</span> · 
            <span className="text-primary"> ⭐ 1.2k stars</span> on GitHub
          </p>

          {/* Visual Diagram */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 animate-fade-up animation-delay-500">
            {/* Notion Card */}
            <div className="bg-card border border-border rounded-xl p-6 w-56 card-hover">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-foreground rounded flex items-center justify-center">
                  <span className="text-background font-bold text-sm">N</span>
                </div>
                <span className="font-medium text-foreground">Notion</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">Write content in the app you already use daily</p>
            </div>

            {/* Arrow with Blink */}
            <div className="flex items-center gap-2 py-4 md:py-0">
              <div className="h-px w-8 bg-border hidden md:block" />
              <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full">
                <Zap className="h-4 w-4 text-primary animate-pulse-flow" />
                <span className="text-sm font-medium text-primary">30 sec</span>
              </div>
              <div className="h-px w-8 bg-border hidden md:block" />
            </div>

            {/* Site Card */}
            <div className="bg-card border border-primary/30 rounded-xl p-6 w-56 card-hover glow-amber-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-primary rounded flex items-center justify-center">
                  <Zap className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-medium text-foreground">Your Site</span>
              </div>
              <p className="text-sm text-muted-foreground text-left">Live and updated. No deploy needed.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
