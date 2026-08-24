// Reads project data from window.portfolioProjects (set by project-data.js) and populates
// the detail page whose <body data-project-id="..."> matches the project's id field.
(function () {
  const projectId = document.body.dataset.projectId;
  const projects = window.portfolioProjects || [];
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) node.textContent = value;
  };

  const setHtml = (selector, value) => {
    const node = document.querySelector(selector);
    if (node && value) node.innerHTML = value;
  };

  // Asset paths in project-data.js are written root-relative (./assets/...).
  // From inside /projects/, they need one extra level up (../assets/...).
  const resolveAssetPath = (value) => {
    if (!value?.startsWith("./assets/")) return value;
    return window.location.pathname.includes("/projects/") ? value.replace("./", "../") : value;
  };

  // --- Hero ---
  document.title = `${project.detailTitle || project.title} | Nicholas Markus`;
  const hero = document.querySelector(".project-detail-hero");
  if (hero) hero.style.setProperty("--detail-theme", project.theme);

  setText(".project-detail-hero .eyebrow", project.label);
  setText(".project-detail-hero h1", project.detailTitle || project.title);
  setText(".project-summary", project.overview);

  const tags = document.querySelector(".project-detail-hero .tag-list");
  if (tags) {
    tags.innerHTML = project.tech.map((item) => `<span>${item}</span>`).join("");
  }

  // --- Sidebar snapshot ---
  const snapshotVisual = document.querySelector(".snapshot-visual");
  if (snapshotVisual && project.snapshot) {
    snapshotVisual.querySelector("span").textContent = project.snapshot.label || project.label;
    if (project.snapshot.image) {
      const snapshotImage = new Image();
      snapshotImage.addEventListener("load", () => {
        snapshotVisual.style.backgroundImage = `url("${resolveAssetPath(project.snapshot.image)}")`;
        snapshotVisual.style.backgroundPosition = project.snapshot.imagePosition || "center";
        snapshotVisual.style.backgroundSize = "cover";
        snapshotVisual.classList.add("has-image");
      });
      snapshotImage.src = resolveAssetPath(project.snapshot.image);
    }
  }

  const snapshotValues = document.querySelectorAll(".snapshot-list dd");
  if (snapshotValues.length === 3 && project.snapshot) {
    snapshotValues[0].textContent = project.snapshot.audience || "";
    snapshotValues[1].textContent = project.snapshot.format || "";
    snapshotValues[2].textContent = project.snapshot.role || "";
  }

  // --- Story section ---
  setText("#project-story-title", project.storyTitle);
  setText(".section-heading.wide p:not(.eyebrow)", project.storyIntro);

  // --- Content panels (up to 3; each uses either body text or an items list) ---
  const panels = document.querySelectorAll(".detail-main .detail-panel");
  project.panels?.forEach((panel, index) => {
    const node = panels[index];
    if (!node) return;
    setTextIn(node, "h3", panel.title);
    if (panel.items) {
      const list = panel.items.map((item) => `<li>${item}</li>`).join("");
      node.innerHTML = `<h3>${panel.title}</h3><ul>${list}</ul>`;
    } else if (panel.body) {
      node.innerHTML = `<h3>${panel.title}</h3><p>${panel.body}</p>`;
    }
  });

  // --- Sidebar snapshot: optional program row ---
  const snapshotProgram = document.querySelector(".snapshot-program");
  if (snapshotProgram && project.snapshot?.program) {
    snapshotProgram.querySelector("dd").textContent = project.snapshot.program;
    snapshotProgram.hidden = false;
  }

  // --- Program metadata ---
  const programPanel = document.querySelector(".program-panel");
  if (programPanel && project.program) {
    const p = project.program;
    const rows = [];
    if (p.name) {
      const nameHtml = p.url
        ? `<a href="${p.url}" target="_blank" rel="noopener noreferrer">${p.name}</a>`
        : p.name;
      rows.push(`<div><dt>Program</dt><dd>${nameHtml}</dd></div>`);
    }
    if (p.school) {
      const schoolHtml = p.schoolUrl
        ? `<a href="${p.schoolUrl}" target="_blank" rel="noopener noreferrer">${p.school}</a>`
        : p.school;
      const founded = p.founded ? ` — founded ${p.founded}` : "";
      rows.push(`<div><dt>School</dt><dd>${schoolHtml}${founded}</dd></div>`);
    }
    if (p.location) rows.push(`<div><dt>Location</dt><dd>${p.location}</dd></div>`);
    if (p.dates) rows.push(`<div><dt>Dates</dt><dd>${p.dates}</dd></div>`);
    if (p.exhibition) rows.push(`<div><dt>Exhibition</dt><dd>${p.exhibition}</dd></div>`);
    if (p.format) rows.push(`<div><dt>Format</dt><dd>${p.format}</dd></div>`);
    if (p.founder) rows.push(`<div><dt>Founder</dt><dd>${p.founder}</dd></div>`);
    if (rows.length) {
      programPanel.innerHTML = `<h3>About the program</h3><dl class="program-meta">${rows.join("")}</dl>`;
      programPanel.hidden = false;
    }
  }

  // --- People ---
  const peoplePanel = document.querySelector(".people-panel");
  if (peoplePanel && project.people?.length) {
    const items = project.people
      .map((person) => {
        const pronouns = person.pronouns
          ? ` <span class="person-pronouns">(${person.pronouns})</span>`
          : "";
        const nameHtml = person.url
          ? `<a href="${person.url}" target="_blank" rel="noopener noreferrer">${person.name}</a>`
          : person.name;
        return `<li><p class="person-name">${nameHtml}${pronouns}</p><p class="person-role">${person.role}</p></li>`;
      })
      .join("");
    peoplePanel.innerHTML = `<h3>Who I learned from</h3><ul class="people-list">${items}</ul>`;
    peoplePanel.hidden = false;
  }

  // --- Cohort ---
  const cohortPanel = document.querySelector(".cohort-panel");
  if (cohortPanel && project.cohort?.length) {
    const items = project.cohort
      .map((entry) => {
        const country = entry.country ? ` (${entry.country})` : "";
        return `<li>${entry.name} — ${entry.project}${country}</li>`;
      })
      .join("");
    cohortPanel.innerHTML = `<h3>Cohort</h3><ul class="cohort-list">${items}</ul>`;
    cohortPanel.hidden = false;
  }

  // --- Reflection and gallery ---
  setText(".reflection-card p", project.impact);

  const gallery = document.querySelector(".project-gallery");
  if (gallery && project.gallery) {
    gallery.innerHTML = project.gallery
      .map((item) => {
        const image = item.src
          ? `<img src="${resolveAssetPath(item.src)}" alt="${item.alt || item.label}" onerror="this.remove()" />`
          : "";
        return `<div class="gallery-slot">${image}<span>${item.label}</span></div>`;
      })
      .join("");
  }

  // --- Gameplay video clips ---
  const videos = document.querySelector(".project-videos");
  if (videos && project.videos?.length) {
    videos.innerHTML = project.videos
      .map((video) => {
        const src = `https://player.vimeo.com/video/${video.vimeoId}?badge=0&autopause=0&player_id=0&app_id=58479&muted=1`;
        return `<div class="video-slot"><div class="video-frame"><iframe src="${src}" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" referrerpolicy="strict-origin-when-cross-origin" title="${video.title}"></iframe></div><span>${video.title}</span></div>`;
      })
      .join("");
    videos.hidden = false;
  }

  function setTextIn(root, selector, value) {
    const node = root.querySelector(selector);
    if (node && value) node.textContent = value;
  }
})();
