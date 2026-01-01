import { AlertTriangle, AlertCircle, Brain, ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { alerts } from "@/lib/mockData";
import { Button } from "@/components/ui/button";

const alertConfig = {
  critical: {
    icon: AlertTriangle,
    bg: "bg-gradient-to-br from-critical/15 to-critical/5",
    text: "text-critical",
    label: "Critical",
    ring: "ring-critical/20",
  },
  warning: {
    icon: AlertCircle,
    bg: "bg-gradient-to-br from-warning/15 to-warning/5",
    text: "text-warning",
    label: "Warning",
    ring: "ring-warning/20",
  },
  "ai-predicted": {
    icon: Brain,
    bg: "bg-gradient-to-br from-ai/15 to-ai/5",
    text: "text-ai",
    label: "AI Predicted",
    ring: "ring-ai/20",
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
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-display font-semibold text-lg text-foreground">Active Alerts</h3>
        <Link to="/alerts">
          <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 group">
            View All
            <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </Link>
      </div>

      {/* Alert Summary Pills */}
      <div className="mb-5 flex gap-3 flex-wrap">
        {Object.entries(alertCounts).map(([type, count]) => {
          const config = alertConfig[type as keyof typeof alertConfig];
          return (
            <div
              key={type}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-2 ring-1 transition-all hover:scale-[1.02]",
                config.bg,
                config.ring
              )}
            >
              <config.icon className={cn("h-4 w-4", config.text)} strokeWidth={1.75} />
              <span className={cn("text-sm font-semibold", config.text)}>
                {count} {config.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Alert List */}
      <div className="space-y-2.5">
        {recentAlerts.map((alert) => {
          const config = alertConfig[alert.type];
          const Icon = config.icon;

          return (
            <div
              key={alert.id}
              className="group flex items-center gap-3 rounded-lg border border-border/60 bg-background/60 p-3.5 transition-all duration-200 hover:bg-muted/50 hover:border-border cursor-pointer"
            >
              <div className={cn("rounded-lg p-2", config.bg)}>
                <Icon className={cn("h-4 w-4", config.text)} strokeWidth={1.75} />
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
                  "rounded-full px-2.5 py-1 text-xs font-semibold",
                  config.bg,
                  config.text
                )}
              >
                {config.label}
              </span>
              <ChevronRight className="h-4 w-4 text-muted-foreground/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
