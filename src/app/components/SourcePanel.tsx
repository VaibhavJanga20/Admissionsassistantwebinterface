import { ExternalLink, FileText, Globe, Calendar, CheckCircle2 } from "lucide-react";
import { Badge } from "./ui/badge";

interface SourceItem {
  id: string;
  title: string;
  url: string;
  type: "website" | "pdf" | "document";
  category: "admissions" | "fees" | "programs" | "hostel" | "policies" | "placements";
  lastCrawled: Date;
  status: "active" | "updated" | "deprecated";
  questionsAnswered: number;
}

interface SourcePanelProps {
  sources: SourceItem[];
  onSourceClick?: (source: SourceItem) => void;
}

export function SourcePanel({ sources, onSourceClick }: SourcePanelProps) {
  const categoryColors = {
    admissions: "var(--srm-navy)",
    fees: "var(--srm-terracotta)",
    programs: "var(--srm-amber)",
    hostel: "var(--confidence-medium)",
    policies: "var(--neutral-600)",
    placements: "var(--confidence-high)",
  };

  const groupedSources = sources.reduce((acc, source) => {
    if (!acc[source.category]) {
      acc[source.category] = [];
    }
    acc[source.category].push(source);
    return acc;
  }, {} as Record<string, SourceItem[]>);

  return (
    <div className="rounded-lg border border-[var(--neutral-200)] bg-white">
      <div className="border-b border-[var(--neutral-200)] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Official Sources
            </h3>
            <p className="mt-1 text-sm text-[var(--neutral-600)]">
              All information is sourced from verified SRM materials
            </p>
          </div>
          <Badge
            variant="outline"
            style={{
              borderColor: "var(--confidence-high)",
              backgroundColor: "#F0FFF4",
              color: "var(--confidence-high)",
            }}
          >
            {sources.length} Sources
          </Badge>
        </div>
      </div>

      <div className="divide-y divide-[var(--neutral-200)]">
        {Object.entries(groupedSources).map(([category, categorySources]) => (
          <div key={category} className="p-6">
            <h4
              className="mb-4 flex items-center gap-2 text-sm font-medium uppercase tracking-wide"
              style={{ color: categoryColors[category as keyof typeof categoryColors] }}
            >
              <div
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: categoryColors[category as keyof typeof categoryColors] }}
              />
              {category}
            </h4>

            <div className="space-y-3">
              {categorySources.map((source) => (
                <SourceCard
                  key={source.id}
                  source={source}
                  onClick={() => onSourceClick?.(source)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SourceCard({
  source,
  onClick,
}: {
  source: SourceItem;
  onClick?: () => void;
}) {
  const getTypeIcon = () => {
    switch (source.type) {
      case "pdf":
        return <FileText className="h-4 w-4 text-[var(--srm-terracotta)]" />;
      case "document":
        return <FileText className="h-4 w-4 text-[var(--srm-navy)]" />;
      default:
        return <Globe className="h-4 w-4 text-[var(--srm-navy)]" />;
    }
  };

  const getStatusBadge = () => {
    const statusConfig = {
      active: { label: "Active", color: "var(--confidence-high)", bg: "#F0FFF4" },
      updated: { label: "Recently Updated", color: "var(--srm-amber)", bg: "#FFF8F0" },
      deprecated: { label: "Deprecated", color: "var(--neutral-500)", bg: "var(--neutral-100)" },
    };

    const config = statusConfig[source.status];

    return (
      <Badge
        variant="outline"
        style={{
          borderColor: config.color,
          backgroundColor: config.bg,
          color: config.color,
        }}
        className="text-xs"
      >
        {config.label}
      </Badge>
    );
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) return "Today";
    if (diffDays === 1) return "Yesterday";
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  };

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className="group block rounded-lg border border-[var(--neutral-200)] bg-[var(--neutral-50)] p-4 transition-all hover:border-[var(--srm-navy)] hover:bg-white hover:shadow-sm"
    >
      <div className="flex items-start gap-3">
        <div className="mt-1">{getTypeIcon()}</div>

        <div className="flex-1 min-w-0">
          <div className="mb-2 flex items-start justify-between gap-2">
            <h5 className="text-sm font-medium text-[var(--neutral-900)] group-hover:text-[var(--srm-navy)] transition-colors">
              {source.title}
            </h5>
            <ExternalLink className="h-3.5 w-3.5 flex-shrink-0 text-[var(--neutral-400)] group-hover:text-[var(--srm-navy)] transition-colors" />
          </div>

          <div className="mb-2 flex flex-wrap items-center gap-2">
            {getStatusBadge()}
            <span className="text-xs text-[var(--neutral-500)]">
              {source.questionsAnswered} question{source.questionsAnswered !== 1 ? "s" : ""}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-[var(--neutral-500)]">
            <Calendar className="h-3 w-3" />
            <span>Last crawled {formatDate(source.lastCrawled)}</span>
          </div>
        </div>
      </div>
    </a>
  );
}

// Example usage component
export function SourcePanelExample() {
  const mockSources: SourceItem[] = [
    {
      id: "1",
      title: "B.Tech Admissions 2026 - Official Guidelines",
      url: "https://www.srmist.edu.in/admissions/btech",
      type: "website",
      category: "admissions",
      lastCrawled: new Date("2026-03-25"),
      status: "active",
      questionsAnswered: 234,
    },
    {
      id: "2",
      title: "Fee Structure 2026-27 - SRM Official",
      url: "https://www.srmist.edu.in/admissions/fees",
      type: "website",
      category: "fees",
      lastCrawled: new Date("2026-03-28"),
      status: "updated",
      questionsAnswered: 187,
    },
    {
      id: "3",
      title: "SRMJEEE 2026 Information Brochure",
      url: "https://www.srmist.edu.in/admissions/brochure-2026.pdf",
      type: "pdf",
      category: "admissions",
      lastCrawled: new Date("2026-03-20"),
      status: "active",
      questionsAnswered: 156,
    },
    {
      id: "4",
      title: "Hostel and Accommodation Fees",
      url: "https://www.srmist.edu.in/hostel/fees.pdf",
      type: "pdf",
      category: "hostel",
      lastCrawled: new Date("2026-03-15"),
      status: "active",
      questionsAnswered: 98,
    },
    {
      id: "5",
      title: "Academic Programs 2026-27",
      url: "https://www.srmist.edu.in/programs",
      type: "website",
      category: "programs",
      lastCrawled: new Date("2026-03-22"),
      status: "active",
      questionsAnswered: 167,
    },
    {
      id: "6",
      title: "Scholarship Programs 2026",
      url: "https://www.srmist.edu.in/scholarships",
      type: "website",
      category: "fees",
      lastCrawled: new Date("2026-03-18"),
      status: "active",
      questionsAnswered: 142,
    },
    {
      id: "7",
      title: "Placement Statistics 2025",
      url: "https://www.srmist.edu.in/placements/statistics-2025.pdf",
      type: "pdf",
      category: "placements",
      lastCrawled: new Date("2026-03-10"),
      status: "active",
      questionsAnswered: 89,
    },
    {
      id: "8",
      title: "Hostel Allocation Policy 2026-27",
      url: "https://www.srmist.edu.in/hostel/policy",
      type: "document",
      category: "hostel",
      lastCrawled: new Date("2026-03-29"),
      status: "updated",
      questionsAnswered: 45,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--neutral-50)] p-8">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl text-[var(--srm-navy)]">Source Transparency</h1>
          <p className="text-[var(--neutral-600)]">
            Complete list of official SRM sources monitored by this assistant
          </p>
        </div>

        <SourcePanel
          sources={mockSources}
          onSourceClick={(source) => console.log("Source clicked:", source)}
        />

        <div className="mt-6 rounded-lg border border-[var(--neutral-200)] bg-white p-6">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[var(--confidence-high)] mt-0.5" />
            <div>
              <h4 className="mb-1 text-sm font-medium text-[var(--srm-navy)]">
                Automatic Source Monitoring
              </h4>
              <p className="text-sm text-[var(--neutral-600)] leading-relaxed">
                All sources are automatically crawled every 24 hours. Changes detected in fees,
                deadlines, policies, or programs are flagged for admin review before being updated
                in the assistant's knowledge base.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
