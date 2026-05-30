// ─── Data ────────────────────────────────────────────────────────────────────
// Project cards read from project-data.js (loaded before this file in index.html).
// Edit project content there — changes here won't affect the detail pages.
const projectSource = window.portfolioProjects ?? [];

// Controls which projects appear on the homepage and their display order.
const featuredProjectIds = [
  "hannah-senesh-stem",
  "bluestamp-engineering-instruction",
  "game-based-learning",
  "lavner-robotics-3dprinting",
  "interactive-installation",
];

const projects = featuredProjectIds.map((id) => projectSource.find((project) => project.id === id)).filter(Boolean);

// Static content for the Experience, Skills, Approach, and Workplaces sections.
// Edit these arrays directly to update those sections.
const experiences = [
  {
    role: "STEM Education Specialist",
    color: "#5787a7",
    body:
      "Designed and led hands-on coding, robotics, and engineering programs for diverse K-12 learners, with project-based classrooms focused on experimentation, creativity, and differentiated support.",
  },
  {
    role: "Engineering / Coding Instructor",
    color: "#d47654",
    body:
      "Taught Python, JavaScript, Arduino, and computational thinking through interactive projects, iterative design cycles, and open-ended technical challenges.",
  },
  {
    role: "Technology & UX Consultant, Accenture",
    color: "#7c6aa6",
    body:
      "Worked across software systems, documentation, and design processes, strengthening communication, systems design, and facilitation skills that transfer directly into learning environments.",
  },
  {
    role: "Graduate Study, NYU Steinhardt",
    color: "#edbd4c",
    body:
      "Currently pursuing an MA in Learning Technology & Experience Design, building on a BS in Information Science from Cornell University.",
  },
];

const skillClusters = [
  {
    title: "Programming",
    color: "#d47654",
    items: ["Python", "JavaScript", "Scratch", "Introductory web development"],
  },
  {
    title: "Physical Computing",
    color: "#edbd4c",
    items: ["Arduino", "Raspberry Pi", "Micro:Bit", "Hummingbird Robotics"],
  },
  {
    title: "Educational Practice",
    color: "#5787a7",
    items: ["Curriculum development", "Project-based learning", "STEM facilitation", "Inquiry-based instruction"],
  },
  {
    title: "Design & Prototyping",
    color: "#7c6aa6",
    items: ["Figma", "Adobe XD", "3D printing workflows", "Workshop design"],
  },
];

const approach = [
  {
    title: "Project-based CS",
    color: "#dc2626",
    body:
      "Students build toward public artifacts, prototypes, and demonstrations that make technical ideas meaningful beyond a worksheet.",
  },
  {
    title: "Computational creativity",
    color: "#ea580c",
    body:
      "Discussion, critique, and debugging routines help learners reason together while keeping individual voice visible.",
  },
  {
    title: "Game-based learning",
    color: "#ca8a04",
    body:
      "Games, interactive art, sensors, and simulations position code as a medium for asking better questions.",
  },
  {
    title: "Inclusive STEM",
    color: "#16a34a",
    body:
      "Multiple entry points, accessible tools, and student-centered prompts support rigorous work without narrowing who belongs.",
  },
  {
    title: "Physical computing",
    color: "#1e6fef",
    body:
      "Sensors, circuits, and microcontrollers extend code into the physical world, giving students a medium that is tactile, iterative, and genuinely surprising.",
  },
  {
    title: "Critical Making",
    color: "#7c3aed",
    body:
      "Asking who technology is built for — and by whom — turns engineering choices into design arguments worth having.",
  },
];

const workplaces = [
  {
    name: "Cornell CIS",
    logo: "./assets/logos-or-icons/workplaces/cornell-cis-loho.png",
    note: "Undergraduate study in information science, systems thinking, and human-centered technology.",
  },
  {
    name: "NYU Steinhardt",
    logo: "./assets/logos-or-icons/workplaces/steinhardt-logo.png",
    note: "Graduate work in learning technology, experience design, and educational practice.",
  },
  {
    name: "Accenture",
    logo: "./assets/logos-or-icons/workplaces/accenture-logo.png",
    note: "Technology consulting experience across systems, documentation, and design collaboration.",
  },
  {
    name: "BlueStamp Engineering",
    logo: "./assets/logos-or-icons/workplaces/blue-stamp-logo-1.png",
    note: "Hands-on engineering instruction built around prototypes, iteration, and student agency.",
  },
  {
    name: "Lavner Education",
    logo: "./assets/logos-or-icons/workplaces/lavner-tech-rev-logo.webp",
    note: "Coding and creative technology instruction for young makers exploring digital tools.",
  },
  {
    name: "Coco Academy",
    logo: "./assets/logos-or-icons/workplaces/coco-academy-logo.webp",
    note: "Student-centered technology learning with an emphasis on confidence and playful practice.",
  },
  {
    name: "Free Library of Philadelphia",
    logo: "./assets/logos-or-icons/workplaces/flp-logo.png",
    note: "Youth learning programs connecting mentoring, STEM exploration, and community support.",
  },
  {
    name: "LEAP",
    logo: "./assets/logos-or-icons/workplaces/flp-leap.png",
    note: "Educational programming shaped around access, enrichment, and meaningful student projects.",
  },
  {
    name: "Hannah Senesh",
    logo: "./assets/logos-or-icons/workplaces/hannah-senesh-branding-1.png",
    note: "Classroom experience supporting curious learners through technology-rich instruction.",
  },
  {
    name: "Camp W*K",
    logo: "./assets/logos-or-icons/workplaces/camp-wk.png",
    note: "Informal learning spaces where creative projects and technical exploration can meet.",
  },
  {
    name: "LTXD",
    logo: "./assets/logos-or-icons/workplaces/ltxd-logo.png",
    note: "My Masters program, focused on learning technology and experience design for usable, thoughtful, pedagogically backed learning systems.",
  },
];

