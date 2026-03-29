# Headline - Ghost Theme

## Project Overview

Headline is a Ghost theme built specifically for local news and publications. It organizes content by topics/sections and provides a news-style layout with grid and list views. The theme is part of the official Ghost Themes collection.

- **Demo**: https://headline.ghost.io
- **Documentation**: https://headline.ghost.io/about/
- **License**: MIT
- **Ghost Version**: >= 5.0.0

## Technology Stack

- **Template Engine**: Handlebars (`.hbs` files)
- **Styling**: CSS with PostCSS (autoprefixer, cssnano, postcss-easy-import)
- **Build Tool**: Gulp 5.x
- **Package Manager**: Yarn (recommended) or npm
- **Base Styles**: Inherits from `@tryghost/shared-theme-assets`
- **Testing**: gscan (Ghost theme validator)

## Project Structure

```
.
├── *.hbs                    # Root templates (default, home, post, page, etc.)
├── partials/                # Reusable template components
│   ├── icons/              # SVG icon partials
│   ├── loop-grid.hbs       # Grid layout post card
│   ├── loop-minimal.hbs    # Minimal list post card
│   ├── topic-grid.hbs      # Topic section (grid style)
│   ├── topic-minimal.hbs   # Topic section (list style)
│   ├── post-meta.hbs       # Post metadata (authors, date, reading time)
│   ├── feature-image.hbs   # Featured image component
│   ├── related-posts.hbs   # Related posts section
│   ├── comments.hbs        # Comments section
│   └── pswp.hbs            # PhotoSwipe lightbox markup
├── assets/
│   ├── css/
│   │   ├── screen.css      # Main theme styles
│   │   └── fonts.css       # Font-face declarations (Inter, Lora)
│   ├── js/
│   │   └── main.js         # Theme JavaScript (pagination, cover image)
│   ├── fonts/              # Webfont files (woff, woff2)
│   ├── images/             # Theme images
│   └── built/              # Compiled assets (generated)
├── locales/                # Translation files (i18n)
│   ├── en.json            # English (base)
│   ├── context.json       # Translation context documentation
│   └── [lang].json        # Other language files
├── package.json           # Theme configuration & dependencies
├── gulpfile.js            # Build configuration
└── README.md              # Human documentation
```

## Template Hierarchy

- **`default.hbs`**: Base layout with header/footer
- **`home.hbs`**: Homepage with featured posts + topic sections
- **`index.hbs`**: Post list (pagination pages)
- **`post.hbs`**: Single post view
- **`page.hbs`**: Static page view
- **`tag.hbs`**: Tag archive with cover image
- **`author.hbs`**: Author archive with profile
- **`custom-full-feature-image.hbs`**: Full-screen cover image post
- **`custom-wide-feature-image.hbs`**: Wide feature image post

## Build Commands

```bash
# Install dependencies
yarn

# Development: Build, watch for changes, and enable live reload
yarn dev
# or
gulp

# Build only (CSS, JS, locales)
gulp build

# Create distribution zip file
yarn zip
# or
gulp zip

# Test theme with gscan
yarn test
```

## Development Workflow

1. **CSS**: Edit files in `/assets/css/` - compiled to `/assets/built/screen.css`
   - `screen.css` imports from shared theme assets + local fonts
   - PostCSS plugins: easy-import, autoprefixer, cssnano

2. **JavaScript**: Edit `/assets/js/main.js` - compiled to `/assets/built/main.min.js`
   - Automatically includes shared theme assets JS
   - Concatenated and minified with source maps

3. **Templates**: Edit `.hbs` files - triggers live reload
   - Uses Ghost Handlebars helpers
   - Supports i18n with `{{t}}` helper

4. **Translations**: Edit files in `/locales/`
   - Supports merging from `locales-local/` for custom overrides

## Theme Customization Options

Defined in `package.json` under `config.custom`:

| Option | Type | Choices | Default |
|--------|------|---------|---------|
| `navigation_layout` | select | Logo on the left, Logo in the middle, Stacked | Stacked |
| `header_style` | select | Light, Accent color, Dark | Light |
| `title_font` | select | Modern sans-serif, Elegant serif | Modern sans-serif |
| `body_font` | select | Modern sans-serif, Elegant serif | Elegant serif |
| `white_publication_logo_for_transparent_header` | image | - | - |
| `email_signup_text` | text | - | (default message) |
| `footer_text` | text | - | - |
| `enter_tag_slugs_for_primary_sections` | text | - | - |
| `enter_tag_slugs_for_secondary_sections` | text | - | - |

## Key Features

### Content Organization
- **Topic Grid**: Large cards with images, used for primary topics
- **Topic Minimal**: Text-only list, used for secondary topics
- **Dynamic Topics**: Automatically shows most-written-about tags, or manual selection via custom settings

### Post Cards
- Grid layout with responsive images (srcset)
- Featured posts get special styling
- Author names, publish date, comment count
- Excerpt on larger cards

### Header Variants
- Left logo / Middle logo / Stacked navigation
- Light, Accent, or Dark header styles
- Transparent header on tag pages with feature images

### Fonts
- **Inter** (sans-serif): Modern, clean headings and UI
- **Lora** (serif): Elegant body text option

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 991px
- Desktop: 992px+
- Large: 1200px+

## Testing

```bash
# Validate theme with gscan
yarn test
```

Gscan checks for:
- Ghost theme compatibility
- Required templates
- Valid Handlebars syntax
- Asset references

## Deployment

1. Run `yarn zip` to create `dist/headline.zip`
2. Upload via Ghost Admin → Design → Change theme → Upload

Or deploy to Ghost(Pro) via GitHub integration.

## Code Style Guidelines

### CSS
- Uses CSS custom properties (variables) for theming
- Class naming: BEM-like with `gh-` prefix
- Mobile-first responsive design
- Supports dark mode via CSS variables

### Handlebars
- Use `{{t}}` helper for all user-facing text
- Use partials for reusable components
- Leverage Ghost helpers: `{{#is}}`, `{{#has}}`, `{{#match}}`, `{{#get}}`

### JavaScript
- Minimal, vanilla JS only
- Theme-specific behaviors in IIFEs
- Leverages shared theme assets for common functionality (pagination)

## Important Notes

- This repo is auto-synced from [TryGhost/Themes](https://github.com/TryGhost/Themes) monorepo
- For contributions, use the main Themes repository
- Translation contributions go to `@tryghost/theme-translations`
- Card assets (`card_assets: true`) enable Ghost's built-in bookmark cards

## Security Considerations

- No user input is rendered without escaping
- Ghost's built-in XSS protection is used
- External links use `rel="noopener"` and `target="_blank"`
- Search functionality uses Ghost's built-in search (data-ghost-search)
