# Ember

Ember is a clean, modern [Ghost](https://ghost.org/) theme designed for content-focused publications. Built on the excellent [Headline](https://github.com/TryGhost/Headline) theme by the Ghost Foundation and extensively customized for personal blogging.

**Demo:** https://yinguobing.com

## Credits

This theme is based on [Headline](https://github.com/TryGhost/Headline) by Ghost Foundation. We've preserved the solid foundation of Headline while adding a custom homepage layout, hero animations, and CJK typography support.

## Features

- **Hero Section** — Animated blob gradient background with configurable text scramble animation. Supports Publication Cover image as an alternative background
- **Card Layout** — Posts display in clean cards with responsive images (srcset), tag badges, and metadata
- **Featured Content Slider** — Dark-themed carousel for highlighted posts with autoplay and navigation controls
- **Homepage Grid** — "What's New" three-column layout (1 large + 4 small cards) plus an 8-card "More Posts" grid
- **Popular Tags Cloud** — Visual tag display with background images and dark overlays
- **CJK Typography** — Automatic Chinese/Japanese/Korean font stack and spacing adjustments when `lang="zh"`
- **Dark Mode** — Automatic light/dark adaptation via CSS custom properties based on background color luminance

## Installation

1. Download the [latest release](https://github.com/yinguobing/Ember/releases) or clone this repository
2. Run `yarn zip` to create the distribution file
3. Upload `dist/ember.zip` to Ghost Admin → Design → Change theme

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

The following settings are available in Ghost Admin → Design:

| Setting | Description |
|---------|-------------|
| **Navigation Layout** | Logo position — left or middle |
| **Site Background Color** | Page background color, also drives light/dark mode |
| **Title / Body Font** | Modern sans-serif (Inter) or elegant serif (Lora) |
| **Hero Background Type** | Animated blobs or Publication Cover image |
| **Hero Scramble Phrases** | Comma-separated text phrases for the hero animation |
| **Hero Scramble Speed** | Fast, Normal, or Slow |
| **Hero Horizontal / Vertical** | Percentage-based text position (0–100) |
| **Footer Text** | Custom copyright text |
| **Popular Tags** | Comma-separated tag slugs to feature on homepage |

## Original Theme

Ember is built upon [Headline](https://github.com/TryGhost/Headline), a theme designed for local news and publications by the Ghost Foundation.

## License

Copyright (c) 2013-2026 Ghost Foundation - Released under the [MIT license](LICENSE).
