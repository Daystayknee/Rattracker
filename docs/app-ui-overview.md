# Rattracker App & UI Overview

This document outlines everything currently included in the Phase 1 Rattracker prototype: the app screens, UI components, data shown in the interface, styling system, supporting scripts, and database foundation.

## Product scope

Rattracker is currently a **Phase 1 static frontend prototype**. The app is intentionally focused on the core foundation instead of advanced AI, genetics, marketplace, or sensor systems.

The Phase 1 goal is to make the app feel polished, stable, and real with:

- A luxury minimalist dashboard shell.
- A focused breeder workflow.
- Rat profiles as the core data model.
- Simple litters and reminders.
- A Supabase-ready starter database schema.

## Current app sections

### 1. App shell

The app shell includes:

- A left sidebar.
- A topbar.
- A main dashboard content area.
- Responsive behavior for tablet and mobile layouts.
- System dark-mode styling via `prefers-color-scheme`.

The shell is rendered from `src/main.js` and styled in `src/styles.css`.

### 2. Sidebar navigation

The sidebar includes the Phase 1 navigation items:

- Dashboard
- Rats
- Litters
- Health
- Tasks
- Analytics
- Settings

The sidebar also includes:

- Rattracker brand mark.
- “Phase 1 Foundation” product label.
- Search/command-style button for rats, litters, and tasks.

### 3. Topbar

The topbar includes:

- Eyebrow label: “Luxury minimalist breeder foundation”.
- Main page title: “Colony Dashboard”.
- Dark mode action button.
- Primary “+ Add rat” action button.

The dark-mode button is currently visual only. Dark mode is handled automatically through the user’s system preference.

### 4. Foundation note

The dashboard includes a Phase 1 guidance card that reminds contributors to keep the first version focused.

It explicitly states that Phase 1 includes:

- Clean app shell.
- Database-ready rat profiles.
- Dashboard homepage.
- Practical reminders.

It also explicitly excludes:

- AI.
- Advanced genetics.
- Marketplace features.

### 5. Dashboard statistics

The top dashboard statistic cards show:

- Total rats.
- Recent litters.
- Open tasks.
- Average weight.

These cards use pill-style status tags and large numeric hierarchy.

### 6. Weight trends chart

The dashboard includes a simple SVG weight trend chart.

Current chart characteristics:

- Static demo data.
- Soft grid lines.
- Filled area under the curve.
- Smooth blue trend line.
- Week labels.

This is intended as a Phase 1 placeholder for future real weight logs.

### 7. Alerts panel

The alerts card currently shows practical breeder reminders:

- Pregnancy weight log reminder.
- Health observation reminder.
- Litter milestone reminder.

Each alert includes a pill-style category tag.

### 8. Quick actions

The quick actions card includes buttons for:

- Add rat.
- Add weight.
- Add litter.
- Add task.

These buttons are currently visual placeholders and are ready for future create/edit form wiring.

### 9. Rat profile cards

Rat profiles are the most important Phase 1 system.

Each profile card includes:

- Initials portrait.
- Rat name.
- Current weight.
- Sex.
- Color.
- Coat type.
- Status tag.
- Temperament tag.
- Lineage tag.
- Notes preview.

The current demo rats are:

- Miso
- Velvet
- Juniper
- Orbit

### 10. Featured rat profile

The dashboard includes a larger featured profile section.

The featured profile shows:

- Large portrait panel.
- Featured profile pill tag.
- Name.
- Notes.
- DOB.
- Sex.
- Lineage.
- Temperament.
- Coat.
- Weight.
- Additional pill-style tags.

This section previews the intended structure for a future dedicated rat profile page.

### 11. Tasks & reminders

The task/reminder card includes basic breeder workflow items such as:

- Weigh rat.
- Clean cage.
- Medication note review.
- Pairing cooldown check.

Each task includes:

- Checkbox.
- Task title.
- Task category.
- Due date.
- Completed state styling.

### 12. Recent litters

The recent litters card includes simple litter records with:

- Litter ID.
- Mother.
- Father.
- Birth date.
- Litter size.
- Notes.

This is intentionally lightweight for Phase 1 and can become a full litter management system in Phase 2.

### 13. First database preview

The dashboard includes a schema preview card showing the first planned database tables:

- `rats`
- `litters`
- `tasks`

This mirrors the starter SQL schema in `supabase/schema.sql`.

### 14. Recent activity

The activity card shows a simple feed of recent colony events, including:

- Pup additions.
- Weight updates.
- Cage reset completion.
- Temperament notes.

This is static demo content for now.

## Current data model in the UI

The demo UI data lives in `src/main.js`.

### Rats

The `rats` array includes:

