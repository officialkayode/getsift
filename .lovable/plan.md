

## Full-Page Background Image with Gradient Overlay

This plan extends the hero background image to cover the entire landing page, with gradient overlays creating visual transitions between sections—similar to the reference design where the background seamlessly flows through all content areas.

---

### Current vs. New Structure

**Current Structure:**
```text
[Hero] - Background image contained within section
[Problem] - bg-gray-50 (solid light gray)
[Solution] - bg-white (solid white)
[Trust] - bg-gray-800 (solid dark gray)
[LogoStrip] - bg-white (solid white)
[Footer] - bg-gray-900 (solid dark gray)
```

**New Structure:**
```text
[Wrapper with full-page background image]
  ├── [Hero] - Transparent, dark overlay for legibility
  ├── [Problem] - Semi-transparent white gradient overlay
  ├── [Solution] - Stronger white gradient (image fading out)
  ├── [Trust] - Semi-transparent dark overlay
  ├── [LogoStrip] - White background (image fully faded)
  └── [Footer] - Solid dark background
```

---

### Implementation Approach

#### 1. Index.tsx - Add Full-Page Background Wrapper

Create a wrapper div that contains the background image and spans from the navbar through the Trust section. The LogoStrip and Footer will remain with solid backgrounds.

```text
<main>
  <SinglePageNavbar />
  
  <!-- NEW: Background wrapper with fixed/attached image -->
  <div className="relative" style="backgroundImage: url(...)">
    <HeroWithBackground />   <!-- Now transparent, uses parent bg -->
    <ProblemSection />       <!-- Gradient overlay: white/transparent -->
    <SolutionSection />      <!-- Gradient overlay: heavier white fade -->
    <TrustSection />         <!-- Dark semi-transparent overlay -->
  </div>
  
  <LogoStrip />              <!-- Solid white background -->
  <SinglePageFooter />       <!-- Solid dark background -->
</main>
```

---

#### 2. HeroWithBackground.tsx - Remove Self-Contained Background

**Changes:**
- Remove the inline `backgroundImage` style from the section
- Keep the dark overlay for text legibility
- Make section background transparent to show parent's image

---

#### 3. ProblemSection.tsx - Add Gradient Overlay

**Changes:**
- Remove `bg-gray-50` solid background
- Add a gradient overlay that transitions from transparent (top) to white/semi-transparent (bottom)
- Cards get subtle `backdrop-blur` and semi-transparent white backgrounds
- Creates the effect of the image gradually fading as you scroll

---

#### 4. SolutionSection.tsx - Stronger White Fade

**Changes:**
- Remove `bg-white` solid background  
- Add heavier white gradient overlay (more opacity than Problem section)
- Cards maintain readability with `bg-white/90` and `backdrop-blur`
- Image is mostly faded out by this point

---

#### 5. TrustSection.tsx - Dark Semi-Transparent Overlay

**Changes:**
- Replace `bg-gray-800` with semi-transparent dark overlay (`bg-gray-900/80`)
- Add `backdrop-blur` for a frosted glass effect
- White text remains legible against the darkened background
- Creates contrast before transitioning to solid sections

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Add background wrapper div with the hero image |
| `src/components/landing/HeroWithBackground.tsx` | Remove self-contained background, use transparent |
| `src/components/landing/ProblemSection.tsx` | Add white gradient overlay, update card styling |
| `src/components/landing/SolutionSection.tsx` | Add stronger white overlay, update card styling |
| `src/components/landing/TrustSection.tsx` | Use semi-transparent dark overlay with blur |

---

### Technical Details

**Background Image Attachment:**
The background uses `bg-fixed` (CSS `background-attachment: fixed`) so the image stays in place while content scrolls over it, creating the parallax-like effect seen in the reference.

**Gradient Overlays:**
- Hero: `bg-black/50` (dark overlay for white text)
- Problem: `bg-gradient-to-b from-white/30 to-white/80` (fading effect)
- Solution: `bg-gradient-to-b from-white/70 to-white/95` (stronger fade)
- Trust: `bg-gray-900/85 backdrop-blur-sm` (dark frosted glass)

**Card Styling Updates:**
- Problem cards: `bg-white/90 backdrop-blur-sm border-white/50`
- Solution cards: `bg-white/95 backdrop-blur-sm`

---

### Visual Flow

```text
┌─────────────────────────────────────────┐
│  HERO - Full image visibility           │ ◄── bg-black/50 overlay
│  Dark overlay for white text legibility │
├─────────────────────────────────────────┤
│  PROBLEM - Image fading to white        │ ◄── gradient white/30 → white/80
│  Cards with glass morphism effect       │
├─────────────────────────────────────────┤
│  SOLUTION - Mostly white, hint of image │ ◄── gradient white/70 → white/95
│  Clean, professional card styling       │
├─────────────────────────────────────────┤
│  TRUST - Dark frosted glass effect      │ ◄── bg-gray-900/85 + blur
│  Image subtly visible through overlay   │
├─────────────────────────────────────────┤
│  LOGO STRIP - Solid white               │ ◄── Clean break, no image
├─────────────────────────────────────────┤
│  FOOTER - Solid dark                    │ ◄── Standard footer styling
└─────────────────────────────────────────┘
```

---

### Mobile Considerations

- On mobile, `bg-fixed` may not work well on iOS, so we'll add a fallback using `bg-scroll md:bg-fixed`
- Overlay opacities may need slight adjustments for mobile readability
- Cards will stack properly with maintained glass morphism effects

