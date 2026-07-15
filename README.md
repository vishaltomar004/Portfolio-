# Vishal Tomar — Portfolio Site

This is your portfolio website. It's just 3 files — no build tools, no installs needed:

- `index.html` — the content
- `style.css` — the design
- `script.js` — the small animations (typing terminal effect, scroll reveal, mobile menu)

## 1. Preview it on your own computer

Just double-click `index.html` and it opens in your browser. That's it.

## 2. Deploy it for free (pick ONE option)

### Option A — GitHub Pages (recommended, since you already have GitHub)

1. Go to https://github.com/new and create a new repository, e.g. name it `portfolio`. Keep it Public.
2. On your computer, open the `portfolio` folder you downloaded from this chat.
3. Upload the 3 files into that new GitHub repo:
   - On the repo page, click **"Add file" → "Upload files"**
   - Drag in `index.html`, `style.css`, and `script.js`
   - Click **"Commit changes"**
4. Go to the repo's **Settings** tab → **Pages** (left sidebar).
5. Under "Build and deployment", set **Source** to **"Deploy from a branch"**, branch = `main`, folder = `/ (root)`. Click **Save**.
6. Wait about 1 minute, then refresh — GitHub will show you a live URL like:
   `https://vishaltomar004.github.io/portfolio/`

That link is your portfolio. Put it on your resume and LinkedIn.

### Option B — Netlify (fastest, drag-and-drop, no GitHub needed)

1. Go to https://app.netlify.com/drop
2. Drag your whole `portfolio` folder (the one with index.html, style.css, script.js) onto the page.
3. Netlify instantly gives you a live URL like `https://random-name-123.netlify.app`.
4. Optional: click "Site settings" → "Change site name" to make the URL nicer.

Both options are free forever for a simple site like this.

## 3. Your resume PDF

`Vishal_Tomar_Resume.pdf` sits in this same folder, and the hero section has a **"Download resume"** button pointing to it. If you ever update your resume, just replace that PDF file with your new one and keep the same filename — the button will keep working without touching any code.

## 4. Your profile photo

Your photo is the file `profile.jpg` in this folder — that's what shows up in the nav bar and the hero section by default.

- **To change it permanently:** just replace `profile.jpg` with a new photo (keep the same filename, or update the filename in `index.html` where it says `src="profile.jpg"`).
- **To change it live on the site:** click your photo (in the nav bar, or the "Edit" badge on the hero photo) and choose a new image. This is handled entirely in the visitor's own browser and saved with `localStorage`, so it's really meant as a quick preview/personalization for you — it won't change what other visitors see unless you also replace the actual `profile.jpg` file and re-upload.

## 5. Want to customize later?

- Update text: open `index.html` in any text editor (Notepad, VS Code) and edit the words directly — it's plain readable text.
- Update colors: open `style.css`, look at the very top under `:root` — those are your color and font settings. Change the hex codes to try new colors.
- Add a resume PDF download button: put a `Vishal_Tomar_Resume.pdf` file in the same folder, then in `index.html` find the "Say hello" button and add another one like:
  `<a href="Vishal_Tomar_Resume.pdf" class="btn btn--ghost" download>Download resume</a>`

## What's in the design

The whole site is themed around your background: you build backend APIs and automate business systems, so the hero section looks like a terminal making an API call and getting your profile back as JSON, and the projects section is styled like API endpoint docs (GET/POST). It's a small detail, but it makes the site feel specifically like *your* site instead of a generic template.
