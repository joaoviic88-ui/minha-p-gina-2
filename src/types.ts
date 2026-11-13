export interface CheatSheetItem {
  id: string;
  title: string;
  category: 'adventure' | 'camera' | 'composition' | 'lighting';
  description: string;
  recommendedSettings?: {
    aperture: string;
    shutter: string;
    iso: string;
    lens: string;
    mode: string;
    tips: string[];
  };
}

export interface PhotoSample {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  settings: {
    aperture: string;
    shutterSpeed: string;
    iso: string;
    focalLength: string;
    tripod: boolean;
    filter?: string;
    proTip: string;
  };
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  stars: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
