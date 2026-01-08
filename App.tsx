
import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Download, 
  Lock,
  Globe,
  Award,
  ShieldCheck,
  Users,
  Target,
  Zap,
  MessageSquare,
  BarChart3,
  Layers,
  Workflow
} from 'lucide-react';

// --- Global Types ---
interface Feature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface PricingPlan {
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  avatar: string;
  company: string;
}

// --- Application Constants ---
const FEATURES: Feature[] = [
  {
    id: 'ai-scoring',
    title: 'AI Lead Scoring',
    description: 'Automatically rank prospects based on engagement and fit using our proprietary neural engine optimized for Windows.',
    icon: <Target className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'whatsapp-sync',
    title: 'Omnichannel Sync',
    description: 'Seamless integration with WhatsApp, Email, and SMS to nurture leads wherever they are, with Windows desktop notifications.',
    icon: <MessageSquare className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'crm-integration',
    title: 'CRM Auto-Pilot',
    description: 'Directly push qualified leads into Salesforce, HubSpot, or Zoho with native Windows background processing.',
    icon: <Layers className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'analytics',
    title: 'Advanced Analytics',
    description: 'High-performance desktop dashboards showing conversion rates, CAC, and ROI across all marketing channels.',
    icon: <BarChart3 className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'workflows',
    title: 'Visual Workflows',
    description: 'Native drag-and-drop automation builder to design complex lead sequences with Windows precision.',
    icon: <Workflow className="w-6 h-6 text-blue-600" />
  },
  {
    id: 'security',
    title: 'Enterprise Security',
    description: 'Bank-grade encryption and system-level compliance out of the box for all your lead data.',
    icon: <ShieldCheck className="w-6 h-6 text-blue-600" />
  }
];

const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Starter",
    price: 0,
    description: "Perfect for exploring our core lead generation features on Windows.",
    features: ["Up to 100 leads/mo", "Basic AI Scoring", "Email Integration", "Community Support"]
  },
  {
    name: "Pro",
    price: 29,
    isPopular: true,
    description: "Best for growing businesses needing scale and automation on desktop.",
    features: ["Unlimited leads", "Advanced AI Predictor", "WhatsApp & SMS Sync", "CRM Integration", "Priority Support"]
  },
  {
    name: "Enterprise",
    price: 99,
    description: "Designed for large agencies requiring high-volume Windows processing.",
    features: ["Custom Workflows", "Dedicated Account Manager", "SSO & Audit Logs", "White-label Options", "24/7 Phone Support"]
  }
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: "Rajesh Sharma",
    role: "Marketing Director",
    company: "Mumbai Car Bazaar",
    content: "Grow Lead Ai transformed our sales pipeline. We generated 500+ qualified leads in our first week. The Windows app is incredibly fast.",
    avatar: "https://picsum.photos/seed/rajesh/100/100"
  },
  {
    id: '2',
    name: "Sarah Jenkins",
    role: "SaaS Founder",
    company: "CloudScale.io",
    content: "The AI scoring on the desktop app is spookily accurate. It saved our sales team hundreds of hours focusing only on high-intent prospects.",
    avatar: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    id: '3',
    name: "David Chen",
    role: "Recruitment Lead",
    company: "Global Talent Partners",
    content: "The smoothest implementation I've ever experienced. Within 48 hours, we were fully automated and synced with our CRM.",
    avatar: "https://picsum.photos/seed/david/100/100"
  }
];

