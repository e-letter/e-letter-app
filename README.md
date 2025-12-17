# E-Letter App

A modern Next.js application with TypeScript, Tailwind CSS, shadcn/ui, Framer Motion, and Lucide icons.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Package Manager**: Bun
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React

## Prerequisites

- [Bun](https://bun.sh) installed on your system

## Getting Started

### Install Dependencies

```bash
bun install
```

### Development Server

Run the development server:

```bash
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The page auto-updates as you edit files.

### Build for Production

```bash
bun run build
```

### Start Production Server

```bash
bun start
```

## Project Structure

```
src/
├── app/              # App Router pages and layouts
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
│   └── utils.ts     # shadcn/ui utility functions
└── styles/          # Global CSS files
public/              # Static assets
```

## Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun start` - Start production server
- `bun run lint` - Run ESLint

## Adding Components

To add shadcn/ui components:

```bash
bunx shadcn add <component-name>
```

Example:

```bash
bunx shadcn add button
bunx shadcn add card
```

## Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion)
- [Lucide Icons](https://lucide.dev)

## Notes

- The project uses Tailwind CSS v4 with the new `@tailwindcss/postcss` plugin
- ESLint is pre-configured for Next.js best practices
- TypeScript is enabled by default for type safety
