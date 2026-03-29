import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Globe, MapPin, Menu, X } from "lucide-react";
import { Button } from "./ui/button";
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

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--neutral-200)] bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and Campus */}
          <Link to="/" className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="font-serif text-xl tracking-tight text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
                SRM Admissions
              </span>
              <span className="flex items-center gap-1 text-xs text-[var(--neutral-600)]">
                <MapPin className="h-3 w-3" />
                Kattankulathur Campus
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className={`text-sm transition-colors ${
                isActive("/")
                  ? "text-[var(--srm-navy)]"
                  : "text-[var(--neutral-600)] hover:text-[var(--srm-navy)]"
              }`}
            >
              Home
            </Link>
            <Link
              to="/chat"
              className={`text-sm transition-colors ${
                isActive("/chat")
                  ? "text-[var(--srm-navy)]"
                  : "text-[var(--neutral-600)] hover:text-[var(--srm-navy)]"
              }`}
            >
              Ask a Question
            </Link>
            <Link
              to="/admin"
              className={`text-sm transition-colors ${
                isActive("/admin")
                  ? "text-[var(--srm-navy)]"
                  : "text-[var(--neutral-600)] hover:text-[var(--srm-navy)]"
              }`}
            >
              Admin
            </Link>
            <span className="text-[var(--neutral-300)]">•</span>
            <Link
              to="/nav"
              className={`text-sm transition-colors ${
                isActive("/nav")
                  ? "text-[var(--srm-navy)]"
                  : "text-[var(--neutral-600)] hover:text-[var(--srm-navy)]"
              }`}
            >
              All Pages
            </Link>
          </nav>

          {/* Language Selector */}
          <div className="hidden md:flex items-center gap-3">
            <Globe className="h-4 w-4 text-[var(--neutral-500)]" />
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[120px] border-[var(--neutral-200)]">
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
            className="md:hidden p-2 text-[var(--neutral-600)]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-[var(--neutral-200)]">
            <nav className="flex flex-col gap-4">
              <Link
                to="/"
                className={`text-sm py-2 ${
                  isActive("/")
                    ? "text-[var(--srm-navy)]"
                    : "text-[var(--neutral-600)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/chat"
                className={`text-sm py-2 ${
                  isActive("/chat")
                    ? "text-[var(--srm-navy)]"
                    : "text-[var(--neutral-600)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Ask a Question
              </Link>
              <Link
                to="/admin"
                className={`text-sm py-2 ${
                  isActive("/admin")
                    ? "text-[var(--srm-navy)]"
                    : "text-[var(--neutral-600)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Admin
              </Link>
              <span className="text-[var(--neutral-300)]">•</span>
              <Link
                to="/nav"
                className={`text-sm py-2 ${
                  isActive("/nav")
                    ? "text-[var(--srm-navy)]"
                    : "text-[var(--neutral-600)]"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                All Pages
              </Link>
              <div className="flex items-center gap-3 pt-2 border-t border-[var(--neutral-200)]">
                <Globe className="h-4 w-4 text-[var(--neutral-500)]" />
                <Select value={language} onValueChange={setLanguage}>
                  <SelectTrigger className="w-full border-[var(--neutral-200)]">
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