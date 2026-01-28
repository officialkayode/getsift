

## Update "The Silo Effect" Card with Image

This plan updates the first problem card in the Problem Section to replace the icon with the uploaded network visualization image, placed after the text content—matching the pattern used for "Effortless Traceability" in the Solution section.

---

### Changes Overview

**Current Layout:**
```text
┌─────────────────────────────┐
│  [Icon in gray square]      │
│                             │
│  The Silo Effect            │
│  Natural Disconnects        │
│                             │
│  Description text...        │
└─────────────────────────────┘
```

**New Layout:**
```text
┌─────────────────────────────┐
│  The Silo Effect            │
│  Natural Disconnects        │
│                             │
│  Description text...        │
│                             │
│  [Siloed Networks Image]    │
└─────────────────────────────┘
```

---

### Files to Modify

| File | Action |
|------|--------|
| `src/components/landing/ProblemSection.tsx` | Update first card to show image instead of icon |

### Assets to Copy

| Source | Destination |
|--------|-------------|
| `user-uploads://siloed.png` | `src/assets/siloed.png` |

---

### Technical Implementation

**Step 1: Copy Image Asset**

Copy the uploaded siloed.png image to the src/assets folder for proper bundling and import.

**Step 2: Update ProblemSection.tsx**

1. Import the siloed image at the top of the file
2. Add a TypeScript type for the Problem items with optional `image` property
3. Add the `image` property to the first problem ("The Silo Effect")
4. Update the card rendering logic with conditional rendering:
   - For "The Silo Effect": Show title, subtitle, and description first, then display the image below
   - For other problems: Keep the existing icon-first layout

**Updated Data Structure:**

```tsx
type Problem = {
  icon?: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  image?: string;
};

const problems: Problem[] = [
  {
    title: "The Silo Effect",
    subtitle: "Natural Disconnects",
    description: "...",
    image: siloedImage,  // No icon for this one
  },
  {
    icon: Clock,
    title: "Fading Context",
    // ...
  },
  // ...
];
```

**Updated Card Rendering:**

```tsx
{problem.image ? (
  <>
    <h3>The Silo Effect</h3>
    <p>Natural Disconnects</p>
    <p>Description text...</p>
    <img src={problem.image} alt={problem.title} className="w-full rounded-xl" />
  </>
) : (
  <>
    <div className="icon-container">
      <problem.icon />
    </div>
    <h3>{problem.title}</h3>
    <p>{problem.subtitle}</p>
    <p>{problem.description}</p>
  </>
)}
```

---

### Visual Result

The Silo Effect card will stand out with:
- Title at the top (no icon)
- Subtitle below the title
- Description text
- Beautiful 3D network visualization at the bottom showing interconnected but separate clusters (representing silos)
- Rounded corners on the image to match the card aesthetic

The other two cards (Fading Context and Hidden Dependencies) remain unchanged with their current icon-first layout.

