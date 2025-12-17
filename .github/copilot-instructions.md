## Project Setup Instructions

This is a Next.js project with TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Lucide icons.

### Quick Start

```bash
# Install dependencies (using Bun)
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Start production server
bun start
```

### Project Structure

- **src/app** - Next.js App Router pages and layouts
- **src/components** - React components (including shadcn/ui components)
- **src/lib** - Utility functions and helpers
- **public** - Static assets
- **components.json** - shadcn/ui configuration

### Adding Components

Add new shadcn/ui components:

```bash
bunx shadcn add button
bunx shadcn add card
```

### Key Technologies

- **Next.js 16** with App Router and TypeScript
- **Tailwind CSS v4** for styling
- **shadcn/ui** for pre-built, customizable components
- **Framer Motion** for animations
- **Lucide React** for icons

### Development Guidelines

- Use TypeScript for type safety
- Component imports use the `@/` path alias for clean imports
- UI components should be in `src/components/ui`
- Reusable components should be in `src/components`
- Utilities are in `src/lib/utils.ts`

### Available Scripts

- `bun run dev` - Start the development server at http://localhost:3000
- `bun run build` - Build for production
- `bun start` - Start the production server
- `bun run lint` - Run ESLint to check code quality

### Links

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [shadcn/ui Docs](https://ui.shadcn.com)
- [Framer Motion Docs](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)
