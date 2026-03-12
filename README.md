<div align="center">

[![banner](https://capsule-render.vercel.app/api?type=waving&color=0:0d1117,100:e50914&height=140&section=header&text=Movie+Application&fontSize=36&fontColor=ffffff&fontAlignY=50&desc=Browse+Trending+Movies+with+React+%2B+TMDB&descSize=14&descAlignY=70&descFontColor=8b949e)](https://github.com/Dipanshu-js/Movie-Application)

[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Appwrite](https://img.shields.io/badge/Appwrite-FD366E?style=for-the-badge&logo=appwrite&logoColor=white)](https://appwrite.io)
[![License](https://img.shields.io/github/license/Dipanshu-js/Movie-Application?style=for-the-badge&color=8b949e)](LICENSE)
[![Stars](https://img.shields.io/github/stars/Dipanshu-js/Movie-Application?style=for-the-badge&color=ffd43b)](https://github.com/Dipanshu-js/Movie-Application/stargazers)

</div>

---

Browse trending movies, search titles, and explore content powered by the TMDB API. Trending algorithm tracked with Appwrite. Fully responsive with a sleek dark UI.

---

## ⚙️ Tech Stack:

- **[React.js](https://react.dev/)** — Component-based UI with hooks and state management.
- **[Vite](https://vitejs.dev/)** — Fast dev server with HMR and optimized production builds.
- **[Tailwind CSS](https://tailwindcss.com/)** — Utility-first CSS for rapid responsive styling.
- **[Appwrite](https://appwrite.io/)** — Open-source BaaS for tracking trending searches and movie views.
- **[TMDB API](https://developer.themoviedb.org/)** — Movie data, posters, ratings, and metadata.
- **[react-use](https://github.com/streamich/react-use)** — Essential React hooks (debounce for search).

---

## 🔋 Features:

👉 **Browse All Movies** — Explore a wide catalogue powered by the TMDB API.

👉 **Search Movies** — Debounced search with real-time results.

👉 **Trending Algorithm** — Tracks which movies users search most via Appwrite, surfaces them dynamically.

👉 **Modern Dark UI** — Custom design system with `DM Sans` + `Bebas Neue` fonts and a deep purple/black palette.

👉 **Fully Responsive** — Works seamlessly across mobile, tablet, and desktop.

---

## 🤸 Quick Start:

**Prerequisites:** [Node.js](https://nodejs.org/en) · [npm](https://www.npmjs.com/) · [TMDB API key](https://developer.themoviedb.org/) · [Appwrite project](https://appwrite.io)

```bash
git clone https://github.com/Dipanshu-js/Movie-Application.git
cd Movie-Application
npm install
```

Create `.env.local`:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key
VITE_APPWRITE_PROJECT_ID=your_appwrite_project_id
VITE_APPWRITE_DATABASE_ID=your_appwrite_database_id
VITE_APPWRITE_COLLECTION_ID=your_appwrite_collection_id
```

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🔑 API Keys:

| Key                           | Source                                                                             | Used for                |
| ----------------------------- | ---------------------------------------------------------------------------------- | ----------------------- |
| `VITE_TMDB_API_KEY`           | [themoviedb.org](https://developer.themoviedb.org/reference/intro/getting-started) | Movie data & posters    |
| `VITE_APPWRITE_PROJECT_ID`    | [appwrite.io](https://appwrite.io)                                                 | Trending tracker        |
| `VITE_APPWRITE_DATABASE_ID`   | Appwrite dashboard                                                                 | Trending database       |
| `VITE_APPWRITE_COLLECTION_ID` | Appwrite dashboard                                                                 | Search count collection |

---

## 🤝 Contributing:

Issues and PRs welcome.

```bash
git checkout -b feature/my-feature
git commit -m "feat: my feature"
git push origin feature/my-feature
# open a pull request
```

---

## 📄 License:

MIT © [Dipanshu Singh](https://github.com/Dipanshu-js)

[![footer](https://capsule-render.vercel.app/api?type=waving&color=0:e50914,100:0d1117&height=80&section=footer)](https://github.com/Dipanshu-js/Movie-Application)