// --- Sub-components ---
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-900 text-white p-1.5 rounded-lg shadow-inner">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-black">Grow Lead <span className="text-blue-600">Ai</span></span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Features</a>
            <a href="#demo" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Demo</a>
            <a href="#pricing" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Pricing</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">Testimonials</a>
            <button className="bg-[#10B981] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-200">
              Download App
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 p-2 focus:outline-none">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-gray-100 p-4 space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <a href="#features" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2">Features</a>
          <a href="#demo" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2">Demo</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="block text-lg font-medium py-2">Pricing</a>
          <button className="w-full bg-[#10B981] text-white py-4 rounded-xl font-bold shadow-md">Get Grow Lead Ai</button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-400 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-emerald-400 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 mb-8 rounded-full bg-blue-50 border border-blue-100 animate-pulse cursor-default">
          <span className="text-xs font-bold text-blue-700 tracking-wider uppercase">Native Windows 11 Build Available</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
          Generate <span className="gradient-text">10x More</span> Leads <br className="hidden md:block" /> with <span className="text-blue-600 underline decoration-blue-200 underline-offset-8">Grow Lead Ai</span>
        </h1>
        
        <p className="max-w-2xl mx-auto text-xl text-gray-600 mb-10 leading-relaxed">
          The high-performance Windows desktop client for AI automation. Capture, qualify, and sync leads with zero lag and native system integration.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16">
          <button className="w-full sm:w-auto px-8 py-5 bg-[#1E3A8A] text-white rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all flex items-center justify-center group shadow-xl shadow-blue-200">
            Download for Windows <Download className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-5 bg-white text-gray-900 border-2 border-gray-100 rounded-2xl font-bold text-lg hover:border-blue-600 transition-all">
            View Live Desktop Demo
          </button>
        </div>

        <div className="relative max-w-5xl mx-auto group animate-in slide-in-from-bottom-8 duration-700">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-emerald-600 rounded-[2.5rem] blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
          <div className="relative bg-gray-50 border-8 border-white rounded-[2rem] shadow-2xl aspect-video overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center bg-gray-900/40 group-hover:bg-gray-900/20 transition-all cursor-pointer z-20">
              <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl transform transition-transform group-hover:scale-110">
                <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-blue-900 border-b-[10px] border-b-transparent ml-1"></div>
              </div>
            </div>
            <img 
              src="https://picsum.photos/seed/windows-grow-lead/1200/675" 
              alt="Grow Lead Ai Desktop Interface" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="mt-24">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-10">Optimized for Enterprise Hardware</p>
          <div className="flex flex-wrap justify-center items-center gap-12 grayscale opacity-60">
            <div className="text-2xl font-black italic tracking-tighter">MICROSOFT</div>
            <div className="text-2xl font-black italic tracking-tighter">DELL</div>
            <div className="text-2xl font-black italic tracking-tighter">HP</div>
            <div className="text-2xl font-black italic tracking-tighter">INTEL</div>
            <div className="text-2xl font-black italic tracking-tighter">AMD</div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeaturesGrid = () => {
  return (
    <section id="features" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-base font-bold text-blue-600 tracking-wide uppercase mb-3">Power User Features</h2>
          <p className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Designed for Windows Workflow</p>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Leverage multi-threaded background processing and system-level shortcuts to capture leads faster than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURES.map((feature) => (
            <div key={feature.id} className="bg-white p-10 rounded-[2rem] border border-gray-100 hover:border-blue-200 hover:shadow-xl transition-all group">
              <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">Desktop-First Pricing</h2>
          
          <div className="flex items-center justify-center space-x-4">
            <span className={`text-sm font-semibold ${!isAnnual ? 'text-black' : 'text-gray-400'}`}>Monthly</span>
            <button 
              onClick={() => setIsAnnual(!isAnnual)}
              className="w-14 h-8 bg-blue-100 rounded-full relative transition-colors"
            >
              <div className={`absolute top-1 w-6 h-6 bg-blue-600 rounded-full transition-all duration-300 ${isAnnual ? 'left-7' : 'left-1'}`}></div>
            </button>
            <span className={`text-sm font-semibold ${isAnnual ? 'text-black' : 'text-gray-400'}`}>
              Annual <span className="text-emerald-500 font-bold ml-1">Save 20%</span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {PRICING_PLANS.map((plan) => (
            <div 
              key={plan.name} 
              className={`relative bg-white p-10 rounded-[2.5rem] border-2 transition-all ${plan.isPopular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-gray-100'}`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white text-xs font-black px-4 py-1 rounded-full uppercase tracking-widest">
                  Best For Teams
                </div>
              )}
              
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-8 text-sm">{plan.description}</p>
              
              <div className="flex items-baseline mb-8">
                <span className="text-5xl font-extrabold text-gray-900">${isAnnual ? Math.floor(plan.price * 0.8) : plan.price}</span>
                <span className="text-gray-500 font-medium ml-2">/month</span>
              </div>

              <button className={`w-full py-4 rounded-2xl font-bold transition-all mb-10 ${plan.isPopular ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200' : 'bg-gray-100 text-gray-900 hover:bg-gray-200'}`}>
                Activate License
              </button>

              <div className="space-y-4">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          <div className="flex items-center space-x-2 text-gray-500">
            <ShieldCheck className="w-5 h-5" />
            <span className="text-sm font-bold">Secure Stripe Payments</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <ArrowRight className="w-5 h-5" />
            <span className="text-sm font-bold">30-Day Money Back Guarantee</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-500">
            <Lock className="w-5 h-5" />
            <span className="text-sm font-bold">GDPR & System Security Ready</span>
          </div>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center space-x-1 mb-6">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />)}
          </div>
          <h2 className="text-4xl font-extrabold mb-4">Windows Users Love Grow Lead Ai</h2>
          <p className="text-xl text-gray-600">See how top agencies are scaling with Grow Lead Ai for Windows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-[2.5rem] border border-gray-100 flex flex-col justify-between hover:shadow-xl transition-all shadow-sm">
              <p className="text-lg text-gray-700 leading-relaxed mb-8 italic">"{t.content}"</p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-14 h-14 rounded-2xl border-2 border-white shadow-md object-cover" />
                <div>
                  <h4 className="font-bold text-gray-900">{t.name}</h4>
                  <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#1E3A8A] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 p-20 opacity-10">
            <Globe className="w-96 h-96 text-white animate-pulse" />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8">Request a Windows <br /> Enterprise Trial</h2>
              <p className="text-xl text-blue-100 mb-12">
                Need a custom implementation for your recruitment or marketing firm? Our Windows solutions team is ready to help you grow.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-lg font-medium">Top Rated Windows CRM Integration</span>
                </div>
                <div className="flex items-center space-x-4 text-white">
                  <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center">
                    <Download className="w-6 h-6 text-emerald-400" />
                  </div>
                  <span className="text-lg font-medium">2M+ leads generated last quarter</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-2xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in zoom-in duration-300">
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">Application Received</h3>
                  <p className="text-gray-600">A Grow Lead Ai specialist will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                    <input 
                      type="text" 
                      required
                      placeholder="John Doe"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                      onChange={e => setFormState({...formState, name: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Work Email</label>
                    <input 
                      type="email" 
                      required
                      placeholder="john@company.com"
                      className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-600 outline-none"
                      onChange={e => setFormState({...formState, email: e.target.value})}
                    />
                  </div>
                  <button type="submit" className="w-full bg-[#10B981] text-white py-5 rounded-2xl font-bold text-lg hover:bg-emerald-600 transition-all flex items-center justify-center shadow-lg">
                    Send Inquiry <ArrowRight className="ml-2 w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-8">
              <div className="bg-blue-900 text-white p-1.5 rounded-lg shadow-sm">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-xl font-extrabold text-black">Grow Lead <span className="text-blue-600">Ai</span></span>
            </div>
            <p className="text-gray-500 max-w-xs mb-8 leading-relaxed">
              Leading the next generation of sales automation natively on the Windows platform.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-6 uppercase tracking-wider text-xs">Product</h4>
            <ul className="space-y-4 text-gray-500 text-sm font-medium">
              <li><a href="#" className="hover:text-blue-600 transition-colors">Windows Client</a></li>
              <li><a href="#" className="hover:text-blue-600 transition-colors">Pricing</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-gray-100 gap-6">
          <p className="text-gray-400 text-sm">© 2026 Grow Lead Ai for Windows. Built for performance.</p>
        </div>
      </div>
    </footer>
  );
};

const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);
  if (!isVisible) return null;
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div className="bg-white max-w-lg w-full rounded-[2.5rem] p-12 relative shadow-2xl">
        <button onClick={() => setIsVisible(false)} className="absolute top-6 right-6 p-2 text-gray-400 hover:text-black">
          <X className="w-6 h-6" />
        </button>
        <div className="text-center">
          <h3 className="text-3xl font-extrabold text-gray-900 mb-4">Don't Leave Yet!</h3>
          <p className="text-lg text-gray-600 mb-8">Grab our exclusive <span className="font-bold text-blue-600">"Windows Lead Gen Masterclass"</span> for free.</p>
          <button className="w-full bg-[#1E3A8A] text-white py-5 rounded-2xl font-bold text-lg">Download Guide Free</button>
        </div>
      </div>
    </div>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 300);
    return () => clearTimeout(timer);
  }, []);
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-[999]">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin mb-4"></div>
          <span className="text-sm font-bold text-gray-400 tracking-widest uppercase">Grow Lead Ai</span>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <FeaturesGrid />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <ExitIntentPopup />
    </div>
  );
}
