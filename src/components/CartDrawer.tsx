import React from 'react';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  Truck, 
  MapPin, 
  ExternalLink, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { CartItem, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  cart: CartItem[];
  currentLang: LanguageCode;
  onUpdateQuantity: (socketId: string, quantity: number) => void;
  onRemoveItem: (socketId: string) => void;
  onProceedToCheckout: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  cart,
  currentLang,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const t = TRANSLATIONS[currentLang];
  if (!isOpen) return null;

  const totalPairs = cart.reduce((sum, item) => sum + item.quantity, 0);
  const bulbsSubtotal = cart.reduce((sum, item) => sum + item.quantity * item.bulb.price, 0);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-0 sm:pl-10">
        <div className="w-screen max-w-full sm:max-w-md bg-zinc-950 border-l border-zinc-800 flex flex-col justify-between shadow-2xl">
          
          {/* Header */}
          <div className="p-4 sm:p-6 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <ShoppingBag className="w-4 h-4" />
              </div>
              <h3 className="text-base sm:text-lg font-bold text-white font-heading">
                {t.cartTitle} ({totalPairs})
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="p-4 sm:p-6 flex-1 overflow-y-auto space-y-3.5 sm:space-y-4">
            {cart.length === 0 ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center mx-auto text-zinc-600">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <div className="space-y-1">
                  <p className="text-zinc-300 font-semibold">{t.cartEmpty}</p>
                  <p className="text-xs text-zinc-500">All Mini LED bulb sockets are $30 per pair.</p>
                </div>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-colors"
                >
                  Browse Bulbs
                </button>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.bulb.id}
                  className="p-3.5 sm:p-4 rounded-xl bg-zinc-900/90 border border-zinc-800 flex gap-3.5 items-start"
                >
                  <img
                    src={item.bulb.image}
                    onError={(e) => {
                      const target = e.currentTarget;
                      if (target.src !== '/images/headlight_pair.jpg') {
                        target.src = '/images/headlight_pair.jpg';
                      }
                    }}
                    alt={item.bulb.name}
                    className="w-16 h-16 rounded-lg object-cover bg-zinc-950 border border-zinc-800 shrink-0"
                  />

                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between">
                      <h4 className="text-xs font-bold text-white font-heading">
                        {item.bulb.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.bulb.id)}
                        className="text-zinc-500 hover:text-rose-400 transition-colors p-1"
                        title="Remove"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-sky-400 font-mono">
                      6000K Diamond White
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="text-sm font-black text-white font-mono">
                        ${item.bulb.price * item.quantity}
                        <span className="text-[10px] text-zinc-500 font-sans ml-1">($30/pair)</span>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 bg-zinc-950 px-2 py-1 rounded-lg border border-zinc-800">
                        <button
                          onClick={() => onUpdateQuantity(item.bulb.id, item.quantity - 1)}
                          className="text-zinc-400 hover:text-white p-0.5"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-3 h-3" />
                        </button>
                        <span className="text-xs font-bold font-mono text-white w-4 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.bulb.id, item.quantity + 1)}
                          className="text-zinc-400 hover:text-white p-0.5"
                        >
                          <Plus className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-zinc-800 space-y-4 bg-zinc-900/50">
              <div className="space-y-2 text-xs">
                <div className="flex justify-between text-zinc-300">
                  <span>{t.subtotal}:</span>
                  <span className="font-mono font-bold text-white">${bulbsSubtotal}.00</span>
                </div>
                <div className="flex justify-between text-zinc-400 text-[11px]">
                  <span>Shipping via Cash App:</span>
                  <span className="text-sky-400 font-medium">+$15 (or $0 Chicago pickup)</span>
                </div>
              </div>

              <button
                onClick={onProceedToCheckout}
                className="w-full py-3.5 px-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/20 flex items-center justify-center gap-2 group"
              >
                <span>Checkout on Cash App (${OWNER_CONTACT.cashAppHandle})</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[11px] text-zinc-400">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Orders confirmed directly by Mantas: (312) 385-9229</span>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};
