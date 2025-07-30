# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` - Start the development server on http://localhost:3000
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Code Style Guidelines
- **Imports**: Use named imports, organize by external packages first, then internal imports with @/ path aliases
- **Formatting**: Follow NextJS/React patterns, use double quotes for JSX attributes
- **Types**: TypeScript with strict mode enabled, use interface for component props
- **Components**: Use functional components with explicit return types
- **Naming**: PascalCase for components, camelCase for functions/variables
- **CSS**: Use Tailwind with utility classes, `cn()` for conditional class names
- **Error Handling**: Graceful UI fallbacks for errors
- **Patterns**: Use the built-in UI components from src/components/ui/ for consistency
- **File Structure**: Components in src/components, pages in src/app

## Project Architecture
- **Next.js 14 App Router**: This project uses Next.js 14+ with the App Router architecture
- **UI Components**: Built with Shadcn UI components (configuration in components.json)
  - New York style variant with slate base color
  - Components use Class Variance Authority (CVA) for variants
  - All UI components are in src/components/ui/
- **Styling**: 
  - Tailwind CSS with dark theme by default
  - CSS custom properties for theming (see globals.css)
  - Custom utilities: `cn()` function in src/lib/utils.ts for class merging
- **Component Structure**:
  - `layout/`: Contains site-wide layout components (Header, Footer)
  - `sections/`: Page section components organized by feature (Hero, Features, Testimonials, etc.)
  - `ui/`: Reusable Shadcn UI components (buttons, cards, accordion, etc.)
  - `sections/cohorts/`: Cohort-specific components
  - `sections/workshops/`: Workshop-specific components
- **Routing**:
  - `/` - Landing page with multiple sections
  - `/cohorts` - Cohorts overview page
  - `/cohorts/cohort[number]` - Individual cohort pages
- **Aliases**: Uses path aliases configured in tsconfig.json and components.json (@/components, @/lib, etc.)
- **Client Components**: Use 'use client' directive for interactive components (Header, FAQ accordion, etc.)
- **Assets**: Images stored in src/images directory, with subdirectories:
  - `logos/` - Company and partner logos
  - `testimonials/` - WebP format testimonial images
  - `thumbs/` - Thumbnail images

## Key Dependencies & Features
- **Analytics**: Google Analytics (gtag) with NEXT_PUBLIC_GA_ID environment variable
- **Fonts**: Geist Sans, Geist Mono, and Satoshi Variable fonts
- **Icons**: Lucide React and Radix UI icons
- **Special Components**:
  - Typewriter effect for animated text
  - Custom candles background for trading theme
  - Vercel Analytics integration

## Environment Variables
- `NEXT_PUBLIC_GA_ID` - Google Analytics tracking ID (see .env.example)

## Trading/Crypto Focus
This is a crypto/algorithmic trading education platform (Botcamp) with:
- Trading-themed visual elements (candles background)
- Market-making and trading strategy content
- Cohort-based learning structure with specific enrollment dates
- Workshop and course sections for trading education

Always maintain the existing project structure and follow the conventions established in the codebase.