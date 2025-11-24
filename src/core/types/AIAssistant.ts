export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export interface AISession {
  id: string;
  userId: string;
  messages: AIMessage[];
  questionsUsed: number;
  createdAt: Date;
}

export type CaseLevel = 'green' | 'yellow' | 'red';

export type Specialty =
  | 'IVA'
  | 'ISR'
  | 'Nómina'
  | 'Deducciones'
  | 'Facturación Electrónica'
  | 'Declaraciones'
  | 'Auditoría'
  | 'Planeación Fiscal'
  | 'Devoluciones'
  | 'Consultoría General';

export interface CaseSummary {
  level: CaseLevel;
  detectedSpecialties: Specialty[];
  userQuery: string;
  conversationContext: string;
  urgency: 'low' | 'medium' | 'high';
  generatedAt: Date;
}

export interface AIRecommendation {
  specialty: Specialty;
  confidence: number;
  reason: string;
}
