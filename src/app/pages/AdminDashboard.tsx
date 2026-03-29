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

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-2 font-serif text-3xl md:text-4xl text-[var(--srm-navy)]">
            Admin Dashboard
          </h1>
          <p className="text-[var(--neutral-600)]">
            Review and approve changes detected in official SRM sources
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mb-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Queries</CardTitle>
              <MessageSquare className="h-4 w-4 text-[var(--neutral-500)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--srm-navy)]">{stats.totalQueries.toLocaleString()}</div>
              <p className="text-xs text-[var(--neutral-500)]">Last 30 days</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
              <Clock className="h-4 w-4 text-[var(--neutral-500)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--srm-navy)]">{stats.avgResponseTime}</div>
              <p className="text-xs text-[var(--confidence-high)]">↓ 15% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Source Accuracy</CardTitle>
              <TrendingUp className="h-4 w-4 text-[var(--neutral-500)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--srm-navy)]">{stats.sourceAccuracy}</div>
              <p className="text-xs text-[var(--confidence-high)]">High confidence rate</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Reviews</CardTitle>
              <AlertTriangle className="h-4 w-4 text-[var(--srm-amber)]" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-[var(--srm-amber)]">{stats.pendingReviews}</div>
              <p className="text-xs text-[var(--neutral-500)]">Requires attention</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-1 gap-3">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--neutral-500)]" />
              <Input
                placeholder="Search review items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Filter className="h-4 w-4 text-[var(--neutral-500)]" />
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-[180px]">
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
        <div className="space-y-4">
          {filteredQueue.map((item) => (
            <ReviewCard
              key={item.id}
              item={item}
              onApprove={handleApprove}
              onReject={handleReject}
            />
          ))}

          {filteredQueue.length === 0 && (
            <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-12 text-center">
              <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-[var(--confidence-high)]" />
              <p className="text-[var(--neutral-600)]">No items match your filters</p>
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
    high: { label: "High Impact", color: "var(--srm-terracotta)", bgColor: "#FFF1F0" },
    medium: { label: "Medium Impact", color: "var(--srm-amber)", bgColor: "#FFF8F0" },
    low: { label: "Low Impact", color: "var(--confidence-high)", bgColor: "#F0FFF4" },
  };

  const typeConfig = {
    fee: { label: "Fee Change", icon: "💰" },
    deadline: { label: "Deadline", icon: "📅" },
    policy: { label: "Policy", icon: "📋" },
    program: { label: "Program", icon: "🎓" },
    scholarship: { label: "Scholarship", icon: "🏆" },
  };

  const statusConfig = {
    pending: { label: "Pending", color: "var(--srm-amber)", icon: Clock },
    approved: { label: "Approved", color: "var(--confidence-high)", icon: CheckCircle2 },
    rejected: { label: "Rejected", color: "var(--neutral-500)", icon: XCircle },
  };

  const impact = impactConfig[item.impact];
  const type = typeConfig[item.type];
  const status = statusConfig[item.status];
  const StatusIcon = status.icon;

  return (
    <div className="rounded-lg border border-[var(--neutral-200)] bg-white p-6">
      {/* Header */}
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="text-2xl">{type.icon}</div>
          <div>
            <div className="mb-1 flex items-center gap-2">
              <h3 className="font-sans text-lg text-[var(--srm-navy)]" style={{ fontWeight: 600 }}>
                {item.title}
              </h3>
              <Badge
                variant="outline"
                style={{
                  borderColor: impact.color,
                  backgroundColor: impact.bgColor,
                  color: impact.color,
                }}
              >
                {impact.label}
              </Badge>
            </div>
            <p className="text-sm text-[var(--neutral-600)]">{item.description}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <StatusIcon className="h-4 w-4" style={{ color: status.color }} />
          <span className="text-sm font-medium" style={{ color: status.color }}>
            {status.label}
          </span>
        </div>
      </div>

      {/* Change Details */}
      <div className="mb-4 rounded-lg bg-[var(--neutral-50)] p-4">
        {item.oldValue && (
          <div className="mb-3">
            <p className="mb-1 text-xs text-[var(--neutral-500)]">Previous Value:</p>
            <p className="text-sm text-[var(--neutral-700)] line-through opacity-60">
              {item.oldValue}
            </p>
          </div>
        )}
        <div>
          <p className="mb-1 text-xs text-[var(--neutral-500)]">New Value:</p>
          <p className="text-sm font-medium text-[var(--srm-navy)]">{item.newValue}</p>
        </div>
      </div>

      {/* Source and Metadata */}
      <div className="mb-4 flex flex-wrap items-center gap-4 text-xs text-[var(--neutral-600)]">
        <div className="flex items-center gap-1.5">
          <FileText className="h-3.5 w-3.5" />
          <a
            href={item.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--srm-navy)] hover:underline"
          >
            {item.source}
          </a>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="h-3.5 w-3.5" />
          Detected: {item.detectedDate.toLocaleDateString()}
        </div>
        <div className="flex items-center gap-1.5">
          <Users className="h-3.5 w-3.5" />
          Affects {item.affectedQuestions} question{item.affectedQuestions !== 1 ? "s" : ""}
        </div>
      </div>

      {/* Actions */}
      {item.status === "pending" && (
        <div className="flex gap-3">
          <Button
            onClick={() => onApprove(item.id)}
            className="flex-1 bg-[var(--confidence-high)] hover:bg-[#047857] text-white"
          >
            <CheckCircle2 className="mr-2 h-4 w-4" />
            Approve Change
          </Button>
          <Button
            onClick={() => onReject(item.id)}
            variant="outline"
            className="flex-1 border-[var(--neutral-300)] text-[var(--neutral-700)] hover:bg-[var(--neutral-100)]"
          >
            <XCircle className="mr-2 h-4 w-4" />
            Reject
          </Button>
        </div>
      )}
    </div>
  );
}
