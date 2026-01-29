import { Code, Rocket, Briefcase, Users, Quote } from "lucide-react";

const UseCases = () => {
  const cases = [
    {
      icon: Code,
      title: "Developer Portfolios",
      description:
        "Showcase projects and blog posts. Update your availability status from your phone while commuting.",
      quote: "I used to avoid updating my portfolio. Now I do it from the bathroom.",
      author: "Senior Dev at Stripe",
    },
    {
      icon: Rocket,
      title: "Indie Hackers",
      description:
        "Ship landing pages faster. Update copy without deploys. A/B test headlines in real-time.",
      quote: "Changed my pricing copy 5 times in one day. No deploys. Just vibes.",
      author: "Founder, shipped 3 products",
    },
    {
      icon: Briefcase,
      title: "Freelancers",
      description:
        "Show client testimonials (with NDA support). Display real-time availability so clients know when you are free.",
      quote: "Clients book me because they can see I am available. It is live, not a static badge.",
      author: "Freelance Designer",
    },
    {
      icon: Users,
      title: "Small Teams",
      description:
        "Let non-devs update content in Notion. Developers focus on features. Everyone stays happy.",
      quote: "Our marketing person updates the site. I write code. Perfect.",
      author: "CTO, 4-person startup",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Use Cases</p>
          <h2 className="heading-2 mb-4">Built for people who ship</h2>
          <p className="body-text max-w-xl mx-auto">
            Whether you are a solo dev or a small team, Blink fits your workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mt-12">
          {cases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl p-6 card-hover"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <useCase.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              </div>
              
              {/* Testimonial */}
              <div className="border-t border-border pt-4 mt-4">
                <div className="flex gap-2">
                  <Quote className="h-4 w-4 text-primary shrink-0 mt-1" />
                  <div>
                    <p className="text-sm text-foreground italic mb-2">{useCase.quote}</p>
                    <p className="text-xs text-muted-foreground">— {useCase.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
