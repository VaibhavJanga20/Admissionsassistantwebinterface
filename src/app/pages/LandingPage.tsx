import { Link } from "react-router";
import { ArrowRight, Shield, FileText, Search, CheckCircle2, ExternalLink, MapPin } from "lucide-react";
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
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--srm-burgundy)]/20 bg-[var(--srm-burgundy)]/5 px-4 py-2 text-sm text-[var(--srm-burgundy)]">
              <MapPin className="h-4 w-4" />
              Kattankulathur Campus Official
            </div>
            
            <h1 className="mb-6 font-serif text-4xl md:text-5xl lg:text-[3.5rem] tracking-tight text-[var(--neutral-900)] text-balance leading-[1.15]" style={{ fontWeight: 500 }}>
              Your Official{" "}
              <span className="italic text-[var(--srm-burgundy)]" style={{ fontWeight: 500 }}>Admissions</span>{" "}
              Guide
            </h1>
            
            <p className="mb-10 text-lg md:text-xl text-[var(--neutral-600)] leading-relaxed text-balance max-w-2xl mx-auto">
              Ask anything about admissions, fees, eligibility, and scholarships. All answers are grounded strictly in official institutional documents.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/chat">
                <Button 
                  size="lg" 
                  className="bg-[var(--srm-burgundy)] hover:bg-[var(--srm-burgundy-light)] text-white px-8 py-6 text-base shadow-md hover:shadow-lg transition-all duration-200"
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
                  className="border-[var(--neutral-300)] text-[var(--neutral-700)] hover:bg-[var(--neutral-50)] hover:border-[var(--srm-burgundy)] hover:text-[var(--srm-burgundy)] px-8 py-6 text-base transition-all duration-200"
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
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-12 md:gap-16 md:grid-cols-3">
              {features.slice(0, 3).map((feature, index) => (
                <div 
                  key={index} 
                  className="text-center"
                >
                  <div className="mx-auto mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full border-2 border-[var(--srm-burgundy)]/20 bg-white">
                    <feature.icon className="h-6 w-6 text-[var(--srm-burgundy)]" />
                  </div>
                  <h3 className="mb-3 font-serif text-lg text-[var(--neutral-900)]" style={{ fontWeight: 600 }}>
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

      {/* Browse by Topic Section */}
      <section className="py-16 md:py-24 bg-[var(--neutral-100)]">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-10 text-center font-serif text-2xl md:text-3xl text-[var(--neutral-900)]" style={{ fontWeight: 600 }}>
              Browse by Topic
            </h2>
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { icon: FileText, title: "B.Tech Fees", desc: "Ask questions about B.Tech fees and related details." },
                { icon: Shield, title: "Eligibility Criteria", desc: "Ask questions about eligibility criteria and related details." },
                { icon: Search, title: "Hostel Facilities", desc: "Ask questions about hostel facilities and related details." },
              ].map((topic, index) => (
                <Link to="/chat" key={index} state={{ question: `Tell me about ${topic.title.toLowerCase()}` }}>
                  <div className="group bg-white border border-[var(--neutral-200)] rounded-xl p-5 hover:border-[var(--srm-burgundy)]/30 hover:shadow-md transition-all duration-200 cursor-pointer h-full">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--neutral-100)] group-hover:bg-[var(--srm-burgundy)]/5 transition-colors">
                      <topic.icon className="h-5 w-5 text-[var(--neutral-600)] group-hover:text-[var(--srm-burgundy)] transition-colors" />
                    </div>
                    <h3 className="mb-2 font-serif text-base text-[var(--neutral-900)]" style={{ fontWeight: 600 }}>
                      {topic.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--neutral-600)]">
                      {topic.desc}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sample Questions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 font-serif text-2xl md:text-3xl text-[var(--neutral-900)]" style={{ fontWeight: 600 }}>
              Popular Questions
            </h2>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {suggestedQuestions.slice(0, 4).map((question, index) => (
                <Link to="/chat" key={index} state={{ question }}>
                  <button className="rounded-full border border-[var(--neutral-300)] bg-white px-5 py-2.5 text-sm text-[var(--neutral-700)] hover:border-[var(--srm-burgundy)] hover:text-[var(--srm-burgundy)] transition-all duration-200">
                    {question}
                  </button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--neutral-200)] bg-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-sm text-[var(--neutral-500)]">
            <p className="mb-2 font-medium text-[var(--neutral-700)]">
              SRM Institute of Science and Technology, Kattankulathur Campus
            </p>
            <p>
              Information is retrieved only from official SRM documents. For definitive queries, always verify with{" "}
              <a 
                href="mailto:admissions@srmist.edu.in"
                className="text-[var(--srm-burgundy)] hover:underline"
              >
                admissions@srmist.edu.in
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
