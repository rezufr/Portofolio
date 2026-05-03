# Portfolio Website Redesign Plan
## Target: Recreate Design from raviklaassens.com

### Project Overview
Redesigning a React + Vite portfolio from a basic starter template to match the sophisticated, minimalist design of Ravi Klaassens' portfolio (raviklaassens.com).

---

## CURRENT STATE ANALYSIS

### Project Structure
```
Portfolio/
├── src/
│   ├── App.tsx (122 lines - basic Vite starter template)
│   ├── App.css (185 lines - component styles)
│   ├── index.css (112 lines - global styles + theming)
│   ├── main.tsx (entry point)
│   ├── assets/
│   │   ├── hero.png
│   │   ├── react.svg
│   │   └── vite.svg
│   └── components/ (EMPTY - no components yet)
├── package.json (React 19, Tailwind CSS, Vite, TypeScript)
├── vite.config.ts
├── index.html
└── tsconfig.json
```

### Current Implementation
- **App.tsx**: Basic Vite + React starter with counter button, hardcoded sections
- **Styling Strategy**: CSS-in-module (App.css) with SCSS-like nesting + CSS custom properties
- **Color System**: Implemented with CSS variables for light/dark mode support
- **Responsive**: Mobile-first design using media queries (max-width: 1024px)
- **Layout**: Centered max-width (1126px) with border sides
- **Typography**: System fonts (system-ui, Segoe UI, Roboto) with consistent hierarchy

### Tech Stack
- React 19.2.5
- Vite 8.0.9
- TypeScript ~6.0.2
- Tailwind CSS 4.2.4 (configured but underutilized)
- PostCSS & Autoprefixer
- ESLint with React & TypeScript support

---

## TARGET DESIGN ANALYSIS (raviklaassens.com)

### Design Philosophy
- Minimalist, modern aesthetic
- Clean grid-based structure
- Sophisticated neutral palette (blacks, whites, grays)
- High contrast for readability
- Premium positioning, design-driven approach

### Key Sections Structure
1. **Header/Navigation** - Top navigation with streamlined links
2. **Hero Section** - Opening statement: "Design & Code for those who refuse to settle"
3. **Portfolio Showcase** - 6 project case studies with thumbnails
4. **Service Offerings** - Dual pathways (For Agencies, For Brands)
5. **Insights Section** - Blog-style content pieces
6. **Contact & Social** - Multiple engagement pathways
7. **Footer** - Additional navigation/info

---

## REDESIGN PHASES

### Phase 1: Component Architecture
- [ ] Create component hierarchy
  - [ ] Header/Navigation
  - [ ] Hero Section
  - [ ] Portfolio Grid & Project Card
  - [ ] Service Offerings
  - [ ] Insights/Blog Section
  - [ ] Contact Section
  - [ ] Footer
- [ ] Set up reusable UI components

### Phase 2: Design Token System
- [ ] Define color palette
- [ ] Set up typography system
- [ ] Create spacing/sizing scale
- [ ] Define shadow system
- [ ] Update Tailwind config

### Phase 3: Global Styles & Layout
- [ ] Update index.css with design tokens
- [ ] Create base layout wrapper
- [ ] Implement grid system
- [ ] Set up responsive behavior

### Phase 4: Content & Data Structure
- [ ] Create data structures for projects, services, insights
- [ ] Decide on data storage approach

### Phase 5: Component Development
- [ ] Navigation with active states
- [ ] Hero section
- [ ] Project Card component
- [ ] Portfolio Grid
- [ ] Service cards
- [ ] Blog cards
- [ ] Contact section
- [ ] Footer

### Phase 6: Styling & Polish
- [ ] Apply design tokens
- [ ] Implement hover states
- [ ] Ensure consistent spacing
- [ ] Typography refinement

### Phase 7: Responsive Design
- [ ] Mobile optimization
- [ ] Tablet optimization
- [ ] Desktop optimization

### Phase 8: Performance & Accessibility
- [ ] Image optimization
- [ ] Lazy loading
- [ ] Performance audit
- [ ] Accessibility audit

---

## TECHNICAL DECISIONS

### Styling Approach
- Maintain CSS module approach with SCSS-like nesting
- Use Tailwind for utility classes where beneficial
- Component-specific CSS files for complex styling

### File Organization
```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── PortfolioGrid.tsx
│   ├── ProjectCard.tsx
│   ├── Services.tsx
│   ├── Insights.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   └── common/
├── data/
│   ├── projects.ts
│   ├── services.ts
│   └── insights.ts
├── styles/
│   ├── variables.css
│   ├── typography.css
│   └── layout.css
├── types/
│   └── index.ts
└── App.tsx
```

---

## CLARIFICATIONS NEEDED FROM USER

1. Should we use real portfolio project data or placeholder content?
2. Do you want animated transitions and micro-interactions?
3. Should we include a working contact form or just display contact info?
4. Any specific color palette preference?
5. Should navigation include a mobile hamburger menu?
6. Do you want dark mode support?

---

## REFERENCES
- Target: https://www.raviklaassens.com/
- Current Tech: React 19, Vite 8, TypeScript 6, Tailwind CSS 4
