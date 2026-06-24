# Albert Piikov | Full Stack Developer Portfolio

Personal portfolio site for Albert Piikov, a Full Stack Developer building
web applications and APIs with React, Node.js, Python, Java, and SQL.

**Live site:** alpiik.github.io/github-portfolio/

## About

This is a single-page portfolio with sections for an introduction, about,
projects, skills, and contact info. Built with plain HTML, CSS, and
JavaScript — no frameworks or build step required.

## Tech stack

- HTML5 / semantic markup
- CSS (custom properties, responsive layout, no framework)
- Vanilla JavaScript (mobile nav toggle, scroll-based active link highlighting)

Skills highlighted on the site: React, Node.js, Python, Java, PHP, SQL.

## Project structure

```
.
├── index.html      # Page structure and content
├── index.css       # Styling (dark theme)
├── index.js        # Mobile nav, smooth scroll, active link highlighting
├── images/          # Favicon, project screenshots, OG image
└── README.md
```

## Running locally

No build tools needed. Clone the repo and open `index.html` directly in a
browser, or serve it locally:

```bash
git clone https://github.com/alpiik/github-portfolio.git
cd github-portfolio
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Editing content

- Bio text lives in the `#about` section of `index.html`.
- Project cards live in the `#projects` section — update the title,
  description, tags, and links for each `<article class="project-card">`.
- Add a real favicon and OG/social preview image to `images/`
  (referenced as `images/favicon.png` and `og-image.png`).

## Contact

- Email: [Albert.Piikov@gmail.com](mailto:Albert.Piikov@gmail.com)
- GitHub: [github.com/alpiik](https://github.com/alpiik)

## License

&copy; 2026 Albert Piikov. All rights reserved.
