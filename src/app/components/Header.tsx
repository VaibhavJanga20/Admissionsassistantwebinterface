import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Globe, MapPin, Menu, X } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState("en");
  const location = useLocation();

  const languages = [
    { value: "en", label: "English" },
    { value: "ta", label: "தமிழ்" },
    { value: "hi", label: "हिन्दी" },
  ];

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/chat", label: "Ask a Question" },
    { path: "/admin", label: "Admin" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--neutral-200)] bg-white/98 backdrop-blur-sm supports-[backdrop-filter]:bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Logo and Campus */}
          <Link 
            to="/" 
            className="flex items-center gap-3 group"
            aria-label="SRM Admissions Home"
          >
            <div className="flex flex-col">
              <span className="font-serif text-lg tracking-tight text-[var(--neutral-800)] group-hover:text-[var(--srm-burgundy)] transition-colors" style={{ fontWeight: 600 }}>
                Admissions Helper
              </span>
              <span className="flex items-center gap-1 text-[10px] font-semibold tracking-wide text-[var(--srm-teal)] uppercase">
                Kattankulathur Campus
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(item.path)
                    ? "text-[var(--srm-navy)] bg-[var(--srm-navy)]/5"
                    : "text-[var(--neutral-600)] hover:text-[var(--srm-navy)] hover:bg-[var(--neutral-100)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <span className="mx-2 h-4 w-px bg-[var(--neutral-200)]" aria-hidden="true" />
            <Link
              to="/nav"
              className={`px-3 py-2 rounded-lg text-sm transition-all duration-200 ${
                isActive("/nav")
                  ? "text-[var(--srm-navy)] bg-[var(--srm-navy)]/5"
                  : "text-[var(--neutral-500)] hover:text-[var(--srm-navy)] hover:bg-[var(--neutral-100)]"
              }`}
            >
              All Pages
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-2">
            <Globe className="h-4 w-4 text-[var(--neutral-400)]" aria-hidden="true" />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger 
                className="w-[100px] h-9 border-[var(--neutral-200)] text-sm"
                aria-label="Select language"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden h-10 w-10 flex items-center justify-center rounded-lg text-[var(--neutral-600)] hover:bg-[var(--neutral-100)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div 
            id="mobile-menu"
            className="md:hidden py-3 border-t border-[var(--neutral-200)] animate-in slide-in-from-top-2 duration-200"
          >
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    isActive(item.path)
                      ? "text-[var(--srm-navy)] bg-[var(--srm-navy)]/5"
                      : "text-[var(--neutral-600)] hover:bg-[var(--neutral-100)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/nav"
                className={`px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  isActive("/nav")
                    ? "text-[var(--srm-navy)] bg-[var(--srm-navy)]/5"
                    : "text-[var(--neutral-500)] hover:bg-[var(--neutral-100)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                All Pages
              </Link>
              <div className="flex items-center gap-2 mt-2 pt-3 border-t border-[var(--neutral-200)]">
                <Globe className="h-4 w-4 text-[var(--neutral-400)]" aria-hidden="true" />
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger 
                    className="flex-1 h-10 border-[var(--neutral-200)]"
                    aria-label="Select language"
                  >
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {languages.map((lang) => (
                      <SelectItem key={lang.value} value={lang.value}>
                        {lang.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
