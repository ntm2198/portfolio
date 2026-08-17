// ─── Data ────────────────────────────────────────────────────────────────────
// Project cards read from project-data.js (loaded before this file in index.html).
// Edit project content there — changes here won't affect the detail pages.
const projectSource = window.portfolioProjects ?? [];

// Controls which projects appear on the homepage and their display order.
const featuredProjectIds = [
  "cardboard-calamity",
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
          ${project.isNew ? `<span class="project-new-badge" aria-label="New project">NEW!</span>` : ""}
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

/**
 * Sizes a canvas to exactly match its CSS layout size, accounting for high-DPI
 * (Retina) screens. Without this, drawings look blurry on sharp displays.
 *
 * @param {HTMLCanvasElement} canvas - The <canvas> element to size.
 * @returns {{ ctx: CanvasRenderingContext2D, width: number, height: number }}
 *   ctx    — the 2D drawing context to draw into
 *   width  — CSS pixel width (use this for all your layout math)
 *   height — CSS pixel height
 *
 * How it works:
 *   - getBoundingClientRect() reads the element's rendered CSS size in pixels.
 *   - devicePixelRatio is 2 on Retina screens, meaning 2 physical pixels per CSS pixel.
 *   - canvas.width/height set the actual pixel buffer size (physical pixels).
 *   - setTransform scales the drawing coordinate system back down so that when
 *     you say "draw at x=50", it maps to the right physical pixel automatically.
 */
function fitCanvas(canvas) {
  const rect = canvas.getBoundingClientRect();
  const ratio = window.devicePixelRatio || 1;
  // Multiply CSS dimensions by devicePixelRatio to set the real pixel buffer.
  // Math.floor avoids sub-pixel gaps; Math.max(1,...) prevents a zero-size buffer.
  canvas.width = Math.max(1, Math.floor(rect.width * ratio));
  canvas.height = Math.max(1, Math.floor(rect.height * ratio));
  const ctx = canvas.getContext("2d");
  // Scale the drawing context so you can use CSS pixel coordinates in all draw calls.
  ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
  // Return CSS pixel dimensions — use these for positioning, not the raw buffer size.
  return { ctx, width: rect.width, height: rect.height };
}

/**
 * Main dispatcher: clears the canvas, then calls the correct draw function
 * based on the canvas element's data-visual attribute.
 *
 * @param {HTMLCanvasElement} canvas - The project card's <canvas> element.
 *   The element must have data-visual (animation type) and data-theme (accent color).
 * @param {number} time - Current timestamp in milliseconds (from requestAnimationFrame).
 *   Drives all animation — values increase over time, creating motion via Math.sin etc.
 * @param {boolean} hover - Whether the user's pointer is over this card.
 *   Most animations speed up or gain extra effects when true.
 */
function drawProjectCanvas(canvas, time = 0, hover = false) {
  // fitCanvas returns the drawing context and CSS layout dimensions.
  const { ctx, width, height } = fitCanvas(canvas);
  // Read which animation style this canvas should show (set in project-data.js).
  const type = canvas.dataset.visual;
  // Read the project's accent color, passed into each draw function as `theme`.
  const theme = canvas.dataset.theme;
  // Wipe the previous frame before drawing the new one.
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#fff9ee";
  ctx.fillRect(0, 0, width, height);

  // Route to the right drawing function based on the visual type.
  if (type === "creative") drawCreative(ctx, width, height, theme, time, hover);
  if (type === "physical") drawPhysical(ctx, width, height, theme, time, hover);
  if (type === "game") drawGame(ctx, width, height, theme, time, hover);
  if (type === "maker") drawMaker(ctx, width, height, theme, time, hover);
  if (type === "installation") drawInstallation(ctx, width, height, theme, time, hover);
  if (type === "cardboard") drawCardboard(ctx, width, height, theme, time, hover);
}

/**
 * Draws the "creative" animation: a LittleBits circuit chain (power -> mix -> split ->
 * two outputs) wired together with animated cables, plus a Micro:bit LED grid below.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context from fitCanvas.
 * @param {number} width  - Canvas CSS width in pixels.
 * @param {number} height - Canvas CSS height in pixels.
 * @param {string} theme  - Project accent color hex string (e.g. "#4A90E2").
 * @param {number} time   - Millisecond timestamp -- drives animation oscillation.
 * @param {boolean} hover - Not used in this animation (reserved for future use).
 */
function drawCreative(ctx, width, height, theme, time, hover) {
  // pulse goes 0 -> 1 -> 0 -> 1... on a ~1.6 second cycle (sin oscillates at time*0.004).
  // (sin + 1) / 2 converts the -1...+1 range to 0...1 for easier use as a fade/progress value.
  const pulse = (Math.sin(time * 0.004) + 1) / 2;
  // All horizontal positions are fractions of canvas width so the layout scales.
  const bitY = height * 0.27;
  const bitH = height * 0.15;
  const powerX = width * 0.1;
  const mixX = width * 0.36;
  const splitX = width * 0.66;
  const speakerX = width * 0.77;
  // Draw cables connecting the modules, with animated traveling pulse dots.
  drawLittleBitCable(ctx, powerX + width * 0.18, bitY + bitH * 0.48, mixX - width * 0.012, bitY + bitH * 0.5, "#d47654", time);
  drawLittleBitCable(ctx, splitX + width * 0.12, bitY + bitH * 0.42, speakerX + width * 0.07, bitY - height * 0.06, "#d47654", time + 280, true);
  drawLittleBitCable(ctx, splitX + width * 0.12, bitY + bitH * 0.62, speakerX + width * 0.07, bitY + height * 0.17, "#5787a7", time + 520, true);
  // Draw the three main LittleBits modules in left-to-right order.
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
    pulse: (pulse + 0.2) % 1, // offset so this module's animation is slightly behind the power module
  });
  drawLittleBitModule(ctx, splitX, bitY + height * 0.01, width * 0.14, bitH * 0.88, {
    cap: "#ff8b1a",
    title: "w19 split",
    type: "split",
    pulse: (pulse + 0.45) % 1,
  });
  // Draw two small output modules on the right (one up, one down -- the split output).
  drawMiniLittleBit(ctx, speakerX + width * 0.09, bitY - height * 0.08, width * 0.11, bitH * 0.7, "#ff8b1a", "out");
  drawMiniLittleBit(ctx, speakerX + width * 0.09, bitY + height * 0.16, width * 0.11, bitH * 0.7, "#ff8b1a", "out");

  // -- Micro:bit board below the circuit --
  const boardX = width * 0.34;
  const boardY = height * 0.58;
  const boardW = width * 0.32;
  const boardH = height * 0.22;
  // Draw the teal PCB body.
  ctx.fillStyle = "#315d73";
  roundRect(ctx, boardX, boardY, boardW, boardH, 10, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, boardX, boardY, boardW, boardH, 10, false);
  ctx.fillStyle = "#fff9ee";
  ctx.font = "800 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText("micro:bit", boardX + 14, boardY + 25);
  // Draw the 5x5 LED grid. Each LED lights up on a shifting diagonal wave pattern.
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      // (row + col + time) % 4 === 0 creates a diagonal ripple across the grid.
      // Math.floor(time * 0.006) advances the pattern ~6 steps per second.
      const lit = (row + col + Math.floor(time * 0.006)) % 4 === 0;
      ctx.fillStyle = lit ? "#edbd4c" : "rgba(255, 249, 238, 0.38)";
      ctx.beginPath();
      ctx.arc(boardX + boardW * 0.42 + col * 13, boardY + boardH * 0.48 + row * 11, 3.2, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  // A wire with a traveling dot connects the mix module's output to the Micro:bit.
  drawPulseWire(ctx, width * 0.73, bitY + height * 0.11, boardX + boardW * 0.82, boardY, (pulse + 0.2) % 1, "#edbd4c");
}

/**
 * Draws the "physical" animation: an Arduino board on the left connected to a
 * breadboard on the right with three colored jumper cables. A blinking LED and
 * a blue sensor component sit on the breadboard.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context.
 * @param {number} width  - Canvas width in CSS pixels.
 * @param {number} height - Canvas height in CSS pixels.
 * @param {string} theme  - Project accent color -- used for the blinking LED color.
 * @param {number} time   - Millisecond timestamp for animation.
 * @param {boolean} hover - Unused here (reserved).
 */