// ─── Render ───────────────────────────────────────────────────────────────────
const projectGrid = document.querySelector("#projectGrid");
const timeline = document.querySelector("#experienceTimeline");
const skillsGrid = document.querySelector("#skillsGrid");
const approachMap = document.querySelector("#approachMap");
const workplaceTrack = document.querySelector("#workplaceTrack");

function getProjectCategoryClass(category = "") {
  const normalized = category.toLowerCase();

  if (normalized.includes("career")) return "career";
  if (normalized.includes("nyu")) return "nyu";

  return "default";
}

function renderStageBadges(project) {
  const category = project.category
    ? `<span class="stage-category ${getProjectCategoryClass(project.category)}">${project.category}</span>`
    : "";

  return `
    <div class="stage-badges">
      <span class="stage-label">${project.label}</span>
      ${category}
    </div>
  `;
}

projectGrid.innerHTML = projects
  .map(
    (project, index) => `
      <a class="project-card" href="${project.url}" style="--stage-bg: ${project.theme}24">
        <div class="prototype-stage">
          <canvas class="project-canvas" data-visual="${project.visual}" data-theme="${project.theme}" width="520" height="390"></canvas>
          ${renderStageBadges(project)}
        </div>
        <div class="project-body">
          <div>
            <p class="eyebrow">Prototype ${String(index + 1).padStart(2, "0")}</p>
            <h3>${project.title}</h3>
            <p>${project.overview}</p>
          </div>
          <div class="tag-list" aria-label="Technologies used">
            ${project.tech.map((item) => `<span>${item}</span>`).join("")}
          </div>
          <div class="project-detail">
            <span><strong>Educational goal</strong>${project.goal}</span>
            <span><strong>Teaching impact</strong>${project.impact}</span>
          </div>
          <span class="project-link-cue">Open project detail</span>
        </div>
      </a>
    `
  )
  .join("");

timeline.innerHTML = experiences
  .map(
    (item) => `
      <article class="timeline-item" style="--item-color: ${item.color}">
        <h3 class="timeline-role">${item.role}</h3>
        <p>${item.body}</p>
      </article>
    `
  )
  .join("");

skillsGrid.innerHTML = skillClusters
  .map(
    (cluster) => `
      <article class="skill-cluster" style="--cluster-color: ${cluster.color}">
        <h3>${cluster.title}</h3>
        <ul>
          ${cluster.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `
  )
  .join("");

// Items are doubled so the CSS marquee animation can loop seamlessly.
const workplaceItems = [...workplaces, ...workplaces];
workplaceTrack.innerHTML = workplaceItems
  .map(
    (item) => `
      <article class="workplace-item" tabindex="0">
        <div class="logo-field">
          <img src="${item.logo}" alt="${item.name} logo" loading="lazy" />
        </div>
        <strong class="workplace-name">${item.name}</strong>
        <p class="workplace-note">${item.note}</p>
      </article>
    `
  )
  .join("");

approachMap.innerHTML = approach
  .map(
    (item) => `
      <article class="approach-node" style="--node-color: ${item.color}">
        <h3>${item.title}</h3>
        <p>${item.body}</p>
      </article>
    `
  )
  .join("");

// ─── Canvas animations ────────────────────────────────────────────────────────
// Each project card has a <canvas data-visual="..."> whose animation type is set
// by the project's visual field. drawProjectCanvas dispatches to the right function.
// Valid visual values: creative | physical | game | maker | installation
function fitCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  const ctx = canvas.getContext("2d");
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  return { ctx, width: rect.width, height: rect.height };
}

function drawProjectCanvas(canvas, time = 0, hover = false) {
  const { ctx, width, height } = fitCanvas(canvas);
  const type = canvas.dataset.visual;
  const theme = canvas.dataset.theme;
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fff9ee";
  ctx.fillRect(0, 0, width, height);

  if (type === "creative") drawCreative(ctx, width, height, theme, time, hover);
  if (type === "physical") drawPhysical(ctx, width, height, theme, time, hover);
  if (type === "game") drawGame(ctx, width, height, theme, time, hover);
  if (type === "maker") drawMaker(ctx, width, height, theme, time, hover);
  if (type === "installation") drawInstallation(ctx, width, height, theme, time, hover);
}

