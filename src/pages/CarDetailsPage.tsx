import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  User,
  Phone,
  Mail,
  Car,
  Calendar,
  Brain,
  FileText,
  Bell,
  AlertTriangle,
  CheckCircle,
  Clock,
} from "lucide-react";
import { cars } from "@/lib/mockData";
import { StatusBadge, RiskBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { format, isPast, differenceInDays } from "date-fns";

export default function CarDetailsPage() {
  const { id } = useParams();
  const car = cars.find((c) => c.id === id);

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-foreground">
            Car not found
          </h2>
          <Link to="/cars" className="text-primary hover:underline">
            Back to Cars
          </Link>
        </div>
      </div>
    );
  }

  const getDocumentStatus = (expiryDate: string) => {
    const expiry = new Date(expiryDate);
    const daysUntil = differenceInDays(expiry, new Date());

    if (isPast(expiry)) {
      return { status: "expired", label: "Expired", className: "text-critical" };
    }
    if (daysUntil <= 30) {
      return {
        status: "expiring",
        label: `${daysUntil} days left`,
        className: "text-warning",
      };
    }
    return { status: "valid", label: "Valid", className: "text-success" };
  };

  const documents = [
    {
      name: "Registration Certificate",
      expiry: car.registrationExpiry,
      icon: FileText,
    },
    { name: "Insurance", expiry: car.insuranceExpiry, icon: FileText },
    { name: "Fitness Certificate", expiry: car.fitnessExpiry, icon: FileText },
  ];

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Back Button */}
      <Link
        to="/cars"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Cars
      </Link>

      {/* Header */}
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-2xl font-bold text-foreground">
              {car.plateNumber}
            </h1>
            <StatusBadge status={car.complianceStatus} />
          </div>
          <p className="text-muted-foreground">
            {car.make} {car.model} • {car.yearBuilt}
          </p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline">
            <Bell className="mr-2 h-4 w-4" />
            Notify Owner
          </Button>
          <Button variant="destructive">
            <AlertTriangle className="mr-2 h-4 w-4" />
            Trigger Alert
          </Button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-6">
          {/* Owner Information */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Owner Information
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium text-foreground">{car.ownerName}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium text-foreground">{car.ownerEmail}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-primary/10 p-2">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium text-foreground">{car.ownerPhone}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vehicle Details */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Vehicle Details
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div>
                <p className="text-sm text-muted-foreground">Make</p>
                <p className="font-medium text-foreground">{car.make}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Model</p>
                <p className="font-medium text-foreground">{car.model}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Year Built</p>
                <p className="font-medium text-foreground">{car.yearBuilt}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Plate Number</p>
                <p className="font-medium text-foreground">{car.plateNumber}</p>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-border grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Last Inspection
                  </p>
                  <p className="font-medium text-foreground">
                    {format(new Date(car.lastInspectionDate), "MMMM d, yyyy")}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-muted p-2">
                  <Clock className="h-5 w-5 text-muted-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">
                    Next Inspection Due
                  </p>
                  <p className="font-medium text-foreground">
                    {format(new Date(car.nextInspectionDue), "MMMM d, yyyy")}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Documents */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Documents
            </h2>
            <div className="space-y-3">
              {documents.map((doc) => {
                const docStatus = getDocumentStatus(doc.expiry);
                return (
                  <div
                    key={doc.name}
                    className="flex items-center justify-between rounded-lg border border-border/50 bg-background/50 p-4"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-lg bg-muted p-2">
                        <doc.icon className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{doc.name}</p>
                        <p className="text-sm text-muted-foreground">
                          Expires:{" "}
                          {format(new Date(doc.expiry), "MMMM d, yyyy")}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {docStatus.status === "valid" && (
                        <CheckCircle className="h-4 w-4 text-success" />
                      )}
                      {docStatus.status === "expiring" && (
                        <Clock className="h-4 w-4 text-warning" />
                      )}
                      {docStatus.status === "expired" && (
                        <AlertTriangle className="h-4 w-4 text-critical" />
                      )}
                      <span className={cn("text-sm font-medium", docStatus.className)}>
                        {docStatus.label}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column - AI Analysis */}
        <div className="space-y-6">
          <div className="rounded-xl border border-ai/20 bg-card p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <div className="rounded-lg bg-ai-muted p-2">
                <Brain className="h-5 w-5 text-ai" />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-foreground">
                  AI Analysis
                </h2>
                <p className="text-sm text-muted-foreground">
                  Predictive compliance insights
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Risk Level</p>
                <RiskBadge level={car.aiRiskLevel} />
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-1">
                  Predicted Outcome
                </p>
                <p className="font-medium text-foreground">{car.aiPrediction}</p>
              </div>

              <div>
                <p className="text-sm text-muted-foreground mb-2">
                  Analysis Reasoning
                </p>
                <ul className="space-y-2">
                  {car.aiReasonings.map((reason, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ai flex-shrink-0" />
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-foreground mb-4">
              Quick Actions
            </h2>
            <div className="space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Mail className="mr-2 h-4 w-4" />
                Send Email to Owner
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Phone className="mr-2 h-4 w-4" />
                Call Owner
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Inspection
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
