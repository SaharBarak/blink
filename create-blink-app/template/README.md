# My Blink App

This project was created with [create-blink-app](https://github.com/SaharBarak/create-blink-app).

## Getting Started

### 1. Configure Environment

Copy the environment template and add your Notion API credentials:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` with:
- `NOTION_API_KEY` - Get from [notion.so/my-integrations](https://www.notion.so/my-integrations)
- `NOTION_PARENT_PAGE_ID` - ID of a Notion page where databases will be created

### 2. Set Up Notion Databases

```bash
npm run blink:setup
```

This creates 10 databases in your Notion workspace:
- Projects, Freelance, Blog, Research, Contributions
- Ideas, Now, About, Availability, Site Copy

### 3. Set Up Convex

```bash
npx convex dev
```

Follow the prompts to create a Convex project. This will also add `NEXT_PUBLIC_CONVEX_URL` to your `.env.local`.

### 4. Sync Content

```bash
npm run blink:sync
```

This syncs all content from Notion to Convex.

### 5. Start Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run blink:setup` | Create Notion databases |
| `npm run blink:seed` | Seed sample data |
| `npm run blink:sync` | Sync Notion → Convex |

## Content Types

Your Blink app includes 10 content types:

- **Projects** - Featured work with colors and logos
- **Freelance** - Client work with testimonials
- **Blog** - Articles with rich text content
- **Research** - Papers and explorations
- **Contributions** - GitHub repos and npm packages
- **Ideas** - Idea backlog with status tracking
- **Now** - What you're currently doing
- **About** - Bio and personal info
- **Availability** - Freelance status
- **Site Copy** - Section titles and labels

## Learn More

- [Blink Documentation](https://blink.dev/docs)
- [Notion API](https://developers.notion.com)
- [Convex Documentation](https://docs.convex.dev)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
