## SEO, Pre-rendering & Discoverability — Revised Plan

### Overview

Improve SEO and crawlability for the Sift marketing site. Keep the existing design. Add build-time pre-rendering so key pages have full HTML in the served files, plus metadata, structured data, static files, and internal linking improvements.

---

Domain: [getsift.co](http://getsift.co) (published URL)  
  
1. Build-time pre-rendering

Install `vite-plugin-prerender-static` (lightweight, Vite-native, zero runtime deps). Configure it in `vite.config.ts` to pre-render these routes at build time:

- `/`
- `/industry/pharma`
- `/about`
- `/privacy`
- `/blog`
- `/blog/temporal-context-beats-search`
- `/blog/sift-launches-major-update-context-aware-ai`
- `/blog/how-sift-powers-proactive-knowledge-delivery`

This generates static HTML files with full content and metadata for each route, while the SPA still hydrates and works normally on the client.

### 2. `react-helmet-async` for per-page metadata

Install `react-helmet-async`. Wrap app in `<HelmetProvider>` in `src/main.tsx`. Each page gets a `<Helmet>` block with:

- `<title>`
- `<meta name="description">`
- `<link rel="canonical">`
- OG and Twitter card tags
- JSON-LD structured data where applicable

Because pages are pre-rendered, this metadata will be present in the static HTML.

### 3. Fallback metadata in `index.html`

Update `index.html` to include strong defaults:

- Title: `Sift — Decision Lineage for Regulated Industries`
- Meta description (already present, verify/strengthen)
- OG title, description, image, type
- Twitter card tags (summary_large_image)

These act as fallbacks before Helmet overrides on specific routes.

### 4. `/industry/pharma` page improvements

**Metadata:**

- Title: `Pharma Clinical Trial Decision Lineage | Sift`
- Description: `Sift helps pharma teams preserve the why behind regulatory and trial-design decisions — from endpoint selection to protocol changes — reducing rework, amendments, and delayed commercialization.`

**Content (keep existing narrative, add only):**

- Add a short intro paragraph after the subtitle, stating Sift is a decision lineage platform for pharma clinical trials, preserves why regulatory strategy decisions were made, and reduces protocol amendments, rework, and delayed commercialization
- Strengthen H2s slightly: "The High Cost of Decision Amnesia" and "Decision Lineage for Clinical Trial Oversight"
- Naturally place a few additional terms (sponsor oversight, CRO workflows, inspection readiness, clinical trial decision support) in existing paragraphs without keyword stuffing
- Add breadcrumb nav at top: Home → Use-cases → Pharma Clinical Trials

**Structured data:**

- `BreadcrumbList` JSON-LD

### 5. Structured data (JSON-LD only)


| Schema           | Page(s)                                                                |
| ---------------- | ---------------------------------------------------------------------- |
| `Organization`   | `/about` (name, url, description, contactPoint)                        |
| `BreadcrumbList` | `/industry/pharma`                                                     |
| `BlogPosting`    | Each `/blog/:slug` page (headline, datePublished, author, description) |


All injected via Helmet, pre-rendered into static HTML.

### 6. Static files in `/public`

`**robots.txt`:**

```text
User-agent: *
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

Sitemap: https://getsift.lovable.app/sitemap.xml
```

`**sitemap.xml`:** All canonical URLs with lastmod dates.

`**llms.txt`:** Lightweight AI-readable summary of Sift and key pages.

### 7. Internal linking improvements

- **Homepage**: Add a text link to `/industry/pharma` with anchor text like "Pharma clinical trials"
- **Footer**: Change "Use-cases" to "Pharma Clinical Trials" for better anchor text
- **Desktop nav**: Add "Blog" link (currently only in mobile menu)
- **Blog posts**: Add contextual link to `/industry/pharma` in the temporal-context post

### 8. Minor fixes

- Fix nested `<p>` tag in `SiteFooter.tsx`
- Add canonical tags to all pages via Helmet

---

### Files to create

- `public/robots.txt`
- `public/sitemap.xml`
- `public/llms.txt`

### Files to modify

- `package.json` — add `react-helmet-async`, `vite-plugin-prerender-static`
- `vite.config.ts` — add prerender plugin config
- `index.html` — add fallback OG/Twitter meta
- `src/main.tsx` — wrap with `HelmetProvider`
- `src/pages/Index.tsx` — Helmet + internal link
- `src/pages/PharmaClinicalTrials.tsx` — Helmet + structured data + breadcrumb + intro paragraph + heading tweaks + keyword integration
- `src/pages/Blog.tsx` — Helmet
- `src/pages/BlogPost.tsx` — Helmet + BlogPosting schema + internal link in temporal-context post
- `src/pages/About.tsx` — Helmet + Organization schema
- `src/pages/Privacy.tsx` — Helmet
- `src/components/SiteNav.tsx` — add Blog to desktop nav
- `src/components/SiteFooter.tsx` — fix nested `<p>`, improve anchor text