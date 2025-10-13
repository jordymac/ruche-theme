# Ruche Branding Setup Guide

## Overview
This guide outlines how to complete the Ruche branding setup in your Shopify theme. The technical implementation (fonts, CSS, logos) has been completed. Now you need to configure the theme through Shopify Admin.

---

## ✅ Completed Technical Setup

### 1. Custom Fonts Installed
The following Ruche brand fonts have been uploaded to `/ruche-theme/assets/`:
- **Arpona** (Regular, Medium, Bold) - Serif font for headings
- **Neue Haas Grotesk** (Roman, Medium, Bold) - Sans-serif font for body text
- **This Reality** - Script font for accent text

### 2. CSS Files Updated
- **base.css**: Added `@font-face` declarations and Ruche brand color variables
- **ruche-branding.css**: Created comprehensive brand styling with:
  - Typography hierarchy
  - Button styles
  - Card and product styling
  - Form elements
  - Color utilities
  - Minimal, editorial aesthetic

### 3. Logo Files Uploaded
Ruche logo files uploaded to `/ruche-theme/assets/`:
- `ruche-logo.svg` - Scalable vector logo (recommended)
- `ruche-logo.png` - Raster fallback

---

## 🎨 Ruche Brand Guidelines Applied

### Color Palette
| Color Name | HEX Code | Usage |
|-----------|----------|--------|
| **Ruche Black** | `#3D3935` | Primary text, buttons, grounding |
| **Ruche Grey** | `#545859` | Secondary elements, subtle accents |
| **Ruche Off White** | `#E6BC75` | Warm accents, backgrounds |

### Typography
| Font | Purpose | Weight |
|------|---------|--------|
| **Arpona** | Headlines, hero statements | 400, 500, 700 |
| **Neue Haas Grotesk** | Body copy, UI elements | 400, 500, 700 |
| **This Reality** | Quotes, accent elements | 400 |

### Design Principles
- **Quiet luxury** - Restrained, tonal, high contrast
- **Editorial polish** - Fashion-inspired, candid imagery
- **Minimal design** - Clean lines, ample whitespace
- **Parent-first** - Focus on the woman behind the mother

---

## 🔧 Required Shopify Admin Configuration

### Step 1: Configure Color Schemes
1. Go to **Online Store > Themes > Customize**
2. Navigate to **Theme settings > Colors**
3. Update the color schemes as follows:

#### Scheme 1 (Primary - White Background)
- Background: `#FFFFFF`
- Text: `#3D3935`
- Button: `#3D3935`
- Button Label: `#FFFFFF`
- Secondary Button Label: `#3D3935`

#### Scheme 2 (Off White Background)
- Background: `#E6BC75`
- Text: `#3D3935`
- Button: `#3D3935`
- Button Label: `#E6BC75`
- Secondary Button Label: `#3D3935`

#### Scheme 3 (Grey Background)
- Background: `#545859`
- Text: `#FFFFFF`
- Button: `#FFFFFF`
- Button Label: `#545859`
- Secondary Button Label: `#FFFFFF`

#### Scheme 4 (Black Background)
- Background: `#3D3935`
- Text: `#FFFFFF`
- Button: `#FFFFFF`
- Button Label: `#3D3935`
- Secondary Button Label: `#FFFFFF`

### Step 2: Upload and Configure Logo
1. In Theme Customizer, go to **Theme settings > Logo**
2. Click **Select image** and upload `/ruche-theme/assets/ruche-logo.svg`
3. Set Logo width: `120-150px` (adjust to preference)
4. **Optional**: Upload favicon (use brandmark logo from branding folder)

### Step 3: Configure Typography (IMPORTANT)
Since custom fonts are now loaded, you can either:

**Option A - Use Custom Fonts (Recommended)**
The custom fonts will load automatically via `base.css`. The theme will use:
- Arpona for headings
- Neue Haas Grotesk for body text

**Option B - Configure via Shopify**
If you want Shopify's font controls to work:
1. The custom fonts are already loaded as fallbacks
2. You can select Shopify system fonts if desired
3. The custom fonts will still apply via CSS

### Step 4: Adjust Brand Information
1. Go to **Theme settings > Brand information**
2. Add **Brand headline**: Something editorial and minimal, e.g., "For the woman behind the mother"
3. Add **Brand description**: Brief, benefit-driven copy (2-3 sentences)
4. Upload **Brand image** if desired (use imagery from `/Ruche Branding/06_Mockups/`)

