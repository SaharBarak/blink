# create-blink-app

Create a new Blink CMS project with one command.

```bash
npx create-blink-app my-portfolio
```

## What is Blink?

Blink is an open-source CMS that turns Notion into a real-time content management system using Convex.

- **Edit in Notion** - Use the editor you already know
- **Sync to Convex** - Type-safe, real-time database
- **See it live instantly** - No rebuilds, no deploys

## Usage

```bash
# Create a new project
npx create-blink-app my-portfolio

# With pnpm
npx create-blink-app my-portfolio --use-pnpm

# With bun
npx create-blink-app my-portfolio --use-bun

# Skip dependency installation
npx create-blink-app my-portfolio --no-install
```

## What's Included

- **10 content types** - Projects, Blog, Research, Ideas, Now, About, and more
- **Convex schema** - Type-safe database with real-time subscriptions
- **Notion sync scripts** - Automated setup and syncing
- **React hooks** - Ready-to-use content hooks
- **Next.js 14** - App Router, Server Components

## After Creating

1. Copy `.env.local.example` to `.env.local`
2. Add your Notion API key
3. Run `npm run blink:setup` to create Notion databases
4. Run `npx convex dev` to set up Convex
5. Run `npm run blink:sync` to sync content
6. Run `npm run dev` to start developing

## Learn More

- [Blink Documentation](https://blink.dev/docs)
- [GitHub Repository](https://github.com/SaharBarak/blink-instant-content-live)

## License

MIT
