import React, { useState } from 'react';
import { Car, Search, CheckCircle2, ArrowRight, Zap, Info } from 'lucide-react';
import { LanguageCode, SocketType } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { POPULAR_VEHICLE_DATABASE } from '../data/bulbsData';

interface BulbFinderProps {
  currentLang: LanguageCode;
  onSelectSocket: (socket: SocketType) => void;
  onOpenAiChat: () => void;
}

export const BulbFinder: React.FC<BulbFinderProps> = ({
  currentLang,
  onSelectSocket,
  onOpenAiChat,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVehicle, setSelectedVehicle] = useState<typeof POPULAR_VEHICLE_DATABASE[0] | null>(null);

  const filteredVehicles = POPULAR_VEHICLE_DATABASE.filter((v) => {
    const combined = `${v.make} ${v.model}`.toLowerCase();
    return combined.includes(searchQuery.toLowerCase());
  });

  const handleSocketClick = (socketStr: string) => {
    // Extract base socket if composite
    let targetSocket: SocketType = 'H11';
    if (socketStr.includes('H11')) targetSocket = 'H11';
    else if (socketStr.includes('H4') || socketStr.includes('9003')) targetSocket = 'H4';
    else if (socketStr.includes('H7')) targetSocket = 'H7';
    else if (socketStr.includes('9005') || socketStr.includes('HB5') || socketStr.includes('HB3')) targetSocket = '9005';
    else if (socketStr.includes('H8')) targetSocket = 'H8';
    else if (socketStr.includes('H1')) targetSocket = 'H1';
    else if (socketStr.includes('H3')) targetSocket = 'H3';

    onSelectSocket(targetSocket);
    // Scroll to listings
    const elem = document.getElementById('listings');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="finder" className="py-16 border-b border-zinc-800 bg-zinc-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <Car className="w-3.5 h-3.5" />
            Vehicle Fitment Guide
          </div>
          <h2 className="text-3xl font-extrabold text-white font-heading">
            {t.bulbFinderTitle}
          </h2>
          <p className="text-zinc-400 text-sm">
            {t.bulbFinderSubtitle}
          </p>
        </div>

        {/* Finder Search Box */}
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Type your car (e.g. Honda Civic, Toyota Camry, Ford F-150, BMW 3, Subaru)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-white placeholder-zinc-500 text-sm transition-all"
            />
          </div>
        </div>

        {/* Results grid / suggestions */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {filteredVehicles.slice(0, 9).map((veh, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedVehicle(veh)}
                className={`card-glass p-4 rounded-xl cursor-pointer transition-all border ${
                  selectedVehicle?.model === veh.model
                    ? 'border-sky-400 bg-sky-950/30'
                    : 'border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold">
                      {veh.make}
                    </span>
                    <h4 className="text-sm font-bold text-white mt-0.5">
                      {veh.model}
                    </h4>
                  </div>
                  <Zap className="w-4 h-4 text-sky-400 shrink-0" />
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-800/80 grid grid-cols-3 gap-1 text-[11px]">
                  <div>
                    <span className="text-zinc-400 block text-[9px] uppercase">Low Beam</span>
                    <span className="font-mono font-bold text-sky-300">{veh.low}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[9px] uppercase">High Beam</span>
                    <span className="font-mono font-bold text-zinc-200">{veh.high}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[9px] uppercase">Fog</span>
                    <span className="font-mono font-bold text-zinc-300">{veh.fog}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* If car was selected, show quick action box */}
          {selectedVehicle && (
            <div className="mt-6 card-glass p-5 rounded-2xl border-sky-400/50 bg-sky-950/20 glow-6000k space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-mono text-sky-300 uppercase font-bold">Selected Vehicle</span>
                  <h3 className="text-lg font-black text-white font-heading">
                    {selectedVehicle.make} {selectedVehicle.model}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Ready to Order • $30/Pair
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => handleSocketClick(selectedVehicle.low)}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-left transition-all group"
                >
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order Low Beam</span>
                  <span className="text-base font-bold text-sky-300 group-hover:text-white flex items-center justify-between mt-1">
                    {selectedVehicle.low}
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => handleSocketClick(selectedVehicle.high)}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-left transition-all group"
                >
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order High Beam</span>
                  <span className="text-base font-bold text-sky-300 group-hover:text-white flex items-center justify-between mt-1">
                    {selectedVehicle.high}
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => handleSocketClick(selectedVehicle.fog)}
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-left transition-all group"
                >
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order Fog Lights</span>
                  <span className="text-base font-bold text-sky-300 group-hover:text-white flex items-center justify-between mt-1">
                    {selectedVehicle.fog}
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Don't see your car banner */}
          <div className="mt-6 flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Don't see your exact vehicle or have a custom headlight assembly?</span>
            </div>
            <button
              onClick={onOpenAiChat}
              className="px-3 py-1.5 rounded-lg bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 font-bold border border-sky-400/30 transition-colors flex items-center gap-1.5"
            >
              <span>Ask AI Chat Specialist</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
