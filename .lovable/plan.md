
## Landing Page Content Overhaul: Enterprise Partnership Messaging

This plan updates the Sift landing page with new strategic messaging targeting enterprise leaders experiencing rapid growth. The tone will be collaborative, empathetic, and partnership-oriented.

---

### Overview of New Page Structure

```text
+--------------------------------------------------+
|  Navbar (Blog | Privacy) - UNCHANGED             |
+--------------------------------------------------+
|                                                  |
|  HERO SECTION                                    |
|  "Scale Your Team Without Losing Your Context."  |
|  [Book a Demo]  [Join Waitlist]                 |
|                                                  |
+--------------------------------------------------+
|  LOGO STRIP                                      |
|  "Built by leaders from:"                        |
|  Meta | Microsoft | LinkedIn | Lululemon | PayPal|
+--------------------------------------------------+
|                                                  |
|  PROBLEM SECTION (3 Cards)                       |
|  "Growth Creates Complexity..."                  |
|  [Silo Effect] [Fading Context] [Hidden Deps]   |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  SOLUTION SECTION (3 Features)                   |
|  "A Shared Brain for Your Entire Organization"  |
|  Traceability | Unified Intelligence | Self-    |
|  Updating Knowledge                              |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  TRUST SECTION                                   |
|  "Security at the Speed of Business"            |
|  Data Control | Seamless Integration | Scale    |
|                                                  |
+--------------------------------------------------+
|  Footer (Blog | Privacy | Contact) - UNCHANGED  |
+--------------------------------------------------+
```

---

### Files to Modify

| File | Action |
|------|--------|
| `src/pages/Index.tsx` | Add new section components |
| `src/components/landing/HeroWithBackground.tsx` | Update headline and subheadline text |
| `src/components/landing/index.ts` | Export new section components |

### New Files to Create

| File | Purpose |
|------|---------|
| `src/components/landing/LogoStrip.tsx` | Company logos (Meta, Microsoft, LinkedIn, Lululemon, PayPal) |
| `src/components/landing/ProblemSection.tsx` | 3-card layout for pain points |
| `src/components/landing/SolutionSection.tsx` | 3-feature layout for outcomes |
| `src/components/landing/TrustSection.tsx` | Security/trust messaging |

### Files to Delete

| File | Reason |
|------|--------|
| `src/components/landing/ProductSection.tsx` | Replaced by new sections |

---

### Technical Implementation Details

#### 1. Hero Section Updates (`HeroWithBackground.tsx`)

**Current content:**
- Headline: "Live context for decisions."
- Subheadline: "Sift unifies what's happening across your tools..."
- Tagline: "Built for fast-moving teams (50-500 employees)"

**New content:**
- Headline: "Scale Your Team Without Losing Your Context."
- Subheadline: "Growth shouldn't mean disconnected teams. We bridge the gaps between your business units so everyone—from Engineering to Ops—can build on each other's work, not rebuild it."
- Remove the tagline text (redundant with new messaging)

**Preserved:**
- "Book a demo" button linking to Google Calendar
- "Join waitlist" button linking to Tally form
- Background image and overlay styling

---

#### 2. New Logo Strip Component (`LogoStrip.tsx`)

**Structure:**
```tsx
// Horizontal row of grayscale logos
// Header: "Built by leaders from:"
// Logos: Meta, Microsoft, LinkedIn, Lululemon, PayPal
```

**Design:**
- Subtle section below hero
- Grayscale/muted logos with hover color effect
- Clean horizontal layout, responsive to stack on mobile
- Uses existing logo files where available (Meta logo exists)

**Required assets:**
- Meta: `/meta-logo.png` (exists)
- Microsoft, LinkedIn, Lululemon, PayPal: SVG inline or placeholder images

---

#### 3. New Problem Section (`ProblemSection.tsx`)

**Header:** "Growth Creates Complexity. We Help You Manage It."

**3-Column Card Layout:**

| Card | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Layers/Split | The Silo Effect | "Natural Disconnects. When teams grow fast, silos happen naturally. Engineering, Product, and Facilities often end up running in parallel lanes without visibility into each other's work." |
| 2 | Clock/History | Fading Context | "Fading Context. As new hires flood in and experts move on, the 'why' behind decisions often gets lost, leaving teams without the history they need to move forward." |
| 3 | HelpCircle/Search | Hidden Dependencies | "Hidden Dependencies. It's hard to ask the right questions when you don't know what you don't know. Critical risks often hide in plain sight simply because they live in a different tool." |

