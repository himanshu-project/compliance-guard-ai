import { Brain, AlertTriangle, Wrench, Shield, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { aiPredictions } from "@/lib/mockData";

const severityConfig = {
  high: {
    icon: AlertTriangle,
    bg: "bg-gradient-to-br from-critical/15 to-critical/5",
    text: "text-critical",
    border: "border-critical/20 hover:border-critical/40",
  },
  medium: {
    icon: Wrench,
    bg: "bg-gradient-to-br from-warning/15 to-warning/5",
    text: "text-warning",
    border: "border-warning/20 hover:border-warning/40",
  },
  warning: {
    icon: Shield,
    bg: "bg-gradient-to-br from-info/15 to-info/5",
    text: "text-info",
    border: "border-info/20 hover:border-info/40",
  },
};

export function AIInsightsCard() {
  return (
    <div className="relative rounded-xl border border-ai/30 bg-card p-5 shadow-sm animate-slide-up overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-ai/10 to-transparent rounded-bl-full" />
      
      <div className="relative mb-5 flex items-center gap-3">
        <div className="rounded-xl gradient-ai p-2.5 shadow-lg shadow-ai/20">
          <Brain className="h-5 w-5 text-white" strokeWidth={1.75} />
        </div>
        <div>
          <div className="flex items-center gap-2">
            <h3 className="font-display font-semibold text-foreground">AI Insights</h3>
            <Sparkles className="h-3.5 w-3.5 text-ai animate-pulse-subtle" />
          </div>
          <p className="text-xs text-muted-foreground">
            Predictive compliance analysis
          </p>
        </div>
      </div>

      <div className="relative space-y-3">
        {aiPredictions.map((prediction) => {
          const config = severityConfig[prediction.severity];
          const Icon = config.icon;

          return (
            <div
              key={prediction.id}
              className={cn(
                "rounded-lg border p-3.5 transition-all duration-200 cursor-pointer hover:shadow-sm",
                config.border
              )}
            >
              <div className="flex items-start gap-3">
                <div className={cn("rounded-lg p-2", config.bg)}>
                  <Icon className={cn("h-4 w-4", config.text)} strokeWidth={1.75} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-foreground leading-snug">
                    {prediction.prediction}
                  </p>
                  <div className="mt-2 flex items-center gap-2 flex-wrap">
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold",
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
