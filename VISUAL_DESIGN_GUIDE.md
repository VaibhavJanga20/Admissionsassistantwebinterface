# Visual Design Guide - SRM Admissions Assistant

## Design Rationale Summary

This interface is designed to be **official, trustworthy, and institutional** — not a generic AI chatbot. Every design decision reinforces credibility, source transparency, and the serious nature of university admissions.

---

## Color Psychology & Usage

### Primary: SRM Navy (#0F2340)
**Psychology:** Authority, trust, academic tradition, formality  
**Usage:** Headers, primary buttons, navigation, key emphasis  
**Why:** Establishes institutional credibility immediately

### Secondary: Terracotta (#D84315)
**Psychology:** Warmth, heritage, Chennai architectural context  
**Usage:** Category tags, secondary emphasis, visual warmth  
**Why:** Balances the cool navy with cultural warmth

### Accent: Amber (#F57C00)
**Psychology:** Attention, caution, awareness  
**Usage:** Warnings, cannot-answer states, medium priority  
**Why:** Draws attention without alarming

### Semantic: Confidence Colors
- **High (Emerald #059669):** Verified, trusted, go-ahead
- **Medium (Amber #F59E0B):** Caution, single-source, verify
- **Low (Red #DC2626):** Incomplete, needs confirmation

---

## Typography Hierarchy

```
H1 (2.5rem/40px) - Crimson Pro 600
└─ Landing page hero titles
   "Official Admissions Assistant"

H2 (2rem/32px) - Crimson Pro 600
└─ Major section headers
   "How It Works" | "Popular Questions"

H3 (1.5rem/24px) - Crimson Pro 600
└─ Subsection headers, card titles
   "Trusted Information" | "Official Sources"

H4 (1.25rem/20px) - Inter 600
└─ Component headers, small cards
   "Review Queue" | "Fee Change"

Body (1rem/16px) - Inter 400
└─ All body text, paragraphs, descriptions

Small (0.875rem/14px) - Inter 400
└─ Metadata, captions, helper text

Extra Small (0.75rem/12px) - Inter 400
└─ Fine print, footnotes, legal text
```

**Letter Spacing:**
- H1/H2: -0.02em (tighter for large serif)
- Body: 0 (default)
- All caps labels: 0.05em (wider for readability)

**Line Height:**
- Headings: 1.2-1.4 (tighter for impact)
- Body: 1.5-1.75 (relaxed for readability)

---

## Layout Principles

### Grid System
```
Container Max-Widths:
- Hero sections: 1024px (4xl)
- Chat interface: 896px (3xl)
- Admin dashboard: 1280px (6xl)
- Components: 1024px (4xl)

Horizontal Padding:
- Mobile: 1rem (16px)
- Desktop: 1rem (16px) - content centered in container

Vertical Spacing:
- Micro: 0.25rem (4px)
- Small: 0.5rem (8px)
- Default: 1rem (16px)
- Medium: 1.5rem (24px)
- Large: 2rem (32px)
- XL: 3rem (48px)
- XXL: 4rem (64px)
```

### Responsive Breakpoints
```css
Mobile:   < 768px   (single column, stacked)
Tablet:   768-1024px (2 columns, balanced)
Desktop:  > 1024px   (multi-column, spacious)
```

---

## Component Anatomy

### Card Structure
```
┌─────────────────────────────────┐
│ [Icon] Title              Badge │  ← Header (padding: 1rem)
├─────────────────────────────────┤
│                                 │
│ Body content with proper        │  ← Content (padding: 1.5rem)
│ spacing and readable            │
│ line lengths                    │
│                                 │
├─────────────────────────────────┤
│ [Button]              [Button]  │  ← Actions (padding: 1rem)
└─────────────────────────────────┘

Border: 1px solid neutral-200
Background: White
Radius: 0.5rem (8px)
Hover: Border → navy
```

### Message Bubble (User)
```
                    ┌───────────────────┐
                    │ Question text     │  ← Right-aligned
                    └───────────────────┘     Navy bg, white text
                                              Padding: 0.75rem 1rem
                                              Radius: 0.5rem
                                              Max-width: 80%
```

### Message Bubble (Assistant)
```
┌─────────────────────────────────┐
│ [High Confidence] Badge         │  ← Confidence indicator
│                                 │
│ Answer text with proper         │  ← Content area
│ formatting and citations        │
│                                 │
├─────────────────────────────────┤
│ ▼ 2 Sources                     │  ← Collapsible citations
└─────────────────────────────────┘

Border: 1px solid neutral-200
Background: White
Max-width: 85%
Left-aligned
```

### Cannot Answer Card
```
┌═════════════════════════════════┐
║ ⚠ Cannot Answer from Official  ║  ← Double border (amber)
║    Sources                      ║
╟─────────────────────────────────╢
║ Explanation text...             ║
║                                 ║
║ ┌─────────────────────────────┐ ║
║ │ Official Contacts:          │ ║  ← Nested card
║ │ • Email: ...                │ ║
║ │ • Phone: ...                │ ║
║ └─────────────────────────────┘ ║
└─────────────────────────────────┘

Border: 2px solid amber
Background: #FFF8F0 (warm tint)
```

---

## Interactive States

### Buttons

**Primary (Navy)**
```
Default:   bg-navy, text-white
Hover:     bg-navy-light
Active:    bg-navy-dark
Disabled:  opacity-50, no hover
Focus:     2px ring, navy color
```

**Secondary (Outline)**
```
Default:   border-navy, text-navy
Hover:     bg-neutral-50
Active:    bg-neutral-100
Focus:     2px ring, navy color
```

### Links
```
Default:   text-navy, no underline
Hover:     text-navy, underline
Visited:   text-navy (no purple!)
External:  + icon indicator
```

### Form Inputs
```
Default:   border-neutral-200, bg-white
Focus:     border-navy, 2px ring
Error:     border-red, red ring
Disabled:  bg-neutral-100, opacity-60
```

---

## Iconography

### Icon Library: Lucide React

**Usage Guidelines:**
- Size: 16px (h-4 w-4) for inline, 20px (h-5 w-5) for emphasis
- Color: Inherit from parent or use semantic colors
- Stroke width: 2 (default)

**Common Icons:**
```
Shield        → Official verification
FileText      → Documents, PDFs
ExternalLink  → External URLs
Globe         → Language selector
MapPin        → Campus location
CheckCircle2  → Success, verified
AlertTriangle → Warning, medium priority
AlertCircle   → Error, cannot answer
Search        → Search functionality
Filter        → Filtering options
Clock         → Time-related, pending
Users         → User metrics
MessageSquare → Chat, queries
```

---

## Animation & Transitions

### Timing Functions
```css
Default:  transition-all duration-200 ease-in-out
Buttons:  transition-colors duration-200
Hover:    transition-all duration-300
Cards:    transition-colors duration-200
```

### Animation Examples
```css
/* Loading dots */
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50%      { transform: translateY(-4px); }
}
delay: 0ms, 150ms, 300ms (staggered)

/* Fade in */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}
duration: 300ms

/* Slide in from bottom */
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}
duration: 400ms
```

---

## Spacing Rhythm

### Vertical Rhythm
```
Between paragraphs:     1rem (16px)
Between sections:       2-3rem (32-48px)
Between major blocks:   4rem (64px)
Card internal padding:  1.5rem (24px)
Button padding:         0.5rem 1rem (8px 16px)
Input padding:          0.75rem (12px)
```

### Horizontal Rhythm
```
Icon-text gap:          0.5rem (8px)
Button gap in group:    0.75rem (12px)
Card grid gap:          1rem (16px)
Column gap:             1.5rem (24px)
```

---

## Badge System

### Confidence Badges
```
High:     Emerald dot + "High Confidence"
Medium:   Amber dot + "Medium Confidence"
Low:      Red dot + "Low Confidence"

Size:     Small (px-2 py-0.5) or Medium (px-3 py-1)
Shape:    Rounded-full
Border:   1px solid (matching color)
```

### Status Badges
```
Active:     Green background + border
Updated:    Amber background + border
Pending:    Amber background + border
Approved:   Green background + border
Rejected:   Gray background + border
Deprecated: Gray background + border
```

### Type Badges
```
Website:  Blue tint
PDF:      Terracotta tint
Document: Amber tint

All use:  Light background + colored border + colored text
```

---

## Mobile Design Patterns

### Touch Targets
- Minimum: 44x44px (iOS guideline)
- Recommended: 48x48px (Material Design)
- Padding around targets: 8px minimum

### Mobile Navigation
```
┌─────────────────────────────────┐
│ [≡] SRM Admissions     [Globe]  │  ← Sticky header (56px)
├─────────────────────────────────┤
│                                 │
│                                 │  ← Scrollable content
│                                 │
│                                 │
├─────────────────────────────────┤
│ [Text Input]           [Send]   │  ← Sticky input (bottom)
└─────────────────────────────────┘
```

### Mobile Cards
- Full width minus padding
- Vertical stacking
- Larger text for readability
- Generous spacing

---

## Desktop Enhancements

### Hover States
- Border color change
- Background lightening
- Shadow appearance (subtle)
- Icon color change
- Underline appearance (links)

### Multi-Column Layouts
```
2 columns: Feature cards, suggested questions
3 columns: Stats cards, color palette
4 columns: Icon grid, badge examples
```

### Sidebar Options
- Persistent navigation (if needed)
- Source panel (collapsible)
- Filter options (sticky)

---

## Accessibility Considerations

### Color Contrast
```
Text/Background:     4.5:1 minimum (WCAG AA)
Large text:          3:1 minimum
Borders/Icons:       3:1 minimum
Focus indicators:    3:1 minimum
```

### Focus Indicators
```css
.focus-visible {
  outline: 2px solid var(--srm-navy);
  outline-offset: 2px;
  border-radius: 0.25rem;
}
```

### Alt Text Strategy
- Decorative icons: aria-hidden="true"
- Functional icons: aria-label="descriptive text"
- Images: descriptive alt text
- Badges: Included in parent label

### Keyboard Navigation
- Tab order follows visual hierarchy
- Skip to main content link
- Escape closes modals
- Enter submits forms
- Space toggles checkboxes

---

## Print Styles (Future)

For answer export:
```css
@media print {
  /* Hide navigation */
  header, .chat-input { display: none; }
  
  /* Expand citations */
  .citations { display: block !important; }
  
  /* Adjust colors for print */
  * { color: black !important; }
  
  /* Show URLs */
  a[href]:after { content: " (" attr(href) ")"; }
}
```

---

## Dark Mode (Prepared, Not Implemented)

Theme tokens are structured for dark mode:
```css
.dark {
  --background: #0A0A0A;
  --foreground: #FAFAFA;
  --primary: #4A7BA7; /* Lighter navy */
  --secondary: #E57368; /* Lighter terracotta */
  /* ... etc */
}
```

**Future Implementation:**
1. Add theme toggle in header
2. Use next-themes or similar
3. Test all components in dark mode
4. Adjust contrast ratios

---

## Design Anti-Patterns (What We Avoided)

❌ **Purple AI Gradients**
→ Used navy for institutional trust

❌ **Glowing Neon Effects**
→ Subtle borders and shadows only

❌ **Over-Rounded Corners**
→ Consistent 0.5rem radius

❌ **Glassmorphism Everywhere**
→ Backdrop blur only on header

❌ **Generic Sans-Serif Only**
→ Editorial serif for headings

❌ **Minimal White Space**
→ Generous spacing throughout

❌ **Startup Bubble Chat**
→ Structured message cards

❌ **Hidden Sources**
→ Visible, collapsible citations

---

## Brand Personality

**If this interface were a person:**
- Formal but approachable
- Knowledgeable, not pretentious
- Helpful, not pushy
- Transparent, not evasive
- Trustworthy, not salesy

**Tone in UI Copy:**
- "Get accurate answers" (not "Chat with our AI")
- "Official sources only" (not "Powered by AI")
- "Cannot answer from official sources" (not "Sorry, I don't know")
- "Source citations" (not "References")

---

## Future Visual Considerations

### Illustrations
If needed:
- Line art style (not 3D)
- Navy + terracotta color scheme
- Educational theme (not tech startup)
- Cultural relevance (Chennai context)

### Photography
If added:
- Campus photos (authentic, not stock)
- Students in formal settings
- Academic environments
- Diverse representation

### Data Visualization
For admin dashboard:
- Simple bar/line charts
- Navy + terracotta color scheme
- Clear labels and legends
- Accessible to colorblind users

---

## Checklist for New Components

When creating a new component:
- [ ] Use design tokens (CSS variables)
- [ ] Follow spacing rhythm (multiples of 4)
- [ ] Add hover states for interactive elements
- [ ] Include focus indicators
- [ ] Test on mobile (< 768px)
- [ ] Check color contrast (4.5:1)
- [ ] Add TypeScript types
- [ ] Document props/usage
- [ ] Test keyboard navigation
- [ ] Consider loading states

---

This visual guide ensures consistency across all current and future components. Every design decision ladders up to the core principles: **trust, clarity, and institutional credibility.**
