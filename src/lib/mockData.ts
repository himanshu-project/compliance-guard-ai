// Mock data for the Car Compliance Management System

export interface Car {
  id: string;
  plateNumber: string;
  ownerName: string;
  ownerEmail: string;
  ownerPhone: string;
  model: string;
  make: string;
  yearBuilt: number;
  complianceStatus: 'compliant' | 'non-compliant' | 'expiring-soon';
  lastInspectionDate: string;
  nextInspectionDue: string;
  registrationExpiry: string;
  insuranceExpiry: string;
  fitnessExpiry: string;
  aiRiskLevel: 'low' | 'medium' | 'high';
  aiPrediction: string;
  aiReasonings: string[];
}

export interface Alert {
  id: string;
  carId: string;
  plateNumber: string;
  type: 'critical' | 'warning' | 'ai-predicted';
  title: string;
  description: string;
  createdAt: string;
  isResolved: boolean;
}

export interface Notification {
  id: string;
  carId: string;
  plateNumber: string;
  ownerName: string;
  messageType: 'compliance-reminder' | 'inspection-due' | 'document-expiry' | 'ai-alert';
  message: string;
  deliveryStatus: 'sent' | 'delivered' | 'failed' | 'pending';
  sentAt: string;
}

export interface ActivityLog {
  id: string;
  action: string;
  description: string;
  timestamp: string;
  type: 'info' | 'warning' | 'success' | 'ai';
}

