# 🌐 Offline-First Progressive Web App (PWA) with React, TypeScript & IndexedDB

This is a modern **Progressive Web Application (PWA)** built with **React** and **TypeScript**, featuring offline-first capabilities using **IndexedDB**. Once the user visits the site and loads data, visual assets (such as icons, logos, and colors) are cached, and API responses are saved locally. This enables a seamless experience even without an internet connection — the app feels live, and data is persistently available.

## 🚀 Features

- ⚛️ Built with React and TypeScript
- 📦 Offline-first data storage with IndexedDB
- 🌀 Service Worker caches static assets (icons, colors, logos, etc.)
- 🌐 Persistent user experience without an internet connection
- 🔁 API requests are stored in IndexedDB and served locally when offline
- 📲 Installable on mobile devices like a native app

## 📁 Project Structure

├── public/
│ ├── manifest.json
│ ├── icons/
│ └── ...
├── src/
│ ├── services/
│ │ ├── indexedDB.ts // IndexedDB utility functions
│ │ └── apiService.ts // API logic and caching
│ ├── components/
│ ├── App.tsx
│ └── ...
├── service-worker.ts // Custom service worker for caching logic
├── tsconfig.json
└── package.json

bash
Copy
Edit

## 🧰 Tech Stack

- React
- TypeScript
- IndexedDB
- Workbox or custom service worker
- PWA Manifest
- Vite / CRA / Webpack (based on your setup)
- `pnpm` as package manager

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project directory
cd your-repo-name

# Install dependencies
pnpm install

# ⚠️ Build the project first
pnpm run build

# Start the local development server (only works after build)
pnpm run preview
⚠️ Important: This PWA setup requires pnpm run build to be executed first — otherwise, pnpm run dev will not properly serve cached assets or register the service worker.

🏗️ Production Build
bash
Copy
Edit
pnpm run build
📱 How Offline Mode Works
When the user visits the app with an internet connection:

All static assets are cached via the service worker.

API responses are stored in IndexedDB.

Later, if the user goes offline:

The app still loads as if it were live.

Data is retrieved from IndexedDB.

Visuals and layout remain intact through cached assets.

✅ Requirements
Modern browser with PWA and IndexedDB support

pnpm (you can install it via npm i -g pnpm)

📄 License
MIT License

🤝 Contributing
Feel free to open issues, suggest features, or submit pull requests!

