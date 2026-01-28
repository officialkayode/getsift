

## Replace Background Image

This plan replaces the current homepage background image (`sift-hero-coast.jpg.png`) with the new uploaded purple/blue gradient horizon image.

---

### Changes Overview

| Current | New |
|---------|-----|
| `/images/sift-hero-coast.jpg.png` (coastal scene) | New purple/blue horizon gradient image |

---

### Files to Modify

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Update background image path |

### Assets to Copy

| Source | Destination |
|--------|-------------|
| `user-uploads://backgroundI.png` | `public/images/sift-hero-coast.jpg.png` |

---

### Implementation Approach

The simplest approach is to overwrite the existing background image file. Since the `Index.tsx` component already references `/images/sift-hero-coast.jpg.png`, replacing that file directly means no code changes are needed.

**Step 1: Replace the Background Image**

Copy the uploaded image to overwrite the existing background:
- Source: `user-uploads://backgroundI.png`
- Destination: `public/images/sift-hero-coast.jpg.png`

The existing CSS classes (`bg-cover bg-center bg-scroll md:bg-fixed`) will continue to work with the new image, ensuring it:
- Covers the full background area
- Centers the image
- Uses fixed positioning on desktop for the parallax effect
- Scrolls normally on mobile

---

### Visual Result

The Hero, Problem, Solution, and Trust sections will now display with:
- Beautiful purple/pink to blue gradient sky
- Abstract horizon line with cloud-like formations in the center
- Same glassmorphism card effects overlaying the new background
- Maintained fixed background effect on desktop