export const cars: Car[] = [
  {
    id: '1',
    plateNumber: 'ABC-1234',
    ownerName: 'John Smith',
    ownerEmail: 'john.smith@email.com',
    ownerPhone: '+1 (555) 123-4567',
    model: 'Camry',
    make: 'Toyota',
    yearBuilt: 2020,
    complianceStatus: 'compliant',
    lastInspectionDate: '2024-10-15',
    nextInspectionDue: '2025-04-15',
    registrationExpiry: '2025-06-30',
    insuranceExpiry: '2025-08-15',
    fitnessExpiry: '2025-04-15',
    aiRiskLevel: 'low',
    aiPrediction: 'Likely to pass next inspection',
    aiReasonings: ['Regular maintenance history', 'Low mileage for age', 'No previous failures'],
  },
  {
    id: '2',
    plateNumber: 'XYZ-5678',
    ownerName: 'Sarah Johnson',
    ownerEmail: 'sarah.j@email.com',
    ownerPhone: '+1 (555) 234-5678',
    model: 'Civic',
    make: 'Honda',
    yearBuilt: 2018,
    complianceStatus: 'expiring-soon',
    lastInspectionDate: '2024-06-20',
    nextInspectionDue: '2025-01-20',
    registrationExpiry: '2025-02-28',
    insuranceExpiry: '2025-01-15',
    fitnessExpiry: '2025-01-20',
    aiRiskLevel: 'medium',
    aiPrediction: 'May require brake system attention',
    aiReasonings: ['Age-related wear patterns detected', 'Previous minor brake issues', 'High annual mileage'],
  },
  {
    id: '3',
    plateNumber: 'DEF-9012',
    ownerName: 'Michael Chen',
    ownerEmail: 'mchen@email.com',
    ownerPhone: '+1 (555) 345-6789',
    model: 'F-150',
    make: 'Ford',
    yearBuilt: 2015,
    complianceStatus: 'non-compliant',
    lastInspectionDate: '2024-03-10',
    nextInspectionDue: '2024-09-10',
    registrationExpiry: '2024-11-30',
    insuranceExpiry: '2025-03-15',
    fitnessExpiry: '2024-09-10',
    aiRiskLevel: 'high',
    aiPrediction: 'High probability of inspection failure',
    aiReasonings: ['Overdue inspection', 'Previous emission failures', 'Age exceeds 8 years', 'High mileage vehicle'],
  },
  {
    id: '4',
    plateNumber: 'GHI-3456',
    ownerName: 'Emily Davis',
    ownerEmail: 'emily.davis@email.com',
    ownerPhone: '+1 (555) 456-7890',
    model: 'Model 3',
    make: 'Tesla',
    yearBuilt: 2022,
    complianceStatus: 'compliant',
    lastInspectionDate: '2024-11-01',
    nextInspectionDue: '2025-05-01',
    registrationExpiry: '2025-09-30',
    insuranceExpiry: '2025-07-20',
    fitnessExpiry: '2025-05-01',
    aiRiskLevel: 'low',
    aiPrediction: 'Excellent compliance outlook',
    aiReasonings: ['New vehicle', 'Electric - no emissions', 'Clean inspection history'],
  },
  {
    id: '5',
    plateNumber: 'JKL-7890',
    ownerName: 'Robert Wilson',
    ownerEmail: 'rwilson@email.com',
    ownerPhone: '+1 (555) 567-8901',
    model: 'Accord',
    make: 'Honda',
    yearBuilt: 2019,
    complianceStatus: 'expiring-soon',
    lastInspectionDate: '2024-07-15',
    nextInspectionDue: '2025-01-15',
    registrationExpiry: '2025-03-31',
    insuranceExpiry: '2025-02-28',
    fitnessExpiry: '2025-01-15',
    aiRiskLevel: 'medium',
    aiPrediction: 'Suspension components may need review',
    aiReasonings: ['5+ years old', 'Urban driving conditions', 'Minor wear indicators'],
  },
  {
    id: '6',
    plateNumber: 'MNO-1122',
    ownerName: 'Lisa Brown',
    ownerEmail: 'lisa.b@email.com',
    ownerPhone: '+1 (555) 678-9012',
    model: 'RAV4',
    make: 'Toyota',
    yearBuilt: 2021,
    complianceStatus: 'compliant',
    lastInspectionDate: '2024-09-20',
    nextInspectionDue: '2025-03-20',
    registrationExpiry: '2025-05-31',
    insuranceExpiry: '2025-04-15',
    fitnessExpiry: '2025-03-20',
    aiRiskLevel: 'low',
    aiPrediction: 'All systems operating within parameters',
    aiReasonings: ['Regular service intervals', 'Hybrid efficiency maintained', 'No issues reported'],
  },
  {
    id: '7',
    plateNumber: 'PQR-3344',
    ownerName: 'David Martinez',
    ownerEmail: 'dmartinez@email.com',
    ownerPhone: '+1 (555) 789-0123',
    model: 'Mustang',
    make: 'Ford',
    yearBuilt: 2017,
    complianceStatus: 'non-compliant',
    lastInspectionDate: '2024-02-28',
    nextInspectionDue: '2024-08-28',
    registrationExpiry: '2024-10-31',
    insuranceExpiry: '2024-12-15',
    fitnessExpiry: '2024-08-28',
    aiRiskLevel: 'high',
    aiPrediction: 'Immediate attention required',
    aiReasonings: ['Inspection overdue by 4+ months', 'Performance vehicle wear', 'Previous tire and brake issues'],
  },
  {
    id: '8',
    plateNumber: 'STU-5566',
    ownerName: 'Jennifer Lee',
    ownerEmail: 'jlee@email.com',
    ownerPhone: '+1 (555) 890-1234',
    model: 'CX-5',
    make: 'Mazda',
    yearBuilt: 2020,
    complianceStatus: 'compliant',
    lastInspectionDate: '2024-08-10',
    nextInspectionDue: '2025-02-10',
    registrationExpiry: '2025-04-30',
    insuranceExpiry: '2025-05-20',
    fitnessExpiry: '2025-02-10',
    aiRiskLevel: 'low',
    aiPrediction: 'Consistent compliance expected',
    aiReasonings: ['Well-maintained vehicle', 'Moderate usage', 'Clean record'],
  },
];