function drawPhysical(ctx, width, height, theme, time, hover) {
  // -- Arduino board --
  const boardX = width * 0.16;
  const boardY = height * 0.25;
  const boardW = width * 0.42;
  const boardH = height * 0.36;
  ctx.fillStyle = "#1f7c72"; // characteristic Arduino teal/green
  roundRect(ctx, boardX, boardY, boardW, boardH, 12, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, boardX, boardY, boardW, boardH, 12, false);
  // USB connector socket on the left edge.
  ctx.fillStyle = "#d5d0c6";
  roundRect(ctx, boardX + boardW * 0.06, boardY + boardH * 0.14, boardW * 0.23, boardH * 0.2, 4, true);
  ctx.fillStyle = "#17211f";
  ctx.font = "800 14px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText("ARDUINO", boardX + boardW * 0.34, boardY + boardH * 0.22);
  // Digital pin header row along the bottom.
  for (let i = 0; i < 8; i += 1) {
    ctx.fillStyle = "#17211f";
    ctx.fillRect(boardX + boardW * 0.16 + i * boardW * 0.08, boardY + boardH * 0.78, 8, 13);
  }
  // Circular solder pads on the board face.
  for (let i = 0; i < 7; i += 1) {
    ctx.fillStyle = "#edbd4c";
    ctx.beginPath();
    ctx.arc(boardX + boardW * 0.42 + i * boardW * 0.065, boardY + boardH * 0.48, 4, 0, Math.PI * 2);
    ctx.fill();
  }

  // -- Breadboard --
  const breadX = width * 0.66;
  const breadY = height * 0.28;
  const breadW = width * 0.2;
  const breadH = height * 0.36;
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, breadX, breadY, breadW, breadH, 8, true);
  ctx.strokeStyle = "#17211f";
  roundRect(ctx, breadX, breadY, breadW, breadH, 8, false);
  // Faint vertical dividing lines representing the breadboard's tie-point rails.
  ctx.strokeStyle = "rgba(23, 33, 31, 0.22)";
  for (let i = 1; i < 5; i += 1) {
    ctx.beginPath();
    ctx.moveTo(breadX + i * breadW * 0.18, breadY + 12);
    ctx.lineTo(breadX + i * breadW * 0.18, breadY + breadH - 12);
    ctx.stroke();
  }
  // Blinking LED: when sin(time) > -0.2 (~90% of the time) it uses the project theme color.
  drawLed(ctx, breadX + breadW * 0.5, breadY + breadH * 0.26, 18, Math.sin(time * 0.006) > -0.2 ? theme : "#d9d2c4");
  drawSensor(ctx, breadX + breadW * 0.47, breadY + breadH * 0.68, 34, "#5787a7");
  // Three jumper cables from Arduino pins to breadboard rows.
  // Each cable is offset by 220ms so they appear to pulse at slightly different times.
  drawJumper(ctx, boardX + boardW * 0.68, boardY + boardH * 0.78, breadX + breadW * 0.3, breadY + breadH * 0.18, "#d47654", time);
  drawJumper(ctx, boardX + boardW * 0.8, boardY + boardH * 0.78, breadX + breadW * 0.58, breadY + breadH * 0.7, "#edbd4c", time + 220);
  drawJumper(ctx, boardX + boardW * 0.52, boardY + boardH * 0.78, breadX + breadW * 0.76, breadY + breadH * 0.32, "#5787a7", time + 440);
}

/**
 * Draws the "game" animation: a board game track made of tiles with a car token
 * that moves along the path, plus two stationary opponent cars and three game cards.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context.
 * @param {number} width  - Canvas width in CSS pixels.
 * @param {number} height - Canvas height in CSS pixels.
 * @param {string} theme  - Project accent color -- used for one of the game cards.
 * @param {number} time   - Millisecond timestamp for token movement animation.
 * @param {boolean} hover - Unused here (reserved).
 */
function drawGame(ctx, width, height, theme, time, hover) {
  // Each entry is [x, y] as fractions of canvas size -- the waypoints the car travels.
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
  const tile = Math.min(width, height) * 0.14; // tile size scales with the smaller dimension
  // Draw the road strip connecting all waypoints.
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

  // Draw individual tiles (squares) on top of the road strip.
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  road.forEach(([x, y], index) => {
    const px = x * width - tile / 2;
    const py = y * height - tile / 2;
    // Alternate between two slightly different tile background colors.
    ctx.fillStyle = index % 2 ? "#fff9ee" : "#efe8da";
    roundRect(ctx, px, py, tile, tile, 7, true);
    roundRect(ctx, px, py, tile, tile, 7, false);
    // Two small rectangles on each tile represent dash marks on the road.
    ctx.fillStyle = "rgba(23, 33, 31, 0.44)";
    ctx.fillRect(px + tile * 0.45, py + tile * 0.2, tile * 0.1, tile * 0.18);
    ctx.fillRect(px + tile * 0.45, py + tile * 0.62, tile * 0.1, tile * 0.18);
  });

  // -- Animated player car --
  // progress = which tile the car is currently leaving (steps forward every ~0.5s).
  const progress = Math.floor(time * 0.002) % road.length;
  const next = (progress + 1) % road.length; // the tile it's moving toward
  // blend = how far between the two waypoints (0 = at current tile, 1 = arrived at next).
  const blend = (time * 0.002) % 1;
  // Linear interpolation: mix the two waypoint coordinates by `blend`.
  const carX = (road[progress][0] * (1 - blend) + road[next][0] * blend) * width;
  const carY = (road[progress][1] * (1 - blend) + road[next][1] * blend) * height;
  drawCarToken(ctx, carX, carY, tile * 0.78, theme);
  // Two stationary opponent cars at fixed positions.
  drawCarToken(ctx, width * 0.77, height * 0.56, tile * 0.62, "#edbd4c");
  drawCarToken(ctx, width * 0.82, height * 0.43, tile * 0.62, "#5787a7");

  // Three game cards along the bottom / top corner.
  drawGameCard(ctx, width * 0.12, height * 0.76, tile * 1.45, tile * 0.94, "PLAN", "#a8d8c2");
  drawGameCard(ctx, width * 0.43, height * 0.78, tile * 1.45, tile * 0.94, "SHIFT", theme);
  drawGameCard(ctx, width * 0.68, height * 0.12, tile * 1.55, tile, "CHECK", "#edbd4c");
}

/**
 * Draws a board game car token centered at (x, y).
 * Uses ctx.save/restore so translate doesn't affect later drawing.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context.
 * @param {number} x    - Center X position in CSS pixels.
 * @param {number} y    - Center Y position in CSS pixels.
 * @param {number} size - Overall scale in pixels -- all car parts are proportional to this.
 * @param {string} color - Fill color of the car body.
 */
function drawCarToken(ctx, x, y, size, color) {
  ctx.save();
  // Translate moves the canvas origin to (x,y) so all drawing coordinates
  // can be expressed relative to the car's center (negative = left/up).
  ctx.translate(x, y);
  ctx.fillStyle = color;
  roundRect(ctx, -size * 0.45, -size * 0.24, size * 0.9, size * 0.48, 8, true); // body
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, -size * 0.18, -size * 0.38, size * 0.36, size * 0.24, 5, true); // windshield
  ctx.fillStyle = "#17211f";
  ctx.beginPath();
  ctx.arc(-size * 0.28, size * 0.22, size * 0.12, 0, Math.PI * 2); // left wheel
  ctx.arc(size * 0.28, size * 0.22, size * 0.12, 0, Math.PI * 2); // right wheel
  ctx.fill();
  ctx.restore(); // undo the translate so nothing else is shifted
}

/**
 * Draws a small game card (rounded rectangle with a colored header strip and a label).
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x      - Left edge of the card.
 * @param {number} y      - Top edge of the card.
 * @param {number} width  - Card width in pixels.
 * @param {number} height - Card height in pixels.
 * @param {string} label  - Text printed inside the card body.
 * @param {string} color  - Background color of the header strip at the top.
 */
function drawGameCard(ctx, x, y, width, height, label, color) {
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, x, y, width, height, 8, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, width, height, 8, false);
  ctx.fillStyle = color;
  roundRect(ctx, x + 8, y + 8, width - 16, height * 0.28, 5, true); // colored header strip
  ctx.fillStyle = "#17211f";
  ctx.font = "800 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(label, x + 13, y + height * 0.62);
}

/**
 * Draws the "maker" animation: a 3D printer frame with a moving print head
 * that extrudes stacked filament layers onto a build plate.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context.
 * @param {number} width  - Canvas width in CSS pixels.
 * @param {number} height - Canvas height in CSS pixels.
 * @param {string} theme  - Project accent color -- used for alternating filament layers.
 * @param {number} time   - Millisecond timestamp for print head oscillation.
 * @param {boolean} hover - Unused (reserved).
 */
function drawMaker(ctx, width, height, theme, time, hover) {
  // -- Printer frame --
  const frameX = width * 0.18;
  const frameY = height * 0.15;
  const frameW = width * 0.64;
  const frameH = height * 0.58;
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 4;
  ctx.strokeRect(frameX, frameY, frameW, frameH); // outer frame rails
  ctx.lineWidth = 2;
  // Horizontal gantry rail across the top of the print volume.
  ctx.beginPath();
  ctx.moveTo(frameX, frameY + frameH * 0.18);
  ctx.lineTo(frameX + frameW, frameY + frameH * 0.18);
  ctx.stroke();

  // -- Print head --
  // travel oscillates 0->1->0 smoothly (sin goes -1->+1, mapped to 0->1).
  const travel = (Math.sin(time * 0.0026) + 1) / 2;
  // headX sweeps across 64% of the frame width as travel goes 0->1.
  const headX = frameX + frameW * (0.18 + travel * 0.64);
  const headY = frameY + frameH * 0.24;
  ctx.fillStyle = "#283b36"; // dark carriage body
  roundRect(ctx, headX - 34, headY - 15, 68, 30, 6, true);
  // Hot-end nozzle triangle below the carriage.
  ctx.fillStyle = "#d47654";
  ctx.beginPath();
  ctx.moveTo(headX - 10, headY + 15);
  ctx.lineTo(headX + 10, headY + 15);
  ctx.lineTo(headX, headY + 35);
  ctx.closePath();
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.stroke();

  // -- Build plate --
  const bedY = frameY + frameH * 0.78;
  ctx.fillStyle = "#efe8da";
  roundRect(ctx, frameX + frameW * 0.16, bedY, frameW * 0.68, 18, 5, true);
  ctx.strokeStyle = "#17211f";
  roundRect(ctx, frameX + frameW * 0.16, bedY, frameW * 0.68, 18, 5, false);

  // -- Filament layers --
  // Each layer is slightly wider than the one below (simulating a pyramid-shaped print).
  const layers = 7;
  for (let i = 0; i < layers; i += 1) {
    const layerW = frameW * (0.14 + i * 0.035); // gets wider toward the bottom
    const layerX = width * 0.5 - layerW / 2; // centered horizontally
    const layerY = bedY - 10 - i * 12; // stacked upward from the bed
    ctx.fillStyle = i % 2 ? "#5787a7" : theme; // alternates between blue and theme color
    roundRect(ctx, layerX, layerY, layerW, 9, 4, true);
  }
  // Filament strand from the nozzle tip down to the top of the print.
  ctx.strokeStyle = "#edbd4c";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(headX, headY + 34);
  ctx.lineTo(headX, bedY - layers * 12);
  ctx.stroke();

}

