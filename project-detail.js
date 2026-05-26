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

  const resolveAssetPath = (value) => {
    if (!value?.startsWith("./assets/")) return value;
    return window.location.pathname.includes("/projects/") ? value.replace("./", "../") : value;
  };

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
  if (snapshotValues.length >= 3 && project.snapshot) {
    snapshotValues[0].textContent = project.snapshot.audience || "";
    snapshotValues[1].textContent = project.snapshot.format || "";
    snapshotValues[2].textContent = project.snapshot.role || "";
  }

  setText("#project-story-title", project.storyTitle);
  setText(".section-heading.wide p:not(.eyebrow)", project.storyIntro);

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

  setText(".reflection-card p", project.impact);
  setText(".asset-drop code", project.assetPath);

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

  function setTextIn(root, selector, value) {
    const node = root.querySelector(selector);
    if (node && value) node.textContent = value;
  }
})();
