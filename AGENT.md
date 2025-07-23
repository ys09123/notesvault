# AGENT.md - NotesVault Project Guide

## Build/Development Commands
- **No package.json found** - This is a static HTML/CSS/JS website
- **Open locally**: Simply open `index.html` in browser (no build process needed)
- **SCSS compilation**: `styles.scss` exists but `styles.css` is the active file
- **No test framework** - Manual testing in browser required

## Architecture & Codebase Structure
- **Static educational web app** for managing academic notes and PYQs
- **Frontend only**: HTML, CSS/SCSS, vanilla JavaScript
- **Data storage**: JSON files in `data/` directory (localStorage for user preferences)
- **Key pages**: `index.html` (home), `search.html` (browse), `upload.html` (upload)
- **Components**: No framework - direct DOM manipulation
- **JSON APIs**: `data/search_parameters/parameters.json` for dropdown data, `data/notes.json` for notes

## Code Style & Conventions
- **CSS structure**: All CSS files in `styling/` folder - `styles.css` (main), `styles.scss` (source), page-specific CSS files
- **Fonts**: Poppins (primary), Open Sans (headings), Plus Jakarta Sans (upload page)
- **CSS methodology**: BEM-like naming (`main-right-box`, `header-navigation`)
- **JavaScript**: ES6+, fetch API, event listeners, no framework dependencies
- **Responsive**: Mobile-first with hamburger menu, breakpoints at 768px/600px/480px/360px
- **Themes**: Dark/light mode toggle with localStorage persistence
- **File naming**: kebab-case for HTML, camelCase for JS variables

## Notable Patterns
- **Dynamic dropdowns**: Cascading selects loaded from JSON data
- **Theme system**: CSS custom properties with `[data-theme="dark"]` selectors
- **Search functionality**: URL params for query passing between pages
