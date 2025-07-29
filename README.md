# ADmyBRAND Insights Dashboard

## 🚀 Project Overview

**ADmyBRAND Insights Dashboard** is a modern, mobile-friendly analytics dashboard built with Next.js and React. It provides marketing teams and campaign managers with a comprehensive, real-time overview of campaign performance, user engagement, and revenue trends—all in one place.

---

## 🧩 Problem Statement

Marketing teams often struggle to:
- Aggregate campaign data from multiple sources
- Visualize key metrics in a clear, actionable way
- Monitor real-time performance and make data-driven decisions quickly

**ADmyBRAND Insights Dashboard** solves these problems by:
- Centralizing campaign analytics in a single, interactive dashboard
- Providing real-time updates and visualizations for revenue, users, conversions, and more
- Offering a mobile-optimized, responsive UI for on-the-go access
- Enabling easy filtering, searching, and exporting of campaign data

---

## 🛠️ Tech Stack

| Layer         | Technology                | Purpose/Notes                                 |
|---------------|--------------------------|-----------------------------------------------|
| Frontend      | Next.js (v13+)           | React framework for SSR/SSG, routing, export  |
|               | React (v18)              | UI library                                    |
|               | TypeScript               | Type safety                                   |
| Styling       | Tailwind CSS             | Utility-first CSS framework                   |
|               | PostCSS                  | CSS processing                                |
| UI Components | Radix UI                 | Accessible, headless UI primitives            |
|               | Lucide React             | Icon library                                  |
|               | Recharts                 | Data visualization (charts, graphs)           |
|               | Custom Components        | Dashboard, Sidebar, Cards, etc.               |
| State Mgmt    | React useState/useEffect | Local state, real-time updates                |
| Data          | Mock Data (local)        | Easily swappable for real APIs                |
| Deployment    | Netlify                  | Static hosting, CI/CD from GitHub             |
|               | GitHub                   | Source control, collaboration                 |

---

## 📱 Features

- **Dashboard Overview:** Key metrics at a glance (revenue, users, conversions, growth)
- **Interactive Charts:** Revenue trends, user device breakdown, conversion channels
- **Campaign Table:** Filter, search, and export campaign data
- **Mobile Responsive:** Fully optimized for all device sizes
- **Dark/Light Theme:** User-selectable or system-based
- **Real-time Updates:** Simulated live data for demo purposes

---

## 🏁 Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/aksghgf/admybrand-insights-dashboard.git
   cd admybrand-insights-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run locally:**
   ```bash
   npm run dev
   ```

4. **Build for production:**
   ```bash
   npm run build:netlify
   ```

5. **Deploy:**  
   Connect your repo to Netlify and set:
   - Build command: `npm run build:netlify`
   - Publish directory: `out`

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## 🤖 AI Usage Report

**Project**: ADmyBRAND Insights – AI-Powered Analytics Dashboard  
**Developer**: Abhishek Tiwari  
**Purpose**: Build a visually modern, responsive analytics dashboard using AI-assisted development practices.

---

### 🧠 Overview of AI Usage

This project was built with a strong focus on leveraging AI tools to accelerate development, ensure modular architecture, and maintain high-quality UI/UX standards. AI was used throughout the lifecycle — from layout planning and code scaffolding to styling and documentation.

---

### 🛠️ AI Tools Used

| Tool | Purpose |
|------|---------|
| **ChatGPT (GPT-4o)** | Main assistant for component scaffolding, layout structure, prompt engineering |
| **GitHub Copilot** | Real-time code suggestions inside the code editor |
| **Gemini** | UI layout ideas and design inspiration |
| **Cursor IDE** | AI-powered in-editor debugging and code refactoring suggestions |

---

### 🔧 Key Use Cases

- Created responsive layout scaffolding using AI prompts
- Generated reusable React components (MetricCard, Chart, Table)
- Implemented chart logic using `Recharts` with mock marketing data
- Styled with TailwindCSS and `shadcn/ui` via AI suggestions
- Added loading skeletons, hover animations, and transitions
- Export functionality for CSV (via AI-generated logic)
- Integrated dark/light mode toggle with local state

---

### 📋 Sample Prompts Used

```plaintext
1. "Create a responsive Next.js 14 dashboard layout with metric cards and charts using shadcn/ui"
2. "Generate a reusable React component for a Pie chart using Recharts and Tailwind"
3. "Add animated skeleton loaders for card and chart components"

