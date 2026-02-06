# Gearheart Construction

Marketing website for Gearheart Construction, Fort Worth's premier residential home builder. Built with Astro 5, Tailwind CSS v4, and Sanity CMS.

## Tech Stack

- **Astro 5** — static site generator with server-side rendering for Sanity Studio
- **Tailwind CSS v4** — via `@tailwindcss/vite` plugin (not `@astrojs/tailwind`, which requires Tailwind v3)
- **Sanity CMS** — embedded Studio at `/admin` for managing project content
- **Node adapter** (`@astrojs/node`) — required for Sanity Studio's server-rendered route

## Getting Started

```bash
bun install
bun run dev       # Start dev server
bun run build     # Production build
bun run preview   # Preview production build
```

## Project Structure

```
├── _archive/                  # Original HTML/CSS/JS files (reference only)
├── public/images/             # Static assets (hero.png)
├── sanity/schemas/            # Sanity document schemas
│   └── project.ts             # Project schema definition
├── src/
│   ├── components/
│   │   ├── CtaBanner.astro    # CTA section with background image
│   │   ├── Footer.astro       # Site footer (4-column layout)
│   │   ├── Lightbox.astro     # Image lightbox modal
│   │   ├── Navbar.astro       # Fixed nav with server-side active state
│   │   ├── PageHero.astro     # Interior page hero section
│   │   ├── ProjectCard.astro  # Project card with hover overlay
│   │   └── SectionLabel.astro # Reusable section label
│   ├── data/
│   │   └── projects.ts        # Placeholder project data (9 projects)
│   ├── layouts/
│   │   └── BaseLayout.astro   # Root layout (html, head, fonts, CSS, scripts)
│   ├── lib/
│   │   └── projects.ts        # Data access layer (local data / Sanity toggle)
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── services.astro     # Services page
│   │   ├── contact.astro      # Contact page
│   │   └── projects/
│   │       ├── index.astro    # Projects listing
│   │       └── [slug].astro   # Dynamic project detail pages
│   ├── scripts/
│   │   └── main.ts            # Client-side JS (scroll, menu, animations)
│   └── styles/
│       ├── global.css         # Tailwind v4 entry + theme tokens + base styles
│       └── legacy.css         # Original CSS (minus reset rules)
├── astro.config.mjs
├── sanity.config.ts
└── tsconfig.json
```

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `src/pages/index.astro` | Homepage with hero, about preview, services, featured projects, testimonials, contact form |
| `/about` | `src/pages/about.astro` | Company history, values, team grid |
| `/services` | `src/pages/services.astro` | Six service detail sections with alternating layout |
| `/projects` | `src/pages/projects/index.astro` | Portfolio grid (9 projects from data layer) |
| `/projects/:slug` | `src/pages/projects/[slug].astro` | Dynamic project detail with gallery and lightbox |
| `/contact` | `src/pages/contact.astro` | Contact form, info sidebar, embedded Google Map |
| `/admin` | Sanity Studio | CMS admin interface (server-rendered) |

## Styling Approach

The site uses a **hybrid styling strategy** for pixel-perfect visual parity with the original design:

1. **`global.css`** imports Tailwind v4 and the legacy stylesheet, defines theme tokens in a `@theme` block, and sets base styles in `@layer base`
2. **`legacy.css`** contains the original 1,500+ line stylesheet (with reset rules removed to avoid conflicts with Tailwind's preflight)
3. CSS custom variables (`:root` block) are kept in `legacy.css` since the legacy styles reference them directly
4. Tailwind utility classes can be adopted incrementally on a per-component basis

**Important:** CSS is imported in the frontmatter of `BaseLayout.astro` (`import '../styles/global.css'`), not via `<style>` tags. This is required for Tailwind v4's Vite plugin to process the styles correctly.

## Client-Side JavaScript

All interactive behaviors live in `src/scripts/main.ts`:

- **Navbar scroll** — adds `.scrolled` class at 60px scroll (homepage only; interior pages start scrolled)
- **Mobile menu** — hamburger toggle with body scroll lock
- **Scroll reveals** — IntersectionObserver-based fade-in animations (`.reveal`, `.reveal-stagger`)
- **Smooth scroll** — for anchor links (`#contact`, etc.)
- **Contact form** — submit handler with success feedback
- **Lightbox** — click-to-zoom gallery images on project detail pages
- **Parallax** — subtle background movement on the homepage hero
- **Counter animation** — stat numbers animate when scrolled into view

## Sanity CMS

Sanity Studio is embedded at `/admin`. The project uses placeholder data until a Sanity account is configured.

### Connecting Sanity

1. Create a project at [sanity.io/manage](https://www.sanity.io/manage)
2. Replace `PLACEHOLDER` with your project ID in both:
   - `astro.config.mjs` (the `sanity()` integration)
   - `sanity.config.ts` (the Studio config)
3. Set `USE_SANITY = true` in `src/lib/projects.ts`
4. Implement the Sanity client query in `src/lib/projects.ts` (see the TODO comment)

### Schema

The `project` document type (`sanity/schemas/project.ts`) includes:

`title`, `slug`, `projectType`, `location`, `style`, `completedYear`, `subtitle`, `description` (Portable Text), `heroImage`, `cardImage`, `gallery`, `featured`, `order`

## Architecture Decisions

- **`output: 'server'`** with `@astrojs/node` adapter is required because Sanity Studio needs a server-rendered route. All content pages use `export const prerender = true` so they are statically generated at build time.
- **`@tailwindcss/vite`** is used instead of `@astrojs/tailwind` because the Astro integration only supports Tailwind v3.
- **React and styled-components** are installed solely as Sanity Studio dependencies. They are not used in the site's own components.
- **Active nav links** are determined server-side via `Astro.url.pathname` rather than client-side JS.
