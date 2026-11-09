import React, { useState, useEffect } from 'react';
import { 
  X, 
  ExternalLink, 
  Copy, 
  Check, 
  Mail, 
  Phone, 
  Truck, 
  MapPin, 
  ShieldCheck, 
  AlertCircle,
  MessageSquare,
  Camera,
  FileCheck2,
  Send,
  Sparkles,
  Zap,
  Award,
  Gift
} from 'lucide-react';
import { CartItem, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';
import { 
  getLoyaltyState, 
  recordLoyaltyOrder, 
  REPEAT_BUYER_DISCOUNT_PER_PAIR, 
  REPEAT_BUYER_BONUS_ITEM,
  LoyaltyState, 
  subscribeToLoyaltyUpdates 
} from '../utils/loyaltyStorage';

interface CashAppOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  currentLang: LanguageCode;
}

export const CashAppOrderModal: React.FC<CashAppOrderModalProps> = ({
  isOpen,
  onClose,
  items,
  currentLang,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [deliveryMethod, setDeliveryMethod] = useState<'shipping' | 'pickup'>('shipping');
  const [copiedCashTag, setCopiedCashTag] = useState(false);
  const [copiedConfirmation, setCopiedConfirmation] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedFullTemplate, setCopiedFullTemplate] = useState(false);
  const [copiedMemo, setCopiedMemo] = useState(false);
  const [loyalty, setLoyalty] = useState<LoyaltyState>(getLoyaltyState());

  useEffect(() => {
    setLoyalty(getLoyaltyState());
    return subscribeToLoyaltyUpdates(setLoyalty);
  }, []);

  // Persistent confirmation number per checkout modal session
  const [confirmationNumber] = useState(() => {
    const randomSixDigit = Math.floor(100000 + Math.random() * 900000);
    return `LED-${randomSixDigit}`;
  });

  if (!isOpen) return null;

  const totalPairs = items.reduce((sum, item) => sum + item.quantity, 0) || 1;
  const bulbsSubtotal = items.reduce((sum, item) => sum + item.quantity * item.bulb.price, 0) || (totalPairs * 40);
  const loyaltyDiscount = loyalty.isRepeatBuyer ? totalPairs * REPEAT_BUYER_DISCOUNT_PER_PAIR : 0;
  // Free Shipping! Nationwide tracked shipping is $0.00 (included in the price)
  const shippingCost = 0;
  const finalTotal = Math.max(0, (totalPairs * 40) - loyaltyDiscount);

  const itemSummary = items.length > 0 
    ? items.map(i => `${i.quantity}x ${i.bulb.socketCode}`).join(', ') 
    : '1x Pair (Select Socket)';

  // Build the Cash App Note memo
  const cashAppMemoText = `Conf #${confirmationNumber} | ${itemSummary} | $${finalTotal} Total ${
    loyalty.isRepeatBuyer ? '(VIP Repeat Driver -$5/pr)' : ''
  } | ${deliveryMethod === 'shipping' ? 'Free Tracked Shipping' : 'Chicago Local Pickup'}`;

  // Complete email body template to LEDHeadLightsChicago@Gmail.Com
  const emailSubject = `Order Shipping Processing - Confirmation #${confirmationNumber} - ${itemSummary}`;
  
  const emailBodyText = `Order Shipping Processing Details:
=====================================================
Website Confirmation Number: ${confirmationNumber}
Total Amount Paid: $${finalTotal}.00 (via Cash App $${OWNER_CONTACT.cashAppHandle})
Items Ordered: ${itemSummary} (6000K Diamond White Mini LEDs)
VIP Repeat Driver Status: ${loyalty.isRepeatBuyer ? `ACTIVE ($${loyaltyDiscount}.00 Loyalty Discount Applied + ${REPEAT_BUYER_BONUS_ITEM} Included)` : 'Standard Customer'}
Fulfillment: ${deliveryMethod === 'shipping' ? 'FREE Tracked Nationwide Shipping ($0.00)' : 'Chicago Local Pickup ($0.00)'}
Guarantees: 100% Customer Satisfaction Guarantee & Free Replacement Included!

CUSTOMER SHIPPING PROCESSING DETAILS:
-----------------------------------------------------
1. Full Name: [Please enter your full name]
2. Shipping Address: [Please enter street, city, state, zip]
3. Cash App Username (Sent from): [Please enter your Cash App $Username]
4. Phone Number: [Please enter phone number for tracking SMS]
5. Vehicle Year/Make/Model: [e.g. 2018 Toyota Camry Low Beam]

* ATTACHED SCREENSHOT:
I have attached the screenshot of website confirmation #${confirmationNumber} and payment receipt for shipping processing.

Thank you!`;

  const handleCopyCashTag = () => {
    navigator.clipboard.writeText(OWNER_CONTACT.cashTag);
    setCopiedCashTag(true);
    setTimeout(() => setCopiedCashTag(false), 2000);
  };

  const handleCopyConfirmationNumber = () => {
    navigator.clipboard.writeText(confirmationNumber);
    setCopiedConfirmation(true);
    setTimeout(() => setCopiedConfirmation(false), 2000);
  };

  const handleCopyTargetEmail = () => {
    navigator.clipboard.writeText(OWNER_CONTACT.orderEmail);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyFullEmailTemplate = () => {
    recordLoyaltyOrder(confirmationNumber, itemSummary, finalTotal);
    navigator.clipboard.writeText(`To: ${OWNER_CONTACT.orderEmail}\nSubject: ${emailSubject}\n\n${emailBodyText}`);
    setCopiedFullTemplate(true);
    setTimeout(() => setCopiedFullTemplate(false), 2500);
  };

  const handleCopyMemo = () => {
    navigator.clipboard.writeText(cashAppMemoText);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  const handleOpenEmailClient = () => {
    recordLoyaltyOrder(confirmationNumber, itemSummary, finalTotal);
    const subject = encodeURIComponent(emailSubject);
    const body = encodeURIComponent(emailBodyText);
    window.location.href = `mailto:${OWNER_CONTACT.orderEmail}?subject=${subject}&body=${body}`;
  };

  const handleSmsOrder = () => {
    recordLoyaltyOrder(confirmationNumber, itemSummary, finalTotal);
    const body = encodeURIComponent(
      `Hi Matt! Confirmation #${confirmationNumber}. Order for ${itemSummary} ($${finalTotal} via Cash App $${OWNER_CONTACT.cashAppHandle}${loyalty.isRepeatBuyer ? ' VIP Repeat Driver' : ''}). Please reply for my shipping address & screenshot!`
    );
    window.location.href = `sms:${OWNER_CONTACT.phoneRaw}?body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl card-glass rounded-2xl border border-zinc-700 shadow-2xl p-4 sm:p-6 md:p-8 my-auto max-h-[94vh] overflow-y-auto space-y-4 sm:space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-zinc-800">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-bold text-xs flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" />
                Fast 1-Click Checkout
              </span>
              <span className="px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                $40 Flat Pair • FREE Shipping
              </span>
              <span className="px-2 py-0.5 rounded bg-sky-950/80 text-sky-300 text-xs font-bold border border-sky-500/30">
                Customer Satisfaction Guarantee & Free Replacement!
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-2">
              Order via Cash App (${OWNER_CONTACT.cashAppHandle})
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              $40 Flat per pair • 100% FREE Tracked Shipping (7-14 Business Days) • Customer Satisfaction Guarantee & Free Replacement Included!
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Website Order Confirmation Number Banner */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-sky-950/60 via-zinc-900 to-emerald-950/50 border border-sky-500/40 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-xs uppercase tracking-wider font-bold text-sky-400">
                  Your Official Website Confirmation Number:
                </span>
              </div>
              <div className="text-2xl sm:text-3xl font-black text-white font-mono tracking-wider">
                {confirmationNumber}
              </div>
              <p className="text-[11px] text-zinc-300 flex items-center gap-1.5 pt-0.5">
                <Camera className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span><strong>Take a screenshot of this screen now!</strong> Attach it to your email, WhatsApp, or text.</span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyConfirmationNumber}
                className="w-full sm:w-auto px-3.5 py-2 rounded-xl bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-mono font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-sky-500/40"
              >
                {copiedConfirmation ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedConfirmation ? 'Copied!' : `Copy ${confirmationNumber}`}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Order Items & Fulfillment Choice */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400">Selected Bulbs</span>
              <div className="text-base font-bold text-white mt-0.5">
                {itemSummary}
              </div>
              <span className="text-xs text-zinc-400">
                {totalPairs} {totalPairs === 1 ? 'pair' : 'pairs'} × $40 flat = <strong className="text-white">${bulbsSubtotal}</strong>
              </span>
            </div>

            {/* Delivery Method Toggle */}
            <div className="flex w-full sm:w-auto rounded-lg bg-zinc-950 p-1 border border-zinc-800">
              <button
                type="button"
                onClick={() => setDeliveryMethod('shipping')}
                className={`flex-1 sm:flex-initial justify-center px-3 py-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
                  deliveryMethod === 'shipping'
                    ? 'bg-sky-500 text-zinc-950 shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Truck className="w-3.5 h-3.5" />
                <span>FREE Shipping ($0)</span>
              </button>
              <button
                type="button"
                onClick={() => setDeliveryMethod('pickup')}
                className={`flex-1 sm:flex-initial justify-center px-3 py-2 rounded-md text-xs font-bold flex items-center gap-1.5 transition-all ${
                  deliveryMethod === 'pickup'
                    ? 'bg-emerald-500 text-zinc-950 shadow'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <MapPin className="w-3.5 h-3.5" />
                <span>Chicago Pickup ($0)</span>
              </button>
            </div>
          </div>

          {/* Pricing Breakdown: $40 flat per pair + Free Shipping + Satisfaction Guarantee */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-2 text-xs">
            <div className="flex justify-between text-zinc-300">
              <span>LED Headlight Bulbs Subtotal ({totalPairs} pair{totalPairs > 1 ? 's' : ''} × $40.00 flat):</span>
              <span className="font-mono font-bold">${bulbsSubtotal}.00</span>
            </div>

            {loyalty.isRepeatBuyer && (
              <>
                <div className="flex justify-between text-amber-300 font-bold bg-amber-500/15 p-2 rounded-lg border border-amber-500/30">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-amber-400 shrink-0" />
                    VIP Repeat Buyer Loyalty Discount (-${REPEAT_BUYER_DISCOUNT_PER_PAIR}/pair):
                  </span>
                  <span className="font-mono text-sm">-${loyaltyDiscount}.00</span>
                </div>
                <div className="flex justify-between text-amber-300 text-[11px] px-1">
                  <span className="flex items-center gap-1.5 font-semibold">
                    <Gift className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    Returning Driver Gift:
                  </span>
                  <span className="font-mono font-bold text-emerald-400 uppercase">FREE T10 LED Pair Included</span>
                </div>
              </>
            )}

            <div className="flex justify-between text-emerald-400">
              <span className="flex items-center gap-1.5 font-bold">
                <Truck className="w-3.5 h-3.5 text-emerald-400" />
                Tracked Nationwide Shipping (7-14 Business Days):
              </span>
              <span className="font-mono font-bold uppercase">FREE ($0.00)</span>
            </div>
            <div className="flex justify-between text-sky-400">
              <span className="flex items-center gap-1.5 font-bold">
                <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
                Customer Satisfaction Guarantee & Free Replacement:
              </span>
              <span className="font-mono font-bold uppercase">100% INCLUDED</span>
            </div>
            <div className="pt-2 border-t border-zinc-800 flex justify-between items-baseline text-sm">
              <div>
                <span className="font-bold text-white uppercase tracking-wider block">Total Due via Cash App:</span>
                {loyalty.isRepeatBuyer && (
                  <span className="text-[11px] text-emerald-400 font-semibold">VIP Repeat Pricing: $35 flat per pair</span>
                )}
              </div>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                ${finalTotal}.00
              </span>
            </div>
          </div>
        </div>

        {/* Step 1: Send Payment on Cash App */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                Step 1: Pay ${finalTotal} on Cash App
              </span>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="text-xl sm:text-2xl font-black text-white font-mono break-all">
                  ${OWNER_CONTACT.cashAppHandle}
                </span>
                <button
                  type="button"
                  onClick={handleCopyCashTag}
                  className="px-2.5 py-1 rounded-lg bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 text-xs font-sans font-bold flex items-center gap-1 transition-colors border border-emerald-500/40"
                  title="Copy CashTag"
                >
                  {copiedCashTag ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCashTag ? 'Copied!' : 'Copy $muahz26'}</span>
                </button>
              </div>
              <p className="text-xs text-zinc-300">
                Account Holder: <strong className="text-white">Matt</strong> ({OWNER_CONTACT.phone})
              </p>
            </div>

            <a
              href={`${OWNER_CONTACT.cashAppUrl}/${finalTotal}`}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/30 flex items-center justify-center gap-2 shrink-0 group"
            >
              <span>Pay ${finalTotal} on Cash App</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Step 2 (Instant & Frictionless): Send Details & Screenshot via Email, WhatsApp, or Text */}
        <div className="p-4 sm:p-5 rounded-2xl bg-amber-500/10 border-2 border-amber-500/40 space-y-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
              <Send className="w-5 h-5" />
            </div>
            <div className="space-y-1 flex-1">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-mono text-[10px] font-bold uppercase tracking-wider">
                  Instant Verification
                </span>
                <span className="text-xs text-amber-200 font-bold">
                  Fast & Smooth Order Shipping Processing
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-black text-white font-heading">
                Step 2: Send Payment Confirmation & Shipping Address
              </h4>
              <p className="text-xs text-zinc-300">
                After finishing payment on Cash App, send an email to <strong className="text-amber-300 font-mono">{OWNER_CONTACT.orderEmail}</strong> or contact Matt directly on WhatsApp or Text!
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-amber-500/30 text-xs text-zinc-200 space-y-2">
            <p className="font-bold text-amber-200 flex items-center gap-1.5">
              <AlertCircle className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Please send these details for immediate shipping dispatch:</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] sm:text-xs text-zinc-300">
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                • <strong className="text-white">Full Name</strong>
              </div>
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                • <strong className="text-white">Shipping Address</strong> (Street, City, State, ZIP)
              </div>
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                • <strong className="text-white">Cash App Username</strong> (Where payment was made)
              </div>
              <div className="p-2 rounded-lg bg-zinc-900/80 border border-zinc-800">
                • <strong className="text-white">Phone Number</strong> (for USPS tracking text)
              </div>
            </div>
            <p className="text-[11px] text-amber-300 pt-1 font-semibold flex items-center gap-1">
              <Camera className="w-3.5 h-3.5 shrink-0" />
              <span>Include your Confirmation Number <strong>#{confirmationNumber}</strong> and attach a screenshot of this screen & Cash App receipt.</span>
            </p>
          </div>

          {/* Instant 1-Click Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={handleOpenEmailClient}
              className="py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-amber-500/20 group"
            >
              <Mail className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              <span>Send Order Email</span>
            </button>

            <a
              href={OWNER_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="py-3 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-emerald-600/20"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send on WhatsApp</span>
            </a>

            <button
              type="button"
              onClick={handleSmsOrder}
              className="py-3 px-3 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-black text-xs flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-sky-600/20"
            >
              <Phone className="w-4 h-4" />
              <span>Send Text / SMS</span>
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-1 text-xs">
            <button
              type="button"
              onClick={handleCopyFullEmailTemplate}
              className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-zinc-700"
            >
              {copiedFullTemplate ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copiedFullTemplate ? 'Order Template Copied!' : 'Copy Order Text Template'}</span>
            </button>

            <button
              type="button"
              onClick={handleCopyTargetEmail}
              className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 text-xs font-semibold flex items-center gap-1.5 transition-colors border border-zinc-700"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-400" />}
              <span>{copiedEmail ? 'Email Copied!' : `Copy ${OWNER_CONTACT.orderEmail}`}</span>
            </button>
          </div>
        </div>

        {/* Social Channels & Contact Links */}
        <div className="pt-3 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-zinc-500 font-semibold">Connect with Matt:</span>
            <a
              href={OWNER_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="text-emerald-400 hover:underline font-bold flex items-center gap-1"
            >
              WhatsApp
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={OWNER_CONTACT.tikTokUrl}
              target="_blank"
              rel="noreferrer"
              className="text-pink-400 hover:underline font-bold flex items-center gap-1"
            >
              TikTok
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={OWNER_CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:underline font-bold flex items-center gap-1"
            >
              Instagram
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a href={`tel:${OWNER_CONTACT.phoneRaw}`} className="text-sky-400 hover:underline font-bold">
              Call/Text: {OWNER_CONTACT.phone}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