- `id`
- `name`
- `sex`
- `dob`
- `color`
- `coatType`
- `temperament`
- `lineage`
- `weight`
- `status`
- `notes`
- `imageUrl`
- `tags`

### Litters

The `litters` array includes:

- `id`
- `mother`
- `father`
- `birthDate`
- `litterSize`
- `notes`

### Tasks

The `tasks` array includes:

- `id`
- `title`
- `dueDate`
- `completed`
- `ratId`
- `type`

### Activity

The `activity` array contains simple text entries for the activity feed.

## UI component inventory

The current UI includes these reusable component patterns:

- Glass panel shell.
- Sidebar nav item.
- Topbar action buttons.
- Phase pill.
- Statistic card.
- Pill-style tag.
- Dashboard card.
- SVG line chart.
- Alert list item.
- Quick action button.
- Rat profile card.
- Initials portrait.
- Featured profile detail field.
- Task checkbox row.
- Litter summary card.
- Schema preview row.
- Activity feed row.

## Visual design system

### Visual style

The current UI direction is:

- Luxury minimalist.
- Soft veterinary software aesthetic.
- Warm editorial spacing.
- Frosted glass surfaces.
- Rounded cards.
- Pill-style labels.
- Restrained animation.
- Calm color palette.

### Color tokens

The CSS defines these core visual tokens:

- Warm white background: `#fafaf8`.
- Secondary surface: `#f2f2ef`.
- Card glass background: translucent white.
- Ink: soft charcoal.
- Muted text: warm gray.
- Border: low-opacity black in light mode.
- Soft status colors for healthy, pregnant, retired, medical, warning, elite, and newborn states.

### Pill-style tags

Pill tags are used throughout the app for:

- Status labels.
- Alert categories.
- Rat traits.
- Lineage labels.
- Litter IDs.
- Phase labels.

The base `.tag` class provides the rounded pill style, while tone classes provide color variants.

### Dark mode

Dark mode is implemented with CSS using:

```css
@media (prefers-color-scheme: dark)
```

Dark mode adjusts:

- Background.
- Card surfaces.
- Text colors.
- Borders.
- Shadows.
- Button surfaces.
- Inner panels.

### Responsive layout

The UI includes breakpoints for:

- Desktop: sidebar + main grid.
- Tablet: sidebar moves above content and grids reduce columns.
- Mobile: one-column dashboard, compact navigation, stacked profile layout, and single-column quick actions.

## Supporting files

### `index.html`

The static HTML entry point.

It loads:

- `/src/styles.css`
- `/src/main.js`

### `src/main.js`

Contains:

- Demo data.
- Dashboard rendering.
- Component helper functions.
- Static SVG chart markup.

### `src/styles.css`

Contains:

- Design tokens.
- Layout styling.
- Glassmorphism surfaces.
- Dashboard cards.
- Tags.
- Rat profile cards.
- Task/litter/schema styling.
- Dark mode.
- Responsive breakpoints.

### `scripts/dev-server.mjs`

Runs a small static Node HTTP server on port `4173`.

Use:

```bash
npm run dev
```

### `scripts/build.mjs`

Creates a generated `dist/` directory and validates that the built `index.html` loads `/src/main.js`.

Use:

```bash
npm run build
```

### `supabase/schema.sql`

Defines the Phase 1 database schema for:

- `rats`
- `litters`
- `tasks`

It also includes indexes for litter parents and task due dates.

### `docs/phase-plan.md`

Documents the product roadmap:

- Phase 1: Core Foundation.
- Phase 2: Breeder Operations.
- Phase 3: Advanced Visuals.
- Phase 4: AI Systems.

### `README.md`

Explains how to run, build, edit, and use the static prototype.

## What is intentionally not included yet

To keep Phase 1 focused, the following are intentionally not built yet:

- AI genetics.
- AI recommendations.
- Sensor integration.
- Marketplace.
- Community features.
- Advanced pedigree engine.
- Full authentication.
- Supabase API connection.
- Create/edit forms.
- Real file upload.
- Health log database tables.
- Weight history database table.

These belong in later phases after the foundation is stable.

## Recommended next UI additions

The next best Phase 1 UI additions are:

1. Dedicated rat profile page layout.
2. Add/edit rat form.
3. Add/edit task form.
4. Basic image URL or upload field for rat portraits.
5. Simple local state updates before connecting Supabase.
6. Empty states for no rats, no tasks, and no litters.

## Phase 1 success criteria

The Phase 1 UI is successful when:

- The app shell feels polished on desktop and mobile.
- Rat profiles feel complete and central.
- A breeder can understand the dashboard at a glance.
- Tasks and reminders feel practical.
- The Supabase schema can support the first real data connection.
- The app avoids advanced features until core workflows are stable.
