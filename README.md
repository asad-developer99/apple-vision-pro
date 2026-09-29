<div align="center">

# 🥽 Apple Vision Pro — Interactive Spatial Experience

**A cinematic, scroll-driven recreation of the Apple Vision Pro product page, built with WebGL, GSAP and smooth momentum scrolling.**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000?style=for-the-badge&logo=vercel)](https://apple-vision-pro-mu-amber.vercel.app)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](./LICENSE)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Three.js](https://img.shields.io/badge/Three.js-000?style=for-the-badge&logo=threedotjs)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=black)

[**View Live Demo →**](https://apple-vision-pro-mu-amber.vercel.app)

<!-- Add a screenshot or GIF here for maximum impact:
<img src="./docs/preview.gif" alt="Apple Vision Pro preview" width="800" />
-->

</div>

---

## 📖 About

This project is a front-end showcase that re-imagines Apple's Vision Pro landing page as an immersive **scrollytelling** experience. It combines a 3D particle background, pinned scroll animations, a custom cursor, and interactive product inspection tools, all in vanilla HTML, CSS and JavaScript with no framework required.

> **Disclaimer:** This is an educational / portfolio project. It is not affiliated with or endorsed by Apple Inc.

---

## ✨ Features

| Feature | Description |
| --- | --- |
| **WebGL particle field** | A Three.js particle system floats behind the page and reacts to mouse tilt and scroll velocity. |
| **Liquid custom cursor** | A dot + ring cursor with lerp-smoothed tracking. It expands over interactive elements and shows contextual labels such as *INSPECT*, *SLIDE* and *VIEW*. |
| **360° headset spin** | A canvas-based frame scrubber tied to scroll position for a smooth product rotation. |
| **Hotspot inspector** | Pulsing pins on the headset (3D laminated glass, spatial audio pod, light seal, head band) open a glassmorphic specification modal. |
| **Before / after slider** | Drag to compare a physical room with a floating visionOS spatial workspace. |
| **Spatial audio visualizer** | A canvas visualizer that radiates concentric frequency rings from the audio pods. |
| **Head-tracking HUD** | A simulated `X / Y / Z` readout that updates as you scroll, plus a scroll progress bar. |
| **Glass navigation** | A glassmorphic navbar with section pills and a magnetic *Pre-Order* button. |
| **Smooth scrolling** | Momentum scrolling via Locomotive Scroll, synchronized with GSAP ScrollTrigger. |

---

## 🧰 Tech Stack

- **Markup / Styling:** HTML5, CSS3 (custom design system, glassmorphism, responsive breakpoints), Bootstrap 5.3 utilities
- **Language:** JavaScript (ES6+)
- **3D graphics:** [Three.js](https://threejs.org/) `r128`
- **Animation:** [GSAP](https://gsap.com/) `3.12.2` + ScrollTrigger
- **Smooth scroll:** [Locomotive Scroll](https://github.com/locomotivemtl/locomotive-scroll) `3.5.4`
- **Icons:** [Remix Icon](https://remixicon.com/) `3.4.0`
- **Dev server / build:** [Vite](https://vitejs.dev/)

Libraries are loaded from CDNs in `index.html`, so there is nothing extra to configure.

---

## 📁 Project Structure

```
apple-vision-pro/
├── index.html      # Page markup, sections, modal, hotspots, media
├── style.css       # Design system, glassmorphism, responsive rules
├── script.js       # Three.js, Locomotive, GSAP, cursor, slider, modal, audio visualizer
├── package.json    # Scripts and dev dependencies
├── LICENSE         # MIT license
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or newer
- A modern browser with WebGL support (Chrome, Edge, Firefox, Safari)
- An internet connection (fonts, libraries and media are loaded from CDNs)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/asad-developer99/apple-vision-pro.git
cd apple-vision-pro

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the local URL printed in the terminal (Vite defaults to `http://localhost:5173`).

### Production build

```bash
npm run build     # outputs to /dist
npm run preview   # preview the production build locally
```

> Don't want Node? Since the page is plain HTML/CSS/JS, you can also serve the folder with any static server, e.g. `npx serve .`

---

## 🛠️ Troubleshooting

**The cursor is frozen or invisible when the page loads**

The page hides the native cursor and draws its own (`#cursor-dot` and `#cursor-ring`). If the custom cursor's JavaScript never runs, for example because an earlier script error stops `script.js`, the native cursor stays hidden and nothing replaces it. Check the browser console (`F12`) for errors, and make sure the cursor code is initialised first and only hides the native cursor once it is actually tracking the mouse.

**Videos or images don't load**

Media is streamed from Apple's CDN. Check your connection or ad-blocker, and note that these URLs may change over time.

**Low frame rate**

Try closing other tabs, enabling hardware acceleration in your browser, or lowering the particle count in `script.js`.

---

## 🗺️ Roadmap

- [ ] Self-host optimized media for faster, more reliable loading
- [ ] Reduced-motion mode (`prefers-reduced-motion`)
- [ ] Touch-device fallbacks for the custom cursor
- [ ] Lighthouse performance and accessibility pass

---

## 🤝 Contributing

Contributions, issues and feature requests are welcome.

1. Fork the project
2. Create your branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

The source code is released under the [MIT License](./LICENSE).

All Apple Vision Pro names, trademarks, images and video assets belong to **Apple Inc.** and are used here for educational and portfolio purposes only.

---

<div align="center">

**Designed & developed with ❤️ by [Asad](https://github.com/asad-developer99)**

If you like this project, please consider giving it a ⭐

</div>