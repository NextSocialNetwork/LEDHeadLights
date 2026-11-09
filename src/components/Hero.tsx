import React from 'react';
import { 
  Zap, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Car, 
  PhoneCall, 
  MapPin, 
  ExternalLink,
  Star 
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

import headlightPairImg from '../assets/images/headlight_pair.jpg';

interface HeroProps {
  currentLang: LanguageCode;
  onOpenBulbFinder: () => void;
  onOpenAiChat: () => void;
  onOpenCashAppModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  currentLang,
  onOpenBulbFinder,
  onOpenAiChat,
  onOpenCashAppModal,
}) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-8 sm:pb-16 lg:py-20 border-b border-zinc-800 bg-radial from-sky-950/20 via-zinc-950 to-zinc-950">
      {/* Background ambient light glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[200px] sm:h-[300px] bg-sky-500/10 rounded-full blur-[90px] sm:blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text / Value Proposition Column */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Badges Bar with 289 Reviews */}
            <div className="flex flex-wrap items-center gap-2">
              <a 
                href="#reviews"
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 hover:bg-amber-500/25 transition-colors shadow-sm"
              >
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span>5.0 (289 Reviews • Switched from Halogen)</span>
              </a>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-sky-500/15 text-sky-300 border border-sky-400/30 glow-6000k">
                <Sparkles className="w-3.5 h-3.5 text-sky-300" />
                {t.badge6000k}
              </span>
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                {t.priceTag}
              </span>
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-medium bg-amber-500/10 text-amber-300 border border-amber-500/20">
                <MapPin className="w-3 h-3 text-amber-400" />
                Chicago Pickup
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white font-heading leading-tight">
                HEADLIGHTS MINI <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-100 to-white text-glow-6000k">
                  6000K DIAMOND WHITE
                </span>
              </h1>
              <p className="text-sm sm:text-lg text-zinc-300 max-w-2xl leading-relaxed">
                {t.heroSubheading} Available for <strong className="text-white font-semibold">H1, H3, H4/9003/HB2, H7, 9005/HB5, 9006/HB4, H8, and H11</strong>.
              </p>
            </div>

            {/* Price & Shipping Highlight Card - Clean responsive grid on mobile */}
            <div className="card-glass p-4 rounded-2xl border border-zinc-800">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800/80">
                <div className="pt-0">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-zinc-400 font-semibold">
                    Flat Set Price (2 Bulbs)
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white font-heading flex items-baseline gap-2 mt-0.5">
                    $40
                    <span className="text-xs sm:text-sm font-medium text-emerald-400">flat / pair</span>
                  </div>
                </div>

                <div className="pt-3 sm:pt-0 sm:pl-4">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-emerald-400 font-semibold">
                    Tracked Shipping (7-14 Days)
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-emerald-400 flex items-center gap-1.5 mt-0.5">
                    <Truck className="w-4 h-4 text-emerald-400" />
                    100% FREE Included
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Cash App: <strong className="text-emerald-400 font-mono">${OWNER_CONTACT.cashAppHandle}</strong>
                  </div>
                </div>

                <div className="pt-3 sm:pt-0 sm:pl-4">
                  <div className="text-[10px] sm:text-xs uppercase tracking-wider text-sky-400 font-semibold">
                    Guarantees Included
                  </div>
                  <div className="text-lg sm:text-xl font-bold text-sky-400 flex items-center gap-1.5 mt-0.5">
                    <ShieldCheck className="w-4 h-4 text-sky-400" />
                    Free Replacement!
                  </div>
                  <div className="text-[11px] text-zinc-400">
                    Customer Satisfaction Guaranteed
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Sockets Availability Bar */}
            <div className="space-y-1.5">
              <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                In Stock & Ready for Immediate Dispatch:
              </div>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {['H1', 'H3', 'H4 / 9003', 'H7', '9005 / HB5', 'H8', 'H11'].map((sock) => (
                  <a
                    key={sock}
                    href="#listings"
                    className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-sky-500/20 text-zinc-200 hover:text-sky-300 text-xs font-mono font-semibold border border-zinc-800 hover:border-sky-500/40 transition-colors"
                  >
                    {sock}
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons - Stacked on mobile for easy thumb tapping */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 pt-1">
              <a
                href="#listings"
                className="px-6 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-sm tracking-wide transition-all shadow-xl shadow-sky-500/20 flex items-center justify-center gap-2 group"
              >
                <span>{t.btnShopNow}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenBulbFinder}
                className="px-5 py-3.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-semibold text-sm border border-zinc-700 hover:border-zinc-500 transition-colors flex items-center justify-center gap-2"
              >
                <Car className="w-4 h-4 text-sky-400" />
                <span>{t.btnFindBulb}</span>
              </button>

              <button
                onClick={onOpenCashAppModal}
                className="px-5 py-3.5 rounded-xl bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-300 font-semibold text-sm border border-emerald-500/40 transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-4 h-4 text-emerald-400" />
                <span>Pay via Cash App (${OWNER_CONTACT.cashAppHandle})</span>
              </button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 pt-3 border-t border-zinc-800/80 text-xs text-zinc-300">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-sky-400 shrink-0" />
                <span>1:1 Mini Halogen Size</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                <span>12,000 RPM Turbo Fan</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Plug & Play 10-Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>100% FREE Tracked Shipping</span>
              </div>
            </div>

          </div>

          {/* Right Showcase Photo Column */}
          <div className="lg:col-span-5 relative mt-4 lg:mt-0">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              
              {/* Outer decorative glow frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500/30 to-blue-600/30 blur-xl opacity-75" />
              
              <div className="relative rounded-2xl overflow-hidden border border-sky-400/30 bg-zinc-900 shadow-2xl">
                <img
                  src="/assets/aistudio/grok_1794040847386_4459822c.jpg"
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (target.src !== headlightPairImg) {
                      target.src = headlightPairImg;
                    }
                  }}
                  alt="Mini LED Headlight Bulbs 6000K Diamond White"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  loading="eager"
                />
                
                {/* Floating Specs Overlay Over Image */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-zinc-950 via-zinc-950/85 to-transparent p-4 sm:p-5 space-y-1.5 sm:space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-sky-300 uppercase tracking-wider">
                      Headlights Mini 6000K
                    </span>
                    <span className="text-xs font-black text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                      $40 Flat Pair (Free Shipping)
                    </span>
                  </div>
                  <p className="text-xs text-zinc-300 line-clamp-2 sm:line-clamp-none">
                    Aviation aluminum heat sink with micro high-speed hydraulic turbo cooling fan.
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 text-[10px] sm:text-[11px] font-mono text-zinc-400 pt-0.5">
                    <span>16,000 LM</span>
                    <span>•</span>
                    <span>6000K Xenon White</span>
                    <span>•</span>
                    <span>IP68 Waterproof</span>
                  </div>
                </div>
              </div>

              {/* Floating Contact Callout Badge - Stays securely inside mobile viewport */}
              <div className="absolute -bottom-3 right-2 sm:-bottom-5 sm:right-4 bg-zinc-900/95 backdrop-blur-md border border-zinc-700 rounded-xl p-2.5 sm:p-3 shadow-2xl flex items-center gap-2.5 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <PhoneCall className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </div>
                <div>
                  <div className="text-[9px] sm:text-[10px] uppercase tracking-wider text-zinc-400 font-bold">
                    Questions? Text Matt
                  </div>
                  <a 
                    href={`tel:${OWNER_CONTACT.phoneRaw}`} 
                    className="text-xs font-bold text-white hover:text-sky-400 transition-colors block"
                  >
                    {OWNER_CONTACT.phone}
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

