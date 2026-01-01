import { AlertTriangle, AlertCircle, Brain, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { alerts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

const alertConfig = {
  critical: {
    icon: AlertTriangle,
    bg: "bg-critical-muted",
    text: "text-critical",
    label: "Critical",
  },
  warning: {
    icon: AlertCircle,
    bg: "bg-warning-muted",
    text: "text-warning",
    label: "Warning",
  },
  "ai-predicted": {
    icon: Brain,
    bg: "bg-ai-muted",
    text: "text-ai",
    label: "AI Predicted",
  },
};

export function AlertsOverview() {
  const recentAlerts = alerts.filter((a) => !a.isResolved).slice(0, 4);

  const alertCounts = {
    critical: alerts.filter((a) => a.type === "critical" && !a.isResolved).length,
    warning: alerts.filter((a) => a.type === "warning" && !a.isResolved).length,
    "ai-predicted": alerts.filter((a) => a.type === "ai-predicted" && !a.isResolved).length,
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm animate-slide-up">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="font-semibold text-foreground">Active Alerts</h3>
        <Link to="/alerts">
          <Button variant="ghost" size="sm" className="text-muted-foreground">
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Button>
        </Link>
      </div>

      {/* Alert Summary */}
      <div className="mb-4 flex gap-3">
        {Object.entries(alertCounts).map(([type, count]) => {
          const config = alertConfig[type as keyof typeof alertConfig];
          return (
            <div
              key={type}
              className={cn(
                "flex items-center gap-2 rounded-lg px-3 py-2",
                config.bg
              )}
            >
              <config.icon className={cn("h-4 w-4", config.text)} />
              <span className={cn("text-sm font-medium", config.text)}>
                {count} {config.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Alert List */}
      <div className="space-y-2">
        {recentAlerts.map((alert) => {
          const config = alertConfig[alert.type];
          const Icon = config.icon;

          return (
            <div
              key={alert.id}
              className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 transition-all hover:bg-muted/50"
            >
              <div className={cn("rounded-md p-1.5", config.bg)}>
                <Icon className={cn("h-4 w-4", config.text)} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">
                  {alert.title}
                </p>
                <p className="text-xs text-muted-foreground">
                  {alert.plateNumber}
                </p>
              </div>
              <span
                className={cn(
                  "rounded-full px-2 py-0.5 text-xs font-medium",
                  config.bg,
                  config.text
                )}
              >
                {config.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
