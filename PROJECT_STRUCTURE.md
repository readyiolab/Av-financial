# AV Financial - Project Structure

## 📁 Folder Structure

```
src/
├── assets/                    # Static assets (images, fonts, etc.)
│   └── av-financial-logo.png
│
├── components/               # Reusable React components
│   ├── layout/              # Layout components
│   │   ├── Header.tsx       # Main navigation header
│   │   └── Footer.tsx       # Site footer
│   │
│   ├── sections/            # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── StatsSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ApproachSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── WhyChooseSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   └── CTASection.tsx
│   │
│   └── ui/                  # shadcn/ui components
│       ├── button.tsx
│       ├── card.tsx
│       └── ...
│
├── hooks/                   # Custom React hooks
│   ├── use-mobile.tsx
│   └── use-toast.ts
│
├── lib/                     # Utility functions
│   └── utils.ts
│
├── pages/                   # Page components
│   ├── Index.tsx           # Home page
│   └── NotFound.tsx        # 404 page
│
├── App.tsx                  # Main app component
├── main.tsx                 # Application entry point
└── index.css                # Global styles & design system
```

## 🎨 Design System

All design tokens are defined in `src/index.css`:

### Colors (HSL)
- **Primary**: `174 72% 56%` (Turquoise)
- **Secondary**: `258 59% 51%` (Purple)
- **Primary Glow**: `174 82% 66%`
- **Secondary Glow**: `258 69% 61%`

### Gradients
- `gradient-primary`: Turquoise to Purple
- `gradient-hero`: Subtle hero background
- `gradient-card`: Card background gradient

### Shadows
- `shadow-soft`: Light shadow for cards
- `shadow-medium`: Medium shadow for hover states
- `shadow-glow`: Primary color glow effect
- `shadow-glow-secondary`: Secondary color glow effect

### Typography
- **Headings**: Poppins font family
- **Body**: Inter font family

## 📝 Naming Conventions

### Component Files
- **PascalCase** for component files: `HeroSection.tsx`, `Header.tsx`
- **Descriptive names** that indicate purpose: `CTASection.tsx`, `TestimonialsSection.tsx`

### Component Structure
```typescript
// Section components follow this pattern:
export const ComponentName = () => {
  return (
    <section id="section-id" className="...">
      {/* Content */}
    </section>
  );
};
```

### CSS Classes
- Use **semantic tokens** from design system
- Avoid hardcoded colors (e.g., `text-white`, `bg-black`)
- Use design system classes: `gradient-primary`, `shadow-glow`, `text-gradient`

### Variables & Functions
- **camelCase** for variables and functions
- **Descriptive names**: `isScrolled`, `handleScroll`, `navLinks`

## 🚀 Component Guidelines

### Layout Components (`components/layout/`)
- Persistent UI elements (header, footer)
- Handle site-wide navigation and branding

### Section Components (`components/sections/`)
- Self-contained page sections
- Include their own styles and data
- Can be reordered or removed independently

### UI Components (`components/ui/`)
- Reusable shadcn/ui components
- Styled with design system tokens
- No business logic

## 🎯 Best Practices

1. **Design System First**: Always use tokens from `index.css`
2. **Component Isolation**: Each section is self-contained
3. **Responsive Design**: Mobile-first approach with Tailwind breakpoints
4. **Semantic HTML**: Use proper HTML5 semantic elements
5. **Accessibility**: Include proper ARIA labels and keyboard navigation
6. **Performance**: Lazy load images, optimize animations

## 📱 Responsive Breakpoints

- **Mobile**: Default (< 768px)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Large Desktop**: `xl:` (1280px+)

## 🔧 Configuration Files

- `tailwind.config.ts`: Tailwind CSS configuration
- `index.html`: HTML template with meta tags and fonts
- `vite.config.ts`: Vite build configuration
- `tsconfig.json`: TypeScript configuration