export const alerts: Alert[] = [
  {
    id: '1',
    carId: '3',
    plateNumber: 'DEF-9012',
    type: 'critical',
    title: 'Inspection Overdue',
    description: 'Vehicle inspection is overdue by 90+ days. Immediate action required.',
    createdAt: '2024-12-28T10:30:00Z',
    isResolved: false,
  },
  {
    id: '2',
    carId: '7',
    plateNumber: 'PQR-3344',
    type: 'critical',
    title: 'Multiple Compliance Failures',
    description: 'Registration and fitness certificate both expired. Vehicle non-compliant.',
    createdAt: '2024-12-27T14:15:00Z',
    isResolved: false,
  },
  {
    id: '3',
    carId: '2',
    plateNumber: 'XYZ-5678',
    type: 'warning',
    title: 'Insurance Expiring Soon',
    description: 'Insurance will expire in 15 days. Owner notification recommended.',
    createdAt: '2024-12-29T09:00:00Z',
    isResolved: false,
  },
  {
    id: '4',
    carId: '5',
    plateNumber: 'JKL-7890',
    type: 'warning',
    title: 'Inspection Due Soon',
    description: 'Next inspection due in 15 days. Schedule reminder sent.',
    createdAt: '2024-12-30T08:45:00Z',
    isResolved: false,
  },
  {
    id: '5',
    carId: '2',
    plateNumber: 'XYZ-5678',
    type: 'ai-predicted',
    title: 'Predicted Brake System Issue',
    description: 'AI analysis indicates potential brake wear requiring attention before next inspection.',
    createdAt: '2024-12-29T11:20:00Z',
    isResolved: false,
  },
  {
    id: '6',
    carId: '5',
    plateNumber: 'JKL-7890',
    type: 'ai-predicted',
    title: 'Suspension Review Recommended',
    description: 'Predictive analysis suggests suspension components should be inspected.',
    createdAt: '2024-12-28T16:30:00Z',
    isResolved: false,
  },
  {
    id: '7',
    carId: '3',
    plateNumber: 'DEF-9012',
    type: 'ai-predicted',
    title: 'High Failure Probability',
    description: 'AI predicts 85% chance of inspection failure based on vehicle history and patterns.',
    createdAt: '2024-12-26T13:00:00Z',
    isResolved: false,
  },
];

export const notifications: Notification[] = [
  {
    id: '1',
    carId: '2',
    plateNumber: 'XYZ-5678',
    ownerName: 'Sarah Johnson',
    messageType: 'compliance-reminder',
    message: 'Your vehicle insurance is expiring soon. Please renew before the expiry date.',
    deliveryStatus: 'delivered',
    sentAt: '2024-12-29T09:15:00Z',
  },
  {
    id: '2',
    carId: '3',
    plateNumber: 'DEF-9012',
    ownerName: 'Michael Chen',
    messageType: 'inspection-due',
    message: 'URGENT: Your vehicle inspection is overdue. Please schedule immediately to avoid penalties.',
    deliveryStatus: 'delivered',
    sentAt: '2024-12-28T10:45:00Z',
  },
  {
    id: '3',
    carId: '5',
    plateNumber: 'JKL-7890',
    ownerName: 'Robert Wilson',
    messageType: 'inspection-due',
    message: 'Reminder: Your vehicle inspection is due in 15 days. Book your appointment now.',
    deliveryStatus: 'sent',
    sentAt: '2024-12-30T08:50:00Z',
  },
  {
    id: '4',
    carId: '7',
    plateNumber: 'PQR-3344',
    ownerName: 'David Martinez',
    messageType: 'document-expiry',
    message: 'CRITICAL: Your vehicle registration has expired. Immediate renewal required.',
    deliveryStatus: 'failed',
    sentAt: '2024-12-27T15:00:00Z',
  },
  {
    id: '5',
    carId: '2',
    plateNumber: 'XYZ-5678',
    ownerName: 'Sarah Johnson',
    messageType: 'ai-alert',
    message: 'AI Analysis: We recommend having your brake system checked before your next inspection.',
    deliveryStatus: 'delivered',
    sentAt: '2024-12-29T11:30:00Z',
  },
  {
    id: '6',
    carId: '1',
    plateNumber: 'ABC-1234',
    ownerName: 'John Smith',
    messageType: 'compliance-reminder',
    message: 'Your vehicle passed the recent inspection. Next inspection due: April 15, 2025.',
    deliveryStatus: 'delivered',
    sentAt: '2024-10-16T10:00:00Z',
  },
];

