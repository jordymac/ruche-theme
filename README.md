# Ruche Shopify Project

> **⚠️ IMPORTANT**: All theme development happens in the [`ruche-theme/`](ruche-theme/) directory.

High-performance e-commerce store for Ruche - premium designer baby products.

## Quick Start

```bash
cd ruche-theme
npm install
shopify theme dev
```

## Project Structure

```
ruche-shopify/              # Project root (meta only)
├── ruche-theme/            # 👈 ALL DEVELOPMENT HAPPENS HERE
│   ├── assets/             # CSS, JS, images
│   ├── sections/           # Shopify sections
│   ├── snippets/           # Reusable components
│   ├── templates/          # Page templates
│   ├── config/             # Theme settings
│   ├── layout/             # Theme layouts
│   ├── locales/            # Translations
│   ├── docs/               # Activity logs
│   ├── Ruche Branding/     # Brand assets
│   ├── claude.md           # Project instructions
│   ├── ruche-rules.md      # Brand voice guidelines
│   └── package.json        # Build tools & scripts
├── README.md               # This file
├── LICENSE.md              # MIT License
└── .gitignore              # Git ignore rules
```

## For Developers

**Working directory**: Always `cd ruche-theme/` before starting work

**Key commands** (run from `ruche-theme/`):
```bash
npm run theme:dev           # Local development server
npm run theme:push:live     # Deploy to live theme (#136720220226)
npm run theme:push:dev      # Create/update dev theme
npm run theme:check         # Run theme linter
```

**Documentation**:
- [Project Instructions](ruche-theme/claude.md) - Complete project context
- [Activity Log](ruche-theme/docs/activity.md) - Development history
- [Brand Guidelines](ruche-theme/ruche-rules.md) - Brand voice & tone

## Tech Stack
- **Platform**: Shopify Basic (annual subscription)
- **Email/SMS**: Klaviyo
- **Analytics**: Microsoft Clarity
- **Theme Base**: Custom Dawn-based theme
- **Build Tools**: Webpack, PostCSS, Babel

## Brand Overview
**Product**: Premium silicone leather change mats & baby accessories
**SKUs**: 10-15 products
**Market**: Australian parents seeking design-forward baby products

**Colors**: `#3D3935` (black), `#545859` (grey), `#F3F3F3` (off-white)
**Fonts**: Arpona (headlines), Neue Haas Grotesk (body), This Reality (script)
**Aesthetic**: Editorial, collage elements, layered paper textures

## Performance Goals
- Lighthouse Score: **90+**
- Mobile Score: **85+**
- Page Load: **< 2 seconds**

## License
MIT License - See [LICENSE.md](LICENSE.md)

---

**Built with Shopify Dawn** | [Dawn Documentation](https://github.com/Shopify/dawn)
