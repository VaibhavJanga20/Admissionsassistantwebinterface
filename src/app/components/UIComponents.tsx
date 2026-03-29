import { CheckCircle2, AlertTriangle, AlertCircle, FileText, ExternalLink } from "lucide-react";
import { Badge } from "../components/ui/badge";

interface ConfidenceBadgeProps {
  level: "high" | "medium" | "low";
  size?: "sm" | "md";
}

export function ConfidenceBadge({ level, size = "md" }: ConfidenceBadgeProps) {
  const config = {
    high: {
      label: "High Confidence",
      color: "var(--confidence-high)",
      bg: "#F0FFF4",
      icon: CheckCircle2,
      description: "Answer verified from multiple official sources",
    },
    medium: {
      label: "Medium Confidence",
      color: "var(--confidence-medium)",
      bg: "#FFF8F0",
      icon: AlertTriangle,
      description: "Answer from official source but may need verification",
    },
    low: {
      label: "Low Confidence",
      color: "var(--confidence-low)",
      bg: "#FFF1F0",
      icon: AlertCircle,
      description: "Limited information found, contact admissions for confirmation",
    },
  };

  const info = config[level];
  const Icon = info.icon;
  const isSmall = size === "sm";

  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full ${isSmall ? "px-2 py-0.5 text-xs" : "px-3 py-1 text-sm"}`}
      style={{
        backgroundColor: info.bg,
        border: `1px solid ${info.color}`,
      }}
    >
      <Icon className={isSmall ? "h-3 w-3" : "h-4 w-4"} style={{ color: info.color }} />
      <span style={{ color: info.color, fontWeight: 500 }}>{info.label}</span>
    </div>
  );
}

interface CitationCardProps {
  title: string;
  url: string;
  type: "website" | "pdf" | "document";
  lastUpdated?: string;
  excerpt?: string;
}

export function CitationCard({ title, url, type, lastUpdated, excerpt }: CitationCardProps) {
  const getTypeIcon = () => {
    switch (type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-[var(--srm-terracotta)]" />;
      case "document":
        return <FileText className="h-4 w-4 text-[var(--srm-navy)]" />;
      default:
        return <ExternalLink className="h-4 w-4 text-[var(--srm-navy)]" />;
    }
  };

  const getTypeBadge = () => {
    const badges = {
      website: { label: "Website", color: "var(--srm-navy)", bg: "#EFF6FF" },
      pdf: { label: "PDF", color: "var(--srm-terracotta)", bg: "#FFF1F0" },
      document: { label: "Document", color: "var(--srm-amber)", bg: "#FFF8F0" },
    };
    const badge = badges[type];
    return (
      <Badge
        variant="outline"
        className="text-xs"
        style={{
          borderColor: badge.color,
          backgroundColor: badge.bg,
          color: badge.color,
        }}
      >
        {badge.label}
      </Badge>
    );
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-lg border border-[var(--neutral-200)] bg-[var(--neutral-50)] p-4 transition-all hover:border-[var(--srm-navy)] hover:bg-white hover:shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1">{getTypeIcon()}</div>

        <div className="flex-1 min-w-0">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h4 className="text-sm font-medium text-[var(--neutral-900)] group-hover:text-[var(--srm-navy)] transition-colors">
              {title}
            </h4>
            {getTypeBadge()}
          </div>

          {excerpt && (
            <p className="mb-2 text-xs text-[var(--neutral-600)] line-clamp-2">{excerpt}</p>
          )}

          <div className="flex flex-wrap items-center gap-3 text-xs text-[var(--neutral-500)]">
            {lastUpdated && <span>Updated {lastUpdated}</span>}
            <span className="text-[var(--srm-navy)]">View source →</span>
          </div>
        </div>
      </div>
    </a>
  );
}

// Component showcasing different UI states
export function UIComponentShowcase() {
  return (
    <div className="min-h-screen bg-[var(--neutral-50)] p-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h1 className="mb-2 font-serif text-4xl text-[var(--srm-navy)]">
            UI Component Library
          </h1>
          <p className="text-lg text-[var(--neutral-600)]">
            Design system components for the SRM Admissions Assistant
          </p>
        </div>

        {/* Confidence Badges */}
        <section className="mb-12">
          <h2 className="mb-6 font-serif text-2xl text-[var(--srm-navy)]">Confidence Indicators</h2>
          
          <div className="mb-8 rounded-lg border border-[var(--neutral-200)] bg-white p-6">
            <h3 className="mb-4 text-sm font-medium text-[var(--neutral-700)]">Standard Size</h3>
            <div className="flex flex-wrap gap-4">
              <ConfidenceBadge level="high" />
              <ConfidenceBadge level="medium" />
              <ConfidenceBadge level="low" />
            </div>
          </div>

          <div className="mb-8 rounded-lg border border-[var(--neutral-200)] bg-white p-6">
            <h3 className="mb-4 text-sm font-medium text-[var(--neutral-700)]">Small Size</h3>
            <div className="flex flex-wrap gap-3">
              <ConfidenceBadge level="high" size="sm" />
              <ConfidenceBadge level="medium" size="sm" />
              <ConfidenceBadge level="low" size="sm" />
            </div>
          </div>

          <div className="rounded-lg border-2 border-[var(--srm-amber)] bg-[#FFF8F0] p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-5 w-5 flex-shrink-0 text-[var(--srm-amber-dark)] mt-0.5" />
              <div>
                <h4 className="mb-2 text-sm font-medium text-[var(--srm-navy)]">Usage Guidelines</h4>
                <ul className="space-y-1 text-sm text-[var(--neutral-700)]">
                  <li>
                    • <strong>High:</strong> Answer verified from multiple official sources with recent timestamps
                  </li>
                  <li>
                    • <strong>Medium:</strong> Answer from official source but single verification or older data
                  </li>
                  <li>
                    • <strong>Low:</strong> Partial information found, user should verify with admissions office
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Citation Cards */}
        <section className="mb-12">
          <h2 className="mb-6 font-serif text-2xl text-[var(--srm-navy)]">Citation Cards</h2>
          
          <div className="space-y-4">
            <CitationCard
              title="B.Tech Admissions 2026 - Official Guidelines"
              url="https://www.srmist.edu.in/admissions/btech"
              type="website"
              lastUpdated="March 2026"
              excerpt="Complete guide to B.Tech admissions including eligibility criteria, entrance examination details, important dates, and application procedures."
            />

            <CitationCard
              title="Fee Structure 2026-27 - SRM Official"
              url="https://www.srmist.edu.in/admissions/fees"
              type="website"
              lastUpdated="March 2026"
            />

            <CitationCard
              title="SRMJEEE 2026 Information Brochure"
              url="https://www.srmist.edu.in/admissions/brochure-2026.pdf"
              type="pdf"
              lastUpdated="January 2026"
              excerpt="Official information brochure for SRMJEEE 2026 containing exam pattern, syllabus, sample questions, and registration guidelines."
            />

            <CitationCard
              title="Hostel Allocation Policy 2026-27"
              url="https://www.srmist.edu.in/hostel/policy"
              type="document"
              lastUpdated="February 2026"
            />
          </div>
        </section>

        {/* Color Palette */}
        <section className="mb-12">
          <h2 className="mb-6 font-serif text-2xl text-[var(--srm-navy)]">Color Palette</h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
              <h3 className="mb-4 text-sm font-medium text-[var(--neutral-700)]">Primary - Navy</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--srm-navy-dark)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Dark</p>
                    <p className="font-mono text-xs">#081425</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--srm-navy)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Base</p>
                    <p className="font-mono text-xs">#0F2340</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--srm-navy-light)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Light</p>
                    <p className="font-mono text-xs">#1A3557</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
              <h3 className="mb-4 text-sm font-medium text-[var(--neutral-700)]">Secondary - Terracotta</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--srm-terracotta-dark)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Dark</p>
                    <p className="font-mono text-xs">#B8340F</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--srm-terracotta)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Base</p>
                    <p className="font-mono text-xs">#D84315</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--srm-terracotta-light)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Light</p>
                    <p className="font-mono text-xs">#E57368</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
              <h3 className="mb-4 text-sm font-medium text-[var(--neutral-700)]">Semantic Colors</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--confidence-high)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">High Confidence</p>
                    <p className="font-mono text-xs">#059669</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--confidence-medium)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Medium Confidence</p>
                    <p className="font-mono text-xs">#F59E0B</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-lg" style={{ backgroundColor: "var(--confidence-low)" }} />
                  <div>
                    <p className="text-xs text-[var(--neutral-600)]">Low Confidence</p>
                    <p className="font-mono text-xs">#DC2626</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Typography */}
        <section>
          <h2 className="mb-6 font-serif text-2xl text-[var(--srm-navy)]">Typography</h2>
          
          <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-8">
            <div className="space-y-8">
              <div>
                <p className="mb-2 text-xs text-[var(--neutral-500)]">Heading 1 - Crimson Pro 600</p>
                <h1 className="text-[var(--srm-navy)]">Official Admissions Assistant</h1>
              </div>

              <div>
                <p className="mb-2 text-xs text-[var(--neutral-500)]">Heading 2 - Crimson Pro 600</p>
                <h2 className="text-[var(--srm-navy)]">How It Works</h2>
              </div>

              <div>
                <p className="mb-2 text-xs text-[var(--neutral-500)]">Heading 3 - Crimson Pro 600</p>
                <h3 className="text-[var(--srm-navy)]">Trusted Information</h3>
              </div>

              <div>
                <p className="mb-2 text-xs text-[var(--neutral-500)]">Body Text - Inter 400</p>
                <p className="text-[var(--neutral-700)] leading-relaxed">
                  Get accurate, source-verified answers to your admission questions for SRM
                  Institute of Science and Technology, Kattankulathur. All information sourced from
                  official SRM websites and documents.
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs text-[var(--neutral-500)]">Small Text - Inter 400</p>
                <p className="text-sm text-[var(--neutral-600)]">
                  Available in English, Tamil, and Hindi • Campus-specific information
                </p>
              </div>

              <div>
                <p className="mb-2 text-xs text-[var(--neutral-500)]">Monospace - JetBrains Mono 400</p>
                <p className="font-mono text-sm text-[var(--neutral-700)]">
                  https://www.srmist.edu.in/admissions
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
