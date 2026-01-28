

## Logo Strip Fixes

This plan addresses three issues with the Logo Strip section:

1. **Move section below Security/Trust section**
2. **Fix logo spacing**
3. **Replace incorrect PayPal and Lululemon logos with proper SVGs**

---

### Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Reorder `LogoStrip` to appear after `TrustSection` |
| `src/components/landing/LogoStrip.tsx` | Fix spacing, replace Lululemon and PayPal SVGs |

---

### 1. Index.tsx - Section Reordering

**Current order:**
```text
Hero → LogoStrip → Problem → Solution → Trust → Footer
```

**New order:**
```text
Hero → Problem → Solution → Trust → LogoStrip → Footer
```

---

### 2. LogoStrip.tsx - Spacing Improvements

**Current spacing classes:**
```css
gap-8 md:gap-12 lg:gap-16
```

**Updated approach:**
- Use `justify-between` with a max-width container for even distribution
- Add consistent width constraints to each logo container
- Ensure logos are visually balanced across the row

---

### 3. Logo Replacements

**Lululemon:** Replace the placeholder circle + text SVG with the official Lululemon "Omega" stylized logo (the iconic curved shape resembling the Greek omega symbol).

**PayPal:** Replace the incomplete/malformed SVG with the proper PayPal wordmark logo showing the overlapping "P" letters in dark blue and light blue.

---

### Technical Details

**LogoStrip.tsx updates:**

```text
Line 6: Update flex container classes for better spacing
Lines 30-36: Replace Lululemon SVG with correct omega-style logo
Lines 38-45: Replace PayPal SVG with proper dual-P wordmark
```

**New Lululemon SVG:** The iconic stylized omega/arch shape in red (#D31334)

**New PayPal SVG:** The classic overlapping PP wordmark in PayPal's brand colors (#003087 dark blue, #0070E0 light blue)

---

### Visual Result

After implementation:
- Logo Strip appears between Trust Section and Footer
- All five logos are evenly spaced horizontally
- Lululemon displays the recognizable omega logo
- PayPal displays the proper overlapping P wordmark

