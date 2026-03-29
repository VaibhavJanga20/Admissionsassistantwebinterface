import { useState, useRef, useEffect } from "react";
import { useLocation } from "react-router";
import { Send, Sparkles, AlertCircle, ExternalLink, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Textarea } from "../components/ui/textarea";

interface Source {
  title: string;
  url: string;
  type: "website" | "pdf" | "document";
  lastUpdated?: string;
}

interface Message {
  id: string;
  type: "user" | "assistant" | "cannot-answer";
  content: string;
  sources?: Source[];
  confidence?: "high" | "medium" | "low";
  timestamp: Date;
}

export function ChatPage() {
  const location = useLocation();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If there's a suggested question from the landing page
    if (location.state?.question) {
      setInput(location.state.question);
    }
  }, [location.state]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const suggestedQuestions = [
    "What are the B.Tech admission requirements?",
    "What is the hostel fee structure?",
    "What scholarships are available?",
    "What is the placement record for CSE?",
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate API response
    setTimeout(() => {
      // Mock responses based on keywords
      const lowerInput = input.toLowerCase();
      
      if (lowerInput.includes("fee") || lowerInput.includes("cost")) {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: "For the academic year 2026-27, the fee structure for B.Tech programs at SRM Kattankulathur campus is as follows:\n\n**Tuition Fee:** ₹2,50,000 per year\n**Hostel Fee:** ₹1,20,000 per year (AC accommodation)\n**Mess Charges:** ₹50,000 per year (approximately)\n\nFees are subject to revision. Payment can be made in two installments per academic year. Additional charges apply for special facilities and laboratories.",
          sources: [
            {
              title: "Fee Structure 2026-27 - SRM Official",
              url: "https://www.srmist.edu.in/admissions/fees",
              type: "website",
              lastUpdated: "March 2026",
            },
            {
              title: "Hostel and Accommodation Fees",
              url: "https://www.srmist.edu.in/hostel/fees.pdf",
              type: "pdf",
              lastUpdated: "February 2026",
            },
          ],
          confidence: "high",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, response]);
      } else if (lowerInput.includes("admission") || lowerInput.includes("eligibility")) {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: "**B.Tech Admission Requirements for 2026:**\n\nEligibility:\n• Passed 10+2 or equivalent with Physics, Chemistry, and Mathematics\n• Minimum 60% aggregate in PCM (55% for reserved categories)\n• Valid SRMJEEE score or JEE Main score\n\nAdmission Process:\n1. Register for SRMJEEE 2026\n2. Appear for the entrance examination\n3. Check rank and counseling schedule\n4. Participate in online counseling\n5. Complete document verification\n6. Pay fees and confirm admission\n\nImportant dates:\n• SRMJEEE Registration: January - March 2026\n• Exam Dates: April 2026\n• Counseling: May - June 2026",
          sources: [
            {
              title: "B.Tech Admissions 2026 - Official Guidelines",
              url: "https://www.srmist.edu.in/admissions/btech",
              type: "website",
              lastUpdated: "March 2026",
            },
            {
              title: "SRMJEEE 2026 Information Brochure",
              url: "https://www.srmist.edu.in/admissions/brochure-2026.pdf",
              type: "pdf",
              lastUpdated: "January 2026",
            },
          ],
          confidence: "high",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, response]);
      } else if (lowerInput.includes("scholarship")) {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          type: "assistant",
          content: "**Scholarships Available at SRM Kattankulathur:**\n\n**Merit-based Scholarships:**\n• Top 100 in SRMJEEE: 100% tuition fee waiver\n• Rank 101-500: 50% tuition fee waiver\n• Rank 501-1000: 25% tuition fee waiver\n\n**Need-based Scholarships:**\n• Available for economically disadvantaged students\n• Requires income certificate and documentation\n• Up to 50% fee concession\n\n**Sports/Cultural Scholarships:**\n• For national/international level achievers\n• Separate application process\n\nApplication: Scholarships are processed during admission counseling. Required documents must be submitted at the time of admission.",
          sources: [
            {
              title: "Scholarship Programs 2026",
              url: "https://www.srmist.edu.in/scholarships",
              type: "website",
              lastUpdated: "February 2026",
            },
          ],
          confidence: "high",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, response]);
      } else {
        // Cannot answer scenario
        const response: Message = {
          id: (Date.now() + 1).toString(),
          type: "cannot-answer",
          content: "I couldn't find official information from SRM sources to answer your specific question about \"" + input + "\".\n\nFor accurate information, please contact:",
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, response]);
      }
      
      setIsLoading(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-[var(--neutral-50)]">
      <Header />

      <div className="flex flex-1 flex-col">
        {/* Chat Container */}
        <div className="flex-1 overflow-hidden">
          <div className="container mx-auto h-full max-w-3xl px-4 py-6 md:py-8">
            {messages.length === 0 ? (
              <div className="flex h-full flex-col items-center justify-center">
                <div className="mb-8 text-center">
                  <div className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--srm-navy)]/5">
                    <Sparkles className="h-7 w-7 text-[var(--srm-navy)]" />
                  </div>
                  <h2 className="mb-2 font-serif text-2xl md:text-3xl text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
                    Ask Your Admission Question
                  </h2>
                  <p className="text-sm text-[var(--neutral-500)]">
                    Get accurate answers from official SRM sources
                  </p>
                </div>

                <div className="w-full max-w-xl">
                  <p className="mb-3 text-xs font-medium text-[var(--neutral-500)] uppercase tracking-wide">Try asking</p>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {suggestedQuestions.map((question, index) => (
                      <button
                        key={index}
                        onClick={() => setInput(question)}
                        className="group rounded-lg border border-[var(--neutral-200)] bg-white p-3.5 text-left text-sm text-[var(--neutral-700)] transition-all duration-200 hover:border-[var(--srm-navy)] hover:text-[var(--srm-navy)] hover:shadow-sm"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="space-y-5 pb-32">
                {messages.map((message) => (
                  <div key={message.id}>
                    {message.type === "user" ? (
                      <UserMessage content={message.content} />
                    ) : message.type === "assistant" ? (
                      <AssistantMessage
                        content={message.content}
                        sources={message.sources}
                        confidence={message.confidence}
                      />
                    ) : (
                      <CannotAnswerMessage content={message.content} />
                    )}
                  </div>
                ))}
                {isLoading && <LoadingMessage />}
                <div ref={messagesEndRef} />
              </div>
            )}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t border-[var(--neutral-200)] bg-white shadow-[0_-1px_3px_rgba(0,0,0,0.05)]">
          <div className="container mx-auto max-w-3xl px-4 py-4">
            <div className="flex gap-3">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about admissions, fees, programs, placements..."
                className="min-h-[56px] resize-none border-[var(--neutral-200)] bg-[var(--neutral-50)] focus:bg-white focus:border-[var(--srm-navy)] transition-colors"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isLoading}
                className="bg-[var(--srm-navy)] hover:bg-[var(--srm-navy-light)] text-white self-end h-11 w-11 p-0 shadow-sm hover:shadow transition-all duration-200"
                aria-label="Send message"
              >
                <Send className="h-5 w-5" />
              </Button>
            </div>
            <p className="mt-2 text-xs text-[var(--neutral-400)]">
              Press Enter to send, Shift + Enter for new line
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function UserMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-end">
      <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-br-md bg-[var(--srm-navy)] px-4 py-3 shadow-sm">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-white">{content}</p>
      </div>
    </div>
  );
}

