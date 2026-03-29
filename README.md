# SRM Admissions Assistant - Production Frontend

A production-quality web frontend for an official-source admissions assistant for **SRM Institute of Science and Technology, Kattankulathur Campus**.

This is not a generic chatbot—it's a serious, trustworthy, high-traffic university admissions interface designed for parents and students seeking official information.

---

## 🎯 Product Vision

### Core Principles
- **Official Sources Only**: All answers sourced from verified SRM websites and policy documents
- **Citation-First**: Every answer includes direct citations with links
- **Source-Grounded**: Cannot answer = clear communication + official contact info
- **Campus-Specific**: Focused on Kattankulathur campus (v1 scope)
- **Multilingual**: English, Tamil, Hindi support
- **Trust & Credibility**: Institutional feel, not startup-like

---

## 🏗️ Architecture

### Tech Stack
- **React 18** with TypeScript
- **React Router 7** (data mode for multi-page navigation)
- **Tailwind CSS 4** with custom design tokens
- **Radix UI** primitives for accessible components
- **Lucide React** for consistent iconography

### Project Structure
```
/src
  /app
    /components
      Header.tsx                 # Navigation with language/campus selector
      SourcePanel.tsx            # Source transparency display
      UIComponents.tsx           # Component library showcase
      /ui                        # Radix-based primitives
    /pages
      LandingPage.tsx           # Public hero + features + trust signals
      ChatPage.tsx              # Main chat interface with citations
      AdminDashboard.tsx        # Review queue for source changes
      ResponsiveShowcase.tsx    # Mobile/tablet/desktop preview
    routes.ts                   # React Router configuration
    App.tsx                     # Router provider
  /styles
    fonts.css                   # Google Fonts imports
    theme.css                   # Design tokens + typography
    tailwind.css                # Tailwind entry
/DESIGN_RATIONALE.md           # Complete design documentation
```

---

## 🎨 Design System

### Color Palette

**Primary - SRM Navy**
- Base: `#0F2340` - Academic authority and trust
- Light: `#1A3557` - Hover states
- Dark: `#081425` - Deep emphasis

**Secondary - Terracotta**
- Base: `#D84315` - Warm accent (Chennai context)
- Used sparingly for categorization

**Accent - Amber**
- Base: `#F57C00` - Attention/warnings
- Used for "cannot answer" states

**Semantic Colors**
- High Confidence: `#059669` (muted emerald)
- Medium Confidence: `#F59E0B` (amber)
- Low Confidence: `#DC2626` (muted red)

### Typography

**Crimson Pro (Serif)** - Headings
- Editorial quality with institutional gravitas
- Modern serif bridging academia and contemporary design
- Used for H1, H2, H3

**Inter (Sans-Serif)** - Body
- Clean, highly readable at all sizes
- Professional without being corporate
- All body text, UI elements, navigation

**JetBrains Mono (Monospace)** - Technical
- URLs, code snippets, reference numbers

---

## 📱 Pages & Features

### 1. Landing Page (`/`)
**Components:**
- Hero with official badge
- Value proposition
- Feature grid (4 cards)
- Suggested questions (6 common queries)
- Trust section with verification signals
- Footer with official contacts

**Key Elements:**
- Shield icon for "Official Information Only"
- Clear CTAs: "Ask Your Question" (primary) + "Visit Official Website" (secondary)
- Subtle depth with borders, not heavy shadows
- Mobile-responsive grid layouts

### 2. Chat Interface (`/chat`)
**Components:**
- Sticky header with campus/language
- Message types:
  - **User messages**: Right-aligned, navy background
  - **Assistant messages**: Left-aligned with confidence badges + collapsible citations
  - **Cannot answer**: Amber border + official contact card
- Loading states with bouncing dots
- Suggested questions (empty state)
- Input area with keyboard shortcuts

