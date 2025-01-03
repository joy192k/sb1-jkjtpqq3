export interface BoardMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  content: string;
  category: 'news' | 'event';
}

export interface ARCRequest {
  id: string;
  propertyAddress: string;
  description: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected';
  attachments?: string[];
}

export interface Document {
  id: string;
  title: string;
  category: 'bylaws' | 'covenants' | 'financial' | 'other';
  description: string;
  url: string;
}

export interface ArcFormData {
  name: string;
  email: string;
  phone: string;
  address: string;
  projectTitle: string;
  description: string;
  startDate?: Date;
  endDate?: Date;
}