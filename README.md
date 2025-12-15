# Buddy Esprit – Tailwind UI

A simple static frontend workspace using Tailwind CSS for a multi-page interface (Dashboard, Shop, Q&A, Profile, Calendar, and more). HTML pages live in `public/`, styles are built from `src/input.css` to `public/style.css` via Tailwind.

## Tech Stack

- Tailwind CSS 3.x
- HTML-only pages (no JS framework)
- Node.js for build tooling

## Project Structure

```
BuddyEsprit/
├─ package.json
├─ tailwind.config.js
├─ src/
│  └─ input.css
└─ public/
   ├─ index.html
   ├─ Dashboard.html
   ├─ Shop.html
   ├─ Q&APlatform.html
   ├─ Calendar.html
   ├─ profile.html
   ├─ ... (other feature pages)
   └─ style.css   ← Tailwind output
```

## Prerequisites

- Node.js LTS (v16+ recommended)

## Install

```bash
npm install
```

## Development

- Start Tailwind in watch mode (rebuilds on save):

```bash
npm run dev
```

- Edit styles in `src/input.css` (uses `@tailwind base; @tailwind components; @tailwind utilities;`).
- Open any page from `public/` in your browser or use a static server (see below).

## Build

- Produce a minified stylesheet:

```bash
npm run build
```

- Output: `public/style.css`

## Serve Pages Locally (optional)

Use one of these options to preview:

- VS Code Live Server extension (recommended for HTML projects)
- Any static server, e.g.:
  - `npx serve public`
  - `npx http-server public`

## Tailwind Configuration

- Content scanning: `./public/**/*.html`
- Theme extensions (colors, fonts) in [tailwind.config.js](tailwind.config.js):
  - Colors: violet, green, orange, red, white, black
  - Font family: `Poppins` as default `sans`
- Update and rebuild after editing config:

```bash
npm run dev
# or
npm run build
```

## Common Pages

- Shop: [public/Shop.html](public/Shop.html)
- Dashboard: [public/Dashboard.html](public/Dashboard.html)
- Q&A: [public/Q&APlatform.html](public/Q&APlatform.html)
- Profile: [public/profile.html](public/profile.html)
- Calendar: [public/Calendar.html](public/Calendar.html)
- Index: [public/index.html](public/index.html)

## Troubleshooting

- CSS not updating: ensure `npm run dev` is running and pages reference `public/style.css`.
- No styles: confirm `style.css` exists in `public/` after a build.
- Changes ignored: verify files are under `public/` (per `content` setting).

## Scripts

- `dev`: runs Tailwind in watch mode
- `build`: compiles and minifies Tailwind output

## Contributing

- Keep HTML pages under `public/`.
- Add new components/styles in `src/input.css`.
- Extend theme in `tailwind.config.js` instead of hardcoding styles.
