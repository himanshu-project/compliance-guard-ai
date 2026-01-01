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
    container: "bg-card border-border hover:border-primary/30",
    icon: "bg-gradient-to-br from-primary/10 to-primary/5 text-primary",
    iconRing: "ring-primary/10",
    value: "text-foreground",
  },
  success: {
    container: "bg-card border-success/20 hover:border-success/40",
    icon: "bg-gradient-to-br from-success/20 to-success/10 text-success",
    iconRing: "ring-success/10",
    value: "text-success",
  },
  warning: {
    container: "bg-card border-warning/20 hover:border-warning/40",
    icon: "bg-gradient-to-br from-warning/20 to-warning/10 text-warning",
    iconRing: "ring-warning/10",
    value: "text-warning",
  },
  critical: {
    container: "bg-card border-critical/20 hover:border-critical/40",
    icon: "bg-gradient-to-br from-critical/20 to-critical/10 text-critical",
    iconRing: "ring-critical/10",
    value: "text-critical",
  },
  ai: {
    container: "bg-card border-ai/20 hover:border-ai/40",
    icon: "bg-gradient-to-br from-ai/20 to-ai/10 text-ai",
    iconRing: "ring-ai/10",
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
        "group relative rounded-xl border p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-black/[0.03] hover:-translate-y-0.5 animate-fade-in overflow-hidden",
        styles.container
      )}
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative flex items-start justify-between">
        <div className="space-y-1.5">
          <p className="text-sm font-medium text-muted-foreground tracking-wide">{title}</p>
          <p className={cn("text-3xl font-display font-bold tracking-tight", styles.value)}>
            {value}
          </p>
          {subtitle && (
            <p className="text-xs text-muted-foreground/80">{subtitle}</p>
          )}
        </div>
        <div className={cn("rounded-xl p-3 ring-1", styles.icon, styles.iconRing)}>
          <Icon className="h-5 w-5" strokeWidth={1.75} />
        </div>
      </div>
    </div>
  );
}
