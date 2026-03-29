import { Link } from "react-router";
import { Home, MessageSquare, Shield, Smartphone, Layers, FileText, ExternalLink } from "lucide-react";

export function NavigationIndex() {
  const pages = [
    {
      path: "/",
      title: "Landing Page",
      description: "Public-facing hero with features, suggested questions, and trust signals",
      icon: Home,
      color: "var(--srm-navy)",
    },
    {
      path: "/chat",
      title: "Chat Interface",
      description: "Interactive Q&A with confidence badges, citations, and fallback states",
      icon: MessageSquare,
      color: "var(--srm-terracotta)",
    },
    {
      path: "/admin",
      title: "Admin Dashboard",
      description: "Review queue for source changes with stats and approval workflow",
      icon: Shield,
      color: "var(--srm-amber)",
    },
    {
      path: "/responsive",
      title: "Responsive Showcase",
      description: "Device preview and responsive design documentation",
      icon: Smartphone,
      color: "var(--confidence-high)",
    },
    {
      path: "/components",
      title: "UI Component Library",
      description: "Design system showcase with colors, typography, and components",
      icon: Layers,
      color: "var(--confidence-medium)",
    },
  ];

  const documentation = [
    {
      title: "README.md",
      description: "Project overview, features, and usage guide",
      icon: FileText,
    },
    {
      title: "DESIGN_RATIONALE.md",
      description: "Complete design system and decision rationale",
      icon: FileText,
    },
    {
      title: "IMPLEMENTATION_NOTES.md",
      description: "Integration guide and production checklist",
      icon: FileText,
    },
    {
      title: "VISUAL_DESIGN_GUIDE.md",
      description: "Visual design principles and component anatomy",
      icon: FileText,
    },
  ];

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      {/* Header */}
      <div className="border-b border-[var(--neutral-200)] bg-white">
        <div className="container mx-auto px-4 py-12">
          <h1 className="mb-3 font-serif text-4xl md:text-5xl text-[var(--srm-navy)]">
            SRM Admissions Assistant
          </h1>
          <p className="text-lg text-[var(--neutral-600)] max-w-3xl">
            A production-quality web frontend for an official-source admissions assistant. 
            Navigate through all pages and documentation below.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Pages */}
        <section className="mb-16">
          <h2 className="mb-6 font-serif text-3xl text-[var(--srm-navy)]">
            Application Pages
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {pages.map((page) => {
              const Icon = page.icon;
              return (
                <Link
                  key={page.path}
                  to={page.path}
                  className="group block rounded-lg border border-[var(--neutral-200)] bg-white p-6 transition-all hover:border-[var(--srm-navy)] hover:shadow-lg"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <div
                      className="flex h-12 w-12 items-center justify-center rounded-lg"
                      style={{ backgroundColor: page.color + "15" }}
                    >
                      <Icon className="h-6 w-6" style={{ color: page.color }} />
                    </div>
                    <ExternalLink className="h-4 w-4 text-[var(--neutral-400)] group-hover:text-[var(--srm-navy)] transition-colors" />
                  </div>
                  
                  <h3 className="mb-2 font-sans text-lg text-[var(--srm-navy)] group-hover:underline" style={{ fontWeight: 600 }}>
                    {page.title}
                  </h3>
                  
                  <p className="text-sm text-[var(--neutral-600)] leading-relaxed">
                    {page.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Documentation */}
        <section className="mb-12">
          <h2 className="mb-6 font-serif text-3xl text-[var(--srm-navy)]">
            Documentation
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {documentation.map((doc) => {
              const Icon = doc.icon;
              return (
                <div
                  key={doc.title}
                  className="rounded-lg border border-[var(--neutral-200)] bg-white p-5"
                >
                  <div className="flex items-start gap-3">
                    <Icon className="h-5 w-5 flex-shrink-0 text-[var(--srm-navy)] mt-0.5" />
                    <div>
                      <h4 className="mb-1 font-mono text-sm text-[var(--srm-navy)]">
                        {doc.title}
                      </h4>
                      <p className="text-sm text-[var(--neutral-600)]">
                        {doc.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Quick Stats */}
        <section className="rounded-lg border-2 border-[var(--srm-navy)] bg-white p-8">
          <h2 className="mb-6 font-serif text-2xl text-[var(--srm-navy)]">
            Project Overview
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            <div>
              <p className="mb-1 text-sm text-[var(--neutral-600)]">Pages Built</p>
              <p className="font-serif text-3xl text-[var(--srm-navy)]">5</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-[var(--neutral-600)]">Components</p>
              <p className="font-serif text-3xl text-[var(--srm-navy)]">20+</p>
            </div>
            <div>
              <p className="mb-1 text-sm text-[var(--neutral-600)]">Design Tokens</p>
              <p className="font-serif text-3xl text-[var(--srm-navy)]">50+</p>
            </div>
          </div>

          <div className="mt-8 space-y-3 border-t border-[var(--neutral-200)] pt-6">
            <div className="flex items-start gap-2">
              <div className="mt-1 h-2 w-2 rounded-full bg-[var(--confidence-high)]" />
              <p className="text-sm text-[var(--neutral-700)]">
                <strong>Production-Ready:</strong> Fully responsive, accessible, and optimized
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 h-2 w-2 rounded-full bg-[var(--confidence-high)]" />
              <p className="text-sm text-[var(--neutral-700)]">
                <strong>Institutional Design:</strong> Trust-focused, not startup-like
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 h-2 w-2 rounded-full bg-[var(--confidence-high)]" />
              <p className="text-sm text-[var(--neutral-700)]">
                <strong>Source-Grounded:</strong> Citations and transparency built-in
              </p>
            </div>
            <div className="flex items-start gap-2">
              <div className="mt-1 h-2 w-2 rounded-full bg-[var(--confidence-high)]" />
              <p className="text-sm text-[var(--neutral-700)]">
                <strong>Scalable:</strong> Ready for multi-campus and multilingual expansion
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-[var(--neutral-200)] bg-white py-8">
        <div className="container mx-auto px-4 text-center text-sm text-[var(--neutral-600)]">
          <p>
            Built with React 18, TypeScript, Tailwind CSS 4, React Router 7, and Radix UI
          </p>
        </div>
      </footer>
    </div>
  );
}
