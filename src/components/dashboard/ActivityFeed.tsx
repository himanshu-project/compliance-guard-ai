import { Activity, AlertTriangle, Bell, Brain, CheckCircle, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { activityLogs } from "@/lib/mockData";
import { formatDistanceToNow } from "date-fns";

const activityConfig = {
  info: {
    icon: Activity,
    bg: "bg-gradient-to-br from-info/15 to-info/5",
    text: "text-info",
    line: "bg-info/30",
  },
  warning: {
    icon: AlertTriangle,
    bg: "bg-gradient-to-br from-warning/15 to-warning/5",
    text: "text-warning",
    line: "bg-warning/30",
  },
  success: {
    icon: CheckCircle,
    bg: "bg-gradient-to-br from-success/15 to-success/5",
    text: "text-success",
    line: "bg-success/30",
  },
  ai: {
    icon: Brain,
    bg: "bg-gradient-to-br from-ai/15 to-ai/5",
    text: "text-ai",
    line: "bg-ai/30",
  },
};

export function ActivityFeed() {
  return (
    <div className="rounded-xl border border-border bg-card p-5 shadow-sm animate-slide-up">
      <div className="mb-5 flex items-center gap-2.5">
        <div className="rounded-lg bg-muted p-2">
          <Clock className="h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
        </div>
        <h3 className="font-display font-semibold text-foreground">Recent Activity</h3>
      </div>

      <div className="relative">
        {activityLogs.slice(0, 5).map((log, index) => {
          const config = activityConfig[log.type];
          const Icon = config.icon;
          const isLast = index === activityLogs.slice(0, 5).length - 1;

          return (
            <div key={log.id} className="relative flex gap-3 pb-5 last:pb-0">
              {/* Timeline line - connects center of current icon to center of next icon */}
              {!isLast && (
                <div
                  className={cn(
                    "absolute left-4 top-9 bottom-0 w-0.5 rounded-full -translate-x-1/2",
                    config.line
                  )}
                />
              )}

              {/* Icon */}
              <div className={cn("relative z-10 shrink-0 rounded-lg p-2 ring-2 ring-background", config.bg)}>
                <Icon className={cn("h-4 w-4", config.text)} strokeWidth={1.75} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground leading-snug">
                  {log.action}
                </p>
                <p className="text-xs text-muted-foreground truncate mt-0.5">
                  {log.description}
                </p>
                <p className="mt-1.5 text-xs text-muted-foreground/60 flex items-center gap-1">
                  <Clock className="h-3 w-3" />
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
