# Ruche E-Commerce Project

## Project Overview
Building a lightning-fast, conversion-optimised Shopify store for Ruche - a high-end designer baby products company specializing in silicone leather change mats and baby accessories.

**Product Range**: 10-15 SKUs
**Target Market**: Australian parents seeking premium, design-forward baby products
**Brand Positioning**: High-end, editorial aesthetic, parent-first approach

## Tech Stack
- **Platform**: Shopify Basic (annual subscription)
- **Email/SMS Automation**: Klaviyo
- **Analytics**: Microsoft Clarity (free)
- **Monthly Cost**: $97 AUD + transaction fees (2.4% + $0.30)

## Brand Guidelines
**Color Palette**:
- Blacks: #3D3935
- Greys: #545859
- Off-white: #E6bc75

**Typography**:
- Headlines: Arpona (serif)
- Body: Neue Haas Grotesk
- Accents: This Reality (script)

**Design Aesthetic**:
- Collage/scrapbook elements with torn edges
- Editorial, fashion-forward photography
- Layered paper textures
- Signature weave pattern as background texture
- Monotone color scheme

## Original Requirements
### Core Goals
- ⚡ Lightning fast performance
- 🔄 E-commerce automation workflows
- 👤 Easy to use for client
- 📧 Email automation
- 🛒 Abandoned cart recovery
- 🔍 SEO optimized

### Performance Requirements
**Speed Optimization**:
- Shopify 2.0 theme with optimized code
- WebP image format with lazy loading
- Critical CSS inlining
- Minimal JavaScript bundles
- CDN implementation
- Compressed assets

**Mobile-First Design**:
- Touch-optimized product galleries
- Thumb-friendly navigation
- One-handed checkout flow
- Progressive web app features

### Shopify Theme Architecture
**Theme Selection & Setup**:
- Shopify 2.0 theme (Dawn, Impulse, or custom build)
- Headless consideration: For performance needs, consider Shopify Plus with Next.js frontend
- Custom sections for brand-specific layouts (collage elements, editorial grids)

**Performance Stack - Core Speed Optimizations**:
- Liquid optimization: Minimize API calls, use `{% liquid %}` tags
- Image handling: Shopify's native image transformation + WebP fallbacks
- Critical CSS: Inline above-the-fold styles, defer non-critical CSS
- JavaScript: ES6 modules, dynamic imports, remove unused Shopify scripts
- Caching: Leverage Shopify's CDN + browser caching headers

**Third-Party Integration Strategy**:
- Minimal apps: Use native Shopify features where possible
- Script loading: Async/defer all non-critical scripts
- Resource hints: Preload key assets, prefetch likely next pages

### E-commerce Automation & Workflows
**Shopify Flow (Plus) or Third-Party Options**:
- Inventory management: Auto-reorder triggers, low stock alerts
- Customer segmentation: VIP customers, first-time buyers, high AOV
- Review automation: Post-purchase review requests with brand styling
- Loyalty integration: Points for social shares, referrals

### Email Marketing & Automation
**Platform Integration**:
- Klaviyo (selected) for sophisticated segmentation
- Shopify Email for basic flows if needed

**Automated Flows**:
- Welcome series with brand storytelling
- Abandoned cart (3-email sequence: 1hr, 24hr, 72hr)
- Browse abandonment
- Post-purchase care guides
- Win-back campaigns for inactive customers
- VIP/loyalty tier communications

### Abandoned Cart Recovery
**Multi-Channel Approach**:
- Email sequence: 1hr, 24hr, 72hr follow-ups
- SMS recovery: For opted-in customers
- Facebook/Google retargeting: Dynamic product ads
- On-site recovery: Exit-intent popups, persistent cart notifications

### SEO Technical Implementation
**Core SEO Setup**:
- Schema markup: Product, review, breadcrumb schemas
- URL structure: Clean, descriptive URLs matching brand voice
- Meta optimization: Dynamic titles/descriptions
- Site speed: Core Web Vitals optimization
- Mobile-first indexing: Responsive design with mobile UX priority

**Content Strategy Integration**:
- Blog setup: Editorial content matching brand aesthetic
- Category pages: SEO-optimized collection pages
- Internal linking: Strategic link architecture

### Development Considerations
**Custom Code Requirements**:
- Brand pattern integration: CSS for signature weave backgrounds
- Typography loading: Web font optimization for Arpona/Neue Haas Grotesk
- Collage elements: CSS for torn paper effects, layered imagery
- Custom product badges: Icons for key features (vegan, germ-resistant, etc.)

**Analytics & Tracking**:
- Microsoft Clarity: Heatmaps, session recordings, user behavior
- Shopify Analytics: Native reporting
- Conversion tracking: Facebook Pixel, Google Ads (when needed)

