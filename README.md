# Rattracker

Rattracker is a Phase 1 static frontend prototype for a luxury minimalist rat breeder management app. This version intentionally focuses on the core foundation: app shell, dashboard, rat profiles, litters, tasks/reminders, and a Supabase-ready starter schema.

## What is included

- **Static frontend**: `index.html`, `src/main.js`, and `src/styles.css`.
- **Local dev server**: `scripts/dev-server.mjs` serves the app at `http://localhost:4173`.
- **Static build script**: `scripts/build.mjs` copies the app into `dist/` and validates that the entry page loads `/src/main.js`.
- **Phase plan**: `docs/phase-plan.md` explains the intended product roadmap.
- **Database starter schema**: `supabase/schema.sql` defines the first `rats`, `litters`, and `tasks` tables.

## Requirements

- Node.js 18 or newer.
- npm, which is bundled with Node.js.

This prototype does not require installing frontend dependencies because it uses plain HTML, CSS, and JavaScript.

## Quick start

From the repository root:

```bash
npm run dev
```

Then open:

```text
http://localhost:4173
```

The dev server serves files directly from the repository root. Edit `src/main.js` or `src/styles.css`, then refresh the browser to see changes.

## Build the static site

Run:

```bash
npm run build
```

This creates a `dist/` directory containing:

```text
dist/index.html
dist/src/main.js
dist/src/styles.css
```

`dist/` is intentionally ignored by git because it is generated output.

## Preview the built files

After building, you can inspect the generated files in `dist/`. To serve the app locally, continue using:

```bash
npm run dev
```

The current dev server serves the source app from the repository root, not from `dist/`.

## Project structure

```text
.
├── index.html              # Static app entry
├── package.json            # npm scripts
├── scripts/
│   ├── build.mjs           # Generates dist/
│   └── dev-server.mjs      # Local static server
├── src/
│   ├── main.js             # Dashboard data, markup, and UI rendering
│   └── styles.css          # Luxury minimalist responsive styling
├── docs/
│   └── phase-plan.md       # Product build phases
└── supabase/
    └── schema.sql          # Phase 1 database schema
```

## How to edit the UI

### Update dashboard data

Most demo data lives near the top of `src/main.js`:

- `rats` controls rat profile cards and the featured profile.
- `litters` controls the recent litter panel.
- `tasks` controls the reminders list and open task count.
- `activity` controls the recent activity feed.

### Update layout sections

The `app()` function in `src/main.js` renders the page shell and dashboard sections. Component helper functions below it render cards, tags, tasks, litters, schema preview, and the weight chart.

### Update visual styling

Edit `src/styles.css` for:

- color tokens
- glass panels
- pill-style tags
- card spacing
- dark mode
- responsive breakpoints

## How to use the Supabase schema

1. Create a Supabase project.
2. Open the Supabase SQL editor.
3. Paste the contents of `supabase/schema.sql`.
4. Run the SQL to create the Phase 1 tables and indexes.

The schema is intentionally simple and includes only:

- `rats`
- `litters`
- `tasks`

Future phases can add health logs, weight history, pairings, pedigrees, inventory, finances, and AI-derived insights after the core data model is stable.

## Recommended Phase 1 workflow

1. Polish the static UI until the app shell, dashboard, and rat profile system feel complete.
2. Connect the `rats`, `litters`, and `tasks` UI to Supabase.
3. Add create/edit forms for rats and tasks.
4. Add simple image upload support for rat profile photos.
5. Only after the foundation is stable, move into Phase 2 features from `docs/phase-plan.md`.

## Useful commands

```bash
npm run dev
npm run build
node --check src/main.js
node --check scripts/build.mjs
node --check scripts/dev-server.mjs
```
