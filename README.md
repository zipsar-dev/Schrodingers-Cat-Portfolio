# Schrödinger's Cat Think Tank — Website Frontend

A fully responsive, multi-page marketing website for the Schrödinger's Cat Think
Tank (a youth research/think-tank organization). Built with **React (Vite) +
Tailwind CSS v4 + React Router**. No backend required.

## Pages

| Route         | Page                                    |
| ------------- | --------------------------------------- |
| `/`           | Home                                    |
| `/about`      | About                                   |
| `/research`   | Research (Blogs & Videos)               |
| `/programme`  | Programme                               |
| `/events`     | Events                                  |
| `/club`       | Club                                    |
| `/career`     | Career                                  |
| `/contact`    | Contact (with validated form)           |
| anything else | 404 page                                |

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build (outputs to dist/)
npm run lint     # oxlint
npm run preview  # serve the production build
```

## Project structure

```
src/
  main.jsx            # entry point (BrowserRouter)
  App.jsx             # layout (Navbar + routes + Footer) and 404 page
  index.css           # Tailwind v4 theme — brand colors, fonts, base styles
  content.js          # ALL editable copy/content — see below
  components/
    Navbar.jsx        # sticky nav, active link underline, mobile drawer
    Footer.jsx        # teal footer: blurb, links, social, address
    Button.jsx        # <Button variant="primary|outline" /> (Link / <a> / button)
    ImagePlaceholder.jsx  # grey placeholder box with ratio + alt token
    SectionHeading.jsx    # eyebrow + icon + heading pattern
    PersonCard.jsx        # team / advisory / testimonial cards
    Card.jsx              # generic content card (blogs, programmes)
    NumberedStep.jsx      # the 5-step "Our Model" row (01–05)
    Icon.jsx              # string-name → lucide icon registry
    SocialIcon.jsx        # inline SVG brand icons (Instagram/Facebook/Twitter/LinkedIn)
    ScrollToTop.jsx       # scroll reset on route change
  pages/
    Home.jsx  About.jsx  Research.jsx  Programme.jsx
    Events.jsx  Club.jsx  Career.jsx  Contact.jsx
scripts/
  smoke-test.mjs     # headless-browser verification (see below)
```

## Editing content (no markup needed)

Every `{{TOKEN}}` from the master brief lives in **`src/content.js`** as plain
data. Team members, blog posts, events, programmes, clubs, testimonials, and
logo lists are arrays — add or remove an item with a one-line change.

- Icons are referenced by string name (e.g. `"target"`, `"handshake"`) and
  resolved through `src/components/Icon.jsx` — extend the registry there to
  swap the icon set.
- Photography and logos use `<ImagePlaceholder ratio="…" alt="…">` until real
  assets arrive. Keep aspect ratios per section consistent, then replace the
  component with a real `<img>` without breaking layout.

## Wiring the contact form

The form has client-side validation built in. To send submissions somewhere,
set `contact.form.endpoint` in `src/content.js` to a real URL (Formspree, an
API route, an email service, etc.). Until an endpoint is set, submitting shows
the success state locally.

## Smoke test

```bash
npm run preview
# in another terminal:
node scripts/smoke-test.mjs
```

Runs a headless Chrome (uses `/usr/bin/google-chrome`) against the preview
server and checks: contact-form validation + submit, programme tab filtering,
nav active state and navigation, mobile drawer, and the 404 page.
