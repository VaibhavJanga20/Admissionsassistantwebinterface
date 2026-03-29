# SRM Admissions Assistant - Design System & Rationale

## Design Philosophy

This is not a generic AI chatbot—it's an official university service tool that must communicate trust, authority, and source-grounded accuracy. The design balances institutional credibility with modern usability.

---

## Color Palette

### Primary Colors
- **SRM Navy** (#0F2340): Primary institutional color
  - Conveys academic authority, trust, and formality
  - Used for headers, primary CTAs, and key UI elements
  - Darker than typical blues to feel serious and official

- **Terracotta** (#D84315): Secondary institutional color
  - Warm accent inspired by Chennai's architectural heritage
  - Creates visual warmth without feeling startup-like
  - Used sparingly for emphasis and categorization

- **Amber** (#F57C00): Tertiary accent
  - Attention-grabbing for warnings and alerts
  - Complements the cooler navy with warmth
  - Used for "cannot answer" states and medium-priority items

### Neutral Palette
- **50-100**: Off-white backgrounds (not pure white for reduced eye strain)
- **200-300**: Borders and subtle dividers
- **400-600**: Body text and secondary information
- **700-900**: Primary text and high-emphasis content

### Semantic Colors
- **High Confidence**: #059669 (muted emerald green)
- **Medium Confidence**: #F59E0B (amber)
- **Low Confidence**: #DC2626 (muted red)

---

## Typography

### Font Choices

**Crimson Pro (Serif) - Headings**
- Editorial quality with institutional gravitas
- Modern serif that bridges traditional academia and contemporary design
- Used for H1, H2, H3 to establish information hierarchy
- Letter-spacing: -0.02em for large sizes (tighter, more refined)

**Inter (Sans-Serif) - Body Text**
- Clean, highly readable at all sizes
- Professional without being corporate or startup-like
- Excellent for dense information and mobile screens
- Used for all body text, UI elements, and navigation

**JetBrains Mono (Monospace) - Technical Content**
- For URLs, code snippets, reference numbers
- Available but used sparingly

### Type Scale
- H1: 2.5rem (40px) - Landing hero titles
- H2: 2rem (32px) - Section headers
- H3: 1.5rem (24px) - Card titles
- H4: 1.25rem (20px) - Subsection headers
- Body: 1rem (16px) - Standard text
- Small: 0.875rem (14px) - Metadata, captions
- Extra Small: 0.75rem (12px) - Fine print

---

## Component Design

### Header
- **Sticky positioning** for persistent navigation
- **Campus indicator** (Kattankulathur) with map pin icon
- **Language selector** with localized labels (தமிழ், हिन्दी)
- **Backdrop blur** on scroll for depth without heaviness
- Mobile-responsive hamburger menu

### Landing Page

**Hero Section**
- Large serif headline establishing credibility
- "Official Information Only" badge with shield icon
- Clear value proposition focusing on source accuracy
- Dual CTAs: Primary action (Ask Question) + Secondary (Visit Official Site)
- Off-white background with white card for subtle depth

**Features Grid**
- Icon-based visual hierarchy
- Each feature emphasizes trust, citations, or coverage
- Light gray backgrounds with borders (not cards with heavy shadows)
- Responsive grid: 4 columns desktop, 2 columns tablet, 1 column mobile

**Suggested Questions**
- Actual admission questions students ask
- Hover states that change border color to navy
- Arrow icons for affordance
- Questions can be clicked to pre-populate chat

**Trust Section**
- Centered layout with shield icon
- Emphasizes official sources and citation policy
- Check marks for key trust factors
- Contained card with border (not floating)

### Chat Interface

**Message Types**

1. **User Messages**
   - Right-aligned
   - Navy background with white text
   - Rounded corners
   - Max-width to prevent over-stretching on wide screens

2. **Assistant Messages**
   - Left-aligned
   - White background with border
   - Confidence indicator badge (high/medium/low)
   - Collapsible source citations
   - Prose formatting for readability

3. **Cannot Answer Messages**
   - Amber border (double-width for emphasis)
   - Warm background (#FFF8F0)
   - Alert icon
   - Official contact information in contained card
   - Different visual treatment signals "this is not a typical answer"

**Source Citations**
- Collapsible to reduce visual clutter
- Icons differentiate websites vs PDFs
- "Last updated" dates for transparency
- External link indicators
- Hover states for interactivity

**Input Area**
- Sticky bottom positioning
- Textarea for multi-line questions
- Keyboard shortcuts (Enter to send, Shift+Enter for new line)
- Disabled state during loading
- Helper text for keyboard shortcuts

**Loading State**
- Bouncing dots (staggered animation)
- "Searching official sources..." message
- Feels active without being distracting

### Admin Dashboard

**Stats Cards**
- Grid layout: 4 columns on desktop
- Icons for each metric type
- Large numbers in navy for emphasis
- Micro-copy for context (e.g., "Last 30 days")
- Pending reviews highlighted in amber

**Review Queue**

Each review card shows:
- **Type icon** (emoji-based for quick recognition)
- **Impact badge** (High/Medium/Low with semantic colors)
- **Status indicator** (Pending/Approved/Rejected)
- **Change comparison** (old value struck through, new value emphasized)
- **Source citation** with external link
- **Affected questions count** (shows downstream impact)
- **Action buttons** (Approve/Reject) for pending items

**Filters & Search**
- Status filter dropdown
- Full-text search
- Persistent across navigation

---

## Layout Principles

### Grid System
- Container max-width: varies by section
  - Landing hero: 1024px (4xl)
  - Chat interface: 896px (3xl)
  - Admin dashboard: 1280px (6xl)
- Consistent horizontal padding: 1rem mobile, 1rem desktop
- Vertical spacing: multiples of 4 (16px, 24px, 32px, 48px, 64px)

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

### Spacing Scale
- Micro: 0.25rem (4px) - Icon gaps
- Small: 0.5rem (8px) - Tight groupings
- Default: 1rem (16px) - Standard spacing
- Medium: 1.5rem (24px) - Component spacing
- Large: 2rem (32px) - Section spacing
- Extra Large: 3rem (48px) - Major sections

---

## Interaction Design

### Buttons
- **Primary**: Navy background, white text, medium roundness
- **Secondary**: Outlined with navy border, navy text
- **Hover states**: Slightly lighter shade (navy-light)
- **Disabled**: Reduced opacity, no hover effects
- **Size variants**: sm, default, lg (for hero CTAs)

### Links
- **Default**: Navy color
- **Hover**: Underline appears
- **External**: Icon indicator
- **Visited**: Same as default (no purple)

### Cards
- **Border**: 1px solid neutral-200
- **Background**: White
- **Hover**: Border changes to navy
- **Shadow**: Minimal or none (avoid floating appearance)
- **Border radius**: 0.5rem (8px)

### Forms
- **Inputs**: White background, neutral border
- **Focus**: Navy ring, 2px offset
- **Placeholder**: Neutral-500
- **Labels**: Medium weight, slightly larger than body

---

## Accessibility

- **Color contrast**: WCAG AA compliant (4.5:1 for body text, 3:1 for large text)
- **Focus indicators**: Visible 2px ring on all interactive elements
- **Keyboard navigation**: Tab order follows visual hierarchy
- **Screen reader labels**: Semantic HTML with ARIA labels where needed
- **Touch targets**: Minimum 44x44px for mobile
- **Language switching**: Properly updates content (in production, would use i18n)

---

## Mobile Optimization

- **Touch-friendly**: All interactive elements ≥44px
- **Single-column layouts**: Stack elements vertically
- **Sticky header**: Collapsed but accessible
- **Mobile menu**: Full-screen overlay with large touch targets
- **Chat input**: Fixed at bottom, above keyboard
- **Suggested questions**: Full-width cards for easy tapping

---

## Production Considerations

### Performance
- **Font loading**: Google Fonts with display=swap
- **Images**: Would use next/image or similar with lazy loading
- **Code splitting**: React Router enables route-based splitting
- **Minimal JavaScript**: Most UI is CSS-driven

### Scalability
- **Campus expansion**: Header shows current campus, easy to add campus selector
- **Multilingual**: Language selector in place, would integrate i18n library
- **Source types**: Admin dashboard supports multiple source types
- **Question categories**: Flexible tagging system

### Security & Privacy
- **No PII collection**: Questions are anonymized
- **Source verification**: Admin review queue ensures accuracy
- **Rate limiting**: Would implement on backend
- **HTTPS only**: All source links and API calls

### Analytics
- **Query tracking**: Monitor popular questions
- **Source accuracy**: Track confidence scores
- **User flow**: Landing → Chat conversion rates
- **Admin activity**: Review approval times

---

## Brand Alignment

### Official vs. Modern
- **Serif typography**: Institutional gravitas
- **Navy palette**: Academic authority
- **Clean layouts**: Modern usability
- **No AI clichés**: No robots, no purple gradients, no glowing orbs

### Chennai/SRM Context
- **Terracotta accent**: South Indian architectural reference
- **Warm neutrals**: Climate-appropriate color psychology
- **Multilingual support**: Tamil, Hindi, English
- **Campus-specific**: Kattankulathur focus (not generic)

### Trust Signals
- **Shield icons**: Security and verification
- **Source citations**: Transparency
- **Official contacts**: Clear escalation path
- **Cannot answer state**: Honesty about limitations

---

## Future Enhancements

1. **Multi-campus support**: Dropdown campus selector in header
2. **Query history**: Logged-in users can see past questions
3. **Bookmarks**: Save important answers
4. **Print-friendly**: Export answers with citations as PDF
5. **Voice input**: For accessibility and mobile convenience
6. **Comparison tool**: Compare programs, fees, campuses
7. **Application tracking**: Integrate with admission portal
8. **Notifications**: Updates on saved topics (fee changes, deadlines)

---

## Technical Implementation

### Stack
- **Framework**: React 18 with TypeScript
- **Routing**: React Router 7 (data mode)
- **Styling**: Tailwind CSS 4 with custom CSS variables
- **Components**: Radix UI primitives (accessible, unstyled)
- **Icons**: Lucide React (consistent, tree-shakeable)

### Code Organization
```
/src/app
  /components
    Header.tsx
    /ui (Radix-based primitives)
  /pages
    LandingPage.tsx
    ChatPage.tsx
    AdminDashboard.tsx
  routes.ts
  App.tsx
/src/styles
  fonts.css
  theme.css
  tailwind.css
```

### Design Tokens
All colors, spacing, typography defined in theme.css as CSS variables:
- Easy to modify globally
- Dark mode support (structured but not implemented)
- Consistent across components

---

## Competitive Differentiation

**What This Is NOT:**
- ❌ Generic chatbot landing page
- ❌ Startup SaaS product
- ❌ AI demo or experiment
- ❌ Unofficial third-party tool

**What This IS:**
- ✅ Official university service
- ✅ Source-grounded information system
- ✅ Production-ready admission tool
- ✅ Trustworthy parent-and-student facing product

---

## Design Rationale Summary

Every design decision prioritizes **trust, clarity, and institutional credibility**:

1. **Color palette**: Academic navy + warm terracotta (not startup purple/blue)
2. **Typography**: Editorial serif + professional sans (not generic system fonts)
3. **Layout**: Structured grids + ample whitespace (not cluttered or minimal-to-a-fault)
4. **Components**: Bordered cards + subtle depth (not heavy shadows or flat)
5. **Interactions**: Clear affordances + smooth transitions (not flashy or static)
6. **Content**: Cited answers + fallback states (not generic responses)
7. **Tone**: Formal yet helpful (not robotic or overly casual)

The result: A production-quality interface that feels like an official SRM service, not a third-party AI experiment.
