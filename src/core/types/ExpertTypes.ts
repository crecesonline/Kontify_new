export type UserRole = 'entrepreneur' | 'expert' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  phone?: string;
  company?: string;
  createdAt: Date;
}

export interface Expert extends User {
  role: 'expert';
  specialties: string[];
  services: string[];
  hourlyRate: number;
  rating: number;
  reviewCount: number;
  description: string;
  experience: string;
  certifications: string[];
  availability: string[];
  verified: boolean;
  approved: boolean;
  testimonials: Testimonial[];
}

export interface Testimonial {
  id: string;
  clientName: string;
  rating: number;
  comment: string;
  date: Date;
}
