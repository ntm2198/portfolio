# Project Data Workflow

Use `project-data.js` as the source of truth for project cards and project detail pages.

When you edit a project in `project-data.js`, the matching homepage card and project detail page update together. The connection is made through the project `id`, which matches the `data-project-id` on each project page.

## Fastest Way To Update A Project

1. Open `project-data.js`.
2. Find the project object with the matching `id`.
3. Edit the shared fields:
   - `title`
   - `detailTitle`
   - `label`
   - `overview`
   - `goal`
   - `impact`
   - `tech`
   - `snapshot`
   - `storyTitle`
   - `panels`
   - `gallery`
4. Refresh the homepage and the project detail page.

## Fill-In Template

Use `project-entry-template.json` when drafting a new project or sending a filled-out project back to Codex.

Codex can merge a completed template into `project-data.js`, create the matching detail page, and connect it to the homepage.

## What Still Lives In The HTML

Some project pages can keep custom sections in their HTML, such as:

- Works cited
- Embedded Figma or Miro frames
- Extra links
- Custom notes

Those custom sections are not overwritten by the shared project data.
