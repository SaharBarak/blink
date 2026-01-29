import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Wait, is this actually free?",
      answer:
        "Yes. Notion's free plan is unlimited. Convex's free tier handles way more than a portfolio needs. Blink is open source (MIT). You pay $0 unless you hit serious scale.",
    },
    {
      question: "How fast is 'instant' really?",
      answer:
        "Sub-second. Convex uses real-time subscriptions, so your site literally updates as you type in Notion (if you enable auto-sync). No polling. No delays.",
    },
    {
      question: "I already have a Next.js site. Can I add Blink?",
      answer:
        "Absolutely. Install the Convex dependencies, copy the sync scripts and schema, run `blink setup`, and you're done. Works with Next.js 14+ and the App Router.",
    },
    {
      question: "What if Notion goes down?",
      answer:
        "Your site stays up. Content lives in Convex (not Notion). Notion is only for editing. If Notion has issues, your visitors see nothing wrong.",
    },
    {
      question: "Can I customize the content types?",
      answer:
        "The schema is 100% yours. Add fields, remove tables, rename everything. We give you 10 types as a starting point, but make it fit your needs.",
    },
    {
      question: "Do I need to run sync manually every time?",
      answer:
        "Nope. Set up a Notion webhook (takes 2 minutes) and content syncs automatically whenever you save in Notion. Or use `blink watch` during development.",
    },
    {
      question: "What about SEO?",
      answer:
        "Blink works with Next.js SSR/SSG. Your content is server-rendered for perfect SEO. The Site Copy content type lets you manage meta tags from Notion too.",
    },
    {
      question: "I use Remix/Astro/SvelteKit. Will it work?",
      answer:
        "The core (Convex + sync scripts) works with any framework. We ship Next.js hooks out of the box, but adapting for other frameworks is straightforward.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">FAQ</p>
          <h2 className="heading-2 mb-4">Common questions</h2>
          <p className="body-text">Still unsure? We have got you covered.</p>
        </div>

        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30 transition-colors"
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
