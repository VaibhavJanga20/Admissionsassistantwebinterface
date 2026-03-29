import { Link } from "react-router";
import { ArrowRight, Shield, FileText, Search, CheckCircle2, ExternalLink } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";

export function LandingPage() {
  const features = [
    {
      icon: Shield,
      title: "Official Sources Only",
      description: "All answers are sourced from verified SRM websites, policy documents, and official publications.",
    },
    {
      icon: FileText,
      title: "Cited & Transparent",
      description: "Every answer includes direct citations and links to source materials for full transparency.",
    },
    {
      icon: Search,
      title: "Comprehensive Coverage",
      description: "Ask about admissions, fees, hostel facilities, programs, placements, and campus policies.",
    },
    {
      icon: CheckCircle2,
      title: "Kattankulathur Campus",
      description: "Focused exclusively on the Kattankulathur campus for accurate, campus-specific information.",
    },
  ];

  const suggestedQuestions = [
    "What are the B.Tech admission requirements for 2026?",
    "What is the hostel fee structure?",
    "What scholarships are available for undergraduate students?",
    "What is the placement record for Computer Science?",
    "How do I apply for lateral entry admission?",
    "What are the payment deadlines for semester fees?",
  ];

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <Header />

      {/* Hero Section */}
      <section className="relative border-b border-[var(--neutral-200)] bg-white">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--neutral-200)] bg-[var(--neutral-50)] px-4 py-2 text-sm text-[var(--neutral-700)] shadow-sm">
              <Shield className="h-4 w-4 text-[var(--srm-navy)]" />
              Official Information Only
            </div>
            
            <h1 className="mb-5 font-serif text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[var(--srm-navy)] text-balance leading-[1.1]" style={{ fontWeight: 600 }}>
              Official Admissions Assistant
            </h1>
            
            <p className="mb-3 text-lg md:text-xl text-[var(--neutral-700)] leading-relaxed text-balance">
              Get accurate, source-verified answers to your admission questions for{" "}
              <span className="font-semibold text-[var(--srm-navy)]">
                SRM Institute of Science and Technology, Kattankulathur
              </span>
            </p>

            <p className="mb-8 text-sm text-[var(--neutral-500)]">
              All information sourced from official SRM websites and documents
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="bg-[var(--srm-navy)] hover:bg-[var(--srm-navy-light)] text-white px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-200"
                >
                  Ask Your Question
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a 
                href="https://www.srmist.edu.in" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-[var(--neutral-300)] text-[var(--srm-navy)] hover:bg-[var(--neutral-50)] hover:border-[var(--srm-navy)] px-8 py-6 text-base transition-all duration-200"
                >
                  Visit Official Website
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-center font-serif text-2xl md:text-3xl text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              How It Works
            </h2>
            
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="group bg-white border border-[var(--neutral-200)] rounded-xl p-6 shadow-sm hover:shadow-md hover:border-[var(--neutral-300)] transition-all duration-200"
                >
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--srm-navy)]/5 group-hover:bg-[var(--srm-navy)]/10 transition-colors duration-200">
                    <feature.icon className="h-5 w-5 text-[var(--srm-navy)]" />
                  </div>
                  <h3 className="mb-2 font-sans text-base text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[var(--neutral-600)]">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Suggested Questions */}
      <section className="py-14 md:py-20 bg-white border-t border-[var(--neutral-200)]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-2 text-center font-serif text-2xl md:text-3xl text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Popular Questions
            </h2>
            <p className="mb-8 text-center text-sm text-[var(--neutral-500)]">
              Get started by exploring common admission queries
            </p>
            
            <div className="grid gap-3 sm:grid-cols-2">
              {suggestedQuestions.map((question, index) => (
                <Link to="/chat" key={index} state={{ question }}>
                  <div className="group border border-[var(--neutral-200)] rounded-lg p-4 hover:border-[var(--srm-navy)] hover:shadow-sm transition-all duration-200 cursor-pointer bg-white">
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm text-[var(--neutral-700)] group-hover:text-[var(--srm-navy)] transition-colors leading-snug">
                        {question}
                      </p>
                      <ArrowRight className="h-4 w-4 text-[var(--neutral-300)] group-hover:text-[var(--srm-navy)] group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-6 text-center">
              <Link to="/chat">
                <Button 
                  variant="outline"
                  className="border-[var(--neutral-300)] text-[var(--srm-navy)] hover:bg-[var(--neutral-50)] hover:border-[var(--srm-navy)] transition-all duration-200"
                >
                  Ask Your Own Question
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl bg-white border border-[var(--neutral-200)] rounded-xl p-8 md:p-10 text-center shadow-sm">
            <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--srm-navy)]/5">
              <Shield className="h-7 w-7 text-[var(--srm-navy)]" />
            </div>
            <h2 className="mb-3 font-serif text-xl md:text-2xl text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Trusted, Official Information
            </h2>
            <p className="text-sm text-[var(--neutral-600)] leading-relaxed mb-6 max-w-xl mx-auto">
              This assistant only provides information from official SRM sources. If an answer cannot be verified, you will be directed to official SRM admissions contacts for accurate guidance.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 justify-center text-sm">
              <div className="flex items-center gap-2 text-[var(--neutral-600)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--confidence-high)]" />
                <span>Source Citations</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--neutral-600)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--confidence-high)]" />
                <span>Official Documents</span>
              </div>
              <div className="flex items-center gap-2 text-[var(--neutral-600)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--confidence-high)]" />
                <span>Campus-Specific</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--neutral-200)] bg-white py-6">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-[var(--neutral-500)]">
            <p className="mb-1 font-medium text-[var(--neutral-600)]">
              SRM Institute of Science and Technology, Kattankulathur Campus
            </p>
            <p>
              For official admissions support:{" "}
              <a 
                href="mailto:admissions.ktr@srmist.edu.in"
                className="text-[var(--srm-navy)] hover:underline"
              >
                admissions.ktr@srmist.edu.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
