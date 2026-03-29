import { FileText, ExternalLink, Calendar } from "lucide-react";

export interface Source {
  title: string;
  url: string;
  type: "website" | "pdf" | "document";
  lastUpdated?: string;
}

interface SourceCardProps {
  source: Source;
  compact?: boolean;
}

export function SourceCard({ source, compact = false }: SourceCardProps) {
  const Icon = source.type === "pdf" ? FileText : ExternalLink;
  const iconColor = source.type === "pdf" ? "var(--srm-terracotta)" : "var(--srm-navy)";

  if (compact) {
    return (
      <a
        href={source.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 text-xs text-[var(--srm-navy)] hover:text-[var(--srm-navy-light)] transition-colors"
      >
        <Icon className="h-3 w-3" style={{ color: iconColor }} />
        <span className="underline underline-offset-2 decoration-[var(--neutral-300)] group-hover:decoration-[var(--srm-navy)]">
          {source.title}
        </span>
      </a>
    );
  }

  return (
    <a
      href={source.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-start gap-3 rounded-xl border border-[var(--neutral-200)] bg-[var(--neutral-50)] p-3 transition-all duration-200 hover:border-[var(--srm-navy)] hover:bg-white hover:shadow-sm"
    >
      <div className="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-white border border-[var(--neutral-200)] group-hover:border-[var(--neutral-300)]">
        <Icon className="h-4 w-4" style={{ color: iconColor }} />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-[var(--neutral-800)] group-hover:text-[var(--srm-navy)] transition-colors line-clamp-2">
          {source.title}
        </p>
        {source.lastUpdated && (
          <div className="mt-1 flex items-center gap-1 text-[11px] text-[var(--neutral-500)]">
            <Calendar className="h-3 w-3" />
            <span>Updated {source.lastUpdated}</span>
          </div>
        )}
        <p className="mt-1 text-[11px] text-[var(--neutral-400)] truncate">
          {source.url.replace(/^https?:\/\//, "").split("/")[0]}
        </p>
      </div>
      <ExternalLink className="h-4 w-4 flex-shrink-0 text-[var(--neutral-300)] group-hover:text-[var(--srm-navy)] transition-colors mt-1" />
    </a>
  );
}

interface SourceListProps {
  sources: Source[];
  title?: string;
}

export function SourceList({ sources, title = "Sources" }: SourceListProps) {
  if (!sources.length) return null;

  return (
    <div className="space-y-2">
      <p className="text-xs font-medium text-[var(--neutral-600)] flex items-center gap-1.5">
        <FileText className="h-3.5 w-3.5" />
        {title} ({sources.length})
      </p>
      <div className="space-y-2">
        {sources.map((source, index) => (
          <SourceCard key={index} source={source} />
        ))}
      </div>
    </div>
  );
}
