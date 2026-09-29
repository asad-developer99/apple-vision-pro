/* ==========================================================================
   AWWWARDS CREATIVE FRONTEND ENGINE - APPLE VISION PRO CLONE
   ========================================================================== */
(function initCursor() {
  const dot = document.getElementById('cursor-dot');
  const ring = document.getElementById('cursor-ring');
  const isFine = window.matchMedia('(pointer: fine)').matches;
  if (!dot || !ring || !isFine) return;

  let x = 0, y = 0, rx = 0, ry = 0;

  window.addEventListener('mousemove', (e) => {
    x = e.clientX;
    y = e.clientY;
    document.documentElement.classList.add('has-custom-cursor');
  });

  (function loop() {
    rx += (x - rx) * 0.15;
    ry += (y - ry) * 0.15;
    dot.style.transform = `translate(${x}px, ${y}px)`;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;
    requestAnimationFrame(loop);
  })();
})();
// --- DATA DICTIONARY FOR TECH SPEC MODAL ---
const SPEC_DATA = {
  glass: {
    tag: "OPTICAL ENCLOSURE",
    title: "3D Laminated Glass Enclosure",
    desc: "A singular piece of three-dimensionally formed laminated glass acts as an optical surface for the cameras and sensors. It flows seamlessly into a custom aluminum alloy frame that gently curves around your face.",
    stats: [
      { num: "3D", label: "Formed Surface" },
      { num: "100%", label: "Optical Clarity" },
      { num: "Custom", label: "Alloy Frame" }
    ]
  },
  audio: {
    tag: "SPATIAL AUDIO ARCHITECTURE",
    title: "Dual-Driver Audio Pods",
    desc: "Positioned next to each ear, dual-driver audio pods deliver personalized Spatial Audio while keeping you aware of your surroundings. Acoustic raytracing analyzes your room's physical materials to adapt sound in real-time.",
    stats: [
      { num: "Dual", label: "Driver Pods" },
      { num: "Raytrace", label: "Acoustic Mapping" },
      { num: "Ambient", label: "Sound Passthrough" }
    ]
  },
  seal: {
    tag: "PERSONALIZED ERGONOMICS",
    title: "Precision Light Seal",
    desc: "The Light Seal gently flexes to conform to your face, delivering a precise fit while blocking out stray light. Available in a range of micro-adjustable shapes for ultimate comfort.",
    stats: [
      { num: "Soft", label: "Textile Weave" },
      { num: "Zero", label: "Light Leakage" },
      { num: "Modular", label: "Magnetic Attach" }
    ]
  },
  band: {
    tag: "HEADBAND DESIGN",
    title: "Solo Knit Head Band",
    desc: "The 3D-knit Head Band provides cushioning, breathability, and stretch. The Fit Dial mechanism lets you adjust Vision Pro precisely to your head with micro-increment tension control.",
    stats: [
      { num: "3D", label: "Knit Structure" },
      { num: "Fit Dial", label: "Micro-Tension" },
      { num: "Breathable", label: "Comfort Weave" }
    ]
  },
  silicon: {
    tag: "DUAL-CHIP PERFORMANCE",
    title: "M2 + R1 Dual Silicon Architecture",
    desc: "The M2 chip runs visionOS, executes computer vision algorithms, and renders graphics with unmatched efficiency. The brand-new R1 chip processes input from 12 cameras, 5 sensors, and 6 microphones in just 12ms.",
    stats: [
      { num: "12ms", label: "R1 Sensor Latency" },
      { num: "M2", label: "Graphics Engine" },
      { num: "12", label: "Live Cameras" }
    ]
  },
  privacy: {
    tag: "BIOMETRIC AUTHENTICATION",
    title: "Optic ID Security",
    desc: "Optic ID uses the uniqueness of your iris to instantly unlock Vision Pro, authorize purchases, and access password stores. Your biometric data is encrypted and never leaves the Secure Enclave.",
    stats: [
      { num: "Iris", label: "Biometric Scan" },
      { num: "Secure", label: "Enclave Storage" },
      { num: "100%", label: "Private & Encrypted" }
    ]
  },
  apps: {
    tag: "SPATIAL APPS",
    title: "Infinite Spatial Workspace",
    desc: "Arrange apps anywhere around you and scale them to the perfect size. Safari, Notes, Messages, and Keynote live side-by-side in real space.",
    stats: [
      { num: "Infinite", label: "Canvas Area" },
      { num: "3D", label: "Window Depth" },
      { num: "4K+", label: "Text Clarity" }
    ]
  },
  entertainment: {
    tag: "CINEMATIC SPACE",
    title: "100-Foot Cinema Experience",
    desc: "Transform any room into your personal theater with Spatial Audio and screen sizes expanding up to 100 feet wide.",
    stats: [
      { num: "100ft", label: "Virtual Screen" },
      { num: "4K", label: "Per Eye Detail" },
      { num: "Dolby", label: "Atmos Sound" }
    ]
  },
  photos: {
    tag: "SPATIAL CAPTURE",
    title: "Apple's First 3D Camera",
    desc: "Capture spatial photos and spatial videos in 3D, then relive memories in your living room with lifelike depth and Spatial Audio.",
    stats: [
      { num: "3D", label: "Spatial Video" },
      { num: "Panoramic", label: "Wrap-Around" },
      { num: "Immersive", label: "Spatial Sound" }
    ]
  },
  connection: {
    tag: "SPATIAL FACETIME",
    title: "Life-Size FaceTime & Personas",
    desc: "FaceTime video tiles are life-size, expanding in your room. Personas dynamically reflect your facial and hand movements in real-time.",
    stats: [
      { num: "Life-Size", label: "Facetime Tiles" },
      { num: "Persona", label: "Machine Learning" },
      { num: "Real-Time", label: "Hand Sync" }
    ]
  },
  design: {
    tag: "CRAFTSMANSHIP",
    title: "Design Innovation by Apple",
    desc: "Integrating advanced materials, singular glass geometry, and custom aluminum frames into a compact form factor.",
    stats: [
      { num: "Singular", label: "Glass Geometry" },
      { num: "Custom", label: "Alloy Frame" },
      { num: "Ergonomic", label: "Weight Balance" }
    ]
  }
};