### Step 5: Configure Social Media Links
1. Go to **Theme settings > Social media**
2. Add your Ruche social media profile URLs:
   - Instagram
   - Facebook
   - Pinterest
   - TikTok (if applicable)

### Step 6: Style Settings
1. **Buttons**:
   - Border thickness: `1px`
   - Border opacity: `100%`
   - Corner radius: `0px` (sharp corners for minimal look)
   - Shadow opacity: `0%` (no shadows)

2. **Cards**:
   - Card style: `Standard`
   - Image padding: `0px`
   - Text alignment: `Left`
   - Border thickness: `0px`
   - Corner radius: `0px`
   - Shadow opacity: `0%` or `5%` (very subtle)

3. **Inputs**:
   - Border thickness: `1px`
   - Border opacity: `55%`
   - Corner radius: `0px`

### Step 7: Page Layout
1. Set **Page width**: `1400px` (wider for editorial feel)
2. Set **Section spacing**: `0px` or `8px` (minimal)

---

## 📝 Next Steps: Content & Imagery

### Product Photography Guidelines
- **Style**: Editorial, candid, aspirational (not staged)
- **Lighting**: Natural, soft light
- **Setting**: Cafés, city walks, modern interiors
- **Focus**: Show mums in motion, lifestyle context
- **Avoid**: Cliché baby photography, overly domestic scenes

### Copywriting Tone
- Short, rhythmic sentences
- Lead with benefits and design, not features
- Position the mother as the hero
- Examples:
  - ❌ "Waterproof changing mat"
  - ✅ "Antibacterial. Chic. Parent-first."

### Homepage Sections to Add
1. **Hero Banner**: Large image with tagline "For the woman behind the mother"
2. **Product Grid**: Minimal cards with Arpona headings
3. **About Section**: Editorial text with This Reality accent font
4. **Instagram Feed**: Curated lifestyle imagery

---

## 🚀 Deploy & Test

### 1. Push Changes to Shopify
```bash
npm run dev
# This will sync your local changes to the Shopify store
```

### 2. Test the Theme
- Check font rendering on different pages
- Verify color scheme consistency
- Test button hover states
- Check mobile responsiveness
- Verify logo displays correctly

### 3. Quality Checklist
- [ ] Custom fonts loading correctly
- [ ] Brand colors applied consistently
- [ ] Logo displays in header
- [ ] Buttons have correct Ruche styling
- [ ] Typography hierarchy is clear (Arpona for headings)
- [ ] Mobile experience is smooth
- [ ] Forms and inputs styled correctly
- [ ] Product cards have subtle hover effects

---

## 📂 File Reference

### Theme Files Modified
- `/ruche-theme/layout/theme.liquid` - Added ruche-branding.css link
- `/ruche-theme/assets/base.css` - Added @font-face declarations
- `/ruche-theme/assets/ruche-branding.css` - NEW: Comprehensive brand styling

### Assets Added
- Font files: Arpona, Neue Haas Grotesk, This Reality
- Logo files: ruche-logo.svg, ruche-logo.png

### Brand Assets Location
- Full branding folder: `/Ruche Branding/`
- Brand guidelines: `/ruche-rules.md`
- Brand summary: `/claude.md`

---

## 💡 Tips for Maintaining Brand Consistency

1. **Always use the brand colors**: Reference `ruche-rules.md` for hex codes
2. **Stick to the font hierarchy**: Arpona for headings, Neue Haas for body
3. **Keep it minimal**: Less is more - embrace whitespace
4. **Editorial imagery**: Prioritize lifestyle over product-only shots
5. **Copy should be concise**: Short, rhythmic, confident

---

## 🔗 Resources

- Brand Rules: `ruche-rules.md`
- Brand Summary: `claude.md`
- Full Brand PDF: `Ruche Branding/Ruche _ Brand Identity_Compressed.pdf`
- Typography Files: `Ruche Branding/03_Typography/`
- Logo Files: `Ruche Branding/02_Logo/RGB [Digital]/`

---

## Questions or Issues?

If fonts aren't loading or styles aren't applying:
1. Check browser console for CSS errors
2. Verify font files are in `/ruche-theme/assets/`
3. Clear Shopify cache and hard refresh (`Cmd+Shift+R` / `Ctrl+Shift+F5`)
4. Check that `ruche-branding.css` is linked in `theme.liquid`

**Happy branding! You're building something beautiful. ✨**