**Key Features:**
- Confidence indicators (high/medium/low)
- Source citations with:
  - Type icons (website vs PDF)
  - Last updated dates
  - External link indicators
  - Collapsible to reduce clutter
- Pre-populated questions from landing page

### 3. Admin Dashboard (`/admin`)
**Components:**
- Stats cards (4 metrics):
  - Total queries
  - Avg response time
  - Source accuracy
  - Pending reviews
- Review queue with filters
- Review cards showing:
  - Change type (fee/deadline/policy/program/scholarship)
  - Impact level (high/medium/low)
  - Old vs new values
  - Source citation
  - Affected questions count
  - Approve/Reject actions

**Key Features:**
- Search and status filters
- Visual hierarchy with emoji icons
- Color-coded impact badges
- Status indicators (pending/approved/rejected)

### 4. Responsive Showcase (`/responsive`)
- Device preview switcher (mobile/tablet/desktop)
- Breakpoint reference
- Design notes for each viewport
- Live preview frame

### 5. UI Components (`/components`)
- Confidence badge showcase
- Citation card examples
- Color palette reference
- Typography scale
- Design token documentation

---

## 🔧 Key Components

### Header
```tsx
- Sticky positioning with backdrop blur
- SRM Admissions logo + Kattankulathur campus indicator
- Navigation: Home | Ask a Question | Admin
- Language selector: English, Tamil (தமிழ்), Hindi (हिन्दी)
- Mobile hamburger menu
```

### Message Components
```tsx
<UserMessage />              // Right-aligned, navy bg
<AssistantMessage />         // Left-aligned, citations
<CannotAnswerMessage />      // Amber border, contact info
<LoadingMessage />           // Bouncing dots
```

### Admin Components
```tsx
<ReviewCard />               // Change preview with actions
<StatsCard />                // Metric display
```

### Shared Components
```tsx
<SourcePanel />              // Source transparency list
<CitationCard />             // Individual citation
<ConfidenceBadge />          // Confidence indicator
```

---

## 🎯 Design Decisions

### What This Is NOT
❌ Generic chatbot landing page  
❌ Startup SaaS product  
❌ AI demo or experiment  
❌ Purple gradients / glowing orbs  
❌ Over-rounded toy UI  
❌ Glassmorphism overload  

### What This IS
✅ Official university service  
✅ Source-grounded information system  
✅ Production-ready admission tool  
✅ Trustworthy parent-and-student interface  
✅ Institutional with modern polish  
✅ Clean, structured layouts  

### Trust Signals
- Shield icons throughout
- "Official Information Only" badges
- Source citations on every answer
- "Cannot answer" fallback with real contacts
- Campus-specific scope indicator
- Last updated dates on sources

---

## 📐 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations
- Single-column layouts
- Touch targets ≥44px
- Sticky bottom input
- Collapsed navigation
- Full-width cards

### Tablet Adaptations
- 2-column grids
- Preserved navigation
- Balanced spacing

### Desktop Enhancements
- Multi-column layouts
- Hover states
- Optimal line lengths (65-75 chars)
- Persistent navigation

---

## 🌐 Multilingual Support

Currently implemented:
- English (default)
- Tamil (தமிழ்)
- Hindi (हिन्दी)

**Implementation:**
- Language selector in header
- State management for language preference
- Ready for i18n library integration (e.g., react-i18next)

---

## 🔐 Production Considerations

### Performance
- Font loading with `display=swap`
- Route-based code splitting (React Router)
- CSS-driven interactions (minimal JS)
- Lazy loading for images (via ImageWithFallback)

### Accessibility
- WCAG AA color contrast (4.5:1)
- Focus indicators on all interactive elements
- Semantic HTML with ARIA labels
- Keyboard navigation support
- Screen reader friendly

### Security
- No PII collection in questions
- Source verification via admin review
- All external links use `rel="noopener noreferrer"`
- HTTPS-only source links