// --- INITIALIZE LOCOMOTIVE SCROLL & GSAP ---
function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    multiplier: 1.0,
    smoothMobile: true
  });

  locoScroll.on("scroll", (instance) => {
    ScrollTrigger.update();

    // Update Top Scroll Progress Bar
    const progress = (instance.scroll.y / (instance.limit.y || 1)) * 100;
    const progressBar = document.getElementById("progress-bar");
    if (progressBar) progressBar.style.width = `${progress}%`;

    // Update Spatial Head Tracking HUD Coordinates
    const hudCoords = document.getElementById("hud-coords");
    if (hudCoords) {
      const posX = ((instance.scroll.y * 0.002) % 3.14).toFixed(2);
      const posY = Math.sin(instance.scroll.y * 0.005).toFixed(2);
      const posZ = (1.0 + Math.cos(instance.scroll.y * 0.003) * 0.5).toFixed(2);
      hudCoords.textContent = `X: ${posX} | Y: ${posY} | Z: ${posZ}`;
    }
  });

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();

// --- LIQUID CUSTOM CURSOR PHYSICS ENGINE ---
function initCustomCursor() {
  const dot = document.getElementById("cursor-dot");
  const ring = document.getElementById("cursor-ring");
  const text = document.getElementById("cursor-text");

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let ringX = mouseX;
  let ringY = mouseY;

  window.addEventListener("mousemove", (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (dot) {
      dot.style.left = `${mouseX}px`;
      dot.style.top = `${mouseY}px`;
    }
  });

  function renderCursor() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    if (ring) {
      ring.style.left = `${ringX}px`;
      ring.style.top = `${ringY}px`;
    }
    requestAnimationFrame(renderCursor);
  }
  renderCursor();

  // Attach hover states to interactive targets
  const interactiveTargets = document.querySelectorAll(
    "a, button, .hotspot-pin, .slider-handle, .parallax-card, .audio-trigger-btn"
  );

  interactiveTargets.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      document.body.classList.add("cursor-hover");
      if (text) {
        if (el.classList.contains("hotspot-pin")) text.textContent = "INSPECT";
        else if (el.classList.contains("slider-handle")) text.textContent = "SLIDE";
        else if (el.tagName === "BUTTON" || el.tagName === "A") text.textContent = "VIEW";
        else text.textContent = "";
      }
    });

    el.addEventListener("mouseleave", () => {
      document.body.classList.remove("cursor-hover");
      if (text) text.textContent = "";
    });
  });
}

