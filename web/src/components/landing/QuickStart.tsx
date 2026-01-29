const QuickStart = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Create Project",
      code: `$ npx create-blink-app my-portfolio
$ cd my-portfolio
$ npm install`,
    },
    {
      step: "Step 2",
      title: "Configure Notion",
      code: `# Add to .env.local
NOTION_API_KEY=secret_xxx
NOTION_PARENT_PAGE_ID=xxx

# Create all 10 databases automatically
$ blink setup`,
    },
    {
      step: "Step 3",
      title: "Configure Convex",
      code: `$ npx convex dev
# Follow prompts to create project`,
    },
    {
      step: "Step 4",
      title: "Sync & Run",
      code: `$ blink sync
$ npm run dev

# Open http://localhost:3000
# Edit in Notion, refresh to see changes ✨`,
    },
  ];

  return (
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="section-container relative">
        <div className="text-center mb-16">
          <h2 className="heading-2 mb-4">Ship in 5 Minutes</h2>
          <p className="body-text">From zero to live CMS</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-xl overflow-hidden card-hover"
            >
              <div className="px-4 py-3 border-b border-border flex items-center gap-3">
                <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center justify-center">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-foreground">{step.title}</span>
              </div>
              <pre className="p-4 text-sm font-mono overflow-x-auto">
                <code>
                  {step.code.split('\n').map((line, i) => (
                    <div key={i} className="leading-relaxed">
                      {line.startsWith('#') ? (
                        <span className="text-muted-foreground">{line}</span>
                      ) : line.startsWith('$') ? (
                        <span className="text-primary">{line}</span>
                      ) : line.includes('=') ? (
                        <>
                          <span className="text-foreground">{line.split('=')[0]}=</span>
                          <span className="text-muted-foreground">{line.split('=')[1]}</span>
                        </>
                      ) : (
                        <span className="text-muted-foreground">{line}</span>
                      )}
                    </div>
                  ))}
                </code>
              </pre>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStart;
