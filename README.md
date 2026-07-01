# Shashwat Chandel — Portfolio

A plain HTML/CSS/JS portfolio site — no build tools, no npm install. Open
`index.html` in a browser and it just works. The three concerns are split into
separate files so it's easy to find what you're looking for.

## Files

- `index.html` — page structure and content (all the text, sections, links)
- `style.css` — all visual styling (colors, fonts, layout, spacing, animations)
- `script.js` — behavior (mobile menu, the crosshair cursor, scroll-reveal effect)
- `resume.pdf` — your résumé, linked from the "Download Résumé" button in the hero

All three code files must stay in the **same folder** — `index.html` loads the
other two via relative paths (`<link href="style.css">` and `<script src="script.js">`).

## Editing content

Open the project folder in VS Code. Which file to edit depends on what you're
changing:

**Changing text, adding a project, editing links → `index.html`**
It's plain HTML, so your name, project descriptions, bullet points, etc. are
readable directly in the markup. A few common edits:
- **Add/replace a project** → find `<section id="projects">` and copy one
  `.project-card` block, then edit the title, link, tech tags, and bullet points.
- **Update skills** → find `<section id="skills">` and edit the `.tag` items inside
  each `.skill-block`.
- **Update contact info** → find `<section id="contact">`.

**Changing colors, fonts, spacing → `style.css`**
- **Change colors** → everything is controlled from the `:root { ... }` block at
  the very top of the file (look for "DESIGN TOKENS"). Change `--bp-cyan` or
  `--bp-amber` and it updates site-wide — no need to hunt through the rest of the
  file.
- **Change fonts** → the two font variables (`--font-display`, `--font-body`) near
  the top, plus the Google Fonts `<link>` in `index.html`'s `<head>` if you want
  different typefaces entirely.

**Changing behavior (menu, cursor effect, animations) → `script.js`**
Each block is commented (mobile nav, crosshair cursor, scroll reveal) — you can
delete a block entirely if you want to turn that effect off.

**Swap your résumé** → replace `resume.pdf` with your updated file (keep the same
filename, or update the `href="resume.pdf"` link in `index.html`'s hero section).

## Preview locally

Just double-click `index.html` to open it in your browser — no server needed.

## Deploying with GitHub Pages (free, and gives you a public link)

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Upload `index.html` and `resume.pdf` to the repo (drag-and-drop on github.com
   works fine, or use `git push` if you're comfortable with the CLI — commands below).
3. In the repo, go to **Settings → Pages**.
4. Under **Build and deployment → Source**, choose **Deploy from a branch**.
5. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
6. Wait about a minute — GitHub will give you a live URL like:
   `https://<your-username>.github.io/portfolio/`
7. Put that link on your résumé and LinkedIn.

### Using git from the command line instead

```bash
git init
git add index.html resume.pdf README.md
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/portfolio.git
git push -u origin main
```

Then follow steps 3–6 above.

## Alternative hosts

If you'd rather not use GitHub Pages:

- **Netlify** — drag the folder onto app.netlify.com/drop for an instant live URL.
- **Vercel** — `npx vercel` from inside this folder, or connect the GitHub repo at
  vercel.com for automatic redeploys on every push.

Both are free for a personal portfolio and both can also connect directly to your
GitHub repo so any future edit you push auto-deploys.
