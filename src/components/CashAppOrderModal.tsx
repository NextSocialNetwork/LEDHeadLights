import React, { useState } from 'react';
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
  QrCode, 
  AlertCircle,
  MessageSquare
} from 'lucide-react';
import { BulbListing, CartItem, LanguageCode, OrderForm } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

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
  const [copiedMemo, setCopiedMemo] = useState(false);

  const [formData, setFormData] = useState<OrderForm>({
    name: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    vehicleNotes: '',
  });

  if (!isOpen) return null;

  const totalPairs = items.reduce((sum, item) => sum + item.quantity, 0) || 1;
  const bulbsSubtotal = items.reduce((sum, item) => sum + item.quantity * item.bulb.price, 0) || 30;
  const shippingCost = deliveryMethod === 'shipping' ? OWNER_CONTACT.shippingCost : 0;
  const finalTotal = bulbsSubtotal + shippingCost;

  const itemSummary = items.length > 0 
    ? items.map(i => `${i.quantity}x ${i.bulb.socketCode}`).join(', ') 
    : '1x Pair (Select Socket)';

  // Build the Cash App Note memo
  const cashAppMemoText = `LED Headlights: ${itemSummary} | Name: ${formData.name || '[Your Name]'} | Ship: ${
    deliveryMethod === 'shipping'
      ? `${formData.street || ''}, ${formData.city || ''} ${formData.state || ''} ${formData.zip || ''}`
      : 'Chicago Local Pickup'
  } | Ph: ${formData.phone || ''}`;

  const handleCopyCashTag = () => {
    navigator.clipboard.writeText(OWNER_CONTACT.cashTag);
    setCopiedCashTag(true);
    setTimeout(() => setCopiedCashTag(false), 2000);
  };

  const handleCopyMemo = () => {
    navigator.clipboard.writeText(cashAppMemoText);
    setCopiedMemo(true);
    setTimeout(() => setCopiedMemo(false), 2500);
  };

  const handleEmailOrder = () => {
    const subject = encodeURIComponent(`Order for ${itemSummary} - Total $${finalTotal}`);
    const body = encodeURIComponent(
      `Hello Mantas,\n\nI just placed an order for LED Headlights.\n\nItems: ${itemSummary}\nTotal Amount: $${finalTotal} (Paid via Cash App $${OWNER_CONTACT.cashAppHandle})\nDelivery: ${deliveryMethod === 'shipping' ? 'Nationwide Shipping ($15)' : 'Chicago Local Pickup'}\n\nCustomer Details:\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nAddress: ${formData.street}, ${formData.city}, ${formData.state} ${formData.zip}\nVehicle: ${formData.vehicleNotes}\n\nThank you!`
    );
    window.location.href = `mailto:${OWNER_CONTACT.email}?subject=${subject}&body=${body}`;
  };

  const handleSmsOrder = () => {
    const body = encodeURIComponent(
      `Hi Mantas! Order for ${itemSummary} ($${finalTotal}). Name: ${formData.name}. Address: ${formData.street}, ${formData.city} ${formData.zip}. Sent via Cash App to $${OWNER_CONTACT.cashAppHandle}`
    );
    window.location.href = `sms:${OWNER_CONTACT.phoneRaw}?body=${body}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl card-glass rounded-2xl border border-zinc-700 shadow-2xl p-4 sm:p-6 md:p-8 my-auto max-h-[92vh] overflow-y-auto space-y-4 sm:space-y-6">
        
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-3 sm:pb-4 border-b border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 font-mono font-bold text-xs">
                Official Cash App Checkout
              </span>
              <span className="px-2 py-0.5 rounded bg-zinc-800 text-sky-300 text-xs font-semibold">
                6000K Mini LEDs
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading mt-2">
              Order via Cash App (${OWNER_CONTACT.cashAppHandle})
            </h3>
            <p className="text-xs text-zinc-400 mt-1">
              $30 each pair • $15 Flat-Rate Nationwide Shipping or Free Chicago Local Pickup
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800 shrink-0"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step 1: Order Summary & Fulfillment Choice */}
        <div className="space-y-3 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800">
            <div>
              <span className="text-[10px] uppercase font-bold text-zinc-400">Selected Bulbs</span>
              <div className="text-base font-bold text-white mt-0.5">
                {itemSummary}
              </div>
              <span className="text-xs text-zinc-400">
                {totalPairs} {totalPairs === 1 ? 'pair' : 'pairs'} × $30 = <strong className="text-white">${bulbsSubtotal}</strong>
              </span>
            </div>

            {/* Delivery Method Toggle - Full width on mobile */}
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
                <span>Shipping (+$15)</span>
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

          {/* Pricing Calculation Breakdown */}
          <div className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/60 border border-zinc-800/80 space-y-1.5 sm:space-y-2 text-xs">
            <div className="flex justify-between text-zinc-300">
              <span>LED Headlight Bulbs Subtotal ({totalPairs} pair{totalPairs > 1 ? 's' : ''}):</span>
              <span className="font-mono font-bold">${bulbsSubtotal}.00</span>
            </div>
            <div className="flex justify-between text-zinc-300">
              <span>Fulfillment ({deliveryMethod === 'shipping' ? 'Nationwide Express Shipping' : 'Chicago In-Person Pickup'}):</span>
              <span className="font-mono font-bold text-sky-400">
                {deliveryMethod === 'shipping' ? '+$15.00' : '$0.00 (Free)'}
              </span>
            </div>
            <div className="pt-2 border-t border-zinc-800 flex justify-between items-baseline text-sm">
              <span className="font-bold text-white uppercase tracking-wider">Total Due via Cash App:</span>
              <span className="text-xl sm:text-2xl font-black text-emerald-400 font-mono">
                ${finalTotal}.00
              </span>
            </div>
          </div>
        </div>

        {/* Step 2: Cash App Link & Direct Pay Button */}
        <div className="p-4 sm:p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-3.5 sm:space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
            <div className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-400" />
                Step 1: Send ${finalTotal} on Cash App
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
                Account Holder: <strong className="text-white">Mantas</strong> ({OWNER_CONTACT.phone})
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

        {/* Step 3: Shipping & Contact Form */}
        <div className="space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
            <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-300">
              Step 2: Enter Delivery Details for Tracking & Receipt
            </h4>
            <span className="text-[11px] text-zinc-400">
              Or text directly to (312) 385-9229
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
            <input
              type="text"
              placeholder={t.orderFormName + ' *'}
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
            />
            <input
              type="tel"
              placeholder={t.orderFormPhone + ' (for tracking text) *'}
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
            />
          </div>

          {deliveryMethod === 'shipping' && (
            <div className="space-y-2.5 sm:space-y-3 pt-1">
              <input
                type="text"
                placeholder={t.orderFormAddress + ' *'}
                value={formData.street}
                onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3">
                <input
                  type="text"
                  placeholder={t.orderFormCity}
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder={t.orderFormState}
                  value={formData.state}
                  onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder={t.orderFormZip}
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
                />
              </div>
            </div>
          )}

          <input
            type="text"
            placeholder={t.orderFormVehicle + ' (e.g. 2017 Honda Civic Low Beam)'}
            value={formData.vehicleNotes}
            onChange={(e) => setFormData({ ...formData, vehicleNotes: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 text-white text-xs placeholder-zinc-500 focus:outline-none"
          />
        </div>

        {/* Quick Send & Copy Buttons */}
        <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
          <div className="text-xs text-zinc-300">
            <strong>Easy 1-Click Notifications to Mantas:</strong>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
            <button
              type="button"
              onClick={handleCopyMemo}
              className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-zinc-700"
            >
              {copiedMemo ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-sky-400" />}
              <span>{copiedMemo ? 'Memo Copied!' : 'Copy Cash App Memo'}</span>
            </button>

            <button
              type="button"
              onClick={handleSmsOrder}
              className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-zinc-700"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
              <span>Text to (312) 385-9229</span>
            </button>

            <button
              type="button"
              onClick={handleEmailOrder}
              className="py-2.5 px-3 rounded-xl bg-zinc-800 hover:bg-zinc-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors border border-zinc-700"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>Email Mantas</span>
            </button>
          </div>
        </div>

        {/* Footer Contact Reminder */}
        <div className="pt-2 border-t border-zinc-800 flex flex-wrap items-center justify-between text-xs text-zinc-400 gap-2">
          <span>Need help or have questions?</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${OWNER_CONTACT.phoneRaw}`} className="text-sky-400 hover:underline font-bold">
              Call/Text: {OWNER_CONTACT.phone}
            </a>
            <a href={`mailto:${OWNER_CONTACT.email}`} className="text-sky-400 hover:underline">
              {OWNER_CONTACT.email}
            </a>
          </div>
        </div>

      </div>
    </div>
  );
};
