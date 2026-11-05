import React, { useState } from 'react';
import { 
  Zap, 
  Filter, 
  Check, 
  Sparkles, 
  X, 
  ShoppingBag, 
  Truck, 
  MapPin, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { BulbListing, LanguageCode, SocketType } from '../types';
import { BULB_LISTINGS, OWNER_CONTACT } from '../data/bulbsData';
import { TRANSLATIONS } from '../data/translations';
import { ProductCard } from './ProductCard';

interface ProductListingsProps {
  currentLang: LanguageCode;
  selectedSocketId?: SocketType | null;
  onAddToCart: (bulb: BulbListing) => void;
  onQuickBuy: (bulb: BulbListing) => void;
}

export const ProductListings: React.FC<ProductListingsProps> = ({
  currentLang,
  selectedSocketId,
  onAddToCart,
  onQuickBuy,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [activeFilter, setActiveFilter] = useState<'all' | 'single' | 'dual' | 'fog'>('all');
  const [modalBulb, setModalBulb] = useState<BulbListing | null>(null);

  const filteredBulbs = BULB_LISTINGS.filter((b) => {
    if (activeFilter === 'dual') return b.id === 'H4';
    if (activeFilter === 'fog') return b.id === 'H3' || b.id === 'H8';
    if (activeFilter === 'single') return b.id !== 'H4';
    return true;
  });

  return (
    <section id="listings" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <Zap className="w-3.5 h-3.5" />
              All Sockets In Stock — $30 Each Pair
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              Headlights Mini: 6000K Diamond White
            </h2>
            <p className="text-zinc-400 text-sm">
              Separate listings for each socket size. All pairs are $30. Nationwide tracked shipping is $15 via Cash App, or pick up locally in Chicago.
            </p>
          </div>

          {/* Pricing Highlight Pill */}
          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4 shrink-0">
            <div>
              <div className="text-[10px] uppercase font-bold text-zinc-400">Fixed Rate</div>
              <div className="text-2xl font-black text-white font-heading">$30 / Pair</div>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <div className="text-[10px] uppercase font-bold text-sky-400">Shipping</div>
              <div className="text-sm font-bold text-zinc-200">+$15 via Cash App</div>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-zinc-800/80">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'all'
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {t.filterAll} (7 Sockets)
            </button>
            <button
              onClick={() => setActiveFilter('single')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'single'
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {t.filterSingleBeam} (H1, H3, H7, 9005, H8, H11)
            </button>
            <button
              onClick={() => setActiveFilter('dual')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'dual'
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {t.filterDualBeam} (H4 / 9003 / HB2)
            </button>
            <button
              onClick={() => setActiveFilter('fog')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeFilter === 'fog'
                  ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20'
                  : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border border-zinc-800'
              }`}
            >
              {t.filterFog} (H3 & H8)
            </button>
          </div>

          <div className="text-xs text-zinc-400">
            Showing <span className="font-bold text-white">{filteredBulbs.length}</span> bulb models
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredBulbs.map((bulb) => (
            <ProductCard
              key={bulb.id}
              bulb={bulb}
              currentLang={currentLang}
              isSelected={selectedSocketId === bulb.id}
              onAddToCart={onAddToCart}
              onQuickBuy={onQuickBuy}
              onOpenDetails={(b) => setModalBulb(b)}
            />
          ))}
        </div>

      </div>

      {/* Specifications Details Modal */}
      {modalBulb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl card-glass p-6 sm:p-8 rounded-2xl border border-zinc-700 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded bg-sky-500 text-zinc-950 font-black text-xs font-mono">
                    {modalBulb.socketCode}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-sky-300 text-xs font-bold">
                    6000K Diamond White
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 text-xs font-bold border border-emerald-500/30">
                    $30 / Pair
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-2">
                  {modalBulb.name}
                </h3>
              </div>
              
              <button
                onClick={() => setModalBulb(null)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Description */}
            <p className="text-sm text-zinc-300 leading-relaxed">
              {modalBulb.description[currentLang]}
            </p>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs">
              <div>
                <span className="text-zinc-500 block uppercase font-mono text-[10px]">Brightness</span>
                <span className="font-bold text-sky-300">{modalBulb.lumens}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase font-mono text-[10px]">Color Temp</span>
                <span className="font-bold text-white">{modalBulb.colorTemp}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase font-mono text-[10px]">Cooling System</span>
                <span className="font-bold text-zinc-200">{modalBulb.cooling}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase font-mono text-[10px]">Lifespan</span>
                <span className="font-bold text-zinc-200">{modalBulb.lifespan}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase font-mono text-[10px]">Operating Voltage</span>
                <span className="font-bold text-zinc-200">{modalBulb.voltage}</span>
              </div>
              <div>
                <span className="text-zinc-500 block uppercase font-mono text-[10px]">Waterproof</span>
                <span className="font-bold text-emerald-400">{modalBulb.waterproof}</span>
              </div>
            </div>

            {/* Features List */}
            <div className="space-y-2">
              <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400">
                Key Engineering Features:
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-zinc-300">
                {modalBulb.features[currentLang].map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fitment Notes */}
            <div className="p-3.5 rounded-xl bg-sky-950/20 border border-sky-500/30 text-xs space-y-1">
              <span className="font-bold text-sky-300">Popular Fitment:</span>
              <p className="text-zinc-300">
                {modalBulb.popularVehicles.join(' • ')}
              </p>
            </div>

            {/* Modal Bottom Actions */}
            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-zinc-800">
              <div className="text-xs text-zinc-400">
                Price: <strong className="text-white text-base">$30</strong> (Pair of 2 bulbs)
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    onAddToCart(modalBulb);
                    setModalBulb(null);
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center gap-2 transition-colors border border-zinc-700"
                >
                  <ShoppingBag className="w-4 h-4 text-sky-400" />
                  <span>{t.addToCart}</span>
                </button>
                <button
                  onClick={() => {
                    onQuickBuy(modalBulb);
                    setModalBulb(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-lg"
                >
                  <span>Order on Cash App</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
