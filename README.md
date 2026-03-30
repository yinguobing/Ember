# Ember

Ember is a clean, modern [Ghost](https://ghost.org/) theme designed for content-focused publications. Built on top of the excellent [Headline](https://github.com/TryGhost/Headline) theme by Ghost Foundation.

**Demo:** https://headline.ghost.io

## Credits

This theme is based on [Headline](https://github.com/TryGhost/Headline) by Ghost Foundation. We've preserved the solid foundation of Headline while refining the visual design and user experience.

## Features

- **Clean Card Layout** — All posts display in elegant white cards with consistent 16px padding
- **Tag Display** — Primary tags shown as accent-colored text (no background badges)
- **Featured Content Slider** — Highlight important posts with a sleek 1:1 image-content slider
- **Responsive Grid** — "What's New" section with large + small card grid layout
- **Optimized Typography** — Carefully tuned font sizes and spacing for readability
- **Dark Mode Ready** — CSS variables for easy theme customization

## Installation

1. Download the latest release or clone this repository
2. Run `yarn zip` to create the distribution file
3. Upload `dist/ember.zip` to your Ghost Admin → Design → Change theme

## Development

This theme uses Gulp/PostCSS for building. You'll need [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed.

```bash
# Install dependencies
yarn

# Build and watch for changes
yarn dev

# Create distribution zip
yarn zip
```

Edit files in `/assets/css/` — they will be compiled to `/assets/built/` automatically.

## Customization

The following custom settings are available in Ghost Admin:

- **Navigation Layout** — Logo position (left, middle, or stacked)
- **Header Style** — Light, accent color, or dark
- **Title Font** — Modern sans-serif or elegant serif
- **Body Font** — Modern sans-serif or elegant serif
- **Footer Text** — Custom copyright text
- **Popular Tags** — Select which tags to feature
- **Hero Scramble** — Animated text phrases for homepage hero

## Original Theme

Ember is built upon [Headline](https://github.com/TryGhost/Headline), a theme designed for local news and publications by the Ghost Foundation.

## License

Copyright (c) 2013-2026 Ghost Foundation - Released under the [MIT license](LICENSE).