### E-commerce Specific Features
**Product Presentation**:
- High-quality product imagery matching brand's editorial style
- 360° product views or detailed close-ups of the silicone leather texture
- Lifestyle imagery showing mums using products in aspirational settings
- Feature callouts highlighting key benefits (germ-resistant, wipe-clean, etc.)

**Trust & Conversion Elements**:
- Customer testimonials with authentic photography
- Security badges and guarantees
- Size/care guides with iconography matching brand style
- Social proof integration

**User Journey Optimization**:
- Simplified navigation reflecting "parent-first" positioning
- Quick add-to-cart functionality
- Guest checkout option
- Progress indicators during checkout

## Process Documentation
**CRITICAL**: Every time you perform actions related to the project, append your actions to `docs/activity.md` and read that file whenever you find it necessary to assist you. 

**Activity Log Format**:
```
## YYYY-MM-DD - HH:MM

### Task: [Brief description]

**User Request**: "[Exact prompt from user]"

**Actions Taken**:
- Action 1
- Action 2
- Action 3

**Files Modified**:
- path/to/file1.liquid
- path/to/file2.css

**Decisions Made**:
- Decision and rationale

**Next Steps**:
- [ ] Task 1
- [ ] Task 2

---
```

Always include:
1. Every prompt the user gives
2. All actions performed
3. Files created or modified
4. Key decisions and reasoning
5. Any blockers or questions
6. Next steps

Read `docs/activity.md` before starting new work to understand project context and avoid duplicating efforts.

## Project Structure
```
ruche-shopify/               # Project root (documentation & config only)
├── docs/
│   └── activity.md          # Activity log (you maintain this)
├── Ruche Branding/          # Brand assets (fonts, logos, images)
├── ruche-theme/             # ACTUAL SHOPIFY THEME (all development here)
│   ├── assets/              # CSS, JS, images
│   ├── config/              # Theme settings
│   ├── layout/              # Theme layouts
│   ├── sections/            # Reusable sections
│   ├── snippets/            # Reusable components
│   └── templates/           # Page templates
├── claude.md                # This file (project instructions)
├── README.md                # Project documentation
└── package.json             # Optional tooling
```

**IMPORTANT**: All theme development work must be done in the `ruche-theme/` directory. The root `ruche-shopify/` folder is for documentation, branding assets, and project management only.

## Development Priorities
1. **Performance First**: Every decision should prioritize speed
2. **Brand Consistency**: All elements must match Ruche aesthetic
3. **Mobile Experience**: Design mobile-first, enhance for desktop
4. **Conversion Optimization**: Focus on user journey and reducing friction
5. **Maintainability**: Client should be able to manage content easily

## Key Constraints
- 10-15 products only (small catalog)
- Budget-conscious: Starting with Shopify Basic plan
- Client will self-manage after launch
- Australian market focus
- Must integrate seamlessly with Klaviyo for email automation

## Questions to Ask Before Coding
1. Does this improve performance or hurt it?
2. Does this match the Ruche brand aesthetic?
3. Will the client be able to update this themselves?
4. Is this mobile-friendly?
5. Does this help conversion or create friction?

## Success Metrics
- Lighthouse Performance Score: 90+
- Mobile Performance Score: 85+
- Abandoned Cart Recovery Rate: 10-15%
- Email Revenue Attribution: 25-40% of total sales
- Page Load Time: Under 2 seconds

docs/activity.md
markdown# Ruche E-Commerce Project - Activity Log

## Instructions
This log tracks all development work on the Ruche Shopify project. Every action must be documented here.

---

## 2025-10-20 - Project Setup

### Task: Initial Project Documentation

**User Request**: "i need to set up my claude md file, can we go through this technical implementation to make sure it's achieving the original needs when coding. also i want an activity log that tracks what we're doing"

**Actions Taken**:
- Created `claude.md` with comprehensive project overview
- Documented all original requirements from planning phase
- Set up brand guidelines (colors, typography, design aesthetic)
- Established tech stack: Shopify Basic + Klaviyo + Microsoft Clarity
- Created activity log template with required format
- Defined project structure and development priorities

**Files Created**:
- claude.md (project context and instructions)
- docs/activity.md (this file)

**Decisions Made**:
- Activity log will use ISO date format (YYYY-MM-DD)
- All user prompts must be quoted verbatim
- File modifications must be tracked explicitly
- Next steps should be checkbox format for easy tracking

**Next Steps**:
- [ ] Review technical implementation checklist against original requirements
- [ ] Identify any gaps or missing requirements
- [ ] Begin theme setup planning

---