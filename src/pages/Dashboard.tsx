import { Car, CheckCircle, AlertTriangle, Clock, Brain } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { AIInsightsCard } from "@/components/dashboard/AIInsightsCard";
import { AlertsOverview } from "@/components/dashboard/AlertsOverview";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { ComplianceChart } from "@/components/dashboard/ComplianceChart";
import { CarsByYearChart } from "@/components/dashboard/CarsByYearChart";
import { dashboardStats } from "@/lib/mockData";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground">
          AI-powered vehicle compliance overview
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <MetricCard
          title="Total Cars"
          value={dashboardStats.totalCars}
          subtitle="Registered vehicles"
          icon={Car}
          variant="default"
        />
        <MetricCard
          title="Roadworthy"
          value={dashboardStats.roadworthy}
          subtitle="Fully compliant"
          icon={CheckCircle}
          variant="success"
        />
        <MetricCard
          title="Non-Roadworthy"
          value={dashboardStats.nonRoadworthy}
          subtitle="Requires attention"
          icon={AlertTriangle}
          variant="critical"
        />
        <MetricCard
          title="Expiring Soon"
          value={dashboardStats.expiringSoon}
          subtitle="Within 30 days"
          icon={Clock}
          variant="warning"
        />
        <MetricCard
          title="AI High Risk"
          value={dashboardStats.aiHighRisk}
          subtitle="Predicted issues"
          icon={Brain}
          variant="ai"
        />
      </div>

      {/* Main Content Grid */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column - Charts */}
        <div className="lg:col-span-2 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <ComplianceChart />
            <CarsByYearChart />
          </div>
          <AlertsOverview />
        </div>

        {/* Right Column - AI & Activity */}
        <div className="space-y-6">
          <AIInsightsCard />
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}
