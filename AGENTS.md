# Portfolio — Nicholas Markus

Static teaching portfolio. Hosted on GitHub Pages. No build step, no npm.

## How to add or edit a project

1. Open `project-data.js`.
2. Find the entry with the matching `id` (or copy from `project-entry-template.json` to add a new one).
3. Edit fields — see the field reference below.
4. If adding a new project, also create a matching `projects/<id>.html` by copying an existing one and updating `data-project-id` on `<body>`.
5. Place project images in `assets/projects/<id>/photos/`.

That's it. One edit in `project-data.js` updates both the homepage card and the detail page.

## Field reference

```
id            Unique slug. Must match the detail page's data-project-id and the filename
              in /projects/. Use kebab-case.

title         Short title shown on the homepage card.

detailTitle   Longer title shown on the detail page hero. Can equal title if unneeded.

label         Short category label shown as a badge on the card (e.g. "K-7 STEM Curriculum").

category      Optional badge shown alongside label. Controls badge color.
              Valid values: "Career" | "NYU Pilot" | omit the field entirely

theme         Hex color used for card accent and detail page header tint (e.g. "#4A90E2").

overview      1–2 sentence summary. Used on both the homepage card and the detail page hero.

goal          Educational goal sentence. Shown on the homepage card.

impact        Teaching impact / reflection sentence. Shown on the homepage card and
              detail page reflection section.

tech          Array of tool/theme strings shown as tags.
              e.g. ["Scratch", "Micro:Bit", "Hummingbird Robotics"]

visual        Controls the animated illustration on the homepage card.
              Valid values: "creative" | "physical" | "game" | "maker" | "installation"

url           Path to the project detail page, relative to the root.
              e.g. "./projects/hannah-senesh-stem.html"

snapshot      Object shown in the detail page sidebar:
                label         Date range or version label (e.g. "Sept 2025 - Present")
                image         Optional cover image path, root-relative
                              e.g. "./assets/projects/<id>/photos/cover-image.png"
                imagePosition "top" | "center" | "bottom" — background-position for cover
                audience      Who the project was for
                format        Workshop, course unit, installation, etc.
                role          Your role on the project

storyTitle    Headline for the project story section on the detail page.

storyIntro    Optional short paragraph under storyTitle.

panels        Array of up to 3 content panels on the detail page. Each panel has:
                title         Section heading
                body          Paragraph text (use body OR items, not both)
                items         Bullet list (use items OR body, not both)

gallery       Array of image slots in the detail page gallery. Each item:
                label         Caption shown under the image
                src           Optional image path, root-relative.
                              Omit src to leave the slot empty (shows label only)
                alt           Alt text for the image
```

## File map

```
index.html                    Main single-page site
styles.css                    All styles
script.js                     Homepage rendering and canvas animations
project-detail.js             Detail page rendering (reads from project-data.js)
project-data.js               Source of truth for all project content
project-entry-template.json   Copy this when drafting a new project entry
projects/                     One HTML file per project detail page
assets/                       Images, logos, icons
nicholas-portfolio-materials/ Source documents (bio, experience writeups). Not deployed
                              as interactive content — used as reference when editing.
```

## Adding images to a project

**Trigger phrase:** "I have photos for [project-id] — can you add them?"

**Staging convention:** Drop source images into `nicholas-portfolio-materials/02-projects/<id>/photos/` before asking. You can also give any other path or list of file paths directly in the message.

**What Codex will do, in order:**
1. Read each image to check for student faces, identifying info, or private content (per content guidelines below) — flags anything borderline before proceeding
2. Ask which image should be the cover, or propose one with reasoning
3. Resize and center-crop each image to **1200×900 (4:3)** using Python + Pillow (both available on this machine) — this matches the `aspect-ratio: 4/3` CSS on gallery slots
4. Copy processed files to `assets/projects/<id>/photos/`
5. Generate alt text for each image
6. Update `gallery[]` entries (src, alt, label) and `snapshot.image` in `project-data.js`
7. Commit to git

**Note:** The resize step uses a center-crop. If a photo has important content near the edges, say so and Codex will adjust the crop anchor (top / bottom / left / right).

## Content guidelines

- Tone: warm, intellectually curious, project-based, rigorous. Not corporate.
- Do not publish student full names or student faces unless explicitly approved.
- Do not include private school or client information.
- Focus on teaching goals, student learning outcomes, and real tools used.
