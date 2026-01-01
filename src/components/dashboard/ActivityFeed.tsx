import { Activity, AlertTriangle, Bell, Brain, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { activityLogs } from "@/lib/mockData";
import { formatDistanceToNow } from "date-fns";

const activityConfig = {
  info: {
    icon: Activity,
    bg: "bg-info-muted",
    text: "text-info",
    line: "bg-info/20",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-warning-muted",
    text: "text-warning",
    line: "bg-warning/20",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-success-muted",
    text: "text-success",
    line: "bg-success/20",
  },
  ai: {
    icon: Brain,
    bg: "bg-ai-muted",
    text: "text-ai",
    line: "bg-ai/20",
  },
};

export function ActivityFeed() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm animate-slide-up">
      <div className="mb-4 flex items-center gap-2">
        <Bell className="h-5 w-5 text-muted-foreground" />
        <h3 className="font-semibold text-foreground">Recent Activity</h3>
      </div>

      <div className="relative space-y-4">
        {activityLogs.slice(0, 5).map((log, index) => {
          const config = activityConfig[log.type];
          const Icon = config.icon;

          return (
            <div key={log.id} className="relative flex gap-3">
              {/* Timeline line */}
              {index !== activityLogs.slice(0, 5).length - 1 && (
                <div
                  className={cn(
                    "absolute left-[15px] top-8 h-full w-0.5",
                    config.line
                  )}
                />
              )}

              {/* Icon */}
              <div className={cn("relative z-10 rounded-full p-1.5", config.bg)}>
                <Icon className={cn("h-4 w-4", config.text)} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 pb-4">
                <p className="text-sm font-medium text-foreground">
                  {log.action}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {log.description}
                </p>
                <p className="mt-1 text-xs text-muted-foreground/70">
                  {formatDistanceToNow(new Date(log.timestamp), {
                    addSuffix: true,
                  })}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
