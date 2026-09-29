# 🥽 Apple Vision Pro — Interactive Spatial Computing Experience

An **Awwwards-grade, cinematic, interactive scrollytelling web application** cloning and elevating the official Apple Vision Pro product showcase. Built with high-performance WebGL, Three.js particle physics, GSAP ScrollTrigger timeline orchestration, smooth momentum scrolling, custom liquid cursor mechanics, and interactive 3D component inspection.

> **Developed with ❤️ by [Shan](https://github.com/)**

---

## 🌟 Key Interactive Features

### 1. **WebGL Spatial Particle Matrix (Three.js)**
- Over **400 floating glowing spatial particles** rendered in 3D WebGL canvas space behind the viewport.
- Real-time mouse tilt and scroll velocity parallax physics.

### 2. **Liquid Custom Cursor Physics Engine**
- Smooth lerp cursor tracking pointer movements with sub-pixel precision.
- Contextual haptic expansion on interactive elements (`a`, `button`, `.hotspot-pin`, `.slider-handle`) displaying context labels (*"INSPECT"*, *"SLIDE"*, *"VIEW"*).

### 3. **360° Interactive Headset Spin Canvas**
- High-fps canvas scrubbing through **198 Apple high-resolution image frames** synchronized with scroll depth.
- Smooth frame interpolation and canvas auto-scaling across display ratios.

### 4. **Interactive Hardware Component Hotspot Inspector**
- Pulse hotspot pins attached to headset hardware (3D Laminated Glass, Spatial Audio Pods, Precision Light Seal, Solo Knit Head Band).
- Clicking any pin opens a floating **Apple Glass Specification Modal** with technical tags, detailed descriptions, and stat metrics.

### 5. **Spatial Workspace Before & After Comparison Slider**
- Interactive dual-image split slider allowing users to drag and compare a standard physical living room against an overlay of floating visionOS spatial 4K applications.

### 6. **Spatial Audio Synthesizer Visualizer**
- HTML5 Canvas audio visualizer radiating concentric frequency rings from the dual-driver audio pods when toggled.

### 7. **Top Navigation & Real-Time Head-Tracking HUD**
- Glassmorphic navigation bar with logo, quick section jump pills, and glowing magnetic pre-order CTA.
- Simulated real-time head-tracking coordinate HUD `X: ... | Y: ... | Z: ...` updating on scroll alongside top gradient scroll progress indicator.

---

## 🛠️ Tech Stack

- **Core**: HTML5, Vanilla CSS3 (Custom Design System, Glassmorphism, Responsive Media Breakpoints), JavaScript (ES6+ Modules)
- **3D Graphics & Physics**: [Three.js](https://threejs.org/) (r128)
- **Scrollytelling & Animation**: [GSAP 3.12](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Smooth Momentum Scroll**: [Locomotive Scroll](https://locomotivemtl.github.io/locomotive-scroll/)
- **Icons & Typography**: RemixIcon v3.4, Apple SF Pro Display typography fallbacks
- **Build Tool / Dev Server**: [Vite](https://vitejs.dev/)

---

## 📁 Project Structure

```bash
apple-vision-pro-clone/
├── index.html       # Semantic HTML layout, modals, hotspots, & media elements
├── style.css        # Premium Apple design system, glassmorphism, responsive rules
├── script.js        # Engine script for Three.js, Locomotive, GSAP, Cursor, & Slider
├── package.json     # Project dependencies & Vite scripts
└── README.md        # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v16+ recommended).

### Installation & Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/apple-vision-pro-clone.git
   cd apple-vision-pro-clone
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start local development server**:
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173/`.

4. **Build for production**:
   ```bash
   npm run build
   ```

---

## 📄 License

This project is created for educational and portfolio demonstration purposes. All Apple Vision Pro trademarks, product images, and video assets belong to Apple Inc.

Crafted with passion by **Shan**.
# apple-vision-pro
