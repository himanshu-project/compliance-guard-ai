import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Eye, Bell, ChevronDown } from "lucide-react";
import { cars, Car } from "@/lib/mockData";
import { StatusBadge, RiskBadge } from "@/components/ui/StatusBadge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";

export default function CarsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [yearFilter, setYearFilter] = useState<string>("all");

  const filteredCars = cars.filter((car) => {
    const matchesSearch =
      car.plateNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.ownerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.make.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesStatus =
      statusFilter === "all" || car.complianceStatus === statusFilter;

    const matchesYear =
      yearFilter === "all" || car.yearBuilt.toString() === yearFilter;

    return matchesSearch && matchesStatus && matchesYear;
  });

  const uniqueYears = [...new Set(cars.map((c) => c.yearBuilt))].sort(
    (a, b) => b - a
  );

  return (
    <div className="min-h-screen p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-foreground">Cars</h1>
        <p className="text-muted-foreground">
          Manage and monitor all registered vehicles
        </p>
      </div>

      {/* Filters */}
      <div className="mb-6 flex flex-wrap items-center gap-4">
        <div className="relative flex-1 min-w-[240px] max-w-md">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search by plate, owner, or model..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-9"
          />
        </div>

        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-[180px]">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="compliant">Compliant</SelectItem>
            <SelectItem value="non-compliant">Non-Compliant</SelectItem>
            <SelectItem value="expiring-soon">Expiring Soon</SelectItem>
          </SelectContent>
        </Select>

        <Select value={yearFilter} onValueChange={setYearFilter}>
          <SelectTrigger className="w-[140px]">
            <SelectValue placeholder="Year" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Years</SelectItem>
            {uniqueYears.map((year) => (
              <SelectItem key={year} value={year.toString()}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="font-semibold">Plate Number</TableHead>
              <TableHead className="font-semibold">Owner</TableHead>
              <TableHead className="font-semibold">Vehicle</TableHead>
              <TableHead className="font-semibold">Year</TableHead>
              <TableHead className="font-semibold">Status</TableHead>
              <TableHead className="font-semibold">AI Risk</TableHead>
              <TableHead className="font-semibold">Last Inspection</TableHead>
              <TableHead className="font-semibold text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCars.map((car) => (
              <TableRow
                key={car.id}
                className="hover:bg-muted/30 transition-colors"
              >
                <TableCell className="font-medium">{car.plateNumber}</TableCell>
                <TableCell>{car.ownerName}</TableCell>
                <TableCell>
                  {car.make} {car.model}
                </TableCell>
                <TableCell>{car.yearBuilt}</TableCell>
                <TableCell>
                  <StatusBadge status={car.complianceStatus} />
                </TableCell>
                <TableCell>
                  <RiskBadge level={car.aiRiskLevel} />
                </TableCell>
                <TableCell className="text-muted-foreground">
                  {format(new Date(car.lastInspectionDate), "MMM d, yyyy")}
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Link to={`/cars/${car.id}`}>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button variant="ghost" size="sm">
                      <Bell className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Results count */}
      <div className="mt-4 text-sm text-muted-foreground">
        Showing {filteredCars.length} of {cars.length} vehicles
      </div>
    </div>
  );
}
