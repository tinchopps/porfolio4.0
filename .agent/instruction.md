# Portfolio 4.0 - Project Context & Instructions

## 🎯 Project Overview
This is **Martín Lucero's** personal portfolio website, built to showcase his work as a **Full Stack Developer**, **IT Educator**, and **AI/Data enthusiast**.

## 👤 About Martín
- **Location**: General Rodríguez, Buenos Aires, Argentina
- **Current Studies**:
  - Bachelor's in Information Systems (UNLu) - In Progress
  - Teaching Degree in Computer Science (UNIPE) - In Progress
  - Generative AI Diploma (Google & Universidad Nacional del Delta) - 2024/2025
- **Philosophy**: Believes in human-centered technology that empowers people rather than replacing them. Has a strong connection with nature.

## 🛠️ Tech Stack
- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Internationalization**: i18next (EN, ES, JA, PT)
- **Icons**: Lucide React
- **Animations**: CSS Keyframes (migrating to Framer Motion)

## 📁 Project Structure
```
src/
├── components/         # React components
│   ├── About.tsx       # About section with photo carousel
│   ├── Blog.tsx        # Blog posts section
│   ├── Contact.tsx     # Contact form and info
│   ├── Experience.tsx  # Professional experience timeline
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Landing hero section
│   ├── Modal.tsx       # Reusable modal component
│   ├── MoreAbout.tsx   # Additional info and testimonials
│   ├── Projects.tsx    # Featured projects grid
│   └── Skills.tsx      # Technical skills display
├── hooks/              # Custom React hooks
├── i18n/               # Internationalization
│   └── translations/   # Language files (en.json, es.json, ja.json, pt.json)
├── types/              # TypeScript type definitions
├── App.tsx             # Main app component (contains theme styles)
├── index.css           # Tailwind directives
└── main.tsx            # App entry point
```

## 🎨 Current Design
- **Theme**: Dark mode default with light mode toggle
- **Colors**: Purple (#8B5CF6) and Blue (#2563EB) gradient accents
- **Layout**: Traditional vertical scroll with sections
- **Typography**: Inter font family

## 🚀 Active Rework (December 2024)
We are transforming the portfolio into a **Bento Grid** design:
1. Modern dashboard-like layout instead of vertical scroll
2. Framer Motion animations for premium feel
3. New AI-focused section highlighting Gemini/BigQuery work
4. Improved theme management (proper Tailwind dark mode)
5. Interactive elements and micro-interactions

## 📝 Key Translation Keys (for new components)
When adding new content, remember to update ALL 4 language files:
- `src/i18n/translations/en.json`
- `src/i18n/translations/es.json`
- `src/i18n/translations/ja.json`
- `src/i18n/translations/pt.json`

## 🔗 External Links
- **GitHub**: https://github.com/tinchopps
- **LinkedIn**: https://linkedin.com/in/tinchopps
- **Email**: martinolm1999@gmail.com

## ⚡ Commands
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 📌 Important Notes
- Profile image is at `/public/perfil.jpg`
- Project images are in `/public/` (op.png, bot_restaurante1.png, etc.)
- Some projects link to GitHub READMEs instead of live demos
- The Blog section content is defined in the translation files
