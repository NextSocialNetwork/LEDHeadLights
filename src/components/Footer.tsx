import React from 'react';
import { 
  Zap, 
  Phone, 
  Mail, 
  MapPin, 
  ExternalLink, 
  Truck, 
  ShieldCheck, 
  Globe, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

interface FooterProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  onOpenCashAppModal: () => void;
  onOpenAiChat: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  currentLang,
  onSelectLang,
  onOpenCashAppModal,
  onOpenAiChat,
}) => {
  const t = TRANSLATIONS[currentLang];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-zinc-950 border-t border-zinc-800 text-zinc-400 text-xs">
      {/* Upper Direct Contact Banner */}
      <div className="bg-gradient-to-r from-sky-950/40 via-zinc-900 to-sky-950/40 border-b border-zinc-800 py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="card-glass p-5 rounded-2xl border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <Phone className="w-4 h-4" />
              <span>{t.phoneLabel}</span>
            </div>
            <a 
              href={`tel:${OWNER_CONTACT.phoneRaw}`} 
              className="text-white font-bold text-base hover:text-sky-400 transition-colors block"
            >
              {OWNER_CONTACT.phone}
            </a>
            <p className="text-[11px] text-zinc-400">
              Call or text Mantas anytime for bulb questions or Chicago pickup!
            </p>
          </div>

          <div className="card-glass p-5 rounded-2xl border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <Mail className="w-4 h-4" />
              <span>{t.emailLabel}</span>
            </div>
            <a 
              href={`mailto:${OWNER_CONTACT.email}`} 
              className="text-white font-bold text-sm hover:text-sky-400 transition-colors block truncate"
            >
              {OWNER_CONTACT.email}
            </a>
            <p className="text-[11px] text-zinc-400">
              Email your order details and shipping address directly to Mantas.
            </p>
          </div>

          <div className="card-glass p-5 rounded-2xl border-emerald-500/30 bg-emerald-950/20 space-y-2">
            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
              <ExternalLink className="w-4 h-4" />
              <span>{t.cashAppLabel}</span>
            </div>
            <a 
              href={OWNER_CONTACT.cashAppUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="text-emerald-300 font-black text-base hover:underline block font-mono"
            >
              ${OWNER_CONTACT.cashAppHandle}
            </a>
            <p className="text-[11px] text-zinc-400">
              Official payment link: <strong className="text-zinc-200">https://cash.app/$muahz26</strong>
            </p>
          </div>

          <div className="card-glass p-5 rounded-2xl border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
              <MapPin className="w-4 h-4" />
              <span>{t.locationLabel}</span>
            </div>
            <div className="text-white font-bold text-sm">
              Chicago, IL (Midwest USA)
            </div>
            <p className="text-[11px] text-zinc-400">
              Local in-person pickup available with cash or Cash App ($0 shipping).
            </p>
          </div>

        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-zinc-950">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider text-white font-heading">
                  {t.brandTitle}
                </span>
                <p className="text-xs text-sky-400 font-mono">
                  {OWNER_CONTACT.websiteDomain}
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Precision 6000K Diamond White Mini LED Headlight Bulbs engineered for maximum nocturnal clarity. All socket models (H1, H3, H4/9003/HB2, H7, 9005/HB5, H8, H11, and H12) in stock at $35.00 each pair with $10 shipping (7-14 Business Days) or Chicago local pickup.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <button
                onClick={onOpenCashAppModal}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
              >
                <span>Pay on Cash App</span>
                <ExternalLink className="w-3 h-3" />
              </button>
              <button
                onClick={onOpenAiChat}
                className="px-3.5 py-1.5 rounded-lg bg-sky-500/20 hover:bg-sky-500/30 text-sky-300 font-bold text-xs border border-sky-400/30 transition-colors flex items-center gap-1.5"
              >
                <Sparkles className="w-3 h-3" />
                <span>Ask AI Chat</span>
              </button>
            </div>
          </div>

          {/* Quick Socket Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Available Socket Models ($35.00/Pair)
            </h4>
            <ul className="space-y-1.5 text-xs text-zinc-400">
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H1 Mini LED (Single Beam)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H3 Mini LED (Fog / Aux)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H4 / 9003 / HB2 (Dual Beam Hi/Low)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H7 Mini LED (Euro & Domestic)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">9005 / HB5 High Beam Powerhouse</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H8 Mini LED (Fog & Angel Eyes)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H11 Mini LED (#1 Best Seller)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H12 / 9055 Mini LED (Trucks & Fog)</a></li>
            </ul>
          </div>

          {/* Multi-language selector */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-sky-400" />
              Languages / Kalbos / Języki / Мови
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {[
                { code: 'en', label: 'English', flag: '🇺🇸' },
                { code: 'es', label: 'Español', flag: '🇲🇽' },
                { code: 'pl', label: 'Polski', flag: '🇵🇱' },
                { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
                { code: 'uk', label: 'Українська', flag: '🇺🇦' },
                { code: 'ru', label: 'Русский', flag: '🌐' },
              ].map((l) => (
                <button
                  key={l.code}
                  onClick={() => onSelectLang(l.code as LanguageCode)}
                  className={`px-3 py-1.5 rounded-lg text-left flex items-center justify-between border transition-all ${
                    currentLang === l.code
                      ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 font-bold'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </span>
                  {currentLang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-12 pt-6 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {OWNER_CONTACT.websiteName} ({OWNER_CONTACT.websiteDomain}). Mantas Chicago IL. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="text-zinc-400">
              Cash App: <a href={OWNER_CONTACT.cashAppUrl} className="text-emerald-400 font-mono underline hover:text-emerald-300">${OWNER_CONTACT.cashAppHandle}</a>
            </span>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
