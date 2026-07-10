<!-- <div align="center">
  <img src="/docs/banner.png" alt="AIESEC FnL Guide Hero Banner" width="100%" />
</div> -->

<h1 align="center">AIESEC Finance & Legal Guide</h1>

<p align="center">
  A modern, high-performance web transition guide designed to empower financial leadership within AIESEC. Built with React, Vite, and Tailwind CSS.
</p>

<p align="center">
  <a href="#tech-stack"><img src="https://img.shields.io/badge/React-19.2.0-blue.svg?style=for-the-badge&logo=react" alt="React" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Vite-7.2.4-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" /></a>
  <a href="#tech-stack"><img src="https://img.shields.io/badge/Tailwind_CSS-4.1.18-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" /></a>
  <a href="#license"><img src="https://img.shields.io/badge/License-MIT-success.svg?style=for-the-badge" alt="License" /></a>
</p>

---

## ✦ Overview

The **AIESEC Finance & Legal (FnL) Guide** is a comprehensive educational platform designed to streamline knowledge transfer for financial leaders. Moving away from static PDFs, this platform provides an interactive, accessible, and easily navigable compendium of accounting fundamentals, operational standards, governance protocols, and tools.

## ✨ Features

- **Component-Driven Architecture:** Built on highly reusable, pure React components.
- **SaaS-Grade Aesthetics:** Designed with depth, typography rhythm, and layered backgrounds inspired by industry-leading developer tools.
- **Fluid Animations:** Hardware-accelerated entrance and micro-interactions powered by Framer Motion.
- **Static Content Segregation:** Massive datasets (glossary terms, board protocols) are hoisted out of the render cycle into static stores for optimal memory performance.
- **Fully Responsive:** Edge-to-edge mobile optimization without sacrificing desktop density.

---

## 📸 Screenshots

> **Note:** Add high-quality screenshots of the application here.

| Home Dashboard | Governance & Legal |
| :---: | :---: |
| <!--<img src="/docs/home.png" width="400" />--> _Placeholder: Add screenshot_ | <!--<img src="/docs/governance.png" width="400" />--> _Placeholder: Add screenshot_ |

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | React 19 |
| **Bundler** | Vite 7 |
| **Routing** | React Router DOM v7 |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion v12 |
| **Icons** | Lucide React |

---

## 📁 Folder Structure

A highly maintainable, feature-co-located structure.

```text
src/
├── components/          # Shared, generic UI components
│   ├── InfoCard.jsx     # Reusable panel hierarchy component
│   ├── PageHeader.jsx   # Standardized page entrance header
│   └── Layout.jsx       # Root layout wrapper (Navbar & Footer)
├── pages/               # Route-level components
│   ├── Home.jsx         
│   ├── Glossary.jsx     
│   └── ...
├── data/                # Static content stores (prevents component bloat)
│   ├── glossaryData.jsx 
│   ├── standardsData.jsx
│   └── governanceData.jsx
├── index.css            # Global CSS, theme vars, and @utility extractions
├── App.jsx              # Application root and router definition
└── main.jsx             # Entry point
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (v18+ recommended) installed on your machine.

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/muhammad1234-max/AISEC_FNL_GUIDE_WEBSITE.git
cd AISEC_FNL_GUIDE_WEBSITE
npm install
```

### Running Locally

Start the Vite development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173/`.

### Building for Production

Compile and bundle the application:

```bash
npm run build
```

This generates a highly optimized static bundle in the `dist/` directory, ready to be deployed to Vercel, Netlify, or any static hosting provider.

---

## 🏛 Architecture & Design Philosophy

### Shared Components
To prevent the "AI-generated" look of inline utility soup, core layout elements are strictly componentized. The `<PageHeader />` and `<InfoCard />` components enforce a strict design rhythm across the entire platform.

### Custom Utility Classes
Tailwind's `@utility` directive is utilized heavily in `index.css` to define a semantic design language and reduce JSX bloat:
- `@utility standard-panel` / `@utility panel-featured`: Defines the strict card hierarchy.
- `@utility page-container`: Ensures consistent responsive margins.
- `@utility bg-grid-pattern`: Provides the signature premium layered background texture.

### Performance Optimizations
- **Memoization:** Expensive renders (such as live-filtering the Glossary) utilize `useMemo`.
- **Static Hoisting:** All arrays (`navItems`, `tabs`) and large text blocks are hoisted out of React components to prevent memory churn and unnecessary garbage collection during re-renders.

---

<details>
<summary><b>🗺 Future Roadmap</b></summary>
<br/>

- [ ] Implement dark mode toggle.
- [ ] Migrate static `src/data` files to a headless CMS (e.g., Sanity or Contentful).
- [ ] Add global search functionality via Cmd+K interface.
- [ ] Implement end-to-end testing with Playwright.
</details>

<details>
<summary><b>🤝 Contributing</b></summary>
<br/>

Contributions, issues, and feature requests are welcome!
1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request
</details>

---

## 👨‍💻 Developer

**Designed & Developed by Muhammad Abbas**

[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/muhammad1234-max)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/)

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.