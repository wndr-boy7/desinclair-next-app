"use client";

import React, { useState, useEffect } from 'react';
import {
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  BarChart3,
  Users,
  Layers,
  Menu,
  X,
  Check,
  Database,
  Lock,
  ArrowRight,
  Activity,
  Terminal,
  ExternalLink,
  Github,
  Twitter
} from 'lucide-react';

/**
 * PROJECT: deSinclair Technologies v2.0
 * ARCHITECTURE: Next.js App Router
 * STYLING: Tailwind CSS
 */

// --- DATA ---
const AUDIENCES = {
  iot: {
    title: "Edge & IoT",
    color: "#00FFB2",
    pains: ["Latency bottlenecks", "Bandwidth costs", "Unreliable edge connectivity"],
    solution: "Local-first caching with global synchronization protocols.",
    metric: "85% Lower Latency"
  },
  startups: {
    title: "Hyper-Growth",
    color: "#00C8FF",
    pains: ["Unpredictable egress fees", "Scaling overhead", "Complex compliance"],
    solution: "Flat-rate storage tiers with automated SOC2-ready infrastructure.",
    metric: "40% Cost Reduction"
  },
  enterprise: {
    title: "Global Enterprise",
    color: "#B57BFF",
    pains: ["Legacy silos", "Data sovereignty", "Ransomware threats"],
    solution: "Zero-trust distributed architecture with immutable snapshots.",
    metric: "100% Sovereignty"
  }
};

const PRICING = {
  monthly: [
    { name: 'Starter', price: 0, features: ['5GB Storage', 'Basic Auth', 'Community Support'] },
    { name: 'Growth', price: 49, features: ['500GB Storage', 'Zero-Trust Encryption', 'Priority API Support', 'Advanced Analytics'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited Storage', 'Dedicated Clusters', 'White-glove Migration', '24/7 Support'] }
  ],
  annual: [
    { name: 'Starter', price: 0, features: ['5GB Storage', 'Basic Auth', 'Community Support'] },
    { name: 'Growth', price: 39, features: ['500GB Storage', 'Zero-Trust Encryption', 'Priority API Support', 'Advanced Analytics'], popular: true },
    { name: 'Enterprise', price: 'Custom', features: ['Unlimited Storage', 'Dedicated Clusters', 'White-glove Migration', '24/7 Support'] }
  ]
];

// --- COMPONENTS ---

const Navigation = ({ isScrolled, mobileOpen, setMobileOpen }) => (
  <nav className={`fixed w-full z-50 transition-all ${isScrolled ? 'bg-black/80 backdrop-blur' : ''}`}>
    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3">
        <Database className="text-[#00FFB2]" />
        <span className="font-bold">DESINCLAIR</span>
      </div>
      <button onClick={() => setMobileOpen(!mobileOpen)}>
        {mobileOpen ? <X /> : <Menu />}
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <section className="pt-40 pb-20 text-center">
    <h1 className="text-5xl font-bold">
      Storage Built for the Future
    </h1>
    <p className="mt-6 text-gray-400">
      Next-gen infrastructure for scalable applications
    </p>
  </section>
);

const Footer = () => (
  <footer className="py-20 text-center text-gray-500 border-t border-white/10">
    © 2026 deSinclair Technologies
  </footer>
);

// --- PAGE ---
export default function Page() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeAudience, setActiveAudience] = useState('iot');
  const [billing, setBilling] = useState('monthly');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050508] text-white">
      <Navigation
        isScrolled={isScrolled}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <Hero />

      {/* Example section */}
      <section className="p-10 text-center">
        <h2 className="text-2xl">
          deSinclair Next.js Project is Live 🚀
        </h2>
      </section>

      <Footer />
    </div>
  );
}
