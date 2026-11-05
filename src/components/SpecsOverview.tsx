import React from 'react';
import { 
  Zap, 
  Wind, 
  ShieldCheck, 
  Droplets, 
  RotateCw, 
  Cpu, 
  Layers, 
  Gauge,
  CheckCircle2
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface SpecsOverviewProps {
  currentLang: LanguageCode;
}

export const SpecsOverview: React.FC<SpecsOverviewProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];

  return (
    <section id="specs" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <Cpu className="w-3.5 h-3.5" />
            Engineering & Technology
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Built for Extreme Chicago Winters & Highway Clarity
          </h2>
          <p className="text-zinc-400 text-sm">
            Compact mini 1:1 footprint packed with aviation-grade thermal management and dual CSP matrix chips.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="card-glass p-6 rounded-2xl border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Layers className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              1:1 Mini Halogen Footprint
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Unlike bulky LED bulbs with giant external driver boxes, our Mini design matches the physical dimensions of factory halogen bulbs. Fits 100% inside your OEM headlight dust cover with zero cutting or wire splicing.
            </p>
          </div>

          <div className="card-glass p-6 rounded-2xl border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Wind className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              12,000 RPM Silent Turbo Cooling
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Equipped with a micro hydraulic turbo fan spinning at 12,000 RPM coupled with aviation 6063 aluminum fins. Rapid heat dissipation guarantees continuous high lumen output without dimming or thermal degradation.
            </p>
          </div>

          <div className="card-glass p-6 rounded-2xl border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              6000K Pure Diamond White
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              6000K provides optimal nocturnal contrast. It delivers crystal-clear daylight color without the dangerous blue glare of 8000K bulbs that fatigue eyes and perform poorly in fog or snow.
            </p>
          </div>

          <div className="card-glass p-6 rounded-2xl border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              CANbus Error-Free Driver
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Integrated smart IC driver works seamlessly with 99% of vehicle onboard computer systems. Prevents dashboard bulb-out warnings, radio interference, and annoying hyper-flickering.
            </p>
          </div>

          <div className="card-glass p-6 rounded-2xl border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Droplets className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              IP68 Weatherproof & Submersible
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Engineered for real-world driving conditions: heavy Midwest road salt, freezing -40°F blizzards, pressure car washes, and torrential rainstorms. 100% dustproof and water resistant.
            </p>
          </div>

          <div className="card-glass p-6 rounded-2xl border-zinc-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
              <Gauge className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-white font-heading">
              50,000+ Hour Lifespan
            </h3>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard halogens burn out every 1-2 years. Our automotive-grade CSP chips and copper core substrate are rated for more than 50,000 hours of continuous high-output illumination.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
