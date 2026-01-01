import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AlertTriangle,
  AlertCircle,
  Brain,
  Check,
  Bell,
  Eye,
  Filter,
} from "lucide-react";
import { alerts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { formatDistanceToNow } from "date-fns";

const alertConfig = {
  critical: {
    icon: AlertTriangle,
    bg: "bg-critical-muted",
    text: "text-critical",
    border: "border-critical/30",
    label: "Critical",
  },
  warning: {
    icon: AlertCircle,
    bg: "bg-warning-muted",
    text: "text-warning",
    border: "border-warning/30",
    label: "Warning",
  },
  "ai-predicted": {
    icon: Brain,
    bg: "bg-ai-muted",
    text: "text-ai",
    border: "border-ai/30",
    label: "AI Predicted",
  },
};

export default function AlertsPage() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("active");

  const filteredAlerts = alerts.filter((alert) => {
    const matchesType = typeFilter === "all" || alert.type === typeFilter;
    const matchesStatus =
      statusFilter === "all" ||
      (statusFilter === "active" && !alert.isResolved) ||
      (statusFilter === "resolved" && alert.isResolved);

    return matchesType && matchesStatus;
  });

  const alertCounts = {
    total: alerts.length,
    critical: alerts.filter((a) => a.type === "critical").length,
    warning: alerts.filter((a) => a.type === "warning").length,
    aiPredicted: alerts.filter((a) => a.type === "ai-predicted").length,
    active: alerts.filter((a) => !a.isResolved).length,
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Alerts</h1>
        <p className="text-muted-foreground">
          Monitor and manage compliance alerts
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Alerts</p>
          <p className="text-2xl font-bold text-foreground">
            {alertCounts.total}
          </p>
        </div>
        <div className="rounded-xl border border-critical/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Critical</p>
          <p className="text-2xl font-bold text-critical">
            {alertCounts.critical}
          </p>
        </div>
        <div className="rounded-xl border border-warning/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Warning</p>
          <p className="text-2xl font-bold text-warning">
            {alertCounts.warning}
          </p>
        </div>
        <div className="rounded-xl border border-ai/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">AI Predicted</p>
          <p className="text-2xl font-bold text-ai">{alertCounts.aiPredicted}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Alert Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="critical">Critical</SelectItem>
            <SelectItem value="warning">Warning</SelectItem>
            <SelectItem value="ai-predicted">AI Predicted</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="resolved">Resolved</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Alerts List */}
      <div className="space-y-3">
        {filteredAlerts.map((alert) => {
          const config = alertConfig[alert.type];
          const Icon = config.icon;

          return (
            <div
              key={alert.id}
              className={cn(
                "rounded-xl border bg-card p-5 shadow-sm transition-all hover:shadow-md",
                config.border,
                alert.isResolved && "opacity-60"
              )}
            >
              <div className="flex flex-wrap items-start gap-4">
                <div className={cn("rounded-lg p-2.5", config.bg)}>
                  <Icon className={cn("h-5 w-5", config.text)} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="font-semibold text-foreground">
                      {alert.title}
                    </h3>
                    <span
                      className={cn(
                        "rounded-full px-2.5 py-0.5 text-xs font-medium",
                        config.bg,
                        config.text
                      )}
                    >
                      {config.label}
                    </span>
                    {alert.isResolved && (
                      <span className="rounded-full bg-success-muted px-2.5 py-0.5 text-xs font-medium text-success">
                        Resolved
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">
                    {alert.description}
                  </p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span>Vehicle: {alert.plateNumber}</span>
                    <span>
                      {formatDistanceToNow(new Date(alert.createdAt), {
                        addSuffix: true,
                      })}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Link to={`/cars/${alert.carId}`}>
                    <Button variant="outline" size="sm">
                      <Eye className="mr-1.5 h-4 w-4" />
                      View
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm">
                    <Bell className="mr-1.5 h-4 w-4" />
                    Notify
                  </Button>
                  {!alert.isResolved && (
                    <Button variant="outline" size="sm">
                      <Check className="mr-1.5 h-4 w-4" />
                      Resolve
                    </Button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {filteredAlerts.length} of {alerts.length} alerts
      </div>
    </div>
  );
}
