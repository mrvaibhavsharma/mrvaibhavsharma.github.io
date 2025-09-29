# Welcome to "AI world of Learning!"

This repository contains a small multi-page static site intended for GitHub Pages to support trainings on AI and FinOps.

Files added
- `index.html` - Home page with a two-slide carousel and left navigation
- `ai.html` - Overview of AI technologies and training modules
- `finops.html` - FinOps for AI: practices and training modules
- `about.html` - Author profile (summarized from vaibhavsharma.co.in)
- `assets/style.css` - Shared styles
- `assets/app.js` - Carousel and navigation JS

How to publish on GitHub Pages

1. Push this repository to GitHub under the user/organization `mrvaibhavsharma` (already present).
2. In the repository Settings > Pages, select the `main` branch and `/ (root)` folder as the source and Save.
3. GitHub will publish the site at `https://mrvaibhavsharma.github.io/` within a minute or two.

Custom domain (CNAME)

If you want to use a custom domain, replace the `CNAME` file's content with your domain (for example `example.com`) and add the corresponding DNS A/ALIAS/CNAME records as per GitHub Pages docs.

Contact form

The site includes `contact.html` with a form set up for Netlify Forms (hidden `form-name` field). If you host on Netlify the forms will be captured automatically. Otherwise users can use the mailto link to email directly.

How to test locally

Open the HTML files directly in your browser, or use a simple local server. On Windows PowerShell you can run:

```powershell
# from the repo root
python -m http.server 8000
# then open http://localhost:8000 in your browser
```

Notes & attribution

- The author content on `about.html` was summarized from https://vaibhavsharma.co.in and attributed on the page.
- This static site is intentionally minimal so you can expand modules, add exercises, and host assets.

Next steps (suggested)
- Add training pages with slides or embedded videos
- Add contact form or sign-up integration (Netlify forms or simple Google Form)
- Add analytics and easier navigation for mobile
