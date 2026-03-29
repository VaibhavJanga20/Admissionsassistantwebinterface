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
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[var(--neutral-100)] px-4 py-2 text-sm text-[var(--neutral-700)]">
              <Shield className="h-4 w-4 text-[var(--srm-navy)]" />
              Official Information Only
            </div>
            
            <h1 className="mb-6 font-serif text-4xl md:text-5xl lg:text-6xl tracking-tight text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
              Official Admissions Assistant
            </h1>
            
            <p className="mb-4 text-lg md:text-xl text-[var(--neutral-700)] leading-relaxed">
              Get accurate, source-verified answers to your admission questions for{" "}
              <span className="font-medium text-[var(--srm-navy)]">
                SRM Institute of Science and Technology, Kattankulathur
              </span>
            </p>

            <p className="mb-10 text-sm text-[var(--neutral-600)]">
              All information sourced from official SRM websites and documents • Available in English, Tamil, and Hindi
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="bg-[var(--srm-navy)] hover:bg-[var(--srm-navy-light)] text-white px-8 py-6 text-base"
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
                  className="border-[var(--srm-navy)] text-[var(--srm-navy)] hover:bg-[var(--neutral-50)] px-8 py-6 text-base"
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-center font-serif text-3xl md:text-4xl text-[var(--srm-navy)]">
              How It Works
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-white border border-[var(--neutral-200)] rounded-lg p-6">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--neutral-100)]">
                    <feature.icon className="h-6 w-6 text-[var(--srm-navy)]" />
                  </div>
                  <h3 className="mb-2 font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
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
      <section className="py-16 md:py-20 bg-white border-t border-[var(--neutral-200)]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-3 text-center font-serif text-3xl md:text-4xl text-[var(--srm-navy)]">
              Popular Questions
            </h2>
            <p className="mb-10 text-center text-[var(--neutral-600)]">
              Get started by exploring common admission queries
            </p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {suggestedQuestions.map((question, index) => (
                <Link to="/chat" key={index} state={{ question }}>
                  <div className="group border border-[var(--neutral-200)] rounded-lg p-5 hover:border-[var(--srm-navy)] transition-colors cursor-pointer bg-[var(--neutral-50)] hover:bg-white">
                    <div className="flex items-start justify-between gap-3">
                      <p className="text-sm text-[var(--neutral-700)] group-hover:text-[var(--srm-navy)] transition-colors">
                        {question}
                      </p>
                      <ArrowRight className="h-4 w-4 text-[var(--neutral-400)] group-hover:text-[var(--srm-navy)] transition-colors flex-shrink-0 mt-0.5" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link to="/chat">
                <Button 
                  variant="outline"
                  className="border-[var(--srm-navy)] text-[var(--srm-navy)] hover:bg-[var(--neutral-50)]"
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
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl bg-white border border-[var(--neutral-200)] rounded-lg p-8 md:p-12 text-center">
            <Shield className="mx-auto mb-4 h-12 w-12 text-[var(--srm-navy)]" />
            <h2 className="mb-4 font-serif text-2xl md:text-3xl text-[var(--srm-navy)]">
              Trusted, Official Information
            </h2>
            <p className="text-[var(--neutral-600)] leading-relaxed mb-6">
              This assistant only provides information from official SRM sources. If an answer cannot be verified from official materials, you'll be directed to official SRM admissions contacts. This ensures you always receive accurate, trustworthy information for your admission decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <div className="flex items-center justify-center gap-2 text-[var(--neutral-600)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--confidence-high)]" />
                <span>Source Citations</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[var(--neutral-600)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--confidence-high)]" />
                <span>Official Documents Only</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[var(--neutral-600)]">
                <CheckCircle2 className="h-4 w-4 text-[var(--confidence-high)]" />
                <span>Campus-Specific</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--neutral-200)] bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-[var(--neutral-600)]">
            <p className="mb-2">
              SRM Institute of Science and Technology, Kattankulathur Campus
            </p>
            <p>
              For official admissions support:{" "}
              <a 
                href="https://www.srmist.edu.in/admissions" 
                target="_blank" 
                rel="noopener noreferrer"
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
