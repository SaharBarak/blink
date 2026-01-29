import { Zap } from "lucide-react";

const Footer = () => {
  const links = {
    Product: ["Features", "Documentation", "Changelog", "Roadmap"],
    Resources: ["GitHub", "Quick Start", "Examples", "API Reference"],
    Community: ["Discord", "Twitter", "Blog"],
    Legal: ["MIT License"],
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Zap className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold text-foreground">Blink</span>
            </a>
            <p className="text-sm text-muted-foreground">Edit. Blink. Live.</p>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <h4 className="font-medium text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Built with Notion + Convex + Next.js
            </p>
            <p className="text-sm text-muted-foreground">
              Made by{" "}
              <a href="#" className="text-primary hover:underline">
                @saharbarak
              </a>
            </p>
            <p className="text-sm text-muted-foreground">
              © 2024 Blink CMS. Open source under MIT License.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
