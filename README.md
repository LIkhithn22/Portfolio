# 💼 Likhith Nattuva — Personal Portfolio

[![Netlify Status](https://api.netlify.com/api/v1/badges/your-badge-id/deploy-status)](https://app.netlify.com/sites/your-site/deploys)
![Last Updated](https://img.shields.io/badge/Last%20Updated-July%202026-6366f1)
![License](https://img.shields.io/badge/License-MIT-10b981)

> A modern, responsive personal portfolio website built with vanilla HTML, CSS, and JavaScript. Showcasing projects, skills, and experience in Software Engineering, Data Engineering, and Cloud/ML.

🌐 **Live Site:** [likhithnattuva.netlify.app](https://likhithnattuva.netlify.app) &nbsp;|&nbsp; 📧 [likhith2201@gmail.com](mailto:likhith2201@gmail.com) &nbsp;|&nbsp; 💼 [LinkedIn](https://www.linkedin.com/in/likhith-nattuva-4a15b620a/) &nbsp;|&nbsp; 🐙 [GitHub](https://github.com/LIkhithn22)

---

## 📸 Preview

| Hero Section | Projects | Contact |
|---|---|---|
| Animated typed text, floating skill chips, stats | Featured project cards with tech stacks | Netlify-powered contact form |

---

## ✨ Features

- 🎨 **Dark glassmorphism UI** with gradient accents and animated orbs
- ⌨️ **Typed text animation** cycling through role titles
- 📊 **Animated counters** for GPA, projects, and technologies
- 🃏 **Project cards** with hover effects and highlight bullets
- 🟢 **"Open to Work" badge** with pulsing animation in the footer
- 📬 **Contact form** powered by Netlify Forms with email notifications
- 📱 **Fully responsive** — mobile hamburger nav, stacked layouts
- ♿ **Accessible** — semantic HTML, ARIA labels, keyboard navigable
- ⚡ **Performance** — long-term caching headers, immutable assets
- 🔒 **Security headers** — CSP, X-Frame-Options, XSS protection via `netlify.toml`

---

## 🗂️ Project Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── 404.html                # Custom 404 error page
├── style.css               # All styles (design system + components)
├── script.js               # Interactions (typed text, scroll, counters, form)
├── netlify.toml            # Netlify config (headers, redirects, form notifications)
├── profile.png             # Profile photo
├── Likhith_NattuvaResume.pdf  # Downloadable resume
└── serve.py                # Local dev server (no-cache mode)
```

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Structure | HTML5, Semantic Elements |
| Styling | Vanilla CSS, CSS Variables, CSS Grid, Flexbox |
| Interactions | Vanilla JavaScript (ES6+), IntersectionObserver, Fetch API |
| Fonts | Inter (Google Fonts), Fira Code (monospace) |
| Hosting | Netlify (CDN + Forms + Custom Headers) |
| Forms | Netlify Forms (spam protection + email notifications) |

---

## 🚀 Running Locally

No build step required — this is a pure static site.

```bash
# Clone the repo
git clone https://github.com/LIkhithn22/Portfolio.git
cd Portfolio

# Start the local dev server (no-cache mode)
python3 serve.py
```

Then open **http://localhost:3000** in your browser.

> `serve.py` adds `Cache-Control: no-store` headers so you always see the latest changes without hard refreshing.

---

## 📬 Contact Form

The contact form uses **Netlify Forms** and is configured to:
- ✅ Store submissions in the Netlify dashboard under **Forms → contact**
- ✅ Send an email notification to `likhith2201@gmail.com` on every submission
- ✅ Show inline success/error messages without a page reload
- ✅ Include spam protection via a honeypot field

> **Note:** The form only works when deployed on Netlify. It will not submit locally.

---

## 🌍 Deployment

The site is deployed on **Netlify** with continuous deployment from this GitHub repository.

Every `git push` to `main` triggers an automatic redeploy.

```bash
git add .
git commit -m "your message"
git push origin main
```

---

## 📄 Sections

| Section | Description |
|---|---|
| **Hero** | Name, animated roles, stats (GPA · Projects · Technologies) |
| **About** | Summary, location, contact info, specialty cards |
| **Skills** | Categorized tech pills (Languages, Cloud, Big Data, DB, ML, Web) |
| **Projects** | 7 featured projects with tech stacks and highlights |
| **Experience** | Work timeline (NIELIT Web Design Internship) |
| **Education** | MS @ Harrisburg University · BTech @ KL University |
| **Certifications** | Microsoft, Oracle, Aviatrix, UiPath, Cisco |
| **Contact** | Email · Phone · LinkedIn · GitHub · Resume download + contact form |

---

## 👨‍💻 Author

**Likhith Nattuva**
- 📍 Sterling, VA · EST
- 🎓 MS Computer Information Science — Harrisburg University (GPA: 3.9)
- 🔍 Open to full-time roles in Software Engineering, Data Engineering & Cloud

---

## 📝 License

This project is open source under the [MIT License](LICENSE).
