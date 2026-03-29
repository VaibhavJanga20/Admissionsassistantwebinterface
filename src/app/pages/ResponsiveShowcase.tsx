import { useState } from "react";
import { Smartphone, Tablet, Monitor } from "lucide-react";
import { Button } from "../components/ui/button";
import { Header } from "../components/Header";

export function ResponsiveShowcase() {
  const [viewMode, setViewMode] = useState<"mobile" | "tablet" | "desktop">("desktop");

  const viewModes = [
    { id: "mobile" as const, label: "Mobile", icon: Smartphone, width: "375px" },
    { id: "tablet" as const, label: "Tablet", icon: Tablet, width: "768px" },
    { id: "desktop" as const, label: "Desktop", icon: Monitor, width: "100%" },
  ];

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <Header />

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl text-[var(--srm-navy)]">
            Responsive Design System
          </h1>
          <p className="text-[var(--neutral-600)]">
            Mobile-first design tested across all device sizes
          </p>
        </div>

        {/* View Mode Selector */}
        <div className="mb-6 flex gap-2">
          {viewModes.map((mode) => {
            const Icon = mode.icon;
            return (
              <Button
                key={mode.id}
                variant={viewMode === mode.id ? "default" : "outline"}
                onClick={() => setViewMode(mode.id)}
                className={
                  viewMode === mode.id
                    ? "bg-[var(--srm-navy)] text-white"
                    : "border-[var(--neutral-300)] text-[var(--neutral-700)]"
                }
              >
                <Icon className="mr-2 h-4 w-4" />
                {mode.label}
              </Button>
            );
          })}
        </div>

        {/* Preview Frame */}
        <div className="rounded-lg border-2 border-[var(--neutral-200)] bg-[var(--neutral-100)] p-8">
          <div
            className="mx-auto bg-white shadow-xl transition-all duration-300"
            style={{
              width: viewModes.find((m) => m.id === viewMode)?.width,
              maxWidth: "100%",
            }}
          >
            <ResponsivePreview />
          </div>
        </div>

        {/* Design Notes */}
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
            <Smartphone className="mb-3 h-8 w-8 text-[var(--srm-navy)]" />
            <h3 className="mb-2 font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Mobile First
            </h3>
            <p className="text-sm text-[var(--neutral-600)] leading-relaxed">
              Single-column layouts, large touch targets (44px minimum), sticky headers, and
              optimized typography for smaller screens.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
            <Tablet className="mb-3 h-8 w-8 text-[var(--srm-navy)]" />
            <h3 className="mb-2 font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Tablet Optimized
            </h3>
            <p className="text-sm text-[var(--neutral-600)] leading-relaxed">
              Two-column grids where appropriate, preserved navigation, and balanced use of screen
              real estate for comfortable reading.
            </p>
          </div>

          <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
            <Monitor className="mb-3 h-8 w-8 text-[var(--srm-navy)]" />
            <h3 className="mb-2 font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Desktop Enhanced
            </h3>
            <p className="text-sm text-[var(--neutral-600)] leading-relaxed">
              Multi-column layouts, hover states, persistent navigation, and optimal line lengths
              for readability (max 65-75 characters).
            </p>
          </div>
        </div>

        {/* Breakpoint Reference */}
        <div className="mt-8 rounded-lg border border-[var(--neutral-200)] bg-white p-6">
          <h3 className="mb-4 font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
            Breakpoint Reference
          </h3>
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-lg bg-[var(--neutral-50)] p-4">
              <p className="mb-1 text-xs text-[var(--neutral-500)]">Mobile</p>
              <p className="font-mono text-sm text-[var(--srm-navy)]">&lt; 768px</p>
              <p className="mt-2 text-xs text-[var(--neutral-600)]">
                Phones, small tablets in portrait
              </p>
            </div>
            <div className="rounded-lg bg-[var(--neutral-50)] p-4">
              <p className="mb-1 text-xs text-[var(--neutral-500)]">Tablet</p>
              <p className="font-mono text-sm text-[var(--srm-navy)]">768px - 1024px</p>
              <p className="mt-2 text-xs text-[var(--neutral-600)]">
                Tablets, small laptops
              </p>
            </div>
            <div className="rounded-lg bg-[var(--neutral-50)] p-4">
              <p className="mb-1 text-xs text-[var(--neutral-500)]">Desktop</p>
              <p className="font-mono text-sm text-[var(--srm-navy)]">&gt; 1024px</p>
              <p className="mt-2 text-xs text-[var(--neutral-600)]">
                Laptops, desktops, large displays
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ResponsivePreview() {
  return (
    <div className="overflow-hidden">
      {/* Mini Hero */}
      <div className="border-b border-[var(--neutral-200)] bg-white p-8 text-center">
        <div className="mx-auto max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[var(--neutral-100)] px-3 py-1 text-xs text-[var(--neutral-700)]">
            Official Information Only
          </div>
          <h2 className="mb-3 font-serif text-2xl tracking-tight text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
            Official Admissions Assistant
          </h2>
          <p className="mb-6 text-sm text-[var(--neutral-700)]">
            Get accurate, source-verified answers for SRM Kattankulathur
          </p>
          <Button className="bg-[var(--srm-navy)] text-white">Ask Your Question</Button>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-4">
        {[
          { title: "Official Sources", emoji: "🛡️" },
          { title: "Cited Answers", emoji: "📄" },
          { title: "Comprehensive", emoji: "🔍" },
          { title: "Campus-Specific", emoji: "✓" },
        ].map((feature, i) => (
          <div key={i} className="rounded-lg border border-[var(--neutral-200)] bg-white p-4">
            <div className="mb-2 text-2xl">{feature.emoji}</div>
            <p className="text-sm font-medium text-[var(--srm-navy)]">{feature.title}</p>
          </div>
        ))}
      </div>

      {/* Sample Chat Message */}
      <div className="border-t border-[var(--neutral-200)] bg-[var(--neutral-50)] p-6">
        <div className="mb-4 flex justify-end">
          <div className="max-w-[80%] rounded-lg bg-[var(--srm-navy)] px-4 py-2 text-sm text-white">
            What is the B.Tech fee?
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-[85%] rounded-lg border border-[var(--neutral-200)] bg-white p-4 text-sm">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-[var(--neutral-50)] px-2 py-0.5 text-xs">
              <div className="h-1.5 w-1.5 rounded-full bg-[var(--confidence-high)]" />
              <span style={{ color: "var(--confidence-high)" }}>High Confidence</span>
            </div>
            <p className="text-[var(--neutral-800)]">
              For 2026-27, the B.Tech tuition fee is ₹2,50,000 per year at Kattankulathur campus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