### Scalability
- Campus expansion: Add campus selector to header
- More languages: i18n infrastructure ready
- Source types: Admin supports multiple categories
- Question categories: Flexible tagging

---

## 🚀 Usage

### Available Routes
- `/` - Landing page
- `/chat` - Chat interface
- `/admin` - Admin dashboard
- `/responsive` - Responsive showcase
- `/components` - UI component library

### Navigation
All pages accessible via:
1. Header navigation
2. Direct URL access
3. Programmatic routing (for suggested questions)

### Mock Data
The current implementation uses mock data for:
- Chat responses (simulated based on keywords)
- Admin review queue (8 sample items)
- Source panel (8 official sources)

**Production Integration:**
- Replace mock responses with real API calls
- Connect admin dashboard to backend review system
- Implement actual source crawling/monitoring

---

## 💡 Key Features

### 1. Source Transparency
Every answer includes:
- Direct citations
- Source URLs
- Last updated dates
- Type indicators (website/PDF/document)

### 2. Confidence System
Three levels:
- **High**: Multiple official sources
- **Medium**: Single source or older data
- **Low**: Limited info, verification needed

### 3. Cannot Answer State
When official sources don't have info:
- Clear communication
- Amber-bordered card
- Official contact information
- Email, phone, website links

### 4. Admin Review Queue
Changes detected in sources:
- Fees, deadlines, policies, programs, scholarships
- Impact assessment (high/medium/low)
- Affected question count
- Approve/reject workflow

### 5. Suggested Questions
Landing page + empty chat state:
- 6 common admission questions
- Clickable to pre-populate chat
- Real questions students ask

---

## 🎨 Visual Design

### Layout Principles
- Structured grids
- Ample whitespace
- Clear information hierarchy
- Subtle depth (borders, not shadows)
- Consistent spacing (multiples of 4)

### Interaction Design
- Smooth transitions (200-300ms)
- Clear hover states
- Visual feedback on all actions
- Loading states with animation
- Disabled states clearly indicated

### Card Design
- 1px border with neutral-200
- White background
- 0.5rem border radius
- Hover: border changes to navy
- No floating shadows

---

## 📝 Content Guidelines

### Tone
- Formal yet helpful
- Not robotic
- Not overly casual
- Clear and direct
- Respectful of parent/student audience

### Answer Format
- Start with direct answer
- Provide details
- Include relevant dates/numbers
- End with actionable info
- Always cite sources

### Cannot Answer Response
- Acknowledge the question
- Explain why no official info found
- Provide official contacts
- Encourage verification

---

## 🔮 Future Enhancements

1. **Multi-campus Support**
   - Campus selector dropdown
   - Campus-specific routing
   - Cross-campus comparisons

2. **User Features**
   - Query history (logged-in users)
   - Bookmark answers
   - Export as PDF
   - Share functionality

3. **Advanced Search**
   - Filter by topic
   - Date range filters
   - Program-specific queries

4. **Accessibility**
   - Voice input
   - Text-to-speech for answers
   - High contrast mode
   - Font size controls

5. **Integration**
   - Application portal link
   - Payment gateway
   - Document upload
   - Notification system

6. **Analytics**
   - Popular questions tracking
   - Conversion metrics
   - User flow analysis
   - Source accuracy monitoring

---

## 📚 Documentation

- `/DESIGN_RATIONALE.md` - Complete design system documentation
- Component files include inline comments
- Design tokens in `/src/styles/theme.css`

---

## ✨ Credits

**Design Approach:**
- Institutional trust over startup aesthetics
- Editorial typography over generic sans-serif
- Structured layouts over minimalism
- Source transparency over black-box AI

**Inspiration:**
- University service portals
- Official government websites
- Academic journals
- Modern product interfaces

---

## 📄 License

This is a production frontend design for SRM Institute of Science and Technology.
All design decisions prioritize trust, clarity, and institutional credibility.

For questions about implementation or customization, refer to the design rationale document.
