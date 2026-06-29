<div align="center">
  <table border="1">
    <tr>
      <td align="center" style="padding: 20px;">
        <h3>📢 Domain & Email Migration Notice</h3>
        <p>From <b>July 24th, 2026</b>, Smarteg will transition to new domains as <code>smarteg.app</code> will not be renewed:</p>
        <p>🌐 <b>Website:</b> <a href="https://smarteg.faizath.com">smarteg.faizath.com</a> (formerly <i>smarteg.app</i>)<br>
        ⚙️ <b>API:</b> <a href="https://smarteg-api.faizath.com">smarteg-api.faizath.com</a> (formerly <i>api.smarteg.app</i>)<br>
        📧 <b>Email:</b> <a href="mailto:contact@smarteg.faizath.com">contact@smarteg.faizath.com</a> (formerly <i>contact@smarteg.app</i>)<br>
        🛰️ <b>CDN:</b> <a>smarteg-cdn.faizath.com</a> (formerly <i>cdn.smarteg.app</i>)<br>
        📈 <b>Status Pages:</b> <a href="https://status.faizath.com/status/smarteg">https://status.faizath.com/status/smarteg</a> (formerly <i>status.smarteg.app</i>)
        </p>
      </td>
    </tr>
  </table>
</div>

# 🍽️ Smarteg — Frontend (PWA)

<div align="center">

![Smarteg Logo](assets/logo.png)

**Empowering Indonesian Warteg with Smart Stock Management & AI-Powered Analytics**

