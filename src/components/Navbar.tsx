import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShoppingBag, 
  Globe, 
  Check, 
  Car, 
  Zap, 
  ChevronDown
} from 'lucide-react';
import { LanguageCode, CartItem } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

interface NavbarProps {
  currentLang: LanguageCode;
  onSelectLang: (lang: LanguageCode) => void;
  cart: CartItem[];
  onOpenCart: () => void;
  onOpenAiChat?: () => void;
}

const LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇲🇽' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  { code: 'ru', label: 'Русский', flag: '🌐' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  cart,
  onOpenCart,
}) => {
  const t = TRANSLATIONS[currentLang];
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      {/* Top Announcement & Direct Contact Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-zinc-900 to-sky-950 px-4 py-1.5 text-xs border-b border-sky-500/20 text-zinc-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1 text-sky-400 font-semibold">
              <Zap className="w-3.5 h-3.5 text-sky-400 animate-pulse" />
              6000K Diamond White Mini LEDs — $30/Pair
            </span>
            <span className="hidden sm:inline-block text-zinc-500">|</span>
            <span className="hidden sm:flex items-center gap-1 text-zinc-300">
              <span className="text-emerald-400 font-medium">Cash App:</span>
              <a 
                href={OWNER_CONTACT.cashAppUrl} 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-400 underline font-semibold hover:text-emerald-300"
              >
                ${OWNER_CONTACT.cashAppHandle}
              </a>
            </span>
            <span className="hidden md:inline-block text-zinc-500">|</span>
            <span className="hidden md:flex items-center gap-1 text-zinc-400">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              Chicago, IL (Local Pickup Available)
            </span>
          </div>

          <div className="flex items-center gap-3 ml-auto text-xs">
            <a 
              href={`tel:${OWNER_CONTACT.phoneRaw}`} 
              className="flex items-center gap-1 text-zinc-200 hover:text-sky-400 transition-colors font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>{OWNER_CONTACT.phone}</span>
            </a>
            <span className="text-zinc-600">|</span>
            <a 
              href={`mailto:${OWNER_CONTACT.email}`} 
              className="hidden lg:flex items-center gap-1 text-zinc-300 hover:text-sky-400 transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-sky-400" />
              <span>{OWNER_CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/25 ring-1 ring-white/20">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-black tracking-wider text-white uppercase font-heading group-hover:text-sky-400 transition-colors">
                {t.brandTitle}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                6000K
              </span>
            </div>
            <p className="text-[11px] text-zinc-400 font-mono tracking-tight">
              {OWNER_CONTACT.websiteDomain}
            </p>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-zinc-300">
          <a href="#listings" className="hover:text-sky-400 transition-colors">
            {t.navProducts}
          </a>
          <a href="#finder" className="hover:text-sky-400 transition-colors flex items-center gap-1">
            <Car className="w-4 h-4 text-sky-400" />
            {t.navBulbFinder}
          </a>
          <a href="#comparison" className="hover:text-sky-400 transition-colors">
            {t.navComparison}
          </a>
          <a href="#specs" className="hover:text-sky-400 transition-colors">
            {t.navSpecs}
          </a>
          <a href="#faq" className="hover:text-sky-400 transition-colors">
            {t.navFaq}
          </a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">
            {t.navContact}
          </a>
        </nav>

        {/* Right Action Icons: Language, AI Chat & Cart */}
        <div className="flex items-center gap-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-colors"
              title="Select Language"
            >
              <Globe className="w-3.5 h-3.5 text-sky-400" />
              <span className="font-semibold uppercase">{currentLang}</span>
              <ChevronDown className="w-3 h-3 text-zinc-400" />
            </button>

            {langMenuOpen && (
              <div 
                className="absolute right-0 mt-2 w-44 rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl py-1 z-50 divide-y divide-zinc-800/60"
                onMouseLeave={() => setLangMenuOpen(false)}
              >
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      onSelectLang(lang.code);
                      setLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3 py-2 text-xs text-left transition-colors ${
                      currentLang === lang.code
                        ? 'bg-sky-500/15 text-sky-300 font-semibold'
                        : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-sm">{lang.flag}</span>
                      <span>{lang.label}</span>
                    </span>
                    {currentLang === lang.code && <Check className="w-3.5 h-3.5 text-sky-400" />}
                  </button>
                ))}
              </div>
            )}
          </div>


          {/* Cart Button */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-colors shadow-lg shadow-sky-500/20"
          >
            <ShoppingBag className="w-4 h-4 text-zinc-950" />
            <span className="hidden sm:inline">{t.cart}</span>
            {totalCartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-zinc-950 text-sky-300 font-black text-[11px] flex items-center justify-center ml-0.5">
                {totalCartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
