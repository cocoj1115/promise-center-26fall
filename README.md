# Promise Center Toolkit

A free, ready-to-use toolkit for running a human-centered tech design project with kids aged 8–13, built from six after-school sessions at Promise Center of Homewood, Fall 2026.

Live site: https://cocoj1115.github.io/promise-center-26fall/

## Editing content

Almost everything you will want to change lives in **`src/data/toolkit.js`**: the seven zones, every tool (name, one-line summary, time, materials, steps, field note) and the slide deck IDs. Edit it on GitHub, commit to `main`, and the site redeploys in about a minute.

Rules for content:

- Never write a child's name. Use "a 9-year-old", "one boy".
- Photos show hands, objects and work. No faces.
- English only.

Site switches live in **`src/config.js`**:

- `SHOW_SLIDE_LINKS`: keep `false` until every Google Slides deck has been checked for kids' names and photos and set to "Anyone with the link can view". Then set it to `true` and each tool page shows a "Make a copy of the slides" button.
- `GISCUS`: comment settings (see below).

## One-time setup

1. **Turn on GitHub Pages.** Repo Settings → Pages → Build and deployment → Source: **GitHub Actions**.
2. **Turn on comments.**
   1. Repo Settings → General → Features → tick **Discussions**. Create a Discussion category called `Comments` (type: Announcement).
   2. Install the giscus app on this repo: https://github.com/apps/giscus
   3. Go to https://giscus.app, enter `cocoj1115/promise-center-26fall`, pick the `Comments` category, and copy `data-repo-id` and `data-category-id` into `GISCUS.repoId` and `GISCUS.categoryId` in `src/config.js`.

## Design

Colours, type and texture follow the Park Fête illustration reference: lime `#D2F6A2`, green `#337657`, grey `#F3F3F3`, cream `#FBFFD9`, pink `#F9D7E5`, red `#E45454` (decoration only), Helvetica Neue for text, hand-cut lettering for titles (`src/lib/lettering.js`), and felt-edged borders (the `#felt` SVG filter in `src/layouts/Base.astro`). Small illustrations in `public/illustrations/` are cropped from Park Fête and credited in the footer.

## Running locally

```sh
npm install
npm run dev
```