function AssistantMessage({
  content,
  sources,
  confidence,
}: {
  content: string;
  sources?: Source[];
  confidence?: "high" | "medium" | "low";
}) {
  const [sourcesExpanded, setSourcesExpanded] = useState(true);

  const confidenceConfig = {
    high: { label: "High Confidence", color: "var(--confidence-high)", bg: "rgba(5, 150, 105, 0.08)" },
    medium: { label: "Medium Confidence", color: "var(--confidence-medium)", bg: "rgba(245, 158, 11, 0.08)" },
    low: { label: "Low Confidence", color: "var(--confidence-low)", bg: "rgba(220, 38, 38, 0.08)" },
  };

  const confidenceInfo = confidence ? confidenceConfig[confidence] : null;

  return (
    <div className="flex justify-start">
      <div className="max-w-[90%] sm:max-w-[85%] rounded-2xl rounded-bl-md border border-[var(--neutral-200)] bg-white p-4 sm:p-5 shadow-sm">
        {/* Confidence Indicator */}
        {confidenceInfo && (
          <div 
            className="mb-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium"
            style={{ backgroundColor: confidenceInfo.bg, color: confidenceInfo.color }}
          >
            <div
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: confidenceInfo.color }}
            />
            {confidenceInfo.label}
          </div>
        )}

        {/* Content */}
        <div className="prose prose-sm max-w-none">
          <p className="whitespace-pre-wrap text-sm leading-relaxed text-[var(--neutral-800)]">
            {content}
          </p>
        </div>

        {/* Sources */}
        {sources && sources.length > 0 && (
          <div className="mt-4 border-t border-[var(--neutral-100)] pt-3">
            <button
              onClick={() => setSourcesExpanded(!sourcesExpanded)}
              className="flex w-full items-center justify-between text-xs font-medium text-[var(--srm-navy)] hover:text-[var(--srm-navy-light)] transition-colors"
            >
              <span className="flex items-center gap-1.5">
                <FileText className="h-3.5 w-3.5" />
                {sources.length} Source{sources.length > 1 ? "s" : ""}
              </span>
              {sourcesExpanded ? (
                <ChevronUp className="h-3.5 w-3.5" />
              ) : (
                <ChevronDown className="h-3.5 w-3.5" />
              )}
            </button>

            {sourcesExpanded && (
              <div className="mt-2.5 space-y-2">
                {sources.map((source, index) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2.5 rounded-lg border border-[var(--neutral-200)] bg-[var(--neutral-50)] p-2.5 transition-all duration-200 hover:border-[var(--srm-navy)] hover:bg-white"
                  >
                    <div className="mt-0.5 flex-shrink-0">
                      {source.type === "pdf" ? (
                        <FileText className="h-4 w-4 text-[var(--srm-terracotta)]" />
                      ) : (
                        <ExternalLink className="h-4 w-4 text-[var(--srm-navy)]" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-medium text-[var(--neutral-800)] group-hover:text-[var(--srm-navy)] transition-colors truncate">
                        {source.title}
                      </p>
                      {source.lastUpdated && (
                        <p className="mt-0.5 text-[10px] text-[var(--neutral-500)]">
                          Updated {source.lastUpdated}
                        </p>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function CannotAnswerMessage({ content }: { content: string }) {
  return (
    <div className="flex justify-start">
      <div className="max-w-[90%] sm:max-w-[85%] rounded-2xl rounded-bl-md border border-[var(--srm-amber)]/30 bg-[var(--srm-amber)]/5 p-4 sm:p-5">
        <div className="mb-3 flex items-center gap-2 text-[var(--srm-amber-dark)]">
          <AlertCircle className="h-4 w-4" />
          <span className="text-xs font-semibold uppercase tracking-wide">
            Cannot Answer from Official Sources
          </span>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-[var(--neutral-700)]">{content}</p>

        <div className="rounded-xl border border-[var(--neutral-200)] bg-white p-4">
          <p className="text-xs font-semibold text-[var(--neutral-700)] mb-3">
            Official SRM Admissions Contacts
          </p>
          <div className="space-y-2 text-xs text-[var(--neutral-600)]">
            <div className="flex items-center gap-2">
              <span className="font-medium text-[var(--neutral-500)] w-12">Email</span>
              <a
                href="mailto:admissions.ktr@srmist.edu.in"
                className="text-[var(--srm-navy)] hover:underline"
              >
                admissions.ktr@srmist.edu.in
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-[var(--neutral-500)] w-12">Phone</span>
              <span>+91-44-2741-7777</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-medium text-[var(--neutral-500)] w-12">Web</span>
              <a
                href="https://www.srmist.edu.in/admissions"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--srm-navy)] hover:underline"
              >
                srmist.edu.in/admissions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function LoadingMessage() {
  return (
    <div className="flex justify-start">
      <div className="max-w-[90%] sm:max-w-[85%] rounded-2xl rounded-bl-md border border-[var(--neutral-200)] bg-white p-4 sm:p-5 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--srm-navy)]/70" style={{ animationDelay: "0ms" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--srm-navy)]/70" style={{ animationDelay: "150ms" }} />
            <div className="h-2 w-2 animate-bounce rounded-full bg-[var(--srm-navy)]/70" style={{ animationDelay: "300ms" }} />
          </div>
          <span className="text-sm text-[var(--neutral-500)]">Searching official sources...</span>
        </div>
      </div>
    </div>
  );
}
