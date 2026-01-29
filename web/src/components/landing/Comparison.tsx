import { Check, X, AlertTriangle, Crown } from "lucide-react";

const Comparison = () => {
  const features = [
    { name: "Edit from your phone", blink: true, contentful: true, sanity: true, mdx: false },
    { name: "Changes go live instantly", blink: true, contentful: false, sanity: true, mdx: false },
    { name: "No rebuild/deploy needed", blink: true, contentful: false, sanity: true, mdx: false },
    { name: "Free tier", blink: "Unlimited", contentful: "5 users", sanity: "3 users", mdx: true },
    { name: "UI you already know", blink: "Notion ✓", contentful: "New UI", sanity: "New UI", mdx: "Code" },
    { name: "Full type safety", blink: true, contentful: false, sanity: true, mdx: true },
    { name: "Self-host option", blink: true, contentful: false, sanity: false, mdx: true },
    { name: "Time to first content", blink: "5 min", contentful: "30+ min", sanity: "30+ min", mdx: "15+ min" },
    { name: "Vendor lock-in", blink: "None", contentful: "High", sanity: "High", mdx: "None" },
  ];

  const renderCell = (value: boolean | string, isBlink: boolean = false) => {
    if (value === true) {
      return <Check className={`h-5 w-5 mx-auto ${isBlink ? "text-primary" : "text-success"}`} />;
    }
    if (value === false) {
      return <X className="h-5 w-5 text-error mx-auto" />;
    }
    if (typeof value === "string") {
      if (value.includes("user") || value === "High") {
        return (
          <div className="flex items-center justify-center gap-1">
            <AlertTriangle className="h-4 w-4 text-warning" />
            <span className="text-sm text-muted-foreground">{value}</span>
          </div>
        );
      }
      if (isBlink) {
        return <span className="text-sm text-primary font-semibold">{value}</span>;
      }
      return <span className="text-sm text-muted-foreground">{value}</span>;
    }
    return null;
  };

  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="text-primary text-sm font-medium uppercase tracking-wider mb-4">Comparison</p>
          <h2 className="heading-2 mb-4">Why indie devs choose Blink</h2>
          <p className="body-text max-w-xl mx-auto">
            We built Blink because existing CMS options are either expensive, slow, or require learning a new UI.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto mt-12">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-medium text-muted-foreground">What matters</th>
                <th className="py-4 px-4 bg-primary/10 rounded-t-lg">
                  <div className="flex items-center justify-center gap-2">
                    <Crown className="h-4 w-4 text-primary" />
                    <span className="font-semibold text-primary">Blink</span>
                  </div>
                </th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Contentful</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">Sanity</th>
                <th className="py-4 px-4 font-medium text-muted-foreground">MDX/Git</th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-border/50 hover:bg-card/50 transition-colors"
                >
                  <td className="py-4 px-4 text-foreground font-medium">{feature.name}</td>
                  <td className="py-4 px-4 text-center bg-primary/5">{renderCell(feature.blink, true)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.contentful)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.sanity)}</td>
                  <td className="py-4 px-4 text-center">{renderCell(feature.mdx)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-8">
          <span className="text-foreground font-medium">TL;DR:</span> Blink gives you real-time updates with a UI you already know, for free.
        </p>
      </div>
    </section>
  );
};

export default Comparison;
