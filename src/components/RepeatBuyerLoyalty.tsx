import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Gift, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw, 
  Clock, 
  ShieldCheck, 
  Tag, 
  Flame,
  Truck,
  Zap,
  Check,
  ExternalLink
} from 'lucide-react';
import { 
  LoyaltyState, 
  getLoyaltyState, 
  toggleManualRepeatBuyer, 
  recordLoyaltyOrder, 
  resetLoyaltyState, 
  subscribeToLoyaltyUpdates,
  REPEAT_BUYER_DISCOUNT_PER_PAIR,
  REPEAT_BUYER_BONUS_ITEM 
} from '../utils/loyaltyStorage';
import { LanguageCode } from '../types';
import { OWNER_CONTACT } from '../data/bulbsData';

interface RepeatBuyerLoyaltyProps {
  currentLang: LanguageCode;
  onOpenCashAppModal: () => void;
}

export const RepeatBuyerLoyalty: React.FC<RepeatBuyerLoyaltyProps> = ({
  onOpenCashAppModal,
}) => {
  const [loyalty, setLoyalty] = useState<LoyaltyState>(getLoyaltyState());
  const [pastConfInput, setPastConfInput] = useState('');
  const [confFeedback, setConfFeedback] = useState<string | null>(null);

  useEffect(() => {
    // Initial sync
    setLoyalty(getLoyaltyState());

    // Subscribe to changes from anywhere in the app
    const unsubscribe = subscribeToLoyaltyUpdates((updated) => {
      setLoyalty(updated);
    });

    return unsubscribe;
  }, []);

  const handleToggleStatus = () => {
    const next = toggleManualRepeatBuyer();
    setLoyalty(next);
  };

  const handleVerifyConfirmation = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = pastConfInput.trim().toUpperCase();
    if (!trimmed) return;

    if (trimmed.length < 4) {
      setConfFeedback('Please enter a valid confirmation number (e.g., LED-123456).');
      return;
    }

    // Record verified order
    const next = recordLoyaltyOrder(trimmed, '1x Pair Past Order (Verified)', 40);
    setLoyalty(next);
    setConfFeedback(`Success! Confirmation #${trimmed} verified. VIP Repeat Driver perks activated!`);
    setPastConfInput('');
    setTimeout(() => setConfFeedback(null), 4000);
  };

  const handleReset = () => {
    const next = resetLoyaltyState();
    setLoyalty(next);
    setConfFeedback('Loyalty status reset for new customer simulation.');
    setTimeout(() => setConfFeedback(null), 3000);
  };

  return (
    <section id="loyalty" className="py-16 sm:py-24 bg-gradient-to-b from-zinc-950 via-zinc-900/60 to-zinc-950 border-t border-zinc-800/80 relative overflow-hidden">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 sm:w-[650px] h-96 sm:h-[450px] bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30 shadow-lg">
            <Award className="w-4 h-4 text-amber-400" />
            <span>REPEAT BUYER REWARDS & VIP PERKS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            Returning Driver Loyalty Program
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            We value drivers who trust our 6000K Diamond White Mini LEDs. Ordered from Matt before? Your browser automatically recognizes you with an exclusive <strong className="text-emerald-400">$5 instant discount</strong> and a <strong className="text-amber-300">free bonus LED set</strong> on every subsequent order!
          </p>
        </div>

        {/* Dynamic Status Dashboard Card */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-zinc-900/90 border border-zinc-800 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Header Banner */}
          <div className={`px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b ${
            loyalty.isRepeatBuyer 
              ? 'bg-gradient-to-r from-emerald-950/80 via-teal-950/60 to-emerald-950/80 border-emerald-500/40' 
              : 'bg-zinc-950/80 border-zinc-800'
          }`}>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-lg ${
                loyalty.isRepeatBuyer 
                  ? 'bg-gradient-to-br from-amber-400 to-emerald-500 text-zinc-950 shadow-lg shadow-emerald-500/30' 
                  : 'bg-zinc-800 text-zinc-400'
              }`}>
                {loyalty.isRepeatBuyer ? <Award className="w-5 h-5" /> : <Clock className="w-5 h-5" />}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-white uppercase tracking-wider font-heading">
                    {loyalty.isRepeatBuyer ? 'VIP Returning Driver Tier' : 'First-Time Driver Tier'}
                  </span>
                  <span className={`px-2 py-0.5 rounded text-[10px] font-extrabold uppercase font-mono ${
                    loyalty.isRepeatBuyer 
                      ? 'bg-emerald-500 text-zinc-950' 
                      : 'bg-zinc-800 text-zinc-400 border border-zinc-700'
                  }`}>
                    {loyalty.isRepeatBuyer ? 'Discount Unlocked' : 'Standard Pricing'}
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  {loyalty.isRepeatBuyer 
                    ? `Previous Orders Tracked in Browser: ${loyalty.orderCount} order${loyalty.orderCount !== 1 ? 's' : ''}`
                    : 'Place your first order or link your past confirmation to unlock repeat perks.'}
                </p>
              </div>
            </div>

            {/* Quick Toggle / Simulated Order */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleToggleStatus}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1.5 ${
                  loyalty.isRepeatBuyer
                    ? 'bg-zinc-800 hover:bg-zinc-700 text-zinc-200 border border-zinc-700'
                    : 'bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black shadow-lg shadow-emerald-500/25'
                }`}
              >
                {loyalty.isRepeatBuyer ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>VIP Active (Click to Toggle)</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>I Ordered Before (Activate VIP)</span>
                  </>
                )}
              </button>

              {loyalty.isRepeatBuyer && (
                <button
                  onClick={handleReset}
                  title="Reset counter (simulation)"
                  className="p-1.5 rounded-lg bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-zinc-200 transition-colors border border-zinc-700"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Perks Grid */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              
              {/* Perk 1: $5 Discount */}
              <div className={`p-4 rounded-xl border transition-all ${
                loyalty.isRepeatBuyer 
                  ? 'bg-emerald-950/30 border-emerald-500/40 shadow-lg shadow-emerald-950/50' 
                  : 'bg-zinc-950/60 border-zinc-800'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                  <Tag className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-400 font-mono">
                  ${REPEAT_BUYER_DISCOUNT_PER_PAIR} OFF Per Pair
                </div>
                <div className="text-lg font-black text-white font-heading mt-0.5">
                  $35 Flat Repeat Price
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Automatic $5 credit deducted from each pair of H1, H3, H4, H7, 9005, 9006, H8, H11.
                </p>
              </div>

              {/* Perk 2: Free Gift */}
              <div className={`p-4 rounded-xl border transition-all ${
                loyalty.isRepeatBuyer 
                  ? 'bg-amber-950/30 border-amber-500/40 shadow-lg shadow-amber-950/50' 
                  : 'bg-zinc-950/60 border-zinc-800'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-amber-500/20 text-amber-400 flex items-center justify-center mb-3">
                  <Gift className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 font-mono">
                  FREE Bonus Gift
                </div>
                <div className="text-lg font-black text-white font-heading mt-0.5">
                  Pair of T10 LEDs
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Free pair of matching 6000K LED T10 interior or license plate bulbs packed into your order box!
                </p>
              </div>

              {/* Perk 3: Priority Dispatch */}
              <div className={`p-4 rounded-xl border transition-all ${
                loyalty.isRepeatBuyer 
                  ? 'bg-sky-950/30 border-sky-500/40 shadow-lg shadow-sky-950/50' 
                  : 'bg-zinc-950/60 border-zinc-800'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center mb-3">
                  <Truck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-sky-400 font-mono">
                  Priority Dispatch
                </div>
                <div className="text-lg font-black text-white font-heading mt-0.5">
                  Same-Day Packing
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Fast-track packing at Matt’s Chicago lab with priority USPS tracking upload.
                </p>
              </div>

              {/* Perk 4: Fast Track Free Replacement */}
              <div className={`p-4 rounded-xl border transition-all ${
                loyalty.isRepeatBuyer 
                  ? 'bg-purple-950/30 border-purple-500/40 shadow-lg shadow-purple-950/50' 
                  : 'bg-zinc-950/60 border-zinc-800'
              }`}>
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div className="text-xs font-bold uppercase tracking-wider text-purple-400 font-mono">
                  VIP Guarantee
                </div>
                <div className="text-lg font-black text-white font-heading mt-0.5">
                  Instant Replacement
                </div>
                <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                  Lifetime repeat driver warranty with zero-question immediate replacement if needed.
                </p>
              </div>

            </div>

            {/* Verification Form for Past Confirmation Number */}
            <div className="p-4 sm:p-5 rounded-xl bg-zinc-950/80 border border-zinc-800 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-white uppercase tracking-wider font-mono">
                    Already ordered from us before?
                  </span>
                </div>
                <p className="text-xs text-zinc-400">
                  Enter your previous website confirmation number (e.g. <span className="text-sky-300 font-mono font-semibold">LED-XXXXXX</span>) to claim returning driver status:
                </p>
              </div>

              <form onSubmit={handleVerifyConfirmation} className="flex items-center gap-2 max-w-md w-full">
                <input
                  type="text"
                  placeholder="e.g. LED-123456"
                  value={pastConfInput}
                  onChange={(e) => setPastConfInput(e.target.value)}
                  className="flex-1 bg-zinc-900 border border-zinc-700 focus:border-emerald-500 text-white px-3 py-2 rounded-xl text-xs font-mono uppercase tracking-wider outline-none placeholder:text-zinc-600"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs shrink-0 transition-colors"
                >
                  Verify
                </button>
              </form>
            </div>

            {confFeedback && (
              <div className="p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{confFeedback}</span>
              </div>
            )}

            {/* Past Orders History List if any exist */}
            {loyalty.orders.length > 0 && (
              <div className="space-y-2 pt-2 border-t border-zinc-800">
                <span className="text-[11px] uppercase font-bold text-zinc-400 font-mono">
                  Your Past Verified Orders ({loyalty.orders.length}):
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {loyalty.orders.map((ord, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-zinc-950/90 border border-zinc-800 flex items-center justify-between text-xs font-mono">
                      <div>
                        <span className="text-emerald-400 font-bold">{ord.confirmationNumber}</span>
                        <span className="text-zinc-400 text-[10px] block font-sans truncate max-w-[200px]">{ord.itemsSummary}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-zinc-300 font-bold">${ord.total}.00</span>
                        <span className="text-[10px] text-zinc-500 block">{ord.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Bottom Call to Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-zinc-800">
              <div>
                <span className="text-xs text-zinc-400 block">
                  Cash App Tag: <strong className="text-emerald-400 font-mono">${OWNER_CONTACT.cashAppHandle}</strong>
                </span>
                <span className="text-xs text-zinc-300">
                  {loyalty.isRepeatBuyer ? (
                    <span className="text-emerald-400 font-bold">
                      🎉 Your $5 Loyalty Discount & Bonus Gift will apply automatically in the Cash App modal!
                    </span>
                  ) : (
                    <span>Ready to order? All sockets in stock with 100% FREE Tracked Shipping.</span>
                  )}
                </span>
              </div>

              <button
                onClick={onOpenCashAppModal}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-400 hover:from-emerald-400 hover:to-teal-300 text-zinc-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-emerald-500/20 shrink-0"
              >
                <span>
                  {loyalty.isRepeatBuyer ? 'Order with VIP Loyalty Discount ($35 Flat)' : 'Order 6000K Bulbs ($40 Flat)'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