/**
 * Draws the "installation" animation: a projector on the left casting a glowing beam
 * onto a silhouette figure on the right, with animated projection scan lines.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context.
 * @param {number} width  - Canvas width in CSS pixels.
 * @param {number} height - Canvas height in CSS pixels.
 * @param {string} theme  - Project accent color -- used for elliptical scan line rings.
 * @param {number} time   - Millisecond timestamp for glow and scan line animation.
 * @param {boolean} hover - Unused (reserved).
 */
function drawInstallation(ctx, width, height, theme, time, hover) {
  const projectorX = width * 0.12;
  const projectorY = height * 0.62;
  const targetX = width * 0.58;
  const targetY = height * 0.38;
  // glow oscillates 0->1 slowly (period ~2s), driving the beam opacity.
  const glow = (Math.sin(time * 0.003) + 1) / 2;

  // -- Projection beam (filled quadrilateral from projector to figure) --
  ctx.fillStyle = `rgba(124, 106, 166, ${0.12 + glow * 0.08})`;
  ctx.beginPath();
  ctx.moveTo(projectorX + width * 0.16, projectorY - 24);
  ctx.lineTo(targetX + width * 0.28, targetY - height * 0.18);
  ctx.lineTo(targetX + width * 0.28, targetY + height * 0.2);
  ctx.lineTo(projectorX + width * 0.16, projectorY + 26);
  ctx.closePath();
  ctx.fill();

  // -- Projector body --
  ctx.fillStyle = "#283b36";
  roundRect(ctx, projectorX, projectorY - 30, width * 0.18, 60, 8, true);
  // Lens -- a white circle on the front face.
  ctx.fillStyle = "#fff9ee";
  ctx.beginPath();
  ctx.arc(projectorX + width * 0.16, projectorY, 15, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  ctx.stroke();

  // -- Projection target / silhouette figure --
  ctx.fillStyle = "#fff9ee";
  roundRect(ctx, targetX, targetY - height * 0.18, width * 0.26, height * 0.42, 42, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, targetX, targetY - height * 0.18, width * 0.26, height * 0.42, 42, false);

  // -- Animated scan-line ellipses --
  ctx.strokeStyle = theme;
  ctx.lineWidth = 3;
  for (let i = 0; i < 3; i += 1) {
    ctx.beginPath();
    // Each ellipse is shifted right and down from the previous, with varying radii.
    ctx.ellipse(targetX + width * (0.09 + i * 0.04), targetY + height * (0.02 + i * 0.025), 28 - i * 3, 12 + i * 3, -0.35, 0, Math.PI * 2);
    ctx.stroke();
  }
  // Horizontal scan lines that wobble slightly with a sin wave.
  ctx.strokeStyle = "#edbd4c";
  ctx.lineWidth = 2;
  for (let i = 0; i < 5; i += 1) {
    const y = targetY - height * 0.13 + i * height * 0.08;
    ctx.beginPath();
    ctx.moveTo(targetX + width * 0.02, y);
    // The end point's Y oscillates: Math.sin(time*0.002 + i) gives each line a unique phase.
    ctx.lineTo(targetX + width * 0.24, y + Math.sin(time * 0.002 + i) * 5);
    ctx.stroke();
  }
  // drawCodeTiles(ctx, 18, 20, ["map", "project", "try on"], theme);
}

/**
 * Draws a full-size LittleBits module: a rectangular body with colored end caps,
 * a title label, I/O ports, corner screws, and an interior component (switch, knobs,
 * or splitter routing) depending on options.type.
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x       - Left edge of the module.
 * @param {number} y       - Top edge of the module.
 * @param {number} width   - Module width in pixels.
 * @param {number} height  - Module height in pixels.
 * @param {object} options - Configuration object:
 *   @param {string} options.cap   - Color of the left and right end caps.
 *   @param {string} options.title - Label text shown at the top of the module face.
 *   @param {string} options.type  - "power" | "mix" | "split" -- controls interior drawing.
 *   @param {number} options.pulse - 0->1 animation value used by interior components.
 */
function drawLittleBitModule(ctx, x, y, width, height, options) {
  const capW = Math.max(8, width * 0.1); // end cap width, minimum 8px
  // bodyX/bodyW: the white center section between the two caps.
  const bodyX = x + capW * 0.62;
  const bodyW = width - capW * 1.24;
  // Draw with a drop shadow for depth.
  ctx.save();
  ctx.shadowColor = "rgba(23, 33, 31, 0.16)";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 5;
  // Left and right end caps in the module's accent color.
  ctx.fillStyle = options.cap;
  roundRect(ctx, x, y + height * 0.1, capW, height * 0.8, 4, true);
  roundRect(ctx, x + width - capW, y + height * 0.1, capW, height * 0.8, 4, true);
  ctx.fillStyle = "#f7f2e8"; // cream body background
  roundRect(ctx, bodyX, y, bodyW, height, 5, true);
  ctx.restore(); // remove shadow before drawing fine details on top

  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.3;
  roundRect(ctx, bodyX, y, bodyW, height, 5, false); // body outline
  ctx.fillStyle = "rgba(23, 33, 31, 0.58)";
  ctx.font = "700 8px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(options.title, bodyX + bodyW * 0.36, y + height * 0.17); // module label
  // Standard I/O connector ports on left and right edges of the body.
  drawBitPort(ctx, bodyX + bodyW * 0.08, y + height * 0.48, height * 0.28);
  drawBitPort(ctx, bodyX + bodyW * 0.92, y + height * 0.48, height * 0.28);
  drawBitScrews(ctx, bodyX, y, bodyW, height); // four corner screw dots

  // Interior component varies by module type:
  if (options.type === "power") {
    // On/off switch + LED indicator.
    drawBitSwitch(ctx, bodyX + bodyW * 0.36, y + height * 0.5, height * 0.46, options.pulse);
    // LED turns yellow when pulse > 0.35 (i.e. switch is "on" most of the cycle).
    drawBitLed(ctx, bodyX + bodyW * 0.66, y + height * 0.32, height * 0.08, options.pulse > 0.35 ? "#edbd4c" : "#c5beb1");
  }

  if (options.type === "mix") {
    // Two knobs (offset in phase so they don't move together) + a pink LED.
    drawBitKnob(ctx, bodyX + bodyW * 0.36, y + height * 0.54, height * 0.28, options.pulse);
    drawBitKnob(ctx, bodyX + bodyW * 0.65, y + height * 0.54, height * 0.28, (options.pulse + 0.48) % 1);
    drawBitLed(ctx, bodyX + bodyW * 0.18, y + height * 0.32, height * 0.06, "#e73191");
    ctx.fillStyle = "rgba(23, 33, 31, 0.62)";
    ctx.font = "700 7px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
    ctx.fillText("1", bodyX + bodyW * 0.31, y + height * 0.88);
    ctx.fillText("2", bodyX + bodyW * 0.6, y + height * 0.88);
  }

  if (options.type === "split") {
    // Two output ports stacked vertically, with routing lines from the input.
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

/**
 * Draws a smaller, simplified LittleBits module with just caps, a body, and a port.
 * Used for the output modules on the right side of the Creative animation.
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x      - Left edge.
 * @param {number} y      - Top edge.
 * @param {number} width  - Module width.
 * @param {number} height - Module height.
 * @param {string} cap    - End-cap color.
 * @param {string} label  - Text displayed inside the module body.
 */
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

/**
 * Draws a LittleBits I/O connector port -- a small rectangular socket with two
 * metal contact pins visible inside.
 *
 * @param {CanvasRenderingContext2D} ctx  - 2D drawing context.
 * @param {number} x    - Center X of the port.
 * @param {number} y    - Center Y of the port.
 * @param {number} size - Height of the port in pixels; width scales proportionally.
 */
function drawBitPort(ctx, x, y, size) {
  ctx.fillStyle = "#efe8da";
  roundRect(ctx, x - size * 0.5, y - size * 0.42, size, size * 0.84, 2, true); // socket housing
  ctx.strokeStyle = "rgba(23, 33, 31, 0.5)";
  ctx.lineWidth = 1;
  roundRect(ctx, x - size * 0.5, y - size * 0.42, size, size * 0.84, 2, false);
  ctx.fillStyle = "#d0c7b9";
  // Two small rectangular contact pins inside the socket.
  ctx.fillRect(x - size * 0.28, y - size * 0.18, size * 0.18, size * 0.12);
  ctx.fillRect(x + size * 0.1, y - size * 0.18, size * 0.18, size * 0.12);
}

/**
 * Draws four small circular screw-head dots at the corners of a module body.
 * Positioned at fractional offsets so they scale with any module size.
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x      - Left edge of the module body.
 * @param {number} y      - Top edge of the module body.
 * @param {number} width  - Module body width.
 * @param {number} height - Module body height.
 */
function drawBitScrews(ctx, x, y, width, height) {
  ctx.fillStyle = "#c7bfb2";
  // [px, py] are fractions of width/height, placing a screw near each corner.
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

/**
 * Draws a rocker/toggle switch: a dark rounded track with a small white slider
 * that moves up or down based on the pulse value.
 *
 * @param {CanvasRenderingContext2D} ctx   - 2D drawing context.
 * @param {number} x     - Center X of the switch.
 * @param {number} y     - Center Y of the switch.
 * @param {number} size  - Overall scale -- all dimensions are proportional to this.
 * @param {number} pulse - 0->1 value; the slider's Y position is derived from this,
 *   so the switch appears to rock in sync with the animation cycle.
 */
function drawBitSwitch(ctx, x, y, size, pulse) {
  ctx.fillStyle = "#17211f"; // dark track background
  roundRect(ctx, x - size * 0.36, y - size * 0.48, size * 0.72, size * 0.96, size * 0.16, true);
  ctx.fillStyle = "#f7f2e8"; // light slider
  // pulse * size * 0.16 shifts the slider down slightly, simulating a rocking motion.
  roundRect(ctx, x - size * 0.24, y - size * 0.28 + pulse * size * 0.16, size * 0.48, size * 0.28, size * 0.08, true);
}

/**
 * Draws a circular knob with a directional indicator line, like a rotary control.
 * The indicator rotates as pulse increases from 0 to 1 (one full revolution = pulse 0->1).
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x      - Center X of the knob.
 * @param {number} y      - Center Y of the knob.
 * @param {number} radius - Radius of the knob circle.
 * @param {number} pulse  - 0->1 value mapping to 0->360 degrees rotation of the indicator line.
 */
function drawBitKnob(ctx, x, y, radius, pulse) {
  ctx.fillStyle = "#17211f";
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2); // knob body
  ctx.fill();
  ctx.strokeStyle = "#f7f2e8";
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(x, y);
  // pulse * Math.PI * 2 converts 0->1 to 0->2pi (full rotation in radians).
  ctx.lineTo(x + Math.cos(pulse * Math.PI * 2) * radius * 0.7, y + Math.sin(pulse * Math.PI * 2) * radius * 0.7);
  ctx.stroke(); // indicator line from center to edge
}

/**
 * Draws a small circular LED indicator.
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x      - Center X.
 * @param {number} y      - Center Y.
 * @param {number} radius - Radius of the LED dot.
 * @param {string} color  - Fill color -- pass the "off" color to simulate the LED being dark.
 */
function drawBitLed(ctx, x, y, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "rgba(23, 33, 31, 0.48)";
  ctx.lineWidth = 1;
  ctx.stroke();
}

/**
 * Draws a LittleBits-style cable connecting two points, with a small glowing dot
 * that travels along the cable to represent signal flow.
 *
 * Draws three passes: a dark shadow, a colored wire, and a bright highlight stripe,
 * creating a rounded cable appearance.
 *
 * @param {CanvasRenderingContext2D} ctx   - 2D drawing context.
 * @param {number} x1    - Start X of the cable.
 * @param {number} y1    - Start Y of the cable.
 * @param {number} x2    - End X of the cable.
 * @param {number} y2    - End Y of the cable.
 * @param {string} color - Cable color (used for the middle stripe pass).
 * @param {number} time  - Millisecond timestamp -- drives the traveling dot position.
 * @param {boolean} loop - If true, routes the cable in a loop arc overhead rather
 *   than a gentle S-curve. Used for cables that cross back over themselves.
 */
function drawLittleBitCable(ctx, x1, y1, x2, y2, color, time, loop = false) {
  // pulse goes 0->1->0 and positions the traveling dot along the cable.
  const pulse = (Math.sin(time * 0.004) + 1) / 2;
  ctx.save();
  ctx.lineCap = "round";
  // Draw three stripes: shadow, main color, and highlight -- in that order.
  ["#17211f", color, "#f7f2e8"].forEach((wireColor, index) => {
    ctx.strokeStyle = index === 0 ? "rgba(23, 33, 31, 0.25)" : wireColor;
    ctx.lineWidth = index === 0 ? 6 : 2.2; // shadow is thicker; highlight is same width as main
    const offset = (index - 1) * 5; // offsets: shadow=0, main=-5, highlight=+5 -- gives 3D roundness
    ctx.beginPath();
    ctx.moveTo(x1, y1 + offset);
    if (loop) {
      const midX = (x1 + x2) / 2;
      // bezierCurveTo draws a smooth curve through two control points.
      ctx.bezierCurveTo(midX - 6, y1 - 38 + offset, midX + 42, y2 - 38 + offset, x2, y2 + offset);
    } else {
      ctx.bezierCurveTo(x1 + 36, y1 - 18 + offset, x2 - 36, y2 + 18 + offset, x2, y2 + offset);
    }
    ctx.stroke();
  });
  // Traveling dot: linearly interpolates between (x1,y1) and (x2,y2) at pulse position,
  // with a vertical arc (Math.sin(pulse * Math.PI)) so the dot follows the cable curve.
  ctx.fillStyle = "#edbd4c";
  ctx.beginPath();
  ctx.arc(x1 + (x2 - x1) * pulse, y1 + (y2 - y1) * pulse - Math.sin(pulse * Math.PI) * (loop ? 30 : 16), 4, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

/**
 * Draws a single wire with a glowing dot traveling along it -- simpler than
 * drawLittleBitCable, used for the connection from the split module to the Micro:bit.
 *
 * @param {CanvasRenderingContext2D} ctx      - 2D drawing context.
 * @param {number} x1       - Wire start X.
 * @param {number} y1       - Wire start Y.
 * @param {number} x2       - Wire end X.
 * @param {number} y2       - Wire end Y.
 * @param {number} progress - 0->1 position of the dot along the wire.
 * @param {string} color    - Color of the traveling dot.
 */
function drawPulseWire(ctx, x1, y1, x2, y2, progress, color) {
  ctx.strokeStyle = "rgba(23, 33, 31, 0.26)"; // faint wire line
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
  ctx.fillStyle = color;
  ctx.beginPath();
  // Position the dot: progress=0 -> dot at (x1,y1), progress=1 -> dot at (x2,y2).
  ctx.arc(x1 + (x2 - x1) * progress, y1 + (y2 - y1) * progress, 7, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.5;
  ctx.stroke();
}

/**
 * Draws a circular LED with a specular highlight dot to suggest a dome shape.
 *
 * @param {CanvasRenderingContext2D} ctx   - 2D drawing context.
 * @param {number} x     - Center X.
 * @param {number} y     - Center Y.
 * @param {number} size  - Radius of the LED.
 * @param {string} color - LED color -- pass the "off" color to show it as unlit.
 */
function drawLed(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2); // main LED circle
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  ctx.stroke();
  // Specular highlight: a smaller, semi-transparent circle offset up-left to simulate
  // a dome surface reflecting light.
  ctx.fillStyle = "rgba(255, 249, 238, 0.72)";
  ctx.beginPath();
  ctx.arc(x - size * 0.28, y - size * 0.28, size * 0.26, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draws a square sensor component (like a photoresistor or IR sensor) with two
 * circular "eyes" on its face.
 *
 * @param {CanvasRenderingContext2D} ctx   - 2D drawing context.
 * @param {number} x     - Center X.
 * @param {number} y     - Center Y.
 * @param {number} size  - Width and height of the sensor square.
 * @param {string} color - Fill color of the sensor body.
 */
function drawSensor(ctx, x, y, size, color) {
  ctx.fillStyle = color;
  roundRect(ctx, x - size / 2, y - size / 2, size, size, 6, true);
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 2;
  roundRect(ctx, x - size / 2, y - size / 2, size, size, 6, false);
  ctx.fillStyle = "#17211f";
  // Two small circles represent sensor apertures or "eyes".
  ctx.beginPath();
  ctx.arc(x - size * 0.18, y, size * 0.12, 0, Math.PI * 2);
  ctx.arc(x + size * 0.18, y, size * 0.12, 0, Math.PI * 2);
  ctx.fill();
}

/**
 * Draws a curved jumper wire between two pin positions, with a traveling dot
 * that arcs along the wire to suggest current flow.
 *
 * @param {CanvasRenderingContext2D} ctx   - 2D drawing context.
 * @param {number} x1    - Wire start X (e.g. an Arduino pin).
 * @param {number} y1    - Wire start Y.
 * @param {number} x2    - Wire end X (e.g. a breadboard row).
 * @param {number} y2    - Wire end Y.
 * @param {string} color - Wire color.
 * @param {number} time  - Millisecond timestamp -- drives the dot's position.
 */
function drawJumper(ctx, x1, y1, x2, y2, color, time) {
  // pulse = 0->1->0->1... driving the dot's position along the wire.
  const pulse = (Math.sin(time * 0.004) + 1) / 2;
  ctx.strokeStyle = color;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  // A Bezier curve that arcs upward between the two endpoints.
  ctx.bezierCurveTo(x1 + 60, y1 - 80, x2 - 60, y2 - 80, x2, y2);
  ctx.stroke();
  ctx.fillStyle = "#fff9ee";
  ctx.beginPath();
  // The dot follows a linear interpolation of the endpoints but with a vertical
  // arc boost: Math.sin(pulse * Math.PI) * 55 lifts it at the midpoint, following the curve.
  ctx.arc(x1 + (x2 - x1) * pulse, y1 + (y2 - y1) * pulse - Math.sin(pulse * Math.PI) * 55, 5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#17211f";
  ctx.lineWidth = 1.2;
  ctx.stroke();
}

/**
 * Draws a column of code-label tiles -- alternating dark and accent-colored pill shapes
 * with monospace text, like syntax-highlighted code tokens.
 *
 * @param {CanvasRenderingContext2D} ctx   - 2D drawing context.
 * @param {number} x      - Left edge of the tile column.
 * @param {number} y      - Top edge of the first tile.
 * @param {string[]} words - Text labels for each tile, one per row.
 * @param {string} theme  - Accent color used for even-indexed tiles.
 */
function drawCodeTiles(ctx, x, y, words, theme) {
  ctx.font = "700 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  words.forEach((word, index) => {
    // Each tile's width is measured to fit its text with 22px of horizontal padding.
    const width = ctx.measureText(word).width + 22;
    ctx.fillStyle = index % 2 ? "#17211f" : theme; // alternate dark and theme color
    roundRect(ctx, x, y + index * 34, width, 24, 6, true);
    ctx.fillStyle = index % 2 ? "#fff9ee" : "#17211f"; // text color inverts with background
    ctx.fillText(word, x + 11, y + 17 + index * 34);
  });
}

/**
 * Draws a rounded rectangle path and either fills or strokes it.
 * Canvas didn't always support ctx.roundRect() natively, so this helper
 * uses arcTo() for consistent cross-browser support.
 *
 * @param {CanvasRenderingContext2D} ctx    - 2D drawing context.
 * @param {number} x      - Left edge.
 * @param {number} y      - Top edge.
 * @param {number} width  - Rectangle width.
 * @param {number} height - Rectangle height.
 * @param {number} radius - Corner radius in pixels.
 * @param {boolean} fill  - true = ctx.fill(), false = ctx.stroke().
 *
 * arcTo(x1, y1, x2, y2, r) draws a corner arc tangent to both edges meeting at (x1,y1),
 * rounding into (x2,y2) with radius r.
 */
function roundRect(ctx, x, y, width, height, radius, fill) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y); // start at top-left corner, offset right by radius
  ctx.arcTo(x + width, y, x + width, y + height, radius); // top-right corner
  ctx.arcTo(x + width, y + height, x, y + height, radius); // bottom-right corner
  ctx.arcTo(x, y + height, x, y, radius); // bottom-left corner
  ctx.arcTo(x, y, x + width, y, radius); // top-left corner
  ctx.closePath();
  if (fill) ctx.fill();
  else ctx.stroke();
}

// ─── Project card hover tracking ──────────────────────────────────────────────
// Each project card canvas tracks whether the pointer is over its parent card.
// projectHover maps canvas -> boolean (is hovered).
// projectFreezeTime maps canvas -> the timestamp when hover started, so that
//   time-based animations don't jump when hovered (they keep running from the
//   frozen start point, effectively speeding up from that moment).
const projectCanvases = [...document.querySelectorAll(".project-canvas")];
// WeakMap is like a Map but the keys don't prevent garbage collection -- safe for DOM nodes.
const projectHover = new WeakMap();
const projectFreezeTime = new WeakMap();
projectCanvases.forEach((canvas) => {
  projectHover.set(canvas, false); // initially not hovered
  canvas.closest(".project-card").addEventListener("pointerenter", () => {
    projectHover.set(canvas, true);
    // Record when the hover started so the animation can use that as a base time.
    projectFreezeTime.set(canvas, performance.now());
  });
  canvas.closest(".project-card").addEventListener("pointerleave", () => {
    projectHover.set(canvas, false);
    projectFreezeTime.delete(canvas); // clear the freeze timestamp on hover exit
  });
});

// ─── Interactive learning toy setup ───────────────────────────────────────────
// The learning toy is a node graph in the Philosophy section that responds to
// mouse movement and the mode/complexity controls below it.
const toy = document.querySelector("#learningToy"); // the <canvas> element
const range = document.querySelector("#toyRange");   // the complexity <input type="range">
const modeButtons = [...document.querySelectorAll("[data-mode]")]; // all mode toggle buttons
let toyMode = "pattern"; // current mode: "pattern" | "flow" | "chance"
// pointer tracks the mouse position inside the toy canvas (as 0-1 fractions).
// active = false means the pointer has left the canvas, so pull effects are disabled.
let pointer = { x: 0.5, y: 0.5, active: false };

// Mark the first mode button as selected on load.
if (modeButtons[0]) modeButtons[0].classList.add("is-active");
modeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    toyMode = button.dataset.mode; // update mode to the clicked button's data-mode value
    // Toggle "is-active" class: true for the clicked button, false for all others.
    modeButtons.forEach((item) => item.classList.toggle("is-active", item === button));
  });
});

