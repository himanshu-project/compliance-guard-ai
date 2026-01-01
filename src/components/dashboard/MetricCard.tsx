import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: number | string;
  subtitle?: string;
  icon: LucideIcon;
  variant?: "default" | "success" | "warning" | "critical" | "ai";
  trend?: {
    value: number;
    isPositive: boolean;
  };
}

const variantStyles = {
  default: {
    container: "bg-card border-border",
    icon: "bg-primary/10 text-primary",
    value: "text-foreground",
  },
  success: {
    container: "bg-card border-success/20",
    icon: "bg-success-muted text-success",
    value: "text-success",
  },
  warning: {
    container: "bg-card border-warning/20",
    icon: "bg-warning-muted text-warning",
    value: "text-warning",
  },
  critical: {
    container: "bg-card border-critical/20",
    icon: "bg-critical-muted text-critical",
    value: "text-critical",
  },
  ai: {
    container: "bg-card border-ai/20",
    icon: "bg-ai-muted text-ai",
    value: "text-ai",
  },
};

export function MetricCard({
  title,
  value,
  subtitle,
  icon: Icon,
  variant = "default",
}: MetricCardProps) {
  const styles = variantStyles[variant];

  return (
    <div
      className={cn(
        "rounded-xl border p-5 shadow-sm transition-all hover:shadow-md animate-fade-in",
        styles.container
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-1">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className={cn("text-3xl font-bold tracking-tight", styles.value)}>
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground">{subtitle}</p>
          )}
        </div>
        <div className={cn("rounded-lg p-2.5", styles.icon)}>
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}