**Styling:**
- Light gray background section
- Cards with subtle borders
- Lucide icons for visual hierarchy
- Responsive: 3 columns on desktop, stacked on mobile

---

#### 4. New Solution Section (`SolutionSection.tsx`)

**Header:** "A Shared Brain for Your Entire Organization"

**3-Feature Layout:**

| Feature | Icon | Title | Description |
|---------|------|-------|-------------|
| 1 | Link/FileText | Effortless Traceability | "Give your team the confidence of context. We link final assets back to the conversations and decisions that shaped them, so anyone can understand the full story without needing to tap a colleague on the shoulder." |
| 2 | Network/Puzzle | Unified Intelligence | "Bring your tools together. Whether your team lives in Slack, JIRA, or SharePoint, we create a unified layer of intelligence that respects your existing workflows and makes collaboration seamless across departments." |
| 3 | RefreshCw/Sparkles | Self-Updating Knowledge | "Free your team from manual documentation. Our dynamic context engine evolves alongside your work, ensuring your 'Source of Truth' is always as current as your latest decision." |

**Styling:**
- White background
- Larger feature cards with icons
- Professional, clean typography
- Responsive grid layout

---

#### 5. New Trust Section (`TrustSection.tsx`)

**Header:** "Security at the Speed of Business"

**3-Point Layout:**

| Point | Icon | Title | Description |
|-------|------|-------|-------------|
| 1 | Shield | Your Data, Your Control | "Built with Confidential Computing to ensure your data remains secure at rest and in transit." |
| 2 | Key/Lock | Seamless Integration | "We respect the permissions structure you've already built. If a user has access in your source tool, they have access here." |
| 3 | Building2/Scale | Enterprise Scale | "Designed to handle the volume of a modern, data-rich organization from day one." |

**Styling:**
- Dark gray background (matching footer aesthetic)
- Trust badges/icons
- White text for contrast
- Centered layout

---

#### 6. Updated Index Page (`Index.tsx`)

**New structure:**
```tsx
<main>
  <SinglePageNavbar />      {/* Unchanged */}
  <HeroWithBackground />    {/* Updated text */}
  <LogoStrip />             {/* NEW */}
  <ProblemSection />        {/* NEW */}
  <SolutionSection />       {/* NEW */}
  <TrustSection />          {/* NEW */}
  <SinglePageFooter />      {/* Unchanged */}
</main>
```

---

#### 7. Updated Exports (`index.ts`)

```tsx
export { SinglePageNavbar } from "./SinglePageNavbar";
export { HeroWithBackground } from "./HeroWithBackground";
export { LogoStrip } from "./LogoStrip";
export { ProblemSection } from "./ProblemSection";
export { SolutionSection } from "./SolutionSection";
export { TrustSection } from "./TrustSection";
export { SinglePageFooter } from "./SinglePageFooter";
export { ImageSlot } from "./ImageSlot";
```

---

### Design Tokens and Typography

Following existing aesthetic guidelines:
- **Headlines:** IBM Plex Mono (font-mono), medium weight
- **Body text:** Inter (font-sans)
- **Colors:** Gray palette (gray-900, gray-600, gray-400)
- **Spacing:** Generous padding (py-20, py-28)
- **Cards:** Rounded corners (rounded-2xl), subtle borders
- **Buttons:** Preserved existing CTA styles

---

### Assets Required

**Existing:**
- `/meta-logo.png` - Meta logo

**To be created as inline SVGs:**
- Microsoft logo
- LinkedIn logo
- Lululemon logo
- PayPal logo

All logos will be rendered in grayscale with CSS filters for consistent aesthetic.

---

### Preserved Elements (No Changes)

1. **Navigation:** Blog and Privacy links remain unchanged
2. **CTAs:** "Book a demo" and "Join waitlist" buttons with existing URLs
3. **Footer:** Contact, Blog, Privacy links unchanged
4. **Background image:** Hero section background preserved
