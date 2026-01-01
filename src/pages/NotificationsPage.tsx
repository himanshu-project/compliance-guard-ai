import { useState } from "react";
import {
  Mail,
  CheckCircle,
  XCircle,
  Clock,
  Send,
  Filter,
  Bell,
  AlertTriangle,
  FileText,
  Brain,
} from "lucide-react";
import { notifications } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

const messageTypeConfig = {
  "compliance-reminder": {
    icon: Bell,
    label: "Compliance Reminder",
    bg: "bg-info-muted",
    text: "text-info",
  },
  "inspection-due": {
    icon: AlertTriangle,
    label: "Inspection Due",
    bg: "bg-warning-muted",
    text: "text-warning",
  },
  "document-expiry": {
    icon: FileText,
    label: "Document Expiry",
    bg: "bg-critical-muted",
    text: "text-critical",
  },
  "ai-alert": {
    icon: Brain,
    label: "AI Alert",
    bg: "bg-ai-muted",
    text: "text-ai",
  },
};

const deliveryStatusConfig = {
  sent: {
    icon: Send,
    label: "Sent",
    className: "text-info",
  },
  delivered: {
    icon: CheckCircle,
    label: "Delivered",
    className: "text-success",
  },
  failed: {
    icon: XCircle,
    label: "Failed",
    className: "text-critical",
  },
  pending: {
    icon: Clock,
    label: "Pending",
    className: "text-warning",
  },
};

export default function NotificationsPage() {
  const [typeFilter, setTypeFilter] = useState<string>("all");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredNotifications = notifications.filter((notification) => {
    const matchesType =
      typeFilter === "all" || notification.messageType === typeFilter;
    const matchesStatus =
      statusFilter === "all" || notification.deliveryStatus === statusFilter;

    return matchesType && matchesStatus;
  });

  const statusCounts = {
    total: notifications.length,
    delivered: notifications.filter((n) => n.deliveryStatus === "delivered")
      .length,
    sent: notifications.filter((n) => n.deliveryStatus === "sent").length,
    failed: notifications.filter((n) => n.deliveryStatus === "failed").length,
    pending: notifications.filter((n) => n.deliveryStatus === "pending").length,
  };

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Notifications</h1>
        <p className="text-muted-foreground">
          History of all messages sent to car owners
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Total Sent</p>
          <p className="text-2xl font-bold text-foreground">
            {statusCounts.total}
          </p>
        </div>
        <div className="rounded-xl border border-success/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Delivered</p>
          <p className="text-2xl font-bold text-success">
            {statusCounts.delivered}
          </p>
        </div>
        <div className="rounded-xl border border-info/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Sent</p>
          <p className="text-2xl font-bold text-info">{statusCounts.sent}</p>
        </div>
        <div className="rounded-xl border border-warning/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Pending</p>
          <p className="text-2xl font-bold text-warning">
            {statusCounts.pending}
          </p>
        </div>
        <div className="rounded-xl border border-critical/20 bg-card p-4 shadow-sm">
          <p className="text-sm text-muted-foreground">Failed</p>
          <p className="text-2xl font-bold text-critical">
            {statusCounts.failed}
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <Select value={typeFilter} onValueChange={setTypeFilter}>
          <SelectTrigger className="w-[200px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Message Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="compliance-reminder">
              Compliance Reminder
            </SelectItem>
            <SelectItem value="inspection-due">Inspection Due</SelectItem>
            <SelectItem value="document-expiry">Document Expiry</SelectItem>
            <SelectItem value="ai-alert">AI Alert</SelectItem>
          </SelectContent>
        </Select>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[160px]">
            <SelectValue placeholder="Delivery Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="delivered">Delivered</SelectItem>
            <SelectItem value="sent">Sent</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Notifications List */}
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <div className="divide-y divide-border">
          {filteredNotifications.map((notification) => {
            const typeConfig = messageTypeConfig[notification.messageType];
            const statusConfig =
              deliveryStatusConfig[notification.deliveryStatus];
            const TypeIcon = typeConfig.icon;
            const StatusIcon = statusConfig.icon;

            return (
              <div
                key={notification.id}
                className="p-5 hover:bg-muted/30 transition-colors"
              >
                <div className="flex flex-wrap items-start gap-4">
                  <div className={cn("rounded-lg p-2.5", typeConfig.bg)}>
                    <TypeIcon className={cn("h-5 w-5", typeConfig.text)} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <span className="font-semibold text-foreground">
                        {notification.ownerName}
                      </span>
                      <span className="text-muted-foreground">•</span>
                      <span className="text-sm text-muted-foreground">
                        {notification.plateNumber}
                      </span>
                      <span
                        className={cn(
                          "rounded-full px-2.5 py-0.5 text-xs font-medium",
                          typeConfig.bg,
                          typeConfig.text
                        )}
                      >
                        {typeConfig.label}
                      </span>
                    </div>
                    <p className="text-sm text-foreground mb-2">
                      {notification.message}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {format(
                        new Date(notification.sentAt),
                        "MMM d, yyyy 'at' h:mm a"
                      )}
                    </p>
                  </div>

                  <div className="flex items-center gap-2">
                    <StatusIcon
                      className={cn("h-4 w-4", statusConfig.className)}
                    />
                    <span
                      className={cn(
                        "text-sm font-medium",
                        statusConfig.className
                      )}
                    >
                      {statusConfig.label}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {filteredNotifications.length} of {notifications.length}{" "}
        notifications
      </div>
    </div>
  );
}
