import { useState } from "react";
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  FileText, 
  TrendingUp,
  Users,
  MessageSquare,
  Filter,
  Search
} from "lucide-react";
import { Header } from "../components/Header";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

interface ReviewItem {
  id: string;
  type: "fee" | "deadline" | "policy" | "program" | "scholarship";
  title: string;
  description: string;
  oldValue?: string;
  newValue: string;
  source: string;
  sourceUrl: string;
  detectedDate: Date;
  impact: "high" | "medium" | "low";
  status: "pending" | "approved" | "rejected";
  affectedQuestions: number;
}

export function AdminDashboard() {
  const [filter, setFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock data
  const stats = {
    totalQueries: 2847,
    avgResponseTime: "1.2s",
    sourceAccuracy: "98.5%",
    pendingReviews: 8,
  };

  const reviewQueue: ReviewItem[] = [
    {
      id: "1",
      type: "fee",
      title: "B.Tech Tuition Fee Update",
      description: "Annual tuition fee increased from ₹2,40,000 to ₹2,50,000 for 2026-27",
      oldValue: "₹2,40,000 per year",
      newValue: "₹2,50,000 per year",
      source: "Fee Structure 2026-27 - SRM Official",
      sourceUrl: "https://www.srmist.edu.in/admissions/fees",
      detectedDate: new Date("2026-03-15"),
      impact: "high",
      status: "pending",
      affectedQuestions: 143,
    },
    {
      id: "2",
      type: "deadline",
      title: "SRMJEEE Application Deadline Extended",
      description: "Application deadline extended from March 31 to April 15, 2026",
      oldValue: "March 31, 2026",
      newValue: "April 15, 2026",
      source: "SRMJEEE 2026 Update Notice",
      sourceUrl: "https://www.srmist.edu.in/admissions/srmjeee-update",
      detectedDate: new Date("2026-03-20"),
      impact: "high",
      status: "pending",
      affectedQuestions: 89,
    },
    {
      id: "3",
      type: "scholarship",
      title: "New Merit Scholarship Tier Added",
      description: "Additional 10% scholarship for ranks 1001-2000 in SRMJEEE",
      newValue: "10% tuition fee waiver for ranks 1001-2000",
      source: "Scholarship Policy Update 2026",
      sourceUrl: "https://www.srmist.edu.in/scholarships/update",
      detectedDate: new Date("2026-03-18"),
      impact: "medium",
      status: "pending",
      affectedQuestions: 67,
    },
    {
      id: "4",
      type: "policy",
      title: "Hostel Allocation Priority Update",
      description: "Priority given to students from >500km distance",
      newValue: "Priority hostel allocation for students residing beyond 500km",
      source: "Hostel Allocation Policy 2026-27",
      sourceUrl: "https://www.srmist.edu.in/hostel/policy",
      detectedDate: new Date("2026-03-12"),
      impact: "medium",
      status: "pending",
      affectedQuestions: 34,
    },
    {
      id: "5",
      type: "program",
      title: "New B.Tech AI Specialization",
      description: "B.Tech in Computer Science with AI specialization introduced",
      newValue: "B.Tech CSE (Artificial Intelligence) - 60 seats",
      source: "Academic Programs 2026-27",
      sourceUrl: "https://www.srmist.edu.in/programs/new",
      detectedDate: new Date("2026-03-10"),
      impact: "high",
      status: "pending",
      affectedQuestions: 112,
    },
    {
      id: "6",
      type: "fee",
      title: "Hostel Fee Revision",
      description: "AC hostel accommodation fee updated",
      oldValue: "₹1,15,000 per year",
      newValue: "₹1,20,000 per year",
      source: "Hostel Fee Structure 2026-27",
      sourceUrl: "https://www.srmist.edu.in/hostel/fees",
      detectedDate: new Date("2026-03-08"),
      impact: "medium",
      status: "approved",
      affectedQuestions: 78,
    },
    {
      id: "7",
      type: "deadline",
      title: "Counseling Schedule Released",
      description: "First round of counseling scheduled for May 10-15, 2026",
      newValue: "Round 1: May 10-15 | Round 2: May 20-25 | Round 3: June 1-5",
      source: "Counseling Schedule 2026",
      sourceUrl: "https://www.srmist.edu.in/admissions/counseling",
      detectedDate: new Date("2026-03-05"),
      impact: "high",
      status: "approved",
      affectedQuestions: 156,
    },
    {
      id: "8",
      type: "policy",
      title: "Document Verification Requirements",
      description: "Additional documents required for international students",
      newValue: "Passport, visa, equivalence certificate, and apostille required",
      source: "International Admissions Policy",
      sourceUrl: "https://www.srmist.edu.in/admissions/international",
      detectedDate: new Date("2026-03-01"),
      impact: "low",
      status: "rejected",
      affectedQuestions: 23,
    },
  ];

  const filteredQueue = reviewQueue.filter((item) => {
    if (filter !== "all" && item.status !== filter) return false;
    if (searchQuery && !item.title.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    return true;
  });

  const handleApprove = (id: string) => {
    console.log("Approved:", id);
    // In real implementation, this would update the backend
  };

  const handleReject = (id: string) => {
    console.log("Rejected:", id);
    // In real implementation, this would update the backend
  };

  return (
    <div className="min-h-screen bg-[var(--neutral-50)]">
      <Header />

      <div className="container mx-auto px-4 py-6 md:py-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="mb-1 font-serif text-2xl md:text-3xl text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
            Admin Dashboard
          </h1>
          <p className="text-sm text-[var(--neutral-500)]">
            Review and approve changes detected in official SRM sources
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <Card className="border-[var(--neutral-200)] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-[var(--neutral-500)] uppercase tracking-wide">Total Queries</CardTitle>
              <div className="h-8 w-8 rounded-lg bg-[var(--srm-navy)]/5 flex items-center justify-center">
                <MessageSquare className="h-4 w-4 text-[var(--srm-navy)]" />
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-bold text-[var(--srm-navy)]">{stats.totalQueries.toLocaleString()}</div>
              <p className="text-[11px] text-[var(--neutral-500)]">Last 30 days</p>
            </CardContent>
          </Card>

          <Card className="border-[var(--neutral-200)] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-[var(--neutral-500)] uppercase tracking-wide">Avg Response</CardTitle>
              <div className="h-8 w-8 rounded-lg bg-[var(--confidence-high)]/10 flex items-center justify-center">
                <Clock className="h-4 w-4 text-[var(--confidence-high)]" />
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-bold text-[var(--srm-navy)]">{stats.avgResponseTime}</div>
              <p className="text-[11px] text-[var(--confidence-high)] font-medium">-15% from last month</p>
            </CardContent>
          </Card>

          <Card className="border-[var(--neutral-200)] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-[var(--neutral-500)] uppercase tracking-wide">Source Accuracy</CardTitle>
              <div className="h-8 w-8 rounded-lg bg-[var(--confidence-high)]/10 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-[var(--confidence-high)]" />
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-bold text-[var(--srm-navy)]">{stats.sourceAccuracy}</div>
              <p className="text-[11px] text-[var(--confidence-high)] font-medium">High confidence rate</p>
            </CardContent>
          </Card>

          <Card className="border-[var(--neutral-200)] shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-1 pt-4 px-4">
              <CardTitle className="text-xs font-medium text-[var(--neutral-500)] uppercase tracking-wide">Pending Reviews</CardTitle>
              <div className="h-8 w-8 rounded-lg bg-[var(--srm-amber)]/10 flex items-center justify-center">
                <AlertTriangle className="h-4 w-4 text-[var(--srm-amber)]" />
              </div>
            </CardHeader>
            <CardContent className="px-4 pb-4">
              <div className="text-2xl font-bold text-[var(--srm-amber)]">{stats.pendingReviews}</div>
              <p className="text-[11px] text-[var(--neutral-500)]">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--neutral-400)]" />
            <Input
              placeholder="Search review items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 h-10 border-[var(--neutral-200)] bg-white"
            />
          </div>

          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4 text-[var(--neutral-400)]" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[150px] h-10 border-[var(--neutral-200)]">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="approved">Approved</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Review Queue */}
        <div className="space-y-3">
          {filteredQueue.map((item) => (
            <ReviewCard
              key={item.id}
              item={item}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}

          {filteredQueue.length === 0 && (
            <div className="rounded-xl border border-[var(--neutral-200)] bg-white p-10 text-center shadow-sm">
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--confidence-high)]/10">
                <CheckCircle2 className="h-6 w-6 text-[var(--confidence-high)]" />
              </div>
              <p className="text-sm text-[var(--neutral-600)]">No items match your filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function ReviewCard({
  item,
  onApprove,
  onReject,
}: {
  item: ReviewItem;
  onApprove: (id: string) => void;
  onReject: (id: string) => void;
}) {
  const impactConfig = {
    high: { label: "High", color: "var(--srm-terracotta)", bgColor: "rgba(216, 67, 21, 0.08)" },
    medium: { label: "Medium", color: "var(--srm-amber)", bgColor: "rgba(245, 124, 0, 0.08)" },
    low: { label: "Low", color: "var(--confidence-high)", bgColor: "rgba(5, 150, 105, 0.08)" },
  };

  const typeConfig = {
    fee: { label: "Fee", color: "var(--srm-terracotta)" },
    deadline: { label: "Deadline", color: "var(--srm-amber)" },
    policy: { label: "Policy", color: "var(--srm-navy)" },
    program: { label: "Program", color: "var(--confidence-high)" },
    scholarship: { label: "Scholarship", color: "#7C3AED" },
  };

  const statusConfig = {
    pending: { label: "Pending", color: "var(--srm-amber)", bg: "rgba(245, 124, 0, 0.08)", icon: Clock },
    approved: { label: "Approved", color: "var(--confidence-high)", bg: "rgba(5, 150, 105, 0.08)", icon: CheckCircle2 },
    rejected: { label: "Rejected", color: "var(--neutral-500)", bg: "var(--neutral-100)", icon: XCircle },
  };

  const impact = impactConfig[item.impact];
  const type = typeConfig[item.type];
  const status = statusConfig[item.status];
  const StatusIcon = status.icon;

  return (
    <div className="rounded-xl border border-[var(--neutral-200)] bg-white p-5 shadow-sm hover:shadow-md transition-shadow duration-200">
      {/* Header */}
      <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
        <div className="flex-1 min-w-0">
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <span 
              className="inline-flex px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wide"
              style={{ backgroundColor: type.color + "15", color: type.color }}
            >
              {type.label}
            </span>
            <span 
              className="inline-flex px-2 py-0.5 rounded text-[10px] font-medium"
              style={{ backgroundColor: impact.bgColor, color: impact.color }}
            >
              {impact.label} Impact
            </span>
          </div>
          <h3 className="font-sans text-base text-[var(--srm-navy)] mb-1" style={{ fontWeight: 600 }}>
            {item.title}
          </h3>
          <p className="text-sm text-[var(--neutral-600)] leading-relaxed">{item.description}</p>
        </div>

        <div 
          className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium"
          style={{ backgroundColor: status.bg, color: status.color }}
        >
          <StatusIcon className="h-3.5 w-3.5" />
          {status.label}
        </div>
      </div>

      {/* Change Details */}
      <div className="mb-4 rounded-lg bg-[var(--neutral-50)] p-3 border border-[var(--neutral-100)]">
        {item.oldValue && (
          <div className="mb-2 pb-2 border-b border-[var(--neutral-200)]">
            <p className="mb-0.5 text-[10px] font-medium text-[var(--neutral-500)] uppercase tracking-wide">Previous</p>
            <p className="text-sm text-[var(--neutral-500)] line-through">
              {item.oldValue}
            </p>
          </div>
        )}
        <div>
          <p className="mb-0.5 text-[10px] font-medium text-[var(--neutral-500)] uppercase tracking-wide">New Value</p>
          <p className="text-sm font-medium text-[var(--srm-navy)]">{item.newValue}</p>
        </div>
      </div>

      {/* Source and Metadata */}
      <div className="mb-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-[var(--neutral-500)]">
        <a
          href={item.sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-[var(--srm-navy)] hover:underline"
        >
          <FileText className="h-3.5 w-3.5" />
          {item.source}
        </a>
        <span className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          {item.detectedDate.toLocaleDateString()}
        </span>
        <span className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          {item.affectedQuestions} affected
        </span>
      </div>

      {/* Actions */}
      {item.status === "pending" && (
        <div className="flex gap-2">
          <Button
            onClick={() => onApprove(item.id)}
            className="flex-1 bg-[var(--confidence-high)] hover:bg-[#047857] text-white h-10 shadow-sm"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Approve
          </Button>
          <Button
            onClick={() => onReject(item.id)}
            variant="outline"
            className="flex-1 border-[var(--neutral-300)] text-[var(--neutral-600)] hover:bg-[var(--neutral-50)] h-10"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}
