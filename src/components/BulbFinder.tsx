/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  Car, 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Zap, 
  Info, 
  Building2, 
  Sparkles, 
  ShieldCheck, 
  Layers 
} from 'lucide-react';
import { LanguageCode, SocketType } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { POPULAR_VEHICLE_DATABASE, AUTOMOTIVE_GROUPS } from '../data/vehicleData';
import { OWNER_CONTACT } from '../data/bulbsData';

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
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Mainstream & Trucks' | 'Luxury & Ultra-Luxury' | 'Electric & Specialty'>('All');
  const [selectedMake, setSelectedMake] = useState<string>('All');
  const [selectedVehicle, setSelectedVehicle] = useState<typeof POPULAR_VEHICLE_DATABASE[0] | null>(null);

  // Distinct list of all makes in the database
  const ALL_MAKES = useMemo(() => {
    const set = new Set<string>();
    POPULAR_VEHICLE_DATABASE.forEach((v) => set.add(v.make));
    return ['All', ...Array.from(set).sort()];
  }, []);

  // Filter vehicles
  const filteredVehicles = useMemo(() => {
    return POPULAR_VEHICLE_DATABASE.filter((v) => {
      // Category filter
      const matchesCategory = 
        selectedCategory === 'All' || 
        v.category === selectedCategory;

      // Make filter
      const matchesMake = 
        selectedMake === 'All' || 
        v.make.toLowerCase() === selectedMake.toLowerCase();

      // Search query
      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory && matchesMake;

      const combined = `${v.make} ${v.model} ${v.low} ${v.high} ${v.fog} ${v.parentGroup || ''} ${v.category || ''}`.toLowerCase();
      const matchesSearch = combined.includes(q);

      return matchesCategory && matchesMake && matchesSearch;
    });
  }, [selectedCategory, selectedMake, searchQuery]);

  const handleSocketClick = (socketStr: string) => {
    let targetSocket: SocketType = 'H11';
    if (socketStr.includes('9006') || socketStr.includes('HB4')) targetSocket = '9006';
    else if (socketStr.includes('H11')) targetSocket = 'H11';
    else if (socketStr.includes('H4') || socketStr.includes('9003')) targetSocket = 'H4';
    else if (socketStr.includes('H7')) targetSocket = 'H7';
    else if (socketStr.includes('9005') || socketStr.includes('HB5') || socketStr.includes('HB3')) targetSocket = '9005';
    else if (socketStr.includes('H8')) targetSocket = 'H8';
    else if (socketStr.includes('H1')) targetSocket = 'H1';
    else if (socketStr.includes('H3')) targetSocket = 'H3';

    onSelectSocket(targetSocket);
    const elem = document.getElementById('listings');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="finder" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <Car className="w-3.5 h-3.5" />
            <span>OEM Automotive Bulb Socket Finder • 100% Guaranteed Fitment</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            {t.bulbFinderTitle}
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl mx-auto">
            Find the exact low beam, high beam, and fog light bulb sockets for your vehicle. Explore all major manufacturer parent groups from Toyota & Honda to German luxury, British classics, and modern EVs.
          </p>
        </div>

        {/* Corporate Parent & Category Segmented Tabs */}
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {(['All', 'Mainstream & Trucks', 'Luxury & Ultra-Luxury', 'Electric & Specialty'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setSelectedMake('All');
                }}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all border shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-zinc-950 border-sky-400 shadow-md shadow-sky-500/20'
                    : 'bg-zinc-900 text-zinc-300 border-zinc-800 hover:text-white hover:bg-zinc-800'
                }`}
              >
                {cat === 'All' ? 'All Automotive Groups' : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by vehicle (e.g. Toyota Camry, VW Jetta, Ford F-150, BMW 3, Audi A4, Tesla, Ram 1500, Porsche)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-white placeholder-zinc-500 text-sm transition-all"
            />
          </div>

          {/* Quick Brand Selector Pills */}
          <div className="flex gap-1.5 overflow-x-auto pb-1.5 scrollbar-none sm:flex-wrap">
            {ALL_MAKES.map((make) => (
              <button
                key={make}
                onClick={() => setSelectedMake(make)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                  selectedMake.toLowerCase() === make.toLowerCase()
                    ? 'bg-sky-500 text-zinc-950 border-sky-400 shadow-md shadow-sky-500/20'
                    : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:border-zinc-700'
                }`}
              >
                {make}
              </button>
            ))}
          </div>
        </div>

        {/* Results grid / suggestions */}
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-2 border-t border-zinc-800/80">
            <div>
              Showing <span className="font-bold text-white">{Math.min(filteredVehicles.length, 18)}</span> of <span className="font-bold text-sky-400">{filteredVehicles.length}</span> vehicle models
              {selectedMake !== 'All' && <span> for <strong>{selectedMake}</strong></span>}
            </div>
            <div className="text-[11px] font-mono text-zinc-400">
              All Sockets In Stock • $40 Flat / Pair • FREE Shipping
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredVehicles.slice(0, 18).map((veh, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedVehicle(veh)}
                className={`card-glass p-4 rounded-xl cursor-pointer transition-all border ${
                  selectedVehicle?.model === veh.model
                    ? 'border-sky-400 bg-sky-950/30 ring-1 ring-sky-400/40 shadow-lg shadow-sky-500/10'
                    : 'border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60'
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-bold">
                        {veh.make}
                      </span>
                      {veh.parentGroup && (
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 font-mono truncate max-w-[150px]">
                          {veh.parentGroup}
                        </span>
                      )}
                    </div>
                    <h4 className="text-sm font-bold text-white mt-1">
                      {veh.model}
                    </h4>
                  </div>
                  <Zap className="w-4 h-4 text-sky-400 shrink-0 mt-1" />
                </div>

                <div className="mt-3 pt-2.5 border-t border-zinc-800/80 grid grid-cols-3 gap-1 text-[11px]">
                  <div>
                    <span className="text-zinc-400 block text-[9px] uppercase font-mono">Low Beam</span>
                    <span className="font-mono font-bold text-sky-300">{veh.low}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[9px] uppercase font-mono">High Beam</span>
                    <span className="font-mono font-bold text-zinc-200">{veh.high}</span>
                  </div>
                  <div>
                    <span className="text-zinc-400 block text-[9px] uppercase font-mono">Fog Lights</span>
                    <span className="font-mono font-bold text-zinc-300">{veh.fog}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredVehicles.length === 0 && (
            <div className="text-center py-12 card-glass rounded-2xl border border-zinc-800 space-y-3">
              <Car className="w-8 h-8 text-zinc-500 mx-auto" />
              <h3 className="text-base font-bold text-white">No exact vehicles found for "{searchQuery}"</h3>
              <p className="text-xs text-zinc-400 max-w-md mx-auto">
                Matt and our Chicago automotive lighting team can look up your exact socket size instantly. Call/text or chat below!
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedMake('All');
                  setSelectedCategory('All');
                }}
                className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-bold text-white hover:bg-zinc-700"
              >
                Reset Vehicle Filters
              </button>
            </div>
          )}

          {/* Interactive Vehicle Selection Box */}
          {selectedVehicle && (
            <div className="mt-6 card-glass p-6 rounded-2xl border-sky-400/50 bg-sky-950/20 glow-6000k space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-sky-300 uppercase font-bold">Selected Vehicle</span>
                    {selectedVehicle.parentGroup && (
                      <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 font-mono">
                        {selectedVehicle.parentGroup}
                      </span>
                    )}
                  </div>
                  <h3 className="text-xl font-black text-white font-heading mt-1">
                    {selectedVehicle.make} {selectedVehicle.model}
                  </h3>
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-500/20 text-sky-300 border border-sky-400/30">
                  Guaranteed Fitment • $40 Flat / Pair • FREE Tracked Shipping • Free Replacement!
                </span>
              </div>

              {/* Special H7 Notice if Vehicle Uses H7 */}
              {(selectedVehicle.low.includes('H7') || selectedVehicle.high.includes('H7')) && (
                <div className="p-3.5 rounded-xl bg-zinc-900 border border-sky-500/30 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 text-sky-300 font-bold">
                    <Sparkles className="w-4 h-4 text-sky-400" />
                    <span>H7 Socket Notice for {selectedVehicle.make}:</span>
                  </div>
                  <p className="text-zinc-300 leading-relaxed text-[11px]">
                    We offer two specialized H7 models: <strong>H7 Direct Plug</strong> (Wireless 1:1 OEM blade prongs) and <strong>H7 with Wire Extension</strong> (Flexible silicone pigtail for spring clips & deep projector housings). Both are $40 flat with Free Shipping!
                  </p>
                </div>
              )}

              {/* Sockets Quick Action Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => handleSocketClick(selectedVehicle.low)}
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-left transition-all group shadow-md"
                >
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order Low Beam ($40 Flat)</span>
                  <span className="text-base font-bold text-sky-300 group-hover:text-white flex items-center justify-between mt-1">
                    {selectedVehicle.low}
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => handleSocketClick(selectedVehicle.high)}
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-left transition-all group shadow-md"
                >
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order High Beam ($40 Flat)</span>
                  <span className="text-base font-bold text-sky-300 group-hover:text-white flex items-center justify-between mt-1">
                    {selectedVehicle.high}
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>

                <button
                  onClick={() => handleSocketClick(selectedVehicle.fog)}
                  className="p-3.5 rounded-xl bg-zinc-900 border border-zinc-700 hover:border-sky-400 text-left transition-all group shadow-md"
                >
                  <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Order Fog Lights ($40 Flat)</span>
                  <span className="text-base font-bold text-sky-300 group-hover:text-white flex items-center justify-between mt-1">
                    {selectedVehicle.fog}
                    <ArrowRight className="w-4 h-4 text-sky-400 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            </div>
          )}

          {/* Need help banner */}
          <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bg-zinc-900/70 border border-zinc-800 text-xs text-zinc-300">
            <div className="flex items-center gap-2">
              <Info className="w-4 h-4 text-sky-400 shrink-0" />
              <span>Need help verifying custom projector housings or European wiring?</span>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${OWNER_CONTACT.phoneRaw}`}
                className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs transition-colors"
              >
                Call Matt ({OWNER_CONTACT.phone})
              </a>
              <button
                onClick={onOpenAiChat}
                className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold transition-colors flex items-center gap-1.5 shadow-md shadow-sky-500/20"
              >
                <span>Ask AI Specialist</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
