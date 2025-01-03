export type RequestType = 
  | 'exterior-paint'
  | 'roofing'
  | 'fence'
  | 'landscaping'
  | 'deck-patio'
  | 'pool-spa'
  | 'windows-doors'
  | 'solar-panels'
  | 'driveway'
  | 'other';

export interface RequestTypeInfo {
  id: RequestType;
  label: string;
  description: string;
  requiredDocs: string[];
}

export interface ArcFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  requestType: RequestType;
  otherTypeDetails?: string;
  projectTitle: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
}

export interface AiSuggestion {
  type: 'warning' | 'info' | 'success';
  message: string;
}