if (toy) {
  // Update pointer position whenever the mouse moves over the toy canvas.
  toy.addEventListener("pointermove", (event) => {
    const rect = toy.getBoundingClientRect();
    pointer = {
      // Convert absolute screen coordinates to 0-1 fractions within the canvas.
      x: (event.clientX - rect.left) / rect.width,
      y: (event.clientY - rect.top) / rect.height,
      active: true,
    };
  });

  toy.addEventListener("pointerleave", () => {
    pointer.active = false; // disable pull effects when pointer leaves the canvas
  });
}

// ─── Interactive learning toy (Philosophy section) ────────────────────────────
// Node graph that responds to mouse position and the mode/complexity controls.
/**
 * Draws one frame of the interactive learning toy: a node graph where colored
 * circles orbit the center, connect to nearby neighbors, and pulse in size.
 * The pointer position pulls nodes toward the cursor when the mouse is inside.
 *
 * @param {number} time - Millisecond timestamp from requestAnimationFrame.
 *   Drives node rotation and the pulsing node radius.
 */
function drawLearningToy(time) {
  const { ctx, width, height } = fitCanvas(toy);
  // complexity comes from the range slider value (an integer like 5-20).
  const complexity = Number(range.value);
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = "#f8f4ea";
  ctx.fillRect(0, 0, width, height);

  // Build the node array: one node per complexity value, arranged in a rotating circle.
  const nodes = Array.from({ length: complexity }, (_, index) => {
    // Each node's base angle is evenly spaced around the circle, plus a slow rotation.
    const angle = (index / complexity) * Math.PI * 2 + time * 0.00035;
    // "flow" mode uses a uniform radius; other modes add staggered radial variation.
    const radius = Math.min(width, height) * (toyMode === "flow" ? 0.28 : 0.22 + (index % 3) * 0.035);
    // If the pointer is active, nodes are pulled toward it proportionally to their index.
    const pullX = pointer.active ? (pointer.x - 0.5) * 90 : 0;
    const pullY = pointer.active ? (pointer.y - 0.5) * 70 : 0;
    return {
      // x/y: position around the circle, plus the pointer pull offset (scaled by sin/cos
      // of index so each node is pulled by a different amount, creating a distortion effect).
      x: width / 2 + Math.cos(angle * (toyMode === "chance" ? 1.7 : 1)) * radius + pullX * Math.sin(index),
      y: height / 2 + Math.sin(angle * (toyMode === "pattern" ? 1.6 : 1)) * radius + pullY * Math.cos(index),
      // Cycle through 5 colors -- nodes get the same color as others with the same index % 5.
      color: ["#d47654", "#5787a7", "#edbd4c", "#a8d8c2", "#7c6aa6"][index % 5],
    };
  });

  // -- Draw connections between nearby nodes --
  ctx.lineWidth = 1.8;
  nodes.forEach((node, index) => {
    // Compare this node to every node that comes after it (avoids drawing each pair twice).
    nodes.slice(index + 1).forEach((other, otherIndex) => {
      const distance = Math.hypot(node.x - other.x, node.y - other.y); // straight-line distance
      // Threshold for drawing a line: "flow" mode connects more distant nodes.
      const threshold = toyMode === "flow" ? 230 : 170;
      // In "chance" mode, some additional connections are drawn at random (via time-based modulo).
      if (distance < threshold || (toyMode === "chance" && (index + otherIndex + Math.floor(time * 0.004)) % 5 === 0)) {
        // Farther nodes get a fainter line: opacity decreases as distance increases.
        ctx.strokeStyle = `rgba(23, 33, 31, ${Math.max(0.08, 1 - distance / 260)})`;
        ctx.beginPath();
        ctx.moveTo(node.x, node.y);
        ctx.lineTo(other.x, other.y);
        ctx.stroke();
      }
    });
  });

  // -- Draw node circles --
  nodes.forEach((node, index) => {
    // pulse oscillates the radius of each node between 4.5-9.5px, staggered by index.
    const pulse = 7 + Math.sin(time * 0.004 + index) * 2.5;
    ctx.fillStyle = node.color;
    ctx.beginPath();
    // In "chance" mode, every third node is drawn larger (+4px) for random emphasis.
    ctx.arc(node.x, node.y, pulse + (toyMode === "chance" && index % 3 === 0 ? 4 : 0), 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "#17211f";
    ctx.lineWidth = 1.5;
    ctx.stroke();
  });

  // Status overlay showing the current mode and node count.
  ctx.fillStyle = "rgba(23, 33, 31, 0.9)";
  ctx.font = "700 13px ui-monospace, SFMono-Regular, Menlo, Consolas, monospace";
  ctx.fillText(`mode:${toyMode}`, 18, 26);
  ctx.fillText(`nodes:${complexity}`, 18, 48);
}

// ─── Cardboard Calamity canvas ────────────────────────────────────────────────
// DIY alt-control aesthetic: a cardboard panel with three rotating knobs,
// a sweeping dial gauge, and two blinking LED indicators.
// Redrawn to match the real controller: landscape cardboard panel on a base tray,
// blue SG90 servos with rotating white arms, red arcade button, hand-drawn marker
// doodles, OLED screen cutout, chrome joystick.
/**
 * Draws the "cardboard" animation: a hand-built arcade controller made from
 * corrugated cardboard, with animated servo motors, an OLED screen, a red arcade
 * button, a yellow pencil antenna, a sliding chrome joystick, and hand-drawn doodles.
 *
 * All element sizes are derived from a single scale unit `u = width / 20`, so the
 * entire scene scales proportionally when the canvas is resized.
 *
 * @param {CanvasRenderingContext2D} ctx - 2D drawing context.
 * @param {number} width  - Canvas width in CSS pixels.
 * @param {number} height - Canvas height in CSS pixels.
 * @param {string} theme  - Project accent color (unused currently, reserved).
 * @param {number} time   - Millisecond timestamp -- drives all animation.
 * @param {boolean} hover - If true, all animation speeds up and the button glows.
 */
function drawCardboard(ctx, width, height, theme, time, hover) {
  // t converts the raw millisecond timestamp to seconds (0.001 = divide by 1000).
  const t = time * 0.001;
  // speed doubles when hovered, making animations feel more active.
  const speed = hover ? 2.6 : 1.0;
  // u is the base scale unit. At a 280px wide canvas u ~= 14. Every size in this
  // function is a multiple of u so the whole scene scales with the canvas.
  const u = width / 20;  // base scale unit -- all pixel sizes derive from this

  // Background: warm parchment tone to evoke aged cardboard.
  ctx.fillStyle = "#f0e8d8";
  ctx.fillRect(0, 0, width, height);

  // -- Base tray (the shallow box the panel leans on) --
  // bx/by/bw/bh define the tray rectangle as fractions of canvas size.
  const bx = width * 0.08, by = height * 0.72, bw = width * 0.84, bh = height * 0.22;
  // Shadow (slightly offset, semi-transparent dark fill drawn first, behind the tray).
  ctx.fillStyle = "rgba(80,50,10,0.15)";
  ctx.beginPath(); ctx.roundRect(bx+3,by+3,bw,bh,5); ctx.fill();
  ctx.fillStyle = "#a87840"; // dark cardboard edge color
  ctx.beginPath(); ctx.roundRect(bx,by,bw,bh,5); ctx.fill();
  ctx.fillStyle = "#c09050"; // lighter inner face of the tray
  ctx.beginPath(); ctx.roundRect(bx+2,by+2,bw-4,bh-8,4); ctx.fill();

  // -- Main angled panel --
  // px/py/pw/ph define the panel face; pr is the corner radius.
  const px=width*0.07, py=height*0.06, pw=width*0.86, ph=height*0.70, pr=7;
  ctx.fillStyle="rgba(70,42,8,0.20)"; // panel shadow (drawn behind)
  ctx.beginPath(); ctx.roundRect(px+4,py+5,pw,ph,pr); ctx.fill();
  ctx.fillStyle="#b88a50"; // outer edge / bevel of panel
  ctx.beginPath(); ctx.roundRect(px,py,pw,ph,pr); ctx.fill();
  ctx.fillStyle="#caA060"; // main panel face -- warm tan cardboard
  ctx.beginPath(); ctx.roundRect(px+2,py+2,pw-4,ph-4,pr-1); ctx.fill();
  ctx.fillStyle="#9a7038"; // darker top rail (header strip)
  ctx.beginPath(); ctx.roundRect(px,py,pw,11,[pr,pr,0,0]); ctx.fill();

  // Orange tape squares at corners -- size scales with u
  // ts = half-size of each tape square, in u units.
  const ts = u * 0.57;
  /**
   * Draws one orange tape patch centered at (tx, ty).
   * ctx.save/restore ensures the translate doesn't persist beyond this function.
   */
  function drawTape(tx,ty) {
    ctx.save(); ctx.translate(tx,ty);
    ctx.fillStyle="#d94010"; ctx.fillRect(-ts,-ts,ts*2,ts*2); // red-orange tape body
    ctx.fillStyle="rgba(255,180,120,0.2)"; ctx.fillRect(-ts,-ts,ts*2,ts*0.6); // semi-transparent highlight on top edge
    ctx.restore();
  }
  // Place one tape square near each of the four panel corners.
  drawTape(px+ts*1.6,py+ts*1.6); drawTape(px+pw-ts*1.6,py+ts*1.6);
  drawTape(px+ts*1.6,py+ph-ts*1.6); drawTape(px+pw-ts*1.6,py+ph-ts*1.6);

  // OLED screen cutout
  // scX/scY/scW/scH position the screen left-of-center, upper portion of panel.
  const scX=px+pw*0.26, scY=py+ph*0.14, scW=pw*0.28, scH=ph*0.30;
  ctx.fillStyle="#7a5828"; ctx.fillRect(scX-3,scY-3,scW+6,scH+6); // cardboard surround around screen
  ctx.fillStyle="#060c18"; ctx.fillRect(scX,scY,scW,scH); // black OLED display panel
  // Cycle through short text messages every ~2 seconds (t*0.5 steps, floored to integer index).
  const oledTexts=["START","YOU","GO!","???",":)","GAME"];
  const oledIdx=Math.floor(t*0.5)%oledTexts.length; // which string to show right now
  // oledFlicker: adds a subtle brightness oscillation (0.80 +/- 0.10) to simulate
  // real OLED backlight noise and phosphor variation.
  const oledFlicker=0.80+Math.sin(t*9.1)*0.10;
  ctx.fillStyle="rgba(200,230,255,"+oledFlicker+")"; // blue-white OLED text color
  ctx.font="bold "+Math.round(scH*0.50)+"px ui-monospace,monospace"; // text height = 50% of screen height
  ctx.textAlign="center"; ctx.textBaseline="middle";
  ctx.fillText(oledTexts[oledIdx],scX+scW/2,scY+scH/2); // center text inside the screen
  ctx.textAlign="left"; ctx.textBaseline="alphabetic"; // reset text alignment to defaults

  // SG90 servo -- all sizes proportional to u
  /**
   * Draws one SG90-style servo motor centered at (sx, sy) with its arm at armAngle.
   *
   * Anatomy:
   *   - Blue rectangular body (the plastic servo casing)
   *   - Two tiny mounting screw holes on the front face
   *   - A grey circular pivot hub above the body
   *   - A white lever arm rotating from the pivot, with a rounded tip
   *
   * @param {number} sx       - Center X of the servo body.
   * @param {number} sy       - Center Y of the servo body.
   * @param {number} armAngle - Angle of the lever arm in radians (0 = pointing right,
   *   pi/2 = pointing down). Values from osc() oscillate between 0 and pi (0-180 degrees).
   */
  function drawServo(sx,sy,armAngle) {
    // sbw/sbh: servo body width and height, both derived from u.
    const sbw=u*1.3, sbh=u*0.93;
    // The pivot hub sits above the body: pivY = top of body minus one hub radius.
    const pivY=sy-sbh/2-u*0.36;
    ctx.fillStyle="#1a3899"; // SG90 characteristic deep blue
    ctx.beginPath(); ctx.roundRect(sx-sbw/2,sy-sbh/2,sbw,sbh,3); ctx.fill(); // blue body
    ctx.fillStyle="rgba(80,140,255,0.20)"; // faint highlight shimmer on top face of body
    ctx.fillRect(sx-sbw/2+2,sy-sbh/2+2,sbw-4,u*0.29);
    ctx.fillStyle="#0a0a1a";
    // Two mounting screw holes (tiny dark dots at top corners of body face).
    ctx.beginPath(); ctx.arc(sx-sbw/2+u*0.21,sy-sbh/2+u*0.21,u*0.11,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(sx+sbw/2-u*0.21,sy-sbh/2+u*0.21,u*0.11,0,Math.PI*2); ctx.fill();
    ctx.fillStyle="#cccccc"; // grey pivot hub disk on top of the body
    ctx.beginPath(); ctx.arc(sx,pivY,u*0.36,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle="#888"; ctx.lineWidth=u*0.07; ctx.stroke(); // subtle hub outline
    const armLen=u*0.93; // lever arm length in pixels
    // Arm tip position: pivot center + (armLen in the direction of armAngle).
    const ax=sx+Math.cos(armAngle)*armLen, ay=pivY+Math.sin(armAngle)*armLen;
    ctx.strokeStyle="#eeeeee"; ctx.lineWidth=u*0.25; ctx.lineCap="round";
    ctx.beginPath(); ctx.moveTo(sx,pivY); ctx.lineTo(ax,ay); ctx.stroke(); // white lever arm
    ctx.lineCap="butt"; // reset to default for subsequent drawing
    ctx.fillStyle="#cccccc";
    ctx.beginPath(); ctx.arc(ax,ay,u*0.18,0,Math.PI*2); ctx.fill(); // rounded arm tip
  }

  // osc() maps sin to a 0-180 degree sweep with unique phase/rate per servo
  // How it works:
  //   Math.sin(...)      -> -1 ... +1
  //   (sin + 1)          -> 0 ... 2
  //   * -1 * (pi / 2)   -> 0 ... -pi  (sweep toward negative = counter-clockwise arc)
  // Each servo gets a different `phase` (where in the cycle it starts) and `rate`
  // (how quickly it oscillates), so the five servos move independently of each other.
  const osc = (phase, rate) => (Math.sin(t * rate * speed + phase) + 1) * -1 * (Math.PI / 2);
  // Five servo positions: [left-upper, left-lower, center, right-upper, right-lower]
  drawServo(px+pw*0.11,py+ph*0.32, osc(0.0, 0.55));
  drawServo(px+pw*0.11,py+ph*0.70, osc(1.8, 0.70));
  drawServo(px+pw*0.50,py+ph*0.66, osc(3.2, 0.90));
  drawServo(px+pw*0.75,py+ph*0.28, osc(0.9, 0.65));
  drawServo(px+pw*0.75,py+ph*0.66, osc(2.5, 0.80));

  // Red arcade dome button
  // btnR is proportional to the smaller panel dimension (not u) to keep it circular.
  const btnX=px+pw*0.91, btnY=py+ph*0.48, btnR=Math.min(pw,ph)*0.075;
  ctx.fillStyle="#444"; // dark mounting ring behind the button
  ctx.beginPath(); ctx.arc(btnX,btnY,btnR+4,0,Math.PI*2); ctx.fill();
  ctx.fillStyle="#cc1111"; // red dome body
  ctx.beginPath(); ctx.arc(btnX,btnY,btnR,0,Math.PI*2); ctx.fill();
  // Specular highlight offset up-left, like a dome surface catching light.
  ctx.fillStyle="rgba(255,110,110,0.55)";
  ctx.beginPath(); ctx.arc(btnX-btnR*0.3,btnY-btnR*0.3,btnR*0.42,0,Math.PI*2); ctx.fill();
  // On hover: an animated pulsing ring around the button to invite interaction.
  if (hover) {
    ctx.strokeStyle="rgba(255,50,50,0.45)"; ctx.lineWidth=1.5;
    // Math.sin(t*5) makes the ring radius oscillate, creating a breathing "pulse" effect.
    ctx.beginPath(); ctx.arc(btnX,btnY,btnR+5+Math.sin(t*5)*2,0,Math.PI*2); ctx.stroke();
  }

  // Yellow pencil antenna
  // ctx.save/rotate/restore draws the pencil at a slight angle without affecting
  // the coordinate system for everything drawn afterward.
  ctx.save();
  ctx.translate(px+pw*0.55,py+2); ctx.rotate(-0.12); // pivot at the pencil base, slight tilt
  ctx.fillStyle="#f0c010"; ctx.fillRect(-3,-height*0.10,6,height*0.10); // yellow shaft (10% of canvas height)
  ctx.fillStyle="#e8a0a0"; ctx.fillRect(-3,-height*0.10-5,6,5); // pink eraser at the very top
  ctx.fillStyle="#c89050"; // brown sharpened tip (triangle at the bottom)
  ctx.beginPath(); ctx.moveTo(-3,0); ctx.lineTo(3,0); ctx.lineTo(0,6); ctx.closePath(); ctx.fill();
  ctx.restore();

  // Chrome joystick -- slides horizontally in the base tray
  // jSlide uses Math.sin to produce a smooth left-right oscillation.
  // Amplitude = 6% of panel width; rate = 0.8 Hz (multiplied by speed on hover).
  const jSlide = Math.sin(t * 0.8 * speed) * pw * 0.06;
  const jx = px + pw * 0.62 + jSlide; // x position shifts left/right with the slide
  const jy = by + bh * 0.45; // y sits in the middle of the tray
  const jr = u * 0.57; // ball radius in u units
  ctx.fillStyle="#666"; // dark ellipse = shaft collar / mounting base shadow
  ctx.beginPath(); ctx.ellipse(jx,jy+jr*0.6,u*0.64,u*0.29,0,0,Math.PI*2); ctx.fill();
  // Radial gradient from white highlight at upper-left to dark grey at edge -- chrome look.
  const jGrad=ctx.createRadialGradient(jx-u*0.21,jy-u*0.21,u*0.07,jx,jy,jr);
  jGrad.addColorStop(0,"#ffffff"); // specular highlight center
  jGrad.addColorStop(0.45,"#cccccc"); // mid-tone
  jGrad.addColorStop(1,"#555555"); // dark edge
  ctx.fillStyle=jGrad;
  ctx.beginPath(); ctx.arc(jx,jy,jr,0,Math.PI*2); ctx.fill(); // chrome ball

  // Hand-drawn marker doodles -- sizes proportional to u
  // ctx.save isolates the doodle styling (color, lineWidth, lineCap/lineJoin)
  // from the rest of the drawing code -- changes here don't affect anything after ctx.restore().
  ctx.save();
  ctx.strokeStyle="rgba(18,8,0,0.68)"; ctx.fillStyle="rgba(18,8,0,0.68)";
  ctx.lineWidth=u*0.086; ctx.lineCap="round"; ctx.lineJoin="round";

  /**
   * Draws a skull icon centered at (dx, dy) with overall scale s.
   * Structure: circle head + two rectangular jaw sections + two oval eye sockets.
   * @param {number} dx - Center X. @param {number} dy - Center Y. @param {number} s - Scale.
   */
  function drawSkull(dx,dy,s) {
    ctx.beginPath(); ctx.arc(dx,dy,s,0,Math.PI*2); ctx.stroke(); // round head
    // Left jaw rectangle (drawn as a 4-point open path).
    ctx.beginPath();
    ctx.moveTo(dx-s*0.6,dy+s*0.4); ctx.lineTo(dx-s*0.6,dy+s*0.9);
    ctx.lineTo(dx-s*0.15,dy+s*0.9); ctx.lineTo(dx-s*0.15,dy+s*0.4); ctx.stroke();
    // Right jaw rectangle.
    ctx.beginPath();
    ctx.moveTo(dx+s*0.15,dy+s*0.4); ctx.lineTo(dx+s*0.15,dy+s*0.9);
    ctx.lineTo(dx+s*0.6,dy+s*0.9); ctx.lineTo(dx+s*0.6,dy+s*0.4); ctx.stroke();
    // Two eye socket circles.
    ctx.beginPath(); ctx.arc(dx-s*0.34,dy-s*0.08,s*0.22,0,Math.PI*2); ctx.stroke();
    ctx.beginPath(); ctx.arc(dx+s*0.34,dy-s*0.08,s*0.22,0,Math.PI*2); ctx.stroke();
  }
  /**
   * Draws a heart shape using two Bezier curves meeting at the bottom point.
   * s controls the overall scale; larger s = bigger heart.
   * @param {number} dx - Center X. @param {number} dy - Center Y. @param {number} s - Scale.
   */
  function drawHeart(dx,dy,s) {
    ctx.beginPath(); ctx.moveTo(dx,dy+s*0.8); // start at bottom point
    // Left lobe: Bezier curve sweeping up and over to center-top.
    ctx.bezierCurveTo(dx-s*1.1,dy-s*0.4,dx-s*1.1,dy-s,dx,dy-s*0.2);
    // Right lobe: Bezier curve sweeping back down to the bottom point.
    ctx.bezierCurveTo(dx+s*1.1,dy-s,dx+s*1.1,dy-s*0.4,dx,dy+s*0.8);
    ctx.stroke();
  }
  /**
   * Draws a peace sign: a circle with three radiating lines inside
   * (one vertical, two angled downward at ~60 degrees each).
   * @param {number} dx - Center X. @param {number} dy - Center Y. @param {number} s - Radius.
   */
  function drawPeace(dx,dy,s) {
    ctx.beginPath(); ctx.arc(dx,dy,s,0,Math.PI*2); ctx.stroke(); // outer ring
    ctx.beginPath();
    ctx.moveTo(dx,dy-s); ctx.lineTo(dx,dy+s); // vertical center line
    ctx.moveTo(dx,dy); ctx.lineTo(dx-s*0.85,dy+s*0.5); // lower-left spoke
    ctx.moveTo(dx,dy); ctx.lineTo(dx+s*0.85,dy+s*0.5); // lower-right spoke
    ctx.stroke();
  }
  /**
   * Draws a smiley face: circle outline, arc smile, and two filled eye dots.
   * The smile arc uses start/end angles of 0.25 and pi-0.25 so it curves upward.
   * @param {number} dx - Center X. @param {number} dy - Center Y. @param {number} s - Radius.
   */
  function drawSmiley(dx,dy,s) {
    ctx.beginPath(); ctx.arc(dx,dy,s,0,Math.PI*2); ctx.stroke(); // face outline
    // Smile arc: drawn slightly below center (dy + s*0.12) so it sits in the lower half of the face.
    ctx.beginPath(); ctx.arc(dx,dy+s*0.12,s*0.52,0.25,Math.PI-0.25); ctx.stroke();
    // Filled dots for eyes (ctx.fill instead of ctx.stroke for solid eyes).
    ctx.beginPath(); ctx.arc(dx-s*0.34,dy-s*0.18,s*0.22,0,Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.arc(dx+s*0.34,dy-s*0.18,s*0.22,0,Math.PI*2); ctx.fill();
  }
  /**
   * Draws a warning triangle (like a road hazard sign) with an exclamation mark inside.
   * Triangle vertices are at top-center, bottom-right, bottom-left.
   * @param {number} dx - Center X. @param {number} dy - Center Y. @param {number} s - Scale.
   */
  function drawWarning(dx,dy,s) {
    ctx.beginPath();
    ctx.moveTo(dx,dy-s); ctx.lineTo(dx+s,dy+s*0.62); ctx.lineTo(dx-s,dy+s*0.62);
    ctx.closePath(); ctx.stroke(); // equilateral triangle
    ctx.beginPath(); ctx.moveTo(dx,dy-s*0.3); ctx.lineTo(dx,dy+s*0.08); ctx.stroke(); // exclamation stem
    ctx.beginPath(); ctx.arc(dx,dy+s*0.38,s*0.22,0,Math.PI*2); ctx.fill(); // exclamation dot
  }

  // Place each doodle at a different spot on the panel face.
  drawSkull(px+pw*0.21,  py+ph*0.50, u*0.50);
  drawHeart(px+pw*0.62,  py+ph*0.20, u*0.36);
  drawPeace(px+pw*0.21,  py+ph*0.80, u*0.43);
  drawSmiley(px+pw*0.60, py+ph*0.84, u*0.43);
  drawWarning(px+pw*0.38,py+ph*0.80, u*0.36);

  // Dashed annotation arrows -- mimic the hand-drawn callout lines on the real controller
  // that point toward the servos, as if someone labelled them with a marker.
  ctx.strokeStyle="rgba(18,8,0,0.35)"; ctx.lineWidth=u*0.07;
  // setLineDash([dash length, gap length]) switches the stroke to a dashed pattern.
  ctx.setLineDash([u*0.14,u*0.21]);
  ctx.beginPath(); ctx.moveTo(px+pw*0.30,py+ph*0.60); ctx.lineTo(px+pw*0.47,py+ph*0.66); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(px+pw*0.50,py+ph*0.50); ctx.lineTo(px+pw*0.50,py+ph*0.60); ctx.stroke();
  ctx.setLineDash([]); // reset to solid lines for any subsequent drawing
  ctx.restore(); // undo all doodle styling (stroke color, lineWidth, lineCap, etc.)
}

// ─── Animation loop ───────────────────────────────────────────────────────────
// Single requestAnimationFrame loop drives all canvas animations.
/**
 * Main animation loop. Called by requestAnimationFrame on every screen refresh
 * (typically 60 times per second). Redraws the learning toy and all project card
 * canvases with the current timestamp.
 *
 * @param {number} time - High-precision timestamp in milliseconds, provided
 *   automatically by requestAnimationFrame. Starts near 0 when the page loads.
 */
function animate(time) {
  if (toy) drawLearningToy(time); // only draw the toy if the element exists on the page
  projectCanvases.forEach((canvas) => {
    // On hover: use the timestamp when hover started (projectFreezeTime) rather than
    // the current time. This means time-based animations continue from that moment
    // but don't jump -- they just run faster because the speed multiplier increases.
    const renderTime = projectHover.get(canvas) ? projectFreezeTime.get(canvas) || time : time;
    drawProjectCanvas(canvas, renderTime, projectHover.get(canvas));
  });
  // Schedule the next frame -- this creates an infinite loop.
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate); // kick off the animation loop
// The topbar is fixed-position, so native anchor scrolling would land behind it.
// This function reads the topbar height and applies the correct offset.
/**
 * Scrolls to the element matching the current URL hash (#section-id), offset
 * by the fixed topbar height so the target isn't hidden behind the navigation bar.
 *
 * Called on page load and after each navigation to ensure correct positioning.
 */
function scrollToHashTarget() {
  if (!window.location.hash) return; // no hash = nothing to scroll to
  // decodeURIComponent handles encoded characters like %20 (space) in the hash.
  const targetId = decodeURIComponent(window.location.hash.slice(1)); // strip the leading "#"
  const target = document.getElementById(targetId);
  if (!target) return; // element doesn't exist, nothing to do
  const topbar = document.querySelector(".topbar");
  // getBoundingClientRect().height gives the rendered height of the topbar in pixels.
  const offset = (topbar?.getBoundingClientRect().height || 0) + 20; // +20 for breathing room
  // getBoundingClientRect().top is relative to the viewport; add scrollY to get absolute page position.
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: "auto" }); // instant scroll (not smooth) to avoid a janky re-scroll
}
requestAnimationFrame(scrollToHashTarget); // run after the first paint so layout dimensions are ready
window.addEventListener("load", scrollToHashTarget); // run again after all assets load (image heights may shift layout)
window.addEventListener("resize", () => {
  // Resize can change canvas CSS sizes, so redraw all canvases immediately at the new size.
  projectCanvases.forEach((canvas) => drawProjectCanvas(canvas, performance.now(), projectHover.get(canvas)));
  if (toy) drawLearningToy(performance.now());
});

// ─── Maker Desk ────────────────────────────────────────────────────────────────
// Clicking a .desk-object opens its data-src URL in a full-screen iframe lightbox.
// The panel flies from the object's screen position to the viewport center using
// a CSS custom-property FLIP technique:
//   1. Set --start-x/y/scale on the panel (where the object is)
//   2. Add .is-collapsed (transition: none) so the panel snaps to that position
//   3. Remove .is-collapsed two animation frames later -- the CSS transition runs
/**
 * Self-contained initializer for the Maker Desk lightbox system.
 * Wrapped in an IIFE (Immediately Invoked Function Expression) -- the outer
 * `(function() { ... })()` -- so all variables are private and don't pollute
 * the global scope. It runs once when the script is first loaded.
 *
 * The lightbox opens an iframe showing embedded project content (e.g. a Figma
 * prototype) in a full-screen overlay. It flies in from the clicked object's
 * position using a FLIP animation (First, Last, Invert, Play).
 */
(function initMakerDesk() {
  // Grab all the elements that make up the lightbox UI.
  const lightbox = document.getElementById("deskLightbox");        // outer wrapper (hidden/visible)
  const panel    = document.getElementById("deskLightboxPanel");    // the white content panel
  const backdrop = document.getElementById("deskLightboxBackdrop"); // semi-transparent click-to-close overlay
  const iframe   = document.getElementById("deskLightboxIframe");   // the embedded content frame
  const spinner  = document.getElementById("deskLightboxSpinner");  // loading indicator
  const titleEl  = document.getElementById("deskLightboxTitle");    // title text in the lightbox header
  const closeBtn = document.getElementById("deskLightboxClose");    // close button
  if (!lightbox) return; // page doesn't have a Maker Desk section -- exit silently

  let lastFocused = null; // element to restore focus to when lightbox closes

  // ── Open ──────────────────────────────────────────────────────────────────

  /**
   * Opens the lightbox for the given desk object, animating the panel from the
   * object's screen position to the viewport center (FLIP technique).
   *
   * @param {HTMLElement} obj - The .desk-object button that was clicked.
   *   Must have data-src (content URL) and data-label (display title) attributes.
   */
  function openDesk(obj) {
    const src   = (obj.dataset.src || "").trim(); // the URL to load in the iframe
    const label = obj.dataset.label || "Maker Desk"; // display title

    // Guard: prompt to add content URL if placeholder is still empty.
    if (!src) {
      // eslint-disable-next-line no-alert
      alert(`"${label}" has no content URL yet.\nAdd one to data-src on the button in index.html.`);
      return;
    }

    lastFocused = document.activeElement; // save current focus before we move it
    titleEl.textContent = label; // set the lightbox title
    spinner.classList.remove("is-hidden"); // show loading spinner
    iframe.src = "about:blank"; // clear any previous iframe content

    // FLIP setup: compute the panel's starting offset from its natural center.
    // "First": measure where the object is right now.
    const rect    = obj.getBoundingClientRect(); // object's screen position and size
    const vpW     = window.innerWidth;
    const vpH     = window.innerHeight;
    // Object's center in viewport coordinates.
    const objCX   = rect.left + rect.width  / 2;
    const objCY   = rect.top  + rect.height / 2;
    // Offset from viewport center to object center -- this is where the panel starts.
    const startX  = objCX - vpW / 2;
    const startY  = objCY - vpH / 2;
    // "Last": the panel's natural size when fully open. Matches CSS: min(90vw, 880px).
    const panelW  = Math.min(vpW * 0.9, 880);
    // "Invert": compute what scale makes the panel as small as the object.
    const startScale = Math.max(0.05, rect.width / panelW); // minimum 5% so it's not invisible

    // Apply the starting transform as CSS custom properties (the CSS transition reads these).
    panel.style.setProperty("--start-x",     `${startX}px`);
    panel.style.setProperty("--start-y",     `${startY}px`);
    panel.style.setProperty("--start-scale", startScale);

    // Snap to collapsed position (transition: none), then trigger fly-in.
    // Snap the panel to its "First" (collapsed, object-sized) position without animation.
    panel.classList.add("is-collapsed");
    lightbox.hidden = false; // make it visible but still at the small position

    // "Play": two rAF calls ensure the browser has painted the collapsed state before
    // we remove is-collapsed, which triggers the CSS spring transition to full size.
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        lightbox.classList.add("is-open"); // fades in backdrop
        panel.classList.remove("is-collapsed"); // spring transition fires here
      });
    });

    // Load iframe after the expand animation finishes (~420 ms).
    // This prevents a slow-loading iframe from competing with the open animation.
    setTimeout(() => {
      iframe.src = src; // now load the real URL
      // Once the iframe has loaded, hide the spinner. { once: true } auto-removes the listener.
      iframe.addEventListener("load", () => spinner.classList.add("is-hidden"), { once: true });
    }, 420);

    closeBtn.focus(); // move keyboard focus into the lightbox for accessibility
  }

  // ── Close ─────────────────────────────────────────────────────────────────

  /**
   * Closes the lightbox with a collapse animation, then resets iframe and spinner.
   * After the CSS transition completes (~320ms), restores focus to the element
   * that was active before the lightbox opened.
   */
  function closeDesk() {
    lightbox.classList.remove("is-open"); // backdrop fades out
    panel.classList.add("is-closing");    // panel snaps to small dot at center

    setTimeout(() => {
      lightbox.hidden = true;             // fully hide after animation ends
      panel.classList.remove("is-closing");
      iframe.src = "about:blank";         // unload iframe to stop any media/audio playing inside
      spinner.classList.remove("is-hidden"); // reset spinner for next open
      if (lastFocused) lastFocused.focus(); // return focus to the trigger element
    }, 320); // matches the CSS transition duration for the close animation
  }

  // ── Event wiring ──────────────────────────────────────────────────────────

  // Open the lightbox when any .desk-object is clicked.
  document.querySelectorAll(".desk-object").forEach((obj) => {
    obj.addEventListener("click", () => openDesk(obj));
  });

  closeBtn.addEventListener("click", closeDesk); // close button closes the lightbox
  backdrop.addEventListener("click", closeDesk); // clicking the dimmed overlay also closes it

  // Pressing Escape closes the lightbox (standard modal accessibility pattern).
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !lightbox.hidden) closeDesk();
  });

  // Trap Tab focus within the open lightbox (accessibility).
  // When the lightbox is open, Tab key must cycle only through focusable elements
  // inside the lightbox -- not through elements behind the backdrop.
  lightbox.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || lightbox.hidden) return; // only handle Tab while open
    // Collect all interactive elements inside the lightbox that can receive focus.
    const focusable = [...lightbox.querySelectorAll(
      "button, [href], input, [tabindex]:not([tabindex='-1'])"
    )].filter((el) => !el.disabled); // exclude disabled elements
    if (focusable.length < 2) return; // nothing to trap if there's only one focusable element
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];
    // If Shift+Tab on the first element, wrap around to the last.
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault(); // stop the browser's default Tab behavior
      last.focus();
    // If Tab on the last element, wrap around to the first.
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
})();
