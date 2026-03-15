

## Optimize Background Image Loading Performance

This plan implements several optimization techniques to ensure the background image loads as quickly as possible when users visit the homepage.

---

### Current State

The background image (`/images/sift-hero-coast.jpg.png`) is loaded via inline CSS `background-image` in the React component. This means the browser only starts loading the image after:
1. HTML is parsed
2. JavaScript bundles are downloaded
3. React renders the component

---

### Optimization Strategy

We'll implement a multi-layered approach:

| Technique | Benefit |
|-----------|---------|
| **Preload hint** | Browser starts fetching immediately |
| **Eager loading** | Prioritizes this resource |
| **Hidden img element** | Triggers immediate load |

---

### Files to Modify

| File | Change |
|------|--------|
| `index.html` | Add `<link rel="preload">` for the background image |
| `src/pages/Index.tsx` | Add hidden `<img>` with `fetchpriority="high"` as fallback |

---

### Implementation Details

**1. Add Preload Link in HTML Head**

Add a preload link tag to `index.html` that tells the browser to start downloading the image immediately during HTML parsing, before any JavaScript executes:

```html
<link 
  rel="preload" 
  href="/images/sift-hero-coast.jpg.png" 
  as="image" 
  fetchpriority="high"
/>
```

**2. Add Hidden Image Element in Index.tsx**

As a fallback (in case the preload doesn't work in all browsers), add a hidden `<img>` element with high fetch priority that triggers the browser to load the image immediately:

```tsx
{/* Preload background image for faster display */}
<img 
  src="/images/sift-hero-coast.jpg.png"
  alt=""
  aria-hidden="true"
  fetchPriority="high"
  className="absolute w-0 h-0 opacity-0 pointer-events-none"
/>
```

---

### How It Works

```text
┌─────────────────────────────────────────────────────────────┐
│  BEFORE (Current)                                           │
├─────────────────────────────────────────────────────────────┤
│  HTML Parse → JS Load → React Render → CSS Parse → Image    │
│       ↑                                              ↑       │
│       Start                               Image starts here  │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  AFTER (Optimized)                                          │
├─────────────────────────────────────────────────────────────┤
│  HTML Parse → JS Load → React Render → CSS Parse            │
│       ↓                                                      │
│  Image starts immediately (parallel)                         │
└─────────────────────────────────────────────────────────────┘
```

The image will start loading in parallel with JavaScript, so by the time React renders, the image may already be cached.

---

### Technical Notes

- The `fetchpriority="high"` attribute tells the browser to prioritize this resource
- The `as="image"` attribute in the preload link ensures correct CORS and caching behavior
- The hidden `<img>` serves as a fallback for browsers with limited preload support
- No visual changes to the page—this is purely a performance optimization

