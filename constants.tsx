
import React from 'react';
import { 
  Zap, 
  Target, 
  MessageSquare, 
  BarChart3, 
  Layers, 
  ShieldCheck, 
  Users, 
  Workflow 
} from 'lucide-react';
import { Feature, PricingPlan, Testimonial } from './types';

export const FEATURES: Feature[] = [
  {
    id: 'ai-scoring',
    title: 'AI Lead Scoring',
    description: 'Automatically rank prospects based on engagement and fit using our proprietary neural engine.',
    icon: <Target className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'whatsapp-sync',
    title: 'Omnichannel Sync',
    description: 'Seamless integration with WhatsApp, Email, and SMS to nurture leads wherever they are.',
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'crm-integration',
    title: 'CRM Auto-Pilot',
    description: 'Directly push qualified leads into Salesforce, HubSpot, or Zoho with zero manual entry.',
    icon: <Layers className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'Real-time dashboards showing conversion rates, CAC, and ROI across all marketing channels.',
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'workflows',
    title: 'Visual Workflows',
    description: 'Drag-and-drop automation builder to design complex lead nurturing sequences in minutes.',
    icon: <Workflow className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and GDPR compliance out of the box for all your data.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for exploring our core lead generation features.",
    features: ["Up to 100 leads/mo", "Basic AI Scoring", "Email Integration", "Community Support"]
  },
  {
    name: "Pro",
    price: 29,
    isPopular: true,
    description: "Best for growing businesses needing scale and automation.",
    features: ["Unlimited leads", "Advanced AI Predictor", "WhatsApp & SMS Sync", "CRM Integration", "Priority Support"]
  },
  {
    name: "Enterprise",
    price: 99,
    description: "Designed for large agencies and high-volume recruiters.",
    features: ["Custom Workflows", "Dedicated Account Manager", "SSO & Audit Logs", "White-label Options", "24/7 Phone Support"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Rajesh Sharma",
    role: "Marketing Director",
    company: "Mumbai Car Bazaar",
    content: "LeadFlow Pro transformed our sales pipeline. We generated 500+ qualified leads in our first week alone. The ROI is undeniable.",
    avatar: "https://picsum.photos/seed/rajesh/100/100"
  },
  {
    id: '2',
    name: "Sarah Jenkins",
    role: "SaaS Founder",
    company: "CloudScale.io",
    content: "The AI scoring is spookily accurate. It saved our sales team hundreds of hours by focusing only on the high-intent prospects.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: '3',
    name: "David Chen",
    role: "Recruitment Lead",
    company: "Global Talent Partners",
    content: "The smoothest implementation I've ever experienced. Within 48 hours, we were fully automated. Highly recommended.",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];