// --- THREE.JS SPATIAL PARTICLE MATRIX BACKGROUND ---
function initThreeParticles() {
  const canvas = document.getElementById("particle-canvas");
  if (!canvas) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // Create 400 floating spatial glowing particles
  const particleCount = 400;
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 20;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 20;

    colors[i] = 1.0;
    colors[i + 1] = 0.37 + Math.random() * 0.2;
    colors[i + 2] = 0.03;
  }

  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  const material = new THREE.PointsMaterial({
    size: 0.06,
    vertexColors: true,
    transparent: true,
    opacity: 0.6,
    blending: THREE.AdditiveBlending
  });

  const particles = new THREE.Points(geometry, material);
  scene.add(particles);
  camera.position.z = 5;

  let targetRotationX = 0;
  let targetRotationY = 0;

  window.addEventListener("mousemove", (e) => {
    targetRotationX = (e.clientY / window.innerHeight - 0.5) * 0.3;
    targetRotationY = (e.clientX / window.innerWidth - 0.5) * 0.3;
  });

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  function animate() {
    requestAnimationFrame(animate);
    particles.rotation.x += (targetRotationX - particles.rotation.x) * 0.05 + 0.0005;
    particles.rotation.y += (targetRotationY - particles.rotation.y) * 0.05 + 0.0008;
    renderer.render(scene, camera);
  }
  animate();
}

// --- INTERACTIVE SPEC DETAIL GLASS MODAL ENGINE ---
function initSpecModals() {
  const modal = document.getElementById("tech-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const closeBg = document.getElementById("modal-close-bg");

  const modalTag = document.getElementById("modal-tag");
  const modalTitle = document.getElementById("modal-title");
  const modalDesc = document.getElementById("modal-desc");
  const modalStats = document.getElementById("modal-stats");

  function openModal(specKey) {
    const data = SPEC_DATA[specKey] || SPEC_DATA.glass;
    if (modalTag) modalTag.textContent = data.tag;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDesc) modalDesc.textContent = data.desc;

    if (modalStats && data.stats) {
      modalStats.innerHTML = data.stats
        .map(
          (s) => `
        <div class="stat-item">
          <span class="stat-num">${s.num}</span>
          <span class="stat-label">${s.label}</span>
        </div>`
        )
        .join("");
    }

    if (modal) modal.classList.add("active");
  }

  function closeModal() {
    if (modal) modal.classList.remove("active");
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (closeBg) closeBg.addEventListener("click", closeModal);

  // Bind all spec trigger elements
  document.querySelectorAll("[data-spec]").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const specKey = e.currentTarget.getAttribute("data-spec");
      openModal(specKey);
    });
  });

  const exploreBtn = document.getElementById("btn-explore-modal");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", () => openModal("glass"));
  }
}

// --- INTERACTIVE BEFORE & AFTER SPATIAL SLIDER ---
function initSpatialSlider() {
  const container = document.querySelector(".spatial-slider-container");
  const handle = document.getElementById("slider-handle");
  const afterImg = document.getElementById("slider-after");

  if (!container || !handle || !afterImg) return;

  let isDragging = false;

  function updateSlider(x) {
    const rect = container.getBoundingClientRect();
    let positionX = x - rect.left;
    if (positionX < 0) positionX = 0;
    if (positionX > rect.width) positionX = rect.width;

    const percentage = (positionX / rect.width) * 100;
    handle.style.left = `${percentage}%`;
    afterImg.style.width = `${percentage}%`;
  }

  container.addEventListener("mousedown", (e) => {
    isDragging = true;
    updateSlider(e.clientX);
  });

  window.addEventListener("mousemove", (e) => {
    if (!isDragging) return;
    updateSlider(e.clientX);
  });

  window.addEventListener("mouseup", () => {
    isDragging = false;
  });

  // Touch support
  container.addEventListener("touchstart", (e) => {
    isDragging = true;
    updateSlider(e.touches[0].clientX);
  });

  window.addEventListener("touchmove", (e) => {
    if (!isDragging) return;
    updateSlider(e.touches[0].clientX);
  });

  window.addEventListener("touchend", () => {
    isDragging = false;
  });
}

