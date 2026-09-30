# Portfolio code guide

This guide describes the code **as it currently exists**. The site is a React single-page application built with Vite. It has a home page containing all portfolio sections and individual routes for most sections.

## Run the project

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Other scripts in `package.json` are `npm run lint` (ESLint), `npm run build` (production files in `dist/`), and `npm run preview` (serve that build locally). There is no test script in the current package.

## How a page is rendered

1. [`index.html`](index.html) provides the `#root` element, page title, metadata, favicon, Google Fonts, and an early theme script. The script reads the saved theme, falls back to the operating system's light/dark preference, and sets `data-theme` on `<html>` before React loads.
2. [`src/main.jsx`](src/main.jsx) mounts `App` in `#root`. `StrictMode` enables React development checks; `BrowserRouter` makes the URL-based navigation possible.
3. [`src/App.jsx`](src/App.jsx) imports the global CSS, renders the skip link, navbar, route content, and footer. `ScrollToTop` scrolls to the top when the pathname changes. `Home` composes Hero, About, Experience, Skills, Projects, and Contact in that order.
4. The route table renders `/` as the full home page. `/about`, `/experience`, `/skills`, `/projects`, and `/contact` render one section inside `FocusedPage`, which adds spacing under the fixed navbar. Unknown paths redirect to `/`.

These are client-side routes: a production host needs a fallback that serves `index.html` when someone opens a route such as `/projects` directly.

## Source map

| File | Responsibility and where to edit content |
| --- | --- |
| [`src/layout/Navbar.jsx`](src/layout/Navbar.jsx) | `navLinks` defines the menu. `NavLink` marks the active route. Desktop links, resume download, theme button, and collapsible mobile menu are rendered here. |
| [`src/sections/Hero.jsx`](src/sections/Hero.jsx) | Landing introduction, availability, work/resume links, social links, portrait, and the `stats` array. The portrait currently loads `/profile-photo.jpg`. |
| [`src/sections/About.jsx`](src/sections/About.jsx) | Bio text and the `principles` array of three icon-led engineering principles. |
| [`src/sections/Experience.jsx`](src/sections/Experience.jsx) | `milestones` contains the timeline's dates, roles, employers, and summaries. The first item gets the `is-current` style. |
| [`src/sections/Skills.jsx`](src/sections/Skills.jsx) | `skillGroups` contains category icons, descriptions, and technology labels; the component maps them to skill articles. |
| [`src/sections/Projects.jsx`](src/sections/Projects.jsx) | `projects` holds the four displayed projects, including achievements and technology tags. The arrow icon on each card is decorative; cards are not links. |
| [`src/sections/Contact.jsx`](src/sections/Contact.jsx) | Contact details and the EmailJS form, including input, loading, success, and error states. |
| [`src/index.css`](src/index.css) | Global reset, theme colors, layout, typography, component styles, responsive breakpoints, animation, and reduced-motion styles. |

The section content is written directly in JSX or the arrays above; there is no CMS or backend data API for the portfolio content. React's `.map()` renders the arrays; `key` values help React identify list items. Lucide supplies most icons, while the Hero uses `react-icons` for social logos.

### Navbar and theme

`Navbar` has three pieces of React state: `isOpen` for the mobile menu, `isScrolled` for the scrolled-header background, and `theme` for light/dark mode. An effect listens to scrolling; another allows Escape to close the mobile menu. The menu also closes after selecting a link. The theme button updates `<html data-theme>`, the browser's `theme-color` meta tag, and `localStorage.theme` when storage is available. Its label and icon describe the mode it will switch **to**.

The early script in `index.html` prevents a flash of the wrong theme on reload. In `src/index.css`, `:root` holds dark colors and `:root[data-theme="light"]` overrides them for light mode. Selectors use variables such as `--bg`, `--text`, `--accent`, and `--border`; the contact section and form use deliberate contrasting colors in both modes. Changing either palette means editing those variable blocks.

### Contact form flow

The form keeps `name`, `email`, and `message` in `formData`. `updateField` updates the property matching the input's `name`. On submit, `handleSubmit` prevents a page reload, clears the previous status, checks the EmailJS settings, then calls `emailjs.send(serviceId, templateId, formData, publicKey)`. Success resets the inputs and shows a message; failure logs an error and tells visitors to use the direct email link. `finally` restores the submit button after either outcome. Inputs are required, and email uses browser email validation.

To enable sending, provide these Vite environment variables in a local `.env.local` file or the deployment platform's environment settings:

```dotenv
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

There is no environment file in the repository at present. The EmailJS template should use parameter names matching `name`, `email`, and `message`. Restart Vite after changing environment settings. Values prefixed with `VITE_` are bundled into client-side code; do not put private credentials in them. Without these variables, the form shows its failure message, but the direct email link still works.

## Styling and assets

`src/index.css` imports Tailwind CSS, but most of the active page styling is written as regular CSS classes. Shared selectors include `.site-container`, `.section-shell`, `.section-heading`, and `.button`. Section-specific selectors style the hero, timeline, skill groups, project cards, and contact form. The layout starts mobile-first; media queries at `700px` and `960px` add multi-column layouts and desktop navigation. `prefers-reduced-motion` limits animation for visitors who request it. Keyboard focus and the skip link are also styled globally.

[`vite.config.js`](vite.config.js) loads the React and Tailwind plugins and maps `@` imports to `src/`. [`eslint.config.js`](eslint.config.js) configures JavaScript, React Hooks, and Vite React Refresh lint rules, ignoring `dist/`.

Files in `public/` are served from the site root, so `/Aaliya_Khanam_Resume.pdf` downloads the resume, `/favicon.svg` is the browser icon, and `/profile-photo.jpg` is the current Hero image. To change the resume or portrait, replace those files or update the corresponding paths in the components. `hero-bg.jpg` and `icons.svg` are also present in `public/`, but the current app code does not reference them.

## Source files not on the live page

[`src/sections/Testimonials.jsx`](src/sections/Testimonials.jsx) contains a stateful carousel with next, previous, and dot navigation. It is **not imported by `App`**, so it never renders. Its example quotes refer to a different person and should not be published as real endorsements.

[`src/components/Button.jsx`](src/components/Button.jsx) provides a size-based button style, and [`src/components/AnimatedBorderButton.jsx`](src/components/AnimatedBorderButton.jsx) provides an animated resume-download control. Neither is imported by the current page. The live call-to-action buttons instead use the `.button` classes in `src/index.css`.

## Common edits

- Change a job or project: edit `milestones` in `Experience.jsx` or `projects` in `Projects.jsx`.
- Change the menu or routes: update both `navLinks` in `Navbar.jsx` and the route table in `App.jsx` as needed.
- Change the email address: update the `mailto:` link in `Contact.jsx`; sending through EmailJS is configured separately.
- Change colors or spacing: start with the CSS variables and the matching section selectors in `src/index.css`.
- Change the resume: replace `public/Aaliya_Khanam_Resume.pdf` or update its URL in the Hero, Navbar, and Experience links.