[![Garuda Hacks 6.0](https://img.shields.io/badge/Garuda_Hacks-6.0-red.svg?style=for-the-badge)](https://gh6.devpost.com/)
[![Devpost](https://img.shields.io/badge/Devpost-Smarteg-003E54?style=for-the-badge&logo=devpost)](https://devpost.com/software/smarteg-voice-ai-for-zero-waste-eateries)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

[![Next.js](https://img.shields.io/badge/Next.js-15.5-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?style=for-the-badge&logo=cloudflare)](https://workers.cloudflare.com/)
[![PWA](https://img.shields.io/badge/PWA-Enabled-5A0FC8?style=for-the-badge&logo=pwa)](https://web.dev/progressive-web-apps/)

🌐 **Live App:** [smarteg.faizath.com](https://smarteg.faizath.com)

</div>

---

## 🌟 What is Smarteg?

**Smarteg** is a comprehensive **Progressive Web Application (PWA)** specifically designed to revolutionize how **Warteg** (traditional Indonesian food stalls) and **UMKM** (Usaha Mikro, Kecil, dan Menengah) manage their daily operations.

Built as a submission for **[Garuda Hacks 6.0](https://gh6.devpost.com/)** — Indonesia's largest hackathon — Smarteg combines **Google Gemini 2.0 Flash Live AI** with a **voice-first interface** to help small food businesses minimize waste, optimize inventory, and maximize profits through data-driven insights.

> 🏆 View our Devpost submission: [smarteg-voice-ai-for-zero-waste-eateries](https://devpost.com/software/smarteg-voice-ai-for-zero-waste-eateries)

This repository contains the **frontend PWA** (Next.js). The backend API lives in a separate repository — see [Repositories](#-repositories) below.

---

## 🎯 The Problem

### 🗑️ Food Waste Crisis
- **40% of prepared food** in traditional warungs goes to waste daily
- No predictive analytics leads to chronic overproduction
- Zero real-time stock visibility causes inefficient planning

### 📊 Manual Operations Inefficiency
- Paper-based inventory tracking prone to costly errors
- No historical data for demand forecasting
- Time-consuming manual stock counting and sales recording

### 💰 Revenue Loss
- Inability to identify best-selling items and peak hours
- Poor pricing strategies due to lack of cost analysis
- Missed customer engagement opportunities

### 📱 Technology Gap
- Traditional businesses lack access to modern management tools
- Enterprise solutions are too expensive for small vendors
- No mobile-first tools designed for the local Indonesian context

---

## ✨ Our Solution

### 🤖 AI-Powered Analytics
- **Google Gemini 2.0 Flash Live** integration for intelligent demand forecasting
- Automated discrepancy detection between expected vs. actual stock
- Smart production quantity recommendations from historical trends

### 🎤 Voice-First Interface
- **Web Speech API** for completely hands-free stock management
- Speech-to-Text for quick inventory updates while cooking
- Text-to-Speech audio confirmations and alerts

### 📱 Progressive Web App
- **Works offline** with Workbox service worker caching
- **Native app experience** — installable without an app store
- **Cross-platform** — Android, iOS, and Desktop from one codebase

### 📢 Automated Customer Engagement
- **Telegram Bot** integration for fresh food announcements
- Real-time notifications when food is ready
- Automated marketing at peak freshness

### 📈 Data-Driven Insights
- Interactive dashboards with daily, weekly, and monthly views
- Predictive analytics via weighted moving averages
- Cost analysis and profit margin optimization

---

## 🛠️ Tech Stack

| Category | Technology | Purpose |
|----------|------------|---------|
| **Framework** | Next.js 15.5 (App Router) | Full-stack React framework with RSC & Turbopack |
| **UI Library** | React 19.1 + TypeScript 5 | Type-safe component development |
| **Styling** | Tailwind CSS 3.4 + Radix UI + Shadcn/ui | Accessible, responsive design system |
| **State Management** | TanStack React Query 5 | Server state, caching, and background sync |
| **AI Integration** | Google Gemini 2.0 Flash Live (`@google/genai`) | Voice command NLP, demand forecasting, waste analysis, image generation |
| **Voice** | Web Speech API | Real-time STT and TTS for hands-free operation |
| **PWA** | `@ducanh2912/next-pwa` + Workbox | Service worker, offline support, installable app |
| **Charts** | Recharts 2.15 | Interactive sales and stock visualizations |
| **Forms** | React Hook Form 7 + Zod 4 | Validated, type-safe form handling |
| **Animation** | Framer Motion 12 | Smooth UI transitions |
| **Notifications** | Sonner 2 | Toast notifications |
| **Deployment** | Cloudflare Workers via `opennextjs-cloudflare` | Edge-deployed, globally distributed |
| **Cache Storage** | Cloudflare R2 | Incremental static regeneration cache |

---

## 📁 Project Structure

```
smarteg-app/
├── src/
│   ├── app/                     # Next.js App Router
│   │   ├── page.tsx             # Landing page
│   │   ├── layout.tsx           # Root layout (PWA metadata)
│   │   ├── dashboard/           # Main management dashboard
│   │   ├── home/                # Authenticated home view
│   │   ├── voice/               # Voice command interface
│   │   ├── prediction/          # AI supply forecasting
│   │   ├── today/               # Daily performance metrics
│   │   ├── waste/               # Waste tracking & analysis
│   │   ├── profile/             # User account management
│   │   ├── login/               # Authentication
│   │   ├── oauth-callback/      # Google OAuth handler
│   │   └── offline/             # PWA offline fallback
│   │
│   ├── components/
│   │   ├── ui/                  # 50+ Shadcn/Radix components
│   │   ├── auth/                # AuthWrapper, LoginButton
│   │   ├── common/              # Header, Footer, BottomNav
│   │   ├── dashboard/           # DashboardCard, PWALayout
│   │   ├── home/                # PortraitCard, StatCard
│   │   ├── landing/             # Hero, Features, Testimonials, FAQ, CTA
│   │   ├── today/               # MenuCard, TodayClient
│   │   └── waste/               # WasteClient
│   │
│   ├── services/
│   │   ├── ai/
│   │   │   ├── GenAIService.ts      # Gemini 2.0 Flash Live wrapper
│   │   │   ├── VoiceProcessor.ts    # Web Speech API handler
│   │   │   └── SupplyPrediction.ts  # Forecasting algorithms
│   │   └── websocket/
│   │       └── WebSocketService.ts  # Real-time sync client
│   │
│   ├── hooks/
│   │   ├── useAI.ts             # Main AI engine hook
│   │   └── use-mobile.ts        # Mobile detection
│   │
│   ├── lib/
│   │   ├── api.ts               # API client (Bearer token auth)
│   │   ├── api-config.ts        # Endpoint definitions
│   │   ├── types.ts             # Shared TypeScript types
│   │   └── prompt.js            # Gemini AI prompt templates
│   │
│   └── context/
│       └── AIContextProvider.tsx  # Global AI state
│
├── public/
│   ├── manifest.json            # PWA manifest
│   ├── sw.js                    # Workbox service worker
│   └── ...                      # Icons, images, SDG assets
│
├── next.config.mjs              # Next.js + PWA config
├── tailwind.config.ts           # Design tokens & theme
├── wrangler.jsonc               # Cloudflare Workers config
├── open-next.config.ts          # OpenNext Cloudflare adapter
└── tsconfig.json                # TypeScript config
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js 18+**
- **pnpm** (recommended) — `npm install -g pnpm`

### 1. Clone the Repository

```bash
git clone https://github.com/smarteg-app/smarteg-app.git
cd smarteg-app
```

### 2. Configure Environment Variables

```bash
cp .env.local.sample .env.local
```

Edit `.env.local`:

```env
NEXT_PUBLIC_API_URL=http://localhost:8080
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_GEMINI_API_KEY=your-google-ai-api-key

# Optional: Analytics
NEXT_PUBLIC_UMAMI_ID=your-umami-tracking-id
NEXT_PUBLIC_UMAMI_DOMAINS=localhost
```

> For the backend API, see [smarteg-api](https://github.com/smarteg-app/smarteg-api) setup instructions.

### 3. Install & Run

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 Features

- 🔐 **Google OAuth 2.0** — Secure one-click login
- 🍽️ **Menu Management** — Full CRUD with icon and pricing support
- 🎤 **Voice Commands** — Hands-free stock entry and sales recording via Web Speech API
- 🤖 **AI Demand Forecasting** — Gemini-powered predictions from historical data
- 📊 **Analytics Dashboards** — Daily, weekly, monthly charts with Recharts
- 🗑️ **Waste Tracking** — Track and analyze discarded food with AI recommendations
- 📢 **Telegram Integration** — Automated fresh food announcements to customer channels
- 📶 **Offline Support** — Full PWA with Workbox caching; works without internet
- 🌙 **Dark Mode** — System-aware theming via `next-themes`
- ⚡ **Real-time Sync** — WebSocket for live stock and sales updates

---

## ☁️ Deployment

This app is deployed to **Cloudflare Workers** using [OpenNext.js](https://opennext.js.org/cloudflare):

```bash
# Preview locally (Cloudflare Workers runtime)
pnpm preview

# Deploy to Cloudflare Workers
pnpm deploy
```

Incremental Static Regeneration cache is stored in a **Cloudflare R2** bucket (`smarteg-web-inc-cache`). Configure your `wrangler.jsonc` with the appropriate `account_id` before deploying.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**🍽️ Made with ❤️ for Indonesian Warteg and UMKM community 🇮🇩**

**Built at [Garuda Hacks 6.0](https://gh6.devpost.com/) · [View Submission on Devpost](https://devpost.com/software/smarteg-voice-ai-for-zero-waste-eateries)**

[🌐 Website](https://smarteg.faizath.com) • [📧 Contact](mailto:contact@smarteg.faizath.com) • [⚙️ API Repo](https://github.com/smarteg-app/smarteg-api)

</div>
