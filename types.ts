export interface LeadFormData {
  fullName: string;
  email: string;
  phone: string;
  zipCode: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  rating: number;
  text: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ServiceItem {
  title: string;
  description: string;
  image: string;
}