// --- SPATIAL AUDIO SYNTHESIZER WAVE CANVAS ---
function initAudioWaveVisualizer() {
  const canvas = document.getElementById("audio-wave-canvas");
  const toggleBtn = document.getElementById("btn-toggle-audio");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  canvas.width = 300;
  canvas.height = 300;

  let isAudioActive = false;
  let waveRadius = 40;

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      isAudioActive = !isAudioActive;
      toggleBtn.innerHTML = isAudioActive
        ? `<i class="ri-volume-vibrate-line"></i> Playing Spatial Audio Simulation...`
        : `<i class="ri-volume-up-line"></i> Listen to Spatial Audio Simulation`;
    });
  }

  function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const centerX = canvas.width / 2;
    const centerY = canvas.height / 2;

    if (isAudioActive) {
      waveRadius = (waveRadius + 2) % 120;
      for (let i = 0; i < 4; i++) {
        const radius = (waveRadius + i * 25) % 120;
        const opacity = Math.max(0, 1 - radius / 120);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius + 20, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(255, 94, 7, ${opacity})`;
        ctx.lineWidth = 2.5;
        ctx.stroke();
      }
    } else {
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    requestAnimationFrame(drawWaves);
  }
  drawWaves();
}

// --- GSAP MATCH MEDIA SCROLLTRIGGER ANIMATIONS ---
var mm = gsap.matchMedia();

mm.add("(min-width:901px)", () => {
  // Hero Video Trigger
  gsap.to("#page>video", {
    scrollTrigger: {
      trigger: `#page>video`,
      start: `2% top`,
      end: `bottom top`,
      scroller: `#main`,
    },
    onStart: () => {
      const vid = document.querySelector("#page>video");
      if (vid) vid.play();
      setTimeout(function () {
        const desktopH3 = document.querySelector(".desktop-h3");
        if (desktopH3) desktopH3.style.opacity = 0;
      }, 500);
    },
  });

  gsap.to("#page", {
    scrollTrigger: {
      trigger: `#page`,
      start: `top top`,
      end: `bottom top`,
      scroller: `#main`,
      pin: true,
    },
  });

  // Pinned Video Sections (page1 - page4, page6, page8, page10, page12)
  const videoPages = ["#page1", "#page2", "#page3", "#page4", "#page6", "#page8", "#page10", "#page12"];

  videoPages.forEach((pageId) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pageId,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        scroller: "#main",
        pin: true,
      },
    });

    tl.to(pageId, { filter: "brightness(1)" });
    tl.to(`${pageId}>h1`, { top: "-18%" });
    if (document.querySelector(`${pageId}>h3`)) {
      tl.to(`${pageId}>h3`, { top: "-25%", delay: -0.5 });
    }
  });

  // 360 SPIN CANVAS RENDERER
  function canvas360() {
    const canvas = document.querySelector("#canvas-360");
    if (!canvas) return;
    const context = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    });

    function files(index) {
      const frameStr = String(index).padStart(4, "0");
      return `https://www.apple.com/105/media/us/apple-vision-pro/2023/7e268c13-eb22-493d-a860-f0637bacb569/anim/360/large/${frameStr}.jpg`;
    }

    const frameCount = 198;
    const images = [];
    const imageSeq = { frame: 0 };

    for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
    }

    gsap.to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        scrub: 0.15,
        trigger: `#page15>canvas`,
        start: `top top`,
        end: `600% top`,
        scroller: `#main`,
      },
      onUpdate: render,
    });

    if (images[0]) images[0].onload = render;

    function render() {
      if (images[imageSeq.frame]) scaleImage(images[imageSeq.frame], context);
    }

    function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(
        img,
        0,
        0,
        img.width,
        img.height,
        centerShift_x,
        centerShift_y,
        img.width * ratio,
        img.height * ratio
      );
    }

    ScrollTrigger.create({
      trigger: "#page15>canvas",
      pin: true,
      scroller: `#main`,
      start: `top top`,
      end: `715% top`,
    });
  }
  canvas360();

  // visionOS Section (page25)
  var tl8 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page25",
      start: "top top",
      end: "bottom top",
      scrub: 1,
      scroller: "#main",
      pin: true,
    },
  });

  tl8.to("#page25", { filter: "brightness(1)" });
  tl8.to("#page25>h3", { top: "-18%" });
  tl8.to("#page25>h1", { top: "-25%", delay: -0.5 });

  // Eye Tracking Switch (page34)
  var tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page34",
      start: "top 30%",
      end: "bottom top",
      scrub: 1,
      scroller: "#main",
    },
  });
  tl9.to("#page34>#troff", { opacity: 0 });

  // Sensor Stagger Array (page36)
  gsap.to("#page36 img", {
    opacity: 0,
    stagger: 1.5,
    repeat: -1,
    yoyo: true,
  });

  // M2 + R1 Chip Zoom (page38)
  var tl10 = gsap.timeline({
    scrollTrigger: {
      trigger: "#page38",
      start: "top 50%",
      end: "bottom top",
      scrub: 1,
      scroller: "#main",
    },
  });
  tl10.to("#page38>img", { filter: "brightness(1)", scale: 1.08 });
});

// --- INITIALIZE ALL MODULES ON DOM CONTENT LOADED ---
document.addEventListener("DOMContentLoaded", () => {
  initCustomCursor();
  initThreeParticles();
  initSpecModals();
  initSpatialSlider();
  initAudioWaveVisualizer();
});
