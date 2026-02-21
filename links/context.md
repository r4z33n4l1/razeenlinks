# razeenlinks — Personal Link Hub + URL Shortener

## Overview

A neo-brutalist personal link hub built with Next.js 16, React 19, Tailwind v4, and TypeScript. Serves two purposes:

1. **Homepage** — Organized link hub with sections (Projects, Socials, Tools, etc.)
2. **URL shortener** — Short paths like `/github`, `/slate` redirect to full URLs

## How to Add/Edit Links

Edit `data/links.json`. Each item can have:
- `title` (required) — Display name
- `url` (required) — Target URL
- `description` — Short description shown below title
- `emoji` — Emoji shown before title
- `slug` — Short URL path (e.g., `"github"` makes `/github` redirect to the URL)

## How to Add a New Section

Add an entry to the `sections` array in `data/links.json`:
```json
{
  "id": "new-section",
  "title": "NEW SECTION",
  "color": "yellow",
  "items": []
}
```
Colors available: `"yellow"`, `"pink"`, `"blue"`.

## How Short URL Redirects Work

The `app/[slug]/route.ts` route handler looks up the `slug` field across all items in `links.json`. If found, it 302-redirects to the URL. If not found, it redirects to the homepage.

## File Structure

```
links/
├── app/
│   ├── [slug]/route.ts       # Short URL redirect handler
│   ├── components/
│   │   ├── Header.tsx         # Name + tagline hero
│   │   ├── Section.tsx        # Section wrapper with stamp header
│   │   ├── LinkCard.tsx       # Brutalist link card
│   │   └── Footer.tsx         # Minimal footer
│   ├── globals.css            # Tailwind v4 theme
│   ├── layout.tsx             # Root layout with fonts
│   └── page.tsx               # Main page (server component)
├── data/
│   └── links.json             # All link data (single source of truth)
├── types/
│   └── links.ts               # TypeScript interfaces
└── context.md                 # This file
```

## Running the Project

```bash
npm run dev    # Development server at localhost:3000
npm run build  # Production build
npm start      # Start production server
```
