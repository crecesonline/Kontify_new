import { CaseSummary, CaseLevel, AIRecommendation } from './AIAssistant';

export interface UserContactData {
  name: string;
  email: string;
  whatsapp: string;
}

export interface Booking {
  id: string;
  entrepreneurId: string;
  expertId: string;
  expertName: string;
  expertAvatar?: string;
  service: string;
  date: Date;
  duration: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  totalCost: number;
}

export interface ExtendedBooking extends Booking {
  caseSummary?: CaseSummary;
  userContactData?: UserContactData;
  caseLevel?: CaseLevel;
  aiRecommendations?: AIRecommendation[];
}
