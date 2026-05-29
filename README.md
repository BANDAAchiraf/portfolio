# 🚀 Portfolio — BANDA Achirafou

> Portfolio professionnel moderne de développeur Fullstack & Administrateur Systèmes et Réseaux.

![React](https://img.shields.io/badge/React-18-61dafb?logo=react&logoColor=white&style=flat-square)
![Vite](https://img.shields.io/badge/Vite-5-646cff?logo=vite&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwind-css&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

---

## ✨ Fonctionnalités

- 🎨 Design futuriste noir/bleu/violet avec animations Framer Motion
- 📱 Entièrement responsive (mobile first)
- 🌙 Dark mode natif
- ⚡ Performances optimisées (Vite + code splitting)
- 🔍 SEO ready (meta tags, OG tags)
- 📧 Formulaire de contact EmailJS
- 🗃️ Contenu 100% modifiable via fichiers JSON

---

## 📁 Structure du projet

```
portfolio/
├── data/                   # ← Modifier votre contenu ici
│   ├── profile.json        # Infos personnelles, bio, réseaux sociaux
│   ├── projects.json       # Vos projets
│   ├── services.json       # Vos services
│   └── skills.json         # Vos compétences
│
├── src/
│   ├── components/
│   │   ├── layout/         # Navbar, Footer
│   │   ├── sections/       # Hero, About, Skills, Projects, Services, Contact
│   │   └── ui/             # Loader, ScrollTop
│   ├── hooks/              # useTyping, useScrollReveal
│   └── index.css           # Styles globaux
│
├── .github/workflows/      # CI/CD GitHub Actions
├── vite.config.js
├── tailwind.config.js
├── vercel.json             # Config Vercel
└── netlify.toml            # Config Netlify
```

---

## 🛠️ Installation

### Prérequis

- **Node.js** ≥ 18
- **npm** ≥ 9

### Démarrage rapide

```bash
# Cloner le projet
git clone https://github.com/banda-achirafou/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173) dans votre navigateur.

---

## ✏️ Personnalisation du contenu

Tout le contenu est dans le dossier `data/`. Modifiez simplement les fichiers JSON :

### `data/profile.json`
```json
{
  "name": "Votre Nom",
  "email": "votre@email.com",
  "phone": "+229 XX XX XX XX",
  "social": {
    "github": "https://github.com/votre-username",
    "linkedin": "https://linkedin.com/in/votre-profil"
  }
}
```

### `data/projects.json`
Ajoutez vos projets dans le tableau `projects` :
```json
{
  "id": 7,
  "title": "Mon Nouveau Projet",
  "description": "Description du projet",
  "image": "https://url-de-image.com/image.jpg",
  "technologies": ["React", "Node.js"],
  "category": "frontend",
  "github": "https://github.com/...",
  "demo": "https://demo.example.com"
}
```

---

## 📧 Configuration EmailJS (formulaire de contact)

1. Créez un compte sur [emailjs.com](https://www.emailjs.com/)
2. Créez un service email et un template
3. Mettez à jour `data/profile.json` :
```json
"emailjs": {
  "serviceId": "service_xxxxxxx",
  "templateId": "template_xxxxxxx",
  "publicKey": "votre_public_key"
}
```

---

## 🚀 Déploiement

### Option 1 — Vercel (recommandé, le plus simple)

```bash
# Via CLI
npm i -g vercel
vercel
```

Ou connectez votre repo GitHub sur [vercel.com](https://vercel.com).

### Option 2 — Netlify

```bash
# Via CLI
npm i -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

Ou connectez votre repo GitHub sur [netlify.com](https://www.netlify.com).

### Option 3 — GitHub Pages

1. Dans `vite.config.js`, changez `base: '/'` en `base: '/portfolio/'` (remplacez par le nom de votre repo)
2. Activez GitHub Pages dans Settings > Pages > Source: **GitHub Actions**
3. Poussez votre code — le déploiement se fait automatiquement !

```bash
git init
git add .
git commit -m "🚀 Initial portfolio"
git branch -M main
git remote add origin https://github.com/VOTRE_USERNAME/portfolio.git
git push -u origin main
```

---

## 📜 Scripts disponibles

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build |
| `npm run deploy` | Déployer sur GitHub Pages |

---

## 🛠️ Technologies utilisées

- **React 18** + **Vite 5** — Framework et bundler ultra-rapide
- **Tailwind CSS 3** — Utility-first CSS
- **Framer Motion** — Animations fluides
- **Lucide React** — Icônes modernes
- **React Router 6** — Navigation SPA
- **EmailJS** — Formulaire de contact sans backend

---

## 📄 Licence

MIT © [BANDA Achirafou](https://github.com/banda-achirafou)
