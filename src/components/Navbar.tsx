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
  ChevronDown,
  Menu,
  X,
  ExternalLink,
  HelpCircle,
  Cpu,
  Eye,
  Star,
  BookOpen,
  MessageSquare,
  Award
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
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'pl', label: 'Polski', flag: '🇵🇱' },
  { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
  { code: 'uk', label: 'Українська', flag: '🇺🇦' },
  { code: 'ru', label: 'Русский', flag: '🌐' },
  { code: 'ar', label: 'العربية', flag: '🇦🇪' },
];

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onSelectLang,
  cart,
  onOpenCart,
  onOpenAiChat,
}) => {
  const t = TRANSLATIONS[currentLang];
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [langMenuOpen, setLangMenuOpen] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800">
      {/* Top Announcement & Direct Contact Bar */}
      <div className="bg-gradient-to-r from-sky-950 via-zinc-900 to-sky-950 px-3 sm:px-4 py-1.5 text-[11px] sm:text-xs border-b border-sky-500/20 text-zinc-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 sm:gap-4 truncate">
            <span className="flex items-center gap-1 text-emerald-400 font-semibold truncate">
              <Zap className="w-3.5 h-3.5 text-emerald-400 animate-pulse shrink-0" />
              <span className="truncate">6000K Mini LEDs — $40 Flat • FREE Shipping • Satisfaction Guarantee & Free Replacement!</span>
            </span>
            <span className="hidden sm:inline-block text-zinc-600">|</span>
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
            <span className="hidden md:inline-block text-zinc-600">|</span>
            <a
              href={OWNER_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1 text-emerald-400 font-bold hover:underline"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
              <span>WhatsApp Chat</span>
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3 shrink-0 text-[11px] sm:text-xs">
            <a 
              href={`tel:${OWNER_CONTACT.phoneRaw}`} 
              className="flex items-center gap-1 text-zinc-200 hover:text-sky-400 transition-colors font-bold sm:font-medium"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400 shrink-0" />
              <span className="hidden xs:inline">{OWNER_CONTACT.phone}</span>
              <span className="xs:hidden">Call/Text</span>
            </a>
            <span className="text-zinc-600 hidden sm:inline">|</span>
            <a 
              href={`mailto:${OWNER_CONTACT.orderEmail}`} 
              className="hidden lg:flex items-center gap-1 text-amber-300 hover:text-amber-200 transition-colors font-medium"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
              <span>{OWNER_CONTACT.orderEmail}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-15 sm:h-16 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <a href="#" className="flex items-center gap-2 sm:gap-3 group shrink-0">
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center shadow-lg shadow-sky-500/25 ring-1 ring-white/20 shrink-0">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-base sm:text-lg font-black tracking-wider text-white uppercase font-heading group-hover:text-sky-400 transition-colors">
                LED Bulbs
              </span>
              <span className="px-1.5 py-0.5 rounded text-[9px] sm:text-[10px] font-bold bg-sky-500/20 text-sky-300 border border-sky-500/30">
                6000K
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-6 text-sm font-medium text-zinc-300">
          <a href="#listings" className="hover:text-sky-400 transition-colors">
            {t.navProducts}
          </a>
          <a href="#finder" className="hover:text-sky-400 transition-colors flex items-center gap-1">
            <Car className="w-4 h-4 text-sky-400" />
            {t.navBulbFinder}
          </a>
          <a href="#reviews" className="text-amber-300 hover:text-amber-200 transition-colors font-semibold flex items-center gap-1">
            <span>⭐ Reviews (289)</span>
          </a>
          <a href="#loyalty" className="text-amber-400 hover:text-amber-300 transition-colors font-bold flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>VIP Loyalty (-$5)</span>
          </a>
          <a href="#blog" className="text-sky-300 hover:text-sky-200 transition-colors font-semibold flex items-center gap-1">
            <BookOpen className="w-4 h-4 text-sky-400" />
            <span>Blog (785)</span>
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

        {/* Right Action Icons: Language, Cart & Mobile Menu Toggle */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              onClick={() => setLangMenuOpen(!langMenuOpen)}
              className="flex items-center gap-1 px-2 sm:px-2.5 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 hover:border-zinc-700 text-xs text-zinc-200 transition-colors"
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
            className="relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-colors shadow-lg shadow-sky-500/20"
          >
            <ShoppingBag className="w-4 h-4 text-zinc-950 shrink-0" />
            <span className="hidden sm:inline">{t.cart}</span>
            {totalCartCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-zinc-950 text-sky-300 font-black text-[11px] flex items-center justify-center">
                {totalCartCount}
              </span>
            )}
          </button>

          {/* Mobile Hamburger Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white lg:hidden transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-sky-400" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-zinc-800/80 bg-zinc-950/98 px-4 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-2 text-sm">
            <a
              href="#listings"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <Zap className="w-4 h-4 text-sky-400" />
                <span>{t.navProducts} ($40 Flat • Free Shipping)</span>
              </span>
              <span className="text-[10px] text-sky-400 font-mono">8 Sockets</span>
            </a>

            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                <span>Reviews & Upgrades</span>
              </span>
              <span className="text-[10px] text-amber-400 font-semibold">289 ★★★★★</span>
            </a>

            <a
              href="#blog"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <BookOpen className="w-4 h-4 text-sky-400" />
                <span>Automotive Lighting Blog</span>
              </span>
              <span className="text-[10px] text-sky-400 font-semibold">785 Articles</span>
            </a>

            <a
              href="#loyalty"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 hover:bg-amber-500/20 transition-colors"
            >
              <span className="flex items-center gap-2.5 font-bold">
                <Award className="w-4 h-4 text-amber-400" />
                <span>VIP Repeat Buyer Loyalty</span>
              </span>
              <span className="text-[10px] bg-amber-500 text-zinc-950 font-black px-1.5 py-0.5 rounded">-$5 OFF</span>
            </a>

            <a
              href="#finder"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors"
            >
              <span className="flex items-center gap-2.5 font-medium">
                <Car className="w-4 h-4 text-sky-400" />
                <span>{t.navBulbFinder}</span>
              </span>
              <span className="text-[10px] text-zinc-400">Fitment</span>
            </a>

            <a
              href="#comparison"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors font-medium"
            >
              <Eye className="w-4 h-4 text-sky-400" />
              <span>{t.navComparison}</span>
            </a>

            <a
              href="#specs"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors font-medium"
            >
              <Cpu className="w-4 h-4 text-sky-400" />
              <span>{t.navSpecs}</span>
            </a>

            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors font-medium"
            >
              <HelpCircle className="w-4 h-4 text-sky-400" />
              <span>{t.navFaq}</span>
            </a>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5 p-2.5 rounded-xl bg-zinc-900/60 hover:bg-sky-500/10 text-zinc-200 hover:text-sky-300 transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-sky-400" />
              <span>{t.navContact} ({OWNER_CONTACT.phone})</span>
            </a>
          </nav>

          {/* Direct Mobile Quick Actions */}
          <div className="pt-2 border-t border-zinc-800 grid grid-cols-3 gap-2 text-xs">
            <a
              href={OWNER_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold flex items-center justify-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </a>

            <a
              href={OWNER_CONTACT.cashAppUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-emerald-400 font-bold flex items-center justify-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Cash App</span>
            </a>

            <a
              href={`tel:${OWNER_CONTACT.phoneRaw}`}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white font-bold flex items-center justify-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-sky-400" />
              <span>Call Matt</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

