import { Brain, AlertTriangle, Wrench, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { aiPredictions } from "@/lib/mockData";

const severityConfig = {
  high: {
    icon: AlertTriangle,
    bg: "bg-critical-muted",
    text: "text-critical",
    border: "border-critical/20",
  },
  medium: {
    icon: Wrench,
    bg: "bg-warning-muted",
    text: "text-warning",
    border: "border-warning/20",
  },
  warning: {
    icon: Shield,
    bg: "bg-info-muted",
    text: "text-info",
    border: "border-info/20",
  },
};

export function AIInsightsCard() {
  return (
    <div className="rounded-xl border border-ai/20 bg-card p-5 shadow-sm animate-slide-up">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-lg bg-ai-muted p-2">
          <Brain className="h-5 w-5 text-ai" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">AI Insights</h3>
          <p className="text-xs text-muted-foreground">
            Predictive compliance analysis
          </p>
        </div>
      </div>

      <div className="space-y-3">
        {aiPredictions.map((prediction) => {
          const config = severityConfig[prediction.severity];
          const Icon = config.icon;

          return (
            <div
              key={prediction.id}
              className={cn(
                "rounded-lg border p-3 transition-all hover:shadow-sm",
                config.border
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn("rounded-md p-1.5", config.bg)}>
                  <Icon className={cn("h-4 w-4", config.text)} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground">
                    {prediction.prediction}
                  </p>
                  <div className="mt-1 flex items-center gap-2">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium",
                        config.bg,
                        config.text
                      )}
                    >
                      {prediction.count} vehicles
                    </span>
                    <span className="text-xs text-muted-foreground truncate">
                      {prediction.cars.join(", ")}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
