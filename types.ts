export interface PlanFeature {
  text: string;
  highlight?: boolean;
}

export interface PricingPlan {
  id: string;
  title: string;
  price: string;
  description: string;
  features: PlanFeature[];
  isFeatured: boolean;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
}