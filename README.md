# Appscrip Task — Rizwan Sheikh

A fully functional **Product Listing Page (PLP)** built with **Next.js 16** using Server Side Rendering (SSR).

## 🔗 Links
- **Live Site:** [your-netlify-url.netlify.app](#) ← replace after Netlify deploy
- **GitHub:** https://github.com/Rizwansheik666/appscrip-task-rizwan

## 🚀 Tech Stack
- Next.js 16 (App Router)
- React 18
- Pure CSS Modules (no Tailwind, no Bootstrap)
- Fake Store API — https://fakestoreapi.com

## ✅ Features
- Server Side Rendering (SSR) — products fetched on server
- Responsive — Mobile, Tablet, Desktop
- Filter Sidebar with accordion sections
- Sort dropdown
- Wishlist toggle on each product
- SEO — Title, Description, H1/H2 tags, JSON-LD Schema, Alt text
- Minimal dependencies — only Next.js + React

## 📁 Project Structure
```
src/
├── app/
│   ├── layout.js        # Root layout + metadata + JSON-LD
│   ├── page.js          # SSR page — fetches products server side
│   ├── page.module.css
│   └── globals.css
├── components/
│   ├── Header/
│   ├── Footer/
│   ├── FilterSidebar/
│   ├── SortBar/
│   ├── ProductCard/
│   └── ProductGrid/
└── lib/
    ├── fetchProducts.js  # API utility
    └── FilterContext.js  # Shared filter state
```

## 🛠️ Setup
```bash
npm install
npm run dev
```

Open http://localhost:3000
