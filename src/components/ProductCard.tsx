import React, { useState } from 'react';
import { 
  Zap, 
  ShoppingBag, 
  Sparkles, 
  Check, 
  ExternalLink, 
  Info, 
  ChevronRight, 
  ShieldCheck, 
  Wind,
  CheckCircle2
} from 'lucide-react';
import { BulbListing, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

interface ProductCardProps {
  bulb: BulbListing;
  currentLang: LanguageCode;
  isSelected?: boolean;
  onAddToCart: (bulb: BulbListing) => void;
  onQuickBuy: (bulb: BulbListing) => void;
  onOpenDetails: (bulb: BulbListing) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  bulb,
  currentLang,
  isSelected,
  onAddToCart,
  onQuickBuy,
  onOpenDetails,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [addedAnimation, setAddedAnimation] = useState(false);

  const handleAdd = () => {
    onAddToCart(bulb);
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 1500);
  };

  return (
    <div 
      className={`card-glass rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 card-glass-hover ${
        isSelected ? 'ring-2 ring-sky-400 border-sky-400 bg-sky-950/20 shadow-xl shadow-sky-500/10' : 'border-zinc-800'
      }`}
    >
      {/* Product Image & Top Badges */}
      <div className="relative aspect-4/3 w-full overflow-hidden bg-zinc-900 group">
        <img
          src={bulb.image}
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src !== '/images/headlight_pair.jpg') {
              target.src = '/images/headlight_pair.jpg';
            }
          }}
          alt={bulb.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
          <span className="px-2.5 py-1 rounded-md text-[11px] font-black font-mono bg-sky-500 text-zinc-950 shadow-md">
            {bulb.socketCode}
          </span>
          <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-zinc-950/80 backdrop-blur-md text-sky-300 border border-sky-500/30">
            6000K
          </span>
        </div>

        <div className="absolute top-3 right-3 z-10">
          <span className="px-2 py-1 rounded-md text-[10px] font-bold bg-emerald-950/90 backdrop-blur-md text-emerald-400 border border-emerald-500/40">
            $35.00 / Pair
          </span>
        </div>

        {/* Bottom image overlay with beam type */}
        <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent flex items-center justify-between text-xs">
          <span className="text-zinc-300 font-medium">
            {bulb.beamType}
          </span>
          <span className="text-[10px] text-zinc-400 font-mono">
            {bulb.lumens}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
        
        {/* Title and Short description */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-white font-heading group-hover:text-sky-300 transition-colors">
              {bulb.name}
            </h3>
          </div>
          <p className="text-xs text-zinc-400 line-clamp-2 leading-relaxed">
            {bulb.description[currentLang]}
          </p>
        </div>

        {/* Key Features Bullet Pills */}
        <div className="space-y-1 text-xs text-zinc-300 pt-1">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">1:1 Mini direct plug & play design</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wind className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">12,000 RPM silent high-speed turbo fan</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-sky-400 shrink-0" />
            <span className="truncate">Canbus ready, zero error codes</span>
          </div>
        </div>

        {/* Price & Shipping Breakdown Callout */}
        <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800/90 flex items-center justify-between">
          <div>
            <div className="text-[10px] uppercase font-bold text-zinc-400">Pair Price</div>
            <div className="text-2xl font-black text-white font-heading leading-tight">
              $35.00
              <span className="text-xs font-normal text-zinc-400 ml-1">/ pair</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase font-bold text-sky-400">+ $10 Shipping (7-14 Days)</div>
            <div className="text-[11px] text-zinc-400">
              via Cash App <span className="text-emerald-400 font-mono">${OWNER_CONTACT.cashAppHandle}</span>
            </div>
          </div>
        </div>

        {/* Popular Fitment Examples */}
        <div className="text-[11px] text-zinc-400">
          <span className="text-zinc-500 font-medium">Common fit: </span>
          <span className="text-zinc-300 truncate block">
            {bulb.popularVehicles.slice(0, 3).join(', ')}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 space-y-2">
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleAdd}
              className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                addedAnimation
                  ? 'bg-emerald-500 text-zinc-950 font-black'
                  : 'bg-zinc-800 hover:bg-zinc-700 text-white border border-zinc-700'
              }`}
            >
              {addedAnimation ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4 text-sky-400" />
                  <span>{t.addToCart}</span>
                </>
              )}
            </button>

            <button
              onClick={() => onQuickBuy(bulb)}
              className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-950/50"
            >
              <span>Cash App Pay</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>

          <button
            onClick={() => onOpenDetails(bulb)}
            className="w-full py-1.5 text-[11px] text-zinc-400 hover:text-sky-300 font-medium flex items-center justify-center gap-1 transition-colors"
          >
            <Info className="w-3.5 h-3.5" />
            <span>{t.viewDetails} & Full Specifications</span>
          </button>
        </div>

      </div>
    </div>
  );
};
