import React, { useState } from 'react';
import { Eye, Sun, Sparkles, Check, X, ShieldAlert } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';

interface BeamComparisonProps {
  currentLang: LanguageCode;
}

export const BeamComparison: React.FC<BeamComparisonProps> = ({ currentLang }) => {
  const t = TRANSLATIONS[currentLang];
  const [sliderPos, setSliderPos] = useState<number>(50);

  return (
    <section id="comparison" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <Eye className="w-3.5 h-3.5" />
            Night Visibility Comparison
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-heading">
            {t.beamComparisonTitle}
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            {t.beamComparisonSubtitle}
          </p>
        </div>

        {/* Visual Comparison Split Container */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl bg-zinc-900">
          
          {/* Main Comparison Image with Real Photography */}
          <div className="relative aspect-video w-full select-none overflow-hidden">
            <img
              src="/src/assets/images/beam_comparison.jpg"
              alt="Night road comparison: Halogen 3200K vs LED 6000K"
              className="w-full h-full object-cover"
            />

            {/* Split Overlay Overlays */}
            <div className="absolute top-4 left-4 bg-amber-950/80 backdrop-blur-md border border-amber-500/30 px-3 py-1.5 rounded-lg text-xs font-bold text-amber-300">
              {t.stockHalogen}
            </div>

            <div className="absolute top-4 right-4 bg-sky-950/80 backdrop-blur-md border border-sky-400/40 px-3 py-1.5 rounded-lg text-xs font-bold text-sky-300 glow-6000k">
              {t.diamondLed}
            </div>

            {/* Bottom info banner */}
            <div className="absolute bottom-4 inset-x-4 bg-zinc-950/90 backdrop-blur-md p-3.5 rounded-xl border border-zinc-700/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-zinc-300">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
                <span>3200K Halogen: 1,000 LM • 150 ft distance • High heat draw</span>
              </div>
              <div className="flex items-center gap-2 text-sky-300 font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-pulse" />
                <span>6000K Mini LED: 8,000 LM/bulb • 1,200 ft distance • 12K RPM Turbo Cool</span>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Detailed Breakdown Table */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Stock Halogen Card */}
          <div className="card-glass p-6 rounded-2xl border-amber-500/20 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <h3 className="text-base font-bold text-amber-200">Stock Factory Halogen</h3>
              </div>
              <span className="text-xs text-zinc-400 font-mono">3000K - 3200K</span>
            </div>

            <p className="text-xs text-zinc-400 leading-relaxed">
              Standard yellow incandescent filaments that deteriorate over time. Creates dim shadows, limited peripheral perception, and causes high alternator draw.
            </p>

            <ul className="space-y-2 text-xs text-zinc-300 pt-2 border-t border-zinc-800">
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Dim yellow light with poor road sign contrast</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Short 500 - 1,000 hour filament lifespan</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Overheats plastic headlight lenses over time</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="w-3.5 h-3.5 text-rose-400 shrink-0" />
                <span>Frequent burnouts require constant bulb changes</span>
              </li>
            </ul>
          </div>

          {/* 6000K Mini LED Card */}
          <div className="card-glass p-6 rounded-2xl border-sky-400/40 relative space-y-4 glow-6000k">
            <div className="absolute -top-3 right-6 bg-sky-500 text-zinc-950 text-[10px] font-black uppercase tracking-wider px-2.5 py-0.5 rounded-full">
              Recommended Upgrade
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-400 shadow-md shadow-sky-400" />
                <h3 className="text-base font-bold text-white">Headlights Mini 6000K</h3>
              </div>
              <span className="text-xs text-sky-400 font-mono font-bold">6000K Diamond White</span>
            </div>

            <p className="text-xs text-zinc-300 leading-relaxed">
              Precision CSP micro-chips mimicking OEM halogen filament placement. Delivers daylight clarity, piercing animal/debris awareness, and sharp beam cutoff.
            </p>

            <ul className="space-y-2 text-xs text-zinc-200 pt-2 border-t border-zinc-800">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>300% Brighter</strong> pure diamond white output</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>50,000+ Hours</strong> lifespan (Aviation Aluminum body)</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>12,000 RPM Turbo Fan</strong> keeps operating temps ice cold</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span><strong>1:1 Mini Direct Plug & Play</strong> fits factory dust caps</span>
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};