// LittleBits circuit chain with animated Micro:Bit LED grid.
function drawCreative(ctx, width, height, theme, time, hover) {
  const pulse = (Math.sin(time * 0.004) + 1) / 2;
  const bitY = height * 0.27;
  const bitH = height * 0.15;
  const powerX = width * 0.1;
  const mixX = width * 0.36;
  const splitX = width * 0.66;
  const speakerX = width * 0.77;
  drawLittleBitCable(ctx, powerX + width * 0.18, bitY + bitH * 0.48, mixX - width * 0.012, bitY + bitH * 0.5, "#d47654", time);
  drawLittleBitCable(ctx, splitX + width * 0.12, bitY + bitH * 0.42, speakerX + width * 0.07, bitY - height * 0.06, "#d47654", time + 280, true);
  drawLittleBitCable(ctx, splitX + width * 0.12, bitY + bitH * 0.62, speakerX + width * 0.07, bitY + height * 0.17, "#5787a7", time + 520, true);
  drawLittleBitModule(ctx, powerX, bitY, width * 0.18, bitH, {
    cap: "#2f6fbd",
    title: "p1 power",
    type: "power",
    pulse,
  });
  drawLittleBitModule(ctx, mixX, bitY - height * 0.01, width * 0.25, bitH * 1.04, {
    cap: "#e73191",
    title: "i37 mix",
    type: "mix",
    pulse: (pulse + 0.2) % 1,
  });
  drawLittleBitModule(ctx, splitX, bitY + height * 0.01, width * 0.14, bitH * 0.88, {
    cap: "#ff8b1a",
    title: "w19 split",
    type: "split",
    pulse: (pulse + 0.45) % 1,
  });
  drawMiniLittleBit(ctx, speakerX + width * 0.09, bitY - height * 0.08, width * 0.11, bitH * 0.7, "#ff8b1a", "out");
  drawMiniLittleBit(ctx, speakerX + width * 0.09, bitY + height * 0.16, width * 0.11, bitH * 0.7, "#ff8b1a", "out");

  const boardX = width * 0.34;
  const boardY = height * 0.58;
  const boardW = width * 0.32;
  const boardH = height * 0.22;
  ctx.fillStyle = "#315d73";
  roundRect(ctx, boardX, boardY, boardW, boardH, 10, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, boardX, boardY, boardW, boardH, 10, false);
  ctx.fillStyle = "#fff9ee";
  ctx.font = "800 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText("micro:bit", boardX + 14, boardY + 25);
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const lit = (row + col + Math.floor(time * 0.006)) % 4 === 0;
      ctx.fillStyle = lit ? "#edbd4c" : "rgba(255, 249, 238, 0.38)";
      ctx.beginPath();
      ctx.arc(boardX + boardW * 0.42 + col * 13, boardY + boardH * 0.48 + row * 11, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  drawPulseWire(ctx, width * 0.73, bitY + height * 0.11, boardX + boardW * 0.82, boardY, (pulse + 0.2) % 1, "#edbd4c");
}

// Arduino board wired to a breadboard with animated jumper cables and a blinking LED.
function drawPhysical(ctx, width, height, theme, time, hover) {
  const boardX = width * 0.16;
  const boardY = height * 0.25;
  const boardW = width * 0.42;
  const boardH = height * 0.36;
  ctx.fillStyle = "#1f7c72";
  roundRect(ctx, boardX, boardY, boardW, boardH, 12, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, boardX, boardY, boardW, boardH, 12, false);
  ctx.fillStyle = "#d5d0c6";
  roundRect(ctx, boardX + boardW * 0.06, boardY + boardH * 0.14, boardW * 0.23, boardH * 0.2, 4, true);
  ctx.fillStyle = "#17211f";
  ctx.font = "800 14px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText("ARDUINO", boardX + boardW * 0.34, boardY + boardH * 0.22);
  for (let i = 0; i < 8; i += 1) {
    ctx.fillStyle = "#17211f";
    ctx.fillRect(boardX + boardW * 0.16 + i * boardW * 0.08, boardY + boardH * 0.78, 8, 13);
  }
  for (let i = 0; i < 7; i += 1) {
    ctx.fillStyle = "#edbd4c";
    ctx.beginPath();
    ctx.arc(boardX + boardW * 0.42 + i * boardW * 0.065, boardY + boardH * 0.48, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  const breadX = width * 0.66;
  const breadY = height * 0.28;
  const breadW = width * 0.2;
  const breadH = height * 0.36;
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, breadX, breadY, breadW, breadH, 8, true);
  ctx.strokeStyle = "#17211f";
  roundRect(ctx, breadX, breadY, breadW, breadH, 8, false);
  ctx.strokeStyle = "rgba(23, 33, 31, 0.22)";
  for (let i = 1; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(breadX + i * breadW * 0.18, breadY + 12);
    ctx.lineTo(breadX + i * breadW * 0.18, breadY + breadH - 12);
    ctx.stroke();
  }
  drawLed(ctx, breadX + breadW * 0.5, breadY + breadH * 0.26, 18, Math.sin(time * 0.006) > -0.2 ? theme : "#d9d2c4");
  drawSensor(ctx, breadX + breadW * 0.47, breadY + breadH * 0.68, 34, "#5787a7");
  drawJumper(ctx, boardX + boardW * 0.68, boardY + boardH * 0.78, breadX + breadW * 0.3, breadY + breadH * 0.18, "#d47654", time);
  drawJumper(ctx, boardX + boardW * 0.8, boardY + boardH * 0.78, breadX + breadW * 0.58, breadY + breadH * 0.7, "#edbd4c", time + 220);
  drawJumper(ctx, boardX + boardW * 0.52, boardY + boardH * 0.78, breadX + breadW * 0.76, breadY + breadH * 0.32, "#5787a7", time + 440);
}

// Board game track with animated car token moving along road tiles.
function drawGame(ctx, width, height, theme, time, hover) {
  const road = [
    [0.16, 0.22],
    [0.34, 0.22],
    [0.52, 0.22],
    [0.68, 0.32],
    [0.68, 0.52],
    [0.5, 0.66],
    [0.3, 0.66],
    [0.18, 0.5],
  ];
  const tile = Math.min(width, height) * 0.14;
  ctx.lineWidth = Math.max(10, tile * 0.24);
  ctx.lineCap = "round";
  ctx.lineJoin = "round";
  ctx.strokeStyle = "#d9d2c4";
  ctx.beginPath();
  road.forEach(([x, y], index) => {
    const px = x * width;
    const py = y * height;
    if (index === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  });
  ctx.stroke();

  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  road.forEach(([x, y], index) => {
    const px = x * width - tile / 2;
    const py = y * height - tile / 2;
    ctx.fillStyle = index % 2 ? "#fff9ee" : "#efe8da";
    roundRect(ctx, px, py, tile, tile, 7, true);
    roundRect(ctx, px, py, tile, tile, 7, false);
    ctx.fillStyle = "rgba(23, 33, 31, 0.44)";
    ctx.fillRect(px + tile * 0.45, py + tile * 0.2, tile * 0.1, tile * 0.18);
    ctx.fillRect(px + tile * 0.45, py + tile * 0.62, tile * 0.1, tile * 0.18);
  });

  const progress = Math.floor(time * 0.002) % road.length;
  const next = (progress + 1) % road.length;
  const blend = (time * 0.002) % 1;
  const carX = (road[progress][0] * (1 - blend) + road[next][0] * blend) * width;
  const carY = (road[progress][1] * (1 - blend) + road[next][1] * blend) * height;
  drawCarToken(ctx, carX, carY, tile * 0.78, theme);
  drawCarToken(ctx, width * 0.77, height * 0.56, tile * 0.62, "#edbd4c");
  drawCarToken(ctx, width * 0.82, height * 0.43, tile * 0.62, "#5787a7");

  drawGameCard(ctx, width * 0.12, height * 0.76, tile * 1.45, tile * 0.94, "PLAN", "#a8d8c2");
  drawGameCard(ctx, width * 0.43, height * 0.78, tile * 1.45, tile * 0.94, "SHIFT", theme);
  drawGameCard(ctx, width * 0.68, height * 0.12, tile * 1.55, tile, "CHECK", "#edbd4c");
}

function drawCarToken(ctx, x, y, size, color) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = color;
  roundRect(ctx, -size * 0.45, -size * 0.24, size * 0.9, size * 0.48, 8, true);
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, -size * 0.18, -size * 0.38, size * 0.36, size * 0.24, 5, true);
  ctx.fillStyle = "#17211f";
  ctx.beginPath();
  ctx.arc(-size * 0.28, size * 0.22, size * 0.12, 0, Math.PI * 2);
  ctx.arc(size * 0.28, size * 0.22, size * 0.12, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawGameCard(ctx, x, y, width, height, label, color) {
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, x, y, width, height, 8, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, width, height, 8, false);
  ctx.fillStyle = color;
  roundRect(ctx, x + 8, y + 8, width - 16, height * 0.28, 5, true);
  ctx.fillStyle = "#17211f";
  ctx.font = "800 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(label, x + 13, y + height * 0.62);
}

// 3D printer frame with a moving print head extruding layered filament.
function drawMaker(ctx, width, height, theme, time, hover) {
  const frameX = width * 0.18;
  const frameY = height * 0.15;
  const frameW = width * 0.64;
  const frameH = height * 0.58;
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 4;
  ctx.strokeRect(frameX, frameY, frameW, frameH);
  ctx.lineWidth = 2;
  ctx.beginPath();
  ctx.moveTo(frameX, frameY + frameH * 0.18);
  ctx.lineTo(frameX + frameW, frameY + frameH * 0.18);
  ctx.stroke();

  const travel = (Math.sin(time * 0.0026) + 1) / 2;
  const headX = frameX + frameW * (0.18 + travel * 0.64);
  const headY = frameY + frameH * 0.24;
  ctx.fillStyle = "#283b36";
  roundRect(ctx, headX - 34, headY - 15, 68, 30, 6, true);
  ctx.fillStyle = "#d47654";
  ctx.beginPath();
  ctx.moveTo(headX - 10, headY + 15);
  ctx.lineTo(headX + 10, headY + 15);
  ctx.lineTo(headX, headY + 35);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.stroke();

  const bedY = frameY + frameH * 0.78;
  ctx.fillStyle = "#efe8da";
  roundRect(ctx, frameX + frameW * 0.16, bedY, frameW * 0.68, 18, 5, true);
  ctx.strokeStyle = "#17211f";
  roundRect(ctx, frameX + frameW * 0.16, bedY, frameW * 0.68, 18, 5, false);

  const layers = 7;
  for (let i = 0; i < layers; i += 1) {
    const layerW = frameW * (0.14 + i * 0.035);
    const layerX = width * 0.5 - layerW / 2;
    const layerY = bedY - 10 - i * 12;
    ctx.fillStyle = i % 2 ? "#5787a7" : theme;
    roundRect(ctx, layerX, layerY, layerW, 9, 4, true);
  }
  ctx.strokeStyle = "#edbd4c";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(headX, headY + 34);
  ctx.lineTo(headX, bedY - layers * 12);
  ctx.stroke();

}

// Projector casting a beam onto a silhouette figure with animated projection lines.
function drawInstallation(ctx, width, height, theme, time, hover) {
  const projectorX = width * 0.12;
  const projectorY = height * 0.62;
  const targetX = width * 0.58;
  const targetY = height * 0.38;
  const glow = (Math.sin(time * 0.003) + 1) / 2;

  ctx.fillStyle = `rgba(124, 106, 166, ${0.12 + glow * 0.08})`;
  ctx.beginPath();
  ctx.moveTo(projectorX + width * 0.16, projectorY - 24);
  ctx.lineTo(targetX + width * 0.28, targetY - height * 0.18);
  ctx.lineTo(targetX + width * 0.28, targetY + height * 0.2);
  ctx.lineTo(projectorX + width * 0.16, projectorY + 26);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = "#283b36";
  roundRect(ctx, projectorX, projectorY - 30, width * 0.18, 60, 8, true);
  ctx.fillStyle = "#fff9ee";
  ctx.beginPath();
  ctx.arc(projectorX + width * 0.16, projectorY, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  ctx.stroke();

  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, targetX, targetY - height * 0.18, width * 0.26, height * 0.42, 42, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, targetX, targetY - height * 0.18, width * 0.26, height * 0.42, 42, false);

  ctx.strokeStyle = theme;
  ctx.lineWidth = 3;
  for (let i = 0; i < 3; i += 1) {
    ctx.beginPath();
    ctx.ellipse(targetX + width * (0.09 + i * 0.04), targetY + height * (0.02 + i * 0.025), 28 - i * 3, 12 + i * 3, -0.35, 0, Math.PI * 2);
    ctx.stroke();
  }
  ctx.strokeStyle = "#edbd4c";
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i += 1) {
    const y = targetY - height * 0.13 + i * height * 0.08;
    ctx.beginPath();
    ctx.moveTo(targetX + width * 0.02, y);
    ctx.lineTo(targetX + width * 0.24, y + Math.sin(time * 0.002 + i) * 5);
    ctx.stroke();
  }
  // drawCodeTiles(ctx, 18, 20, ["map", "project", "try on"], theme);
}

function drawLittleBitModule(ctx, x, y, width, height, options) {
  const capW = Math.max(8, width * 0.1);
  const bodyX = x + capW * 0.62;
  const bodyW = width - capW * 1.24;
  ctx.save();
  ctx.shadowColor = "rgba(23, 33, 31, 0.16)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 5;
  ctx.fillStyle = options.cap;
  roundRect(ctx, x, y + height * 0.1, capW, height * 0.8, 4, true);
  roundRect(ctx, x + width - capW, y + height * 0.1, capW, height * 0.8, 4, true);
  ctx.fillStyle = "#f7f2e8";
  roundRect(ctx, bodyX, y, bodyW, height, 5, true);
  ctx.restore();

  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.3;
  roundRect(ctx, bodyX, y, bodyW, height, 5, false);
  ctx.fillStyle = "rgba(23, 33, 31, 0.58)";
  ctx.font = "700 8px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(options.title, bodyX + bodyW * 0.36, y + height * 0.17);
  drawBitPort(ctx, bodyX + bodyW * 0.08, y + height * 0.48, height * 0.28);
  drawBitPort(ctx, bodyX + bodyW * 0.92, y + height * 0.48, height * 0.28);
  drawBitScrews(ctx, bodyX, y, bodyW, height);

  if (options.type === "power") {
    drawBitSwitch(ctx, bodyX + bodyW * 0.36, y + height * 0.5, height * 0.46, options.pulse);
    drawBitLed(ctx, bodyX + bodyW * 0.66, y + height * 0.32, height * 0.08, options.pulse > 0.35 ? "#edbd4c" : "#c5beb1");
  }

  if (options.type === "mix") {
    drawBitKnob(ctx, bodyX + bodyW * 0.36, y + height * 0.54, height * 0.28, options.pulse);
    drawBitKnob(ctx, bodyX + bodyW * 0.65, y + height * 0.54, height * 0.28, (options.pulse + 0.48) % 1);
    drawBitLed(ctx, bodyX + bodyW * 0.18, y + height * 0.32, height * 0.06, "#e73191");
    ctx.fillStyle = "rgba(23, 33, 31, 0.62)";
    ctx.font = "700 7px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
    ctx.fillText("1", bodyX + bodyW * 0.31, y + height * 0.88);
    ctx.fillText("2", bodyX + bodyW * 0.6, y + height * 0.88);
  }

  if (options.type === "split") {
    drawBitPort(ctx, bodyX + bodyW * 0.52, y + height * 0.28, height * 0.24);
    drawBitPort(ctx, bodyX + bodyW * 0.52, y + height * 0.68, height * 0.24);
    ctx.strokeStyle = "#17211f";
    ctx.lineWidth = 1.2;
    ctx.beginPath();
    ctx.moveTo(bodyX + bodyW * 0.25, y + height * 0.5);
    ctx.lineTo(bodyX + bodyW * 0.45, y + height * 0.28);
    ctx.moveTo(bodyX + bodyW * 0.25, y + height * 0.5);
    ctx.lineTo(bodyX + bodyW * 0.45, y + height * 0.68);
    ctx.stroke();
  }
}

function drawMiniLittleBit(ctx, x, y, width, height, cap, label) {
  const capW = Math.max(7, width * 0.14);
  ctx.fillStyle = cap;
  roundRect(ctx, x, y + height * 0.08, capW, height * 0.84, 4, true);
  roundRect(ctx, x + width - capW, y + height * 0.08, capW, height * 0.84, 4, true);
  ctx.fillStyle = "#f7f2e8";
  roundRect(ctx, x + capW * 0.62, y, width - capW * 1.24, height, 4, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.2;
  roundRect(ctx, x + capW * 0.62, y, width - capW * 1.24, height, 4, false);
  drawBitPort(ctx, x + width * 0.36, y + height * 0.52, height * 0.28);
  ctx.fillStyle = "rgba(23, 33, 31, 0.64)";
  ctx.font = "700 7px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(label, x + width * 0.47, y + height * 0.58);
}

function drawBitPort(ctx, x, y, size) {
  ctx.fillStyle = "#efe8da";
  roundRect(ctx, x - size * 0.5, y - size * 0.42, size, size * 0.84, 2, true);
  ctx.strokeStyle = "rgba(23, 33, 31, 0.5)";
  ctx.lineWidth = 1;
  roundRect(ctx, x - size * 0.5, y - size * 0.42, size, size * 0.84, 2, false);
  ctx.fillStyle = "#d0c7b9";
  ctx.fillRect(x - size * 0.28, y - size * 0.18, size * 0.18, size * 0.12);
  ctx.fillRect(x + size * 0.1, y - size * 0.18, size * 0.18, size * 0.12);
}

function drawBitScrews(ctx, x, y, width, height) {
  ctx.fillStyle = "#c7bfb2";
  [
    [0.08, 0.18],
    [0.92, 0.18],
    [0.08, 0.82],
    [0.92, 0.82],
  ].forEach(([px, py]) => {
    ctx.beginPath();
    ctx.arc(x + width * px, y + height * py, 1.6, 0, Math.PI * 2);
    ctx.fill();
  });
}

function drawBitSwitch(ctx, x, y, size, pulse) {
  ctx.fillStyle = "#17211f";
  roundRect(ctx, x - size * 0.36, y - size * 0.48, size * 0.72, size * 0.96, size * 0.16, true);
  ctx.fillStyle = "#f7f2e8";
  roundRect(ctx, x - size * 0.24, y - size * 0.28 + pulse * size * 0.16, size * 0.48, size * 0.28, size * 0.08, true);
}

function drawBitKnob(ctx, x, y, radius, pulse) {
  ctx.fillStyle = "#17211f";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#f7f2e8";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + Math.cos(pulse * Math.PI * 2) * radius * 0.7, y + Math.sin(pulse * Math.PI * 2) * radius * 0.7);
  ctx.stroke();
}

function drawBitLed(ctx, x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(23, 33, 31, 0.48)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

function drawLittleBitCable(ctx, x1, y1, x2, y2, color, time, loop = false) {
  const pulse = (Math.sin(time * 0.004) + 1) / 2;
  ctx.save();
  ctx.lineCap = "round";
  ["#17211f", color, "#f7f2e8"].forEach((wireColor, index) => {
    ctx.strokeStyle = index === 0 ? "rgba(23, 33, 31, 0.25)" : wireColor;
    ctx.lineWidth = index === 0 ? 6 : 2.2;
    const offset = (index - 1) * 5;
    ctx.beginPath();
    ctx.moveTo(x1, y1 + offset);
    if (loop) {
      const midX = (x1 + x2) / 2;
      ctx.bezierCurveTo(midX - 6, y1 - 38 + offset, midX + 42, y2 - 38 + offset, x2, y2 + offset);
    } else {
      ctx.bezierCurveTo(x1 + 36, y1 - 18 + offset, x2 - 36, y2 + 18 + offset, x2, y2 + offset);
    }
    ctx.stroke();
  });
  ctx.fillStyle = "#edbd4c";
  ctx.beginPath();
  ctx.arc(x1 + (x2 - x1) * pulse, y1 + (y2 - y1) * pulse - Math.sin(pulse * Math.PI) * (loop ? 30 : 16), 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawPulseWire(ctx, x1, y1, x2, y2, progress, color) {
  ctx.strokeStyle = "rgba(23, 33, 31, 0.26)";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x1 + (x2 - x1) * progress, y1 + (y2 - y1) * progress, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

function drawLed(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.fillStyle = "rgba(255, 249, 238, 0.72)";
  ctx.beginPath();
  ctx.arc(x - size * 0.28, y - size * 0.28, size * 0.26, 0, Math.PI * 2);
  ctx.fill();
}

function drawSensor(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  roundRect(ctx, x - size / 2, y - size / 2, size, size, 6, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, x - size / 2, y - size / 2, size, size, 6, false);
  ctx.fillStyle = "#17211f";
  ctx.beginPath();
  ctx.arc(x - size * 0.18, y, size * 0.12, 0, Math.PI * 2);
  ctx.arc(x + size * 0.18, y, size * 0.12, 0, Math.PI * 2);
  ctx.fill();
}

function drawJumper(ctx, x1, y1, x2, y2, color, time) {
  const pulse = (Math.sin(time * 0.004) + 1) / 2;
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.bezierCurveTo(x1 + 60, y1 - 80, x2 - 60, y2 - 80, x2, y2);
  ctx.stroke();
  ctx.fillStyle = "#fff9ee";
  ctx.beginPath();
  ctx.arc(x1 + (x2 - x1) * pulse, y1 + (y2 - y1) * pulse - Math.sin(pulse * Math.PI) * 55, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.2;
  ctx.stroke();
}

function drawCodeTiles(ctx, x, y, words, theme) {
  ctx.font = "700 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  words.forEach((word, index) => {
    const width = ctx.measureText(word).width + 22;
    ctx.fillStyle = index % 2 ? "#17211f" : theme;
    roundRect(ctx, x, y + index * 34, width, 24, 6, true);
    ctx.fillStyle = index % 2 ? "#fff9ee" : "#17211f";
    ctx.fillText(word, x + 11, y + 17 + index * 34);
  });
}

function roundRect(ctx, x, y, width, height, radius, fill) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
  if (fill) ctx.fill();
  else ctx.stroke();
}

const projectCanvases = [...document.querySelectorAll(".project-canvas")];
const projectHover = new WeakMap();
const projectFreezeTime = new WeakMap();
projectCanvases.forEach((canvas) => {
  projectHover.set(canvas, false);
  canvas.closest(".project-card").addEventListener("pointerenter", () => {
    projectHover.set(canvas, true);
    projectFreezeTime.set(canvas, performance.now());
  });
  canvas.closest(".project-card").addEventListener("pointerleave", () => {
    projectHover.set(canvas, false);
    projectFreezeTime.delete(canvas);
  });
});

const toy = document.querySelector("#learningToy");
const range = document.querySelector("#toyRange");
const modeButtons = [...document.querySelectorAll("[data-mode]")];
let toyMode = "pattern";
let pointer = { x: 0.5, y: 0.5, active: false };

if (modeButtons[0]) modeButtons[0].classList.add("is-active");
modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toyMode = button.dataset.mode;
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

if (toy) {
  toy.addEventListener("pointermove", (event) => {
    const rect = toy.getBoundingClientRect();
    pointer = {
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
      active: true,
    };
  });

  toy.addEventListener("pointerleave", () => {
    pointer.active = false;
  });
}

// ─── Interactive learning toy (Philosophy section) ────────────────────────────
// Node graph that responds to mouse position and the mode/complexity controls.
function drawLearningToy(time) {
  const { ctx, width, height } = fitCanvas(toy);
  const complexity = Number(range.value);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f8f4ea";
  ctx.fillRect(0, 0, width, height);

  const nodes = Array.from({ length: complexity }, (_, index) => {
    const angle = (index / complexity) * Math.PI * 2 + time * 0.00035;
    const radius = Math.min(width, height) * (toyMode === "flow" ? 0.28 : 0.22 + (index % 3) * 0.035);
    const pullX = pointer.active ? (pointer.x - 0.5) * 90 : 0;
    const pullY = pointer.active ? (pointer.y - 0.5) * 70 : 0;
    return {
      x: width / 2 + Math.cos(angle * (toyMode === "chance" ? 1.7 : 1)) * radius + pullX * Math.sin(index),
      y: height / 2 + Math.sin(angle * (toyMode === "pattern" ? 1.6 : 1)) * radius + pullY * Math.cos(index),
      color: ["#d47654", "#5787a7", "#edbd4c", "#a8d8c2", "#7c6aa6"][index % 5],
    };
  });

  ctx.lineWidth = 1.8;
  nodes.forEach((node, index) => {
    nodes.slice(index + 1).forEach((other, otherIndex) => {
      const distance = Math.hypot(node.x - other.x, node.y - other.y);
      const threshold = toyMode === "flow" ? 230 : 170;
      if (distance < threshold || (toyMode === "chance" && (index + otherIndex + Math.floor(time * 0.004)) % 5 === 0)) {
        ctx.strokeStyle = `rgba(23, 33, 31, ${Math.max(0.08, 1 - distance / 260)})`;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    });
  });

  nodes.forEach((node, index) => {
    const pulse = 7 + Math.sin(time * 0.004 + index) * 2.5;
    ctx.fillStyle = node.color;
    ctx.beginPath();
    ctx.arc(node.x, node.y, pulse + (toyMode === "chance" && index % 3 === 0 ? 4 : 0), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#17211f";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  ctx.fillStyle = "rgba(23, 33, 31, 0.9)";
  ctx.font = "700 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(`mode:${toyMode}`, 18, 26);
  ctx.fillText(`nodes:${complexity}`, 18, 48);
}

// ─── Animation loop ───────────────────────────────────────────────────────────
// Single requestAnimationFrame loop drives all canvas animations.
function animate(time) {
  if (toy) drawLearningToy(time);
  projectCanvases.forEach((canvas) => {
    const renderTime = projectHover.get(canvas) ? projectFreezeTime.get(canvas) || time : time;
    drawProjectCanvas(canvas, renderTime, projectHover.get(canvas));
  });
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);
// The topbar is fixed-position, so native anchor scrolling would land behind it.
// This function reads the topbar height and applies the correct offset.
function scrollToHashTarget() {
  if (!window.location.hash) return;
  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const target = document.getElementById(targetId);
  if (!target) return;
  const topbar = document.querySelector(".topbar");
  const offset = (topbar?.getBoundingClientRect().height || 0) + 20;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "auto" });
}
requestAnimationFrame(scrollToHashTarget);
window.addEventListener("load", scrollToHashTarget);
window.addEventListener("resize", () => {
  projectCanvases.forEach((canvas) => drawProjectCanvas(canvas, performance.now(), projectHover.get(canvas)));
  if (toy) drawLearningToy(performance.now());
});

// ─── Maker Desk ────────────────────────────────────────────────────────────────
// Clicking a .desk-object opens its data-src URL in a full-screen iframe lightbox.
// The panel flies from the object's screen position to the viewport center using
// a CSS custom-property FLIP technique:
//   1. Set --start-x/y/scale on the panel (where the object is)
//   2. Add .is-collapsed (transition: none) so the panel snaps to that position
//   3. Remove .is-collapsed two animation frames later — the CSS transition runs
(function initMakerDesk() {
  const lightbox = document.getElementById("deskLightbox");
  const panel    = document.getElementById("deskLightboxPanel");
  const backdrop = document.getElementById("deskLightboxBackdrop");
  const iframe   = document.getElementById("deskLightboxIframe");
  const spinner  = document.getElementById("deskLightboxSpinner");
  const titleEl  = document.getElementById("deskLightboxTitle");
  const closeBtn = document.getElementById("deskLightboxClose");
  if (!lightbox) return;

  let lastFocused = null; // element to restore focus to when lightbox closes

  // ── Open ──────────────────────────────────────────────────────────────────

  function openDesk(obj) {
    const src   = (obj.dataset.src || "").trim();
    const label = obj.dataset.label || "Maker Desk";

    // Guard: prompt to add content URL if placeholder is still empty.
    if (!src) {
      // eslint-disable-next-line no-alert
      alert(`"${label}" has no content URL yet.\nAdd one to data-src on the button in index.html.`);
      return;
    }

    lastFocused = document.activeElement;
    titleEl.textContent = label;
    spinner.classList.remove("is-hidden");
    iframe.src = "about:blank";

    // FLIP setup: compute the panel's starting offset from its natural center.
    const rect    = obj.getBoundingClientRect();
    const vpW     = window.innerWidth;
    const vpH     = window.innerHeight;
    const objCX   = rect.left + rect.width  / 2;
    const objCY   = rect.top  + rect.height / 2;
    const startX  = objCX - vpW / 2;
    const startY  = objCY - vpH / 2;
    // Natural panel width is min(90vw, 880px); compute scale to match object size.
    const panelW  = Math.min(vpW * 0.9, 880);
    const startScale = Math.max(0.05, rect.width / panelW);

    panel.style.setProperty("--start-x",     `${startX}px`);
    panel.style.setProperty("--start-y",     `${startY}px`);
    panel.style.setProperty("--start-scale", startScale);

    // Snap to collapsed position (transition: none), then trigger fly-in.
    panel.classList.add("is-collapsed");
    lightbox.hidden = false;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lightbox.classList.add("is-open");
        panel.classList.remove("is-collapsed"); // spring transition fires here
      });
    });

    // Load iframe after the expand animation finishes (~420 ms).
    setTimeout(() => {
      iframe.src = src;
      iframe.addEventListener("load", () => spinner.classList.add("is-hidden"), { once: true });
    }, 420);

    closeBtn.focus();
  }

  // ── Close ─────────────────────────────────────────────────────────────────

  function closeDesk() {
    lightbox.classList.remove("is-open"); // backdrop fades out
    panel.classList.add("is-closing");    // panel snaps to small dot at center

    setTimeout(() => {
      lightbox.hidden = true;
      panel.classList.remove("is-closing");
      iframe.src = "about:blank";
      spinner.classList.remove("is-hidden");
      if (lastFocused) lastFocused.focus();
    }, 320);
  }

  // ── Event wiring ──────────────────────────────────────────────────────────

  document.querySelectorAll(".desk-object").forEach((obj) => {
    obj.addEventListener("click", () => openDesk(obj));
  });

  closeBtn.addEventListener("click", closeDesk);
  backdrop.addEventListener("click", closeDesk);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeDesk();
  });

  // Trap Tab focus within the open lightbox (accessibility).
  lightbox.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || lightbox.hidden) return;
    const focusable = [...lightbox.querySelectorAll(
      "button, [href], input, [tabindex]:not([tabindex='-1'])"
    )].filter((el) => !el.disabled);
    if (focusable.length < 2) return;
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
})();
