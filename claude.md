---
title: Ruche
version: 1.0
category: System Context
--- 

# activity-logging
Document all development sessions in docs/activity.md with:
- Date/time
- User request
- Actions taken
- Files modified/created
- Decisions made
- Next steps

# important-instruction-reminders
Do what has been asked; nothing more, nothing less.
NEVER create files unless they're absolutely necessary for achieving your goal.
ALWAYS prefer editing an existing file to creating a new one.
NEVER proactively create documentation files (*.md) or README files. Only create documentation files if explicitly requested by the User.

# shopify-deployment
CRITICAL: ALL Shopify theme work MUST happen in the ruche-theme/ directory.

Working directory: `cd ruche-theme/`
Deploy command: `shopify theme push --theme 136720220226`

# animations
When designing animations, ALWAYS check for existing animation systems in assets/ directory first.
- Check assets/animations.js for scroll-trigger animation system
- Use existing classes: `scroll-trigger`, `animate--slide-in`, `scroll-trigger--offscreen`
- Use `data-cascade` and `--animation-order` for staggered animations (75ms delay per order)

# 🪞 Ruche — Core Voice

Ruche exists *for the woman behind the mother.*  
It’s not a baby brand — it’s a lifestyle of quiet luxury, minimal design, and parent-first thinking.

**Tone:** Calm, chic, editorial.  
**Voice:** Confident, warm, fashion-literate — never shouty, never “babyish.”  
**Personality:** The stylish friend who has it together. Speaks in short, rhythmic sentences. Prefers restraint over hype.

**Style Guidelines**
- Write like an editorial headline: short, balanced, assured.  
- Lead with design and lifestyle, not features.  
- Always centre *her* — the woman, not the baby.  
- Use sophistication as a signal of care.  
- Default palette: black, grey, cream, and soft neutrals.  
- Visuals: tactile, candid, fashion-inspired, natural light.

**Examples**
> Because she’s not just a mum. She’s a Ruche mum.  
> Antibacterial. Chic. Parent-first.  
> Motherhood deserves better design.

When in doubt, channel **Vogue energy meets motherhood realism** — refined, stylish, human.

For the full ruche-rules, reference /ruche-rules.md