export const activityLogs: ActivityLog[] = [
  {
    id: '1',
    action: 'Alert Triggered',
    description: 'Critical alert created for DEF-9012 - Inspection overdue',
    timestamp: '2024-12-28T10:30:00Z',
    type: 'warning',
  },
  {
    id: '2',
    action: 'Notification Sent',
    description: 'Compliance reminder sent to Sarah Johnson (XYZ-5678)',
    timestamp: '2024-12-29T09:15:00Z',
    type: 'success',
  },
  {
    id: '3',
    action: 'AI Analysis Complete',
    description: 'Predictive analysis completed for 8 vehicles',
    timestamp: '2024-12-29T06:00:00Z',
    type: 'ai',
  },
  {
    id: '4',
    action: 'New Vehicle Added',
    description: 'Tesla Model 3 (GHI-3456) registered to Emily Davis',
    timestamp: '2024-12-27T14:30:00Z',
    type: 'info',
  },
  {
    id: '5',
    action: 'Inspection Recorded',
    description: 'Inspection passed for ABC-1234 (Toyota Camry)',
    timestamp: '2024-10-15T11:00:00Z',
    type: 'success',
  },
  {
    id: '6',
    action: 'AI Risk Update',
    description: 'Risk level updated to HIGH for PQR-3344',
    timestamp: '2024-12-26T13:00:00Z',
    type: 'ai',
  },
];

// Dashboard statistics
export const dashboardStats = {
  totalCars: cars.length,
  roadworthy: cars.filter(c => c.complianceStatus === 'compliant').length,
  nonRoadworthy: cars.filter(c => c.complianceStatus === 'non-compliant').length,
  expiringSoon: cars.filter(c => c.complianceStatus === 'expiring-soon').length,
  aiHighRisk: cars.filter(c => c.aiRiskLevel === 'high').length,
  aiMediumRisk: cars.filter(c => c.aiRiskLevel === 'medium').length,
  aiLowRisk: cars.filter(c => c.aiRiskLevel === 'low').length,
};

// Chart data
export const complianceDistribution = [
  { name: 'Compliant', value: dashboardStats.roadworthy, color: 'hsl(142, 71%, 45%)' },
  { name: 'Expiring Soon', value: dashboardStats.expiringSoon, color: 'hsl(38, 92%, 50%)' },
  { name: 'Non-Compliant', value: dashboardStats.nonRoadworthy, color: 'hsl(0, 72%, 51%)' },
];

export const carsByYear = [
  { year: '2015', count: 1 },
  { year: '2017', count: 1 },
  { year: '2018', count: 1 },
  { year: '2019', count: 1 },
  { year: '2020', count: 2 },
  { year: '2021', count: 1 },
  { year: '2022', count: 1 },
];

export const aiPredictions = [
  {
    id: '1',
    prediction: 'Cars likely to fail inspection in the next 30 days',
    count: 3,
    severity: 'high' as const,
    cars: ['DEF-9012', 'PQR-3344', 'XYZ-5678'],
  },
  {
    id: '2',
    prediction: 'Vehicles requiring preventive maintenance',
    count: 2,
    severity: 'medium' as const,
    cars: ['XYZ-5678', 'JKL-7890'],
  },
  {
    id: '3',
    prediction: 'Insurance renewals needed within 60 days',
    count: 2,
    severity: 'warning' as const,
    cars: ['XYZ-5678', 'PQR-3344'],
  },
];
