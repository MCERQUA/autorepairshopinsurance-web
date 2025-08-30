# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an **Auto Repair Shop Insurance** website built with **Astro 5.13.4** featuring modern glassmorphism UI design. The site focuses on providing comprehensive insurance coverage solutions for automotive service professionals.

**Key Technologies:**
- **Astro** - Static site generator with component islands architecture
- **React 19.1.1** - Interactive components with TypeScript support  
- **Tailwind CSS** - Utility-first CSS framework with custom glassmorphism theme
- **MDX** - Blog content with embedded components
- **Framer Motion** - Animation library for enhanced UX

## Architecture

### Content Architecture
The site uses **Astro Content Collections** for structured content management:

- **Blog Collection** (`src/content/blog/`): MDX articles with schema validation
- **Content Schema**: Title, description, publishDate, author, image, tags, featured flag
- **Default Author**: "Auto Repair Insurance Expert"

### Component Structure
- **Layout System**: `BaseLayout.astro` provides consistent HTML structure with SEO meta tags
- **Section Components**: Hero, Services, BlogSection in `src/components/sections/`  
- **UI Components**: Glass-themed reusable components in `src/components/ui/`
- **Page Components**: File-based routing in `src/pages/`

### Styling System
**Glassmorphism Theme** built on Tailwind CSS:

- **Glass Effects**: Custom backdrop-blur, gradients, and transparency utilities
- **Color Palette**: Primary blues (50-900 scale) and dark theme colors (100-900)
- **Custom Utilities**: `.glass`, `.glass-button`, `.glass-card`, `.text-gradient`
- **Dark Mode**: Enabled by default with `class` strategy

**Key CSS Classes:**
```css
.glass           # Backdrop blur with gradient background and border
.glass-button    # Interactive button with hover/active states  
.glass-card      # Content container with glass styling
.text-gradient   # Blue-purple gradient text effect
```

### Blog System
- **Dynamic Routes**: `[...slug].astro` handles all blog post URLs
- **Blog Index**: `/blog/` lists all articles with featured content priority
- **Content Processing**: MDX with component embedding support
- **Schema Validation**: Zod-based content validation in `src/content/config.ts`

## Development Commands

```bash
# Development server (localhost:4321)
npm run dev

# Production build
npm run build  

# Preview production build locally
npm run preview

# Astro CLI commands
npm run astro [command]
npm run astro -- --help
```

## Configuration Files

- **`astro.config.mjs`**: React, Tailwind, and MDX integrations with static output
- **`tailwind.config.mjs`**: Custom glassmorphism theme, dark mode, and utility classes
- **`src/content/config.ts`**: Content collection schemas and validation
- **`postcss.config.cjs/mjs`**: PostCSS configuration (dual format for compatibility)

## Design System

### Glassmorphism Implementation
The site features a sophisticated glassmorphism design system:

- **Background**: Multi-layer dark gradients (`from-dark-100 via-dark-200 to-dark-300`)
- **Glass Elements**: Backdrop blur with subtle transparency and border highlights
- **Interactive States**: Hover effects with scale transforms and glow shadows
- **Color Harmony**: Blue-purple gradient accents on glass backgrounds

### Component Patterns
- **Glass Navbar**: Sticky navigation with backdrop blur
- **Glass Cards**: Content containers with consistent padding and styling
- **Glass Buttons**: Interactive elements with smooth transitions
- **Section Padding**: Consistent spacing utility (`.section-padding`)

### Typography and Content
- **Insurance Focus**: Specialized content for auto repair shop insurance
- **SEO Optimized**: Meta tags, Open Graph, and Twitter Card support
- **Professional Tone**: Content authored by "Auto Repair Insurance Expert"
- **Blog-Driven**: Content marketing approach with comprehensive articles

## Technical Notes

- **Static Output**: Configured for static site generation and CDN deployment
- **Type Safety**: TypeScript support throughout React components
- **CSS Architecture**: Layered approach with base, components, and utilities
- **Performance**: Astro's island architecture minimizes client-side JavaScript
- **Modern Standards**: React 19, latest Astro, and current CSS techniques
- push when your done making changes to the website