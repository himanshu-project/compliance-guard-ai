import { cn } from "@/lib/utils";

type StatusType = "compliant" | "non-compliant" | "expiring-soon";
type RiskLevel = "low" | "medium" | "high";

interface StatusBadgeProps {
  status: StatusType;
}

interface RiskBadgeProps {
  level: RiskLevel;
}

const statusConfig = {
  compliant: {
    label: "Compliant",
    className: "bg-success-muted text-success border-success/20",
  },
  "non-compliant": {
    label: "Non-Compliant",
    className: "bg-critical-muted text-critical border-critical/20",
  },
  "expiring-soon": {
    label: "Expiring Soon",
    className: "bg-warning-muted text-warning border-warning/20",
  },
};

const riskConfig = {
  low: {
    label: "Low Risk",
    className: "bg-success-muted text-success border-success/20",
  },
  medium: {
    label: "Medium Risk",
    className: "bg-warning-muted text-warning border-warning/20",
  },
  high: {
    label: "High Risk",
    className: "bg-critical-muted text-critical border-critical/20",
  },
};

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = statusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}

export function RiskBadge({ level }: RiskBadgeProps) {
  const config = riskConfig[level];

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium",
        config.className
      )}
    >
      {config.label}
    </span>
  );
}
