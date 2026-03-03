# dev-portfolio-3669

## 🎯 Project Objective
A modern landing page for a developer

## 🧠 Project Memory (Context for the AI)
This file serves as the central memory of the project. **Whenever you (AI) add a new route, service, or change the main architecture, you MUST update this file.**

### 🛠️ Tech Stack
- Framework: AnalogJS v1.0 + Angular 18+
- Backend: API Routes (h3) + Prisma ORM (SQLite)
- Routing: File-based routing (src/app/pages)
- Styling: Tailwind CSS 3
- Architecture: Standalone Components, Signals, Control Flow (@if, @for)

### 📂 Current Pages and Routes
- `home`
- `about`
- `projects`
- `projects/[slug]`
- `contact`

### 🧩 Shared Components
- `NavbarComponent` (src/app/components/navbar.component.ts)
- `FooterComponent` (src/app/components/footer.component.ts)

### 📝 Project Rules
- Components must use `export default class`.
- HTML must NEVER be mixed in TypeScript.
- All template variables must be declared in the .ts.