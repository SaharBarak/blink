# Blink

**Turn Notion into a real-time CMS for your portfolio.**

Edit in Notion. See it live instantly. No rebuilds, no deploys, no waiting.

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Node](https://img.shields.io/badge/Node-18+-blue.svg)](https://nodejs.org/)

---

## Why Blink?

Traditional headless CMS solutions require builds and deploys for every change. Git-based workflows mean waiting minutes (or hours) to see updates.

**Blink changes that.**

Write in Notion → Sync to Convex → Live in seconds.

- Edit from anywhere, even your phone
- Real-time updates, no rebuild required
- Type-safe database with full TypeScript support
- 10 pre-built content types for portfolios
- 5-minute setup

---

## Quick Start

```bash
npx create-blink-app my-portfolio
cd my-portfolio
```

Then:

1. Add your Notion API key to `.env.local`
2. Run `npm run blink:setup` to create your Notion databases
3. Run `npx convex dev` to start Convex
4. Run `npm run blink:sync` to sync content
5. Run `npm run dev` and you're live

---

## How It Works

```
Notion (Your Editor)
       ↓
   Notion API
       ↓
   Sync Scripts
       ↓
Convex (Real-time DB)
       ↓
  Next.js App
```

Edit content in Notion's familiar interface. Blink syncs it to Convex, which pushes real-time updates to your Next.js app. No builds. No waiting.

---

## Content Types

Blink comes with 10 pre-configured content types:

| Type | Purpose |
|------|---------|
| **Projects** | Featured work with logos, tech stack, team |
| **Freelance** | Client work with testimonials |
| **Blog** | Articles with tags and excerpts |
| **Research** | Papers and explorations |
| **Contributions** | Open source / npm packages |
| **Ideas** | Backlog with status tracking |
| **Now** | What you're currently working on |
| **About** | Bio and personal info |
| **Availability** | Freelance status |
| **Site Copy** | Section titles and labels |

Each type has a rich schema with nested objects, relations, and full TypeScript support.

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Database:** Convex (real-time, type-safe)
- **CMS:** Notion API
- **Styling:** Tailwind CSS
- **Language:** TypeScript

---

## Commands

```bash
npm run dev           # Start dev server
npm run build         # Build for production
npm run blink:setup   # Create Notion databases
npm run blink:seed    # Add sample data
npm run blink:sync    # Sync Notion → Convex
```

---

## Project Structure

```
blink/
├── create-blink-app/    # NPX CLI tool
│   ├── src/index.ts     # CLI entry point
│   └── template/        # Project template
│       ├── convex/      # Database schemas
│       ├── scripts/     # Notion sync utilities
│       └── src/         # Next.js app
└── web/                 # Landing page
```

---

## License

MIT — Free forever. Use it however you want.

---

## Links

- [Report Issues](https://github.com/SaharBarak/blink/issues)
