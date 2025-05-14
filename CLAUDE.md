# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands
- `npm run dev` - Start the development server
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
- **Next.js App Router**: This project uses Next.js with the App Router architecture
- **UI Components**: Built with Shadcn UI components (configuration in components.json)
- **Styling**: Tailwind CSS with the New York style and slate base color
- **Component Structure**:
  - `layout/`: Contains site-wide layout components (Header, Footer)
  - `sections/`: Page section components organized by feature
  - `ui/`: Reusable UI components (buttons, cards, etc.)
- **Aliases**: Uses path aliases configured in components.json (@/components, @/lib, etc.)
- **Client Components**: Uses 'use client' directive for interactive components
- **Assets**: Images stored in src/images directory, with subdirectories for logos, testimonials, etc.

Always maintain the existing project structure and follow the conventions established in the codebase.