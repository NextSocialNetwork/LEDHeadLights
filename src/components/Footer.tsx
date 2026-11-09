/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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
  ArrowUp,
  BookOpen,
  FileText,
  MessageSquare
} from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

const TikTokIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 3 15.68 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.32V8.9a8.17 8.17 0 0 0 4.79 1.54v-3.45a4.85 4.85 0 0 1-.88-.3z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const WhatsAppIcon: React.FC<{ className?: string }> = ({ className = 'w-5 h-5' }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.53 7.33C9.33 7.33 9.04 7.4 8.79 7.67C8.54 7.94 7.84 8.6 7.84 9.94C7.84 11.28 8.82 12.57 8.96 12.76C9.1 12.95 10.88 15.7 13.6 16.87C14.25 17.15 14.75 17.32 15.14 17.44C15.8 17.65 16.4 17.62 16.88 17.55C17.41 17.47 18.52 16.88 18.75 16.23C18.98 15.58 18.98 15.02 18.91 14.91C18.84 14.8 18.66 14.73 18.39 14.6C18.12 14.47 16.79 13.82 16.54 13.73C16.3 13.64 16.12 13.59 15.94 13.86C15.76 14.13 15.25 14.73 15.1 14.91C14.95 15.09 14.8 15.11 14.53 14.98C14.26 14.85 13.39 14.56 12.36 13.64C11.55 12.92 11.01 12.04 10.85 11.77C10.7 11.5 10.83 11.36 10.97 11.22C11.09 11.1 11.24 10.9 11.38 10.74C11.52 10.58 11.56 10.46 11.65 10.28C11.74 10.1 11.7 9.94 11.63 9.81C11.56 9.68 11.03 8.38 10.81 7.84C10.59 7.32 10.37 7.39 10.2 7.38C10.04 7.37 9.86 7.33 9.53 7.33Z"/>
  </svg>
);

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

  const ALL_LANGUAGES: { code: LanguageCode; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇲🇽' },
    { code: 'pl', label: 'Polski', flag: '🇵🇱' },
    { code: 'lt', label: 'Lietuvių', flag: '🇱🇹' },
    { code: 'uk', label: 'Українська', flag: '🇺🇦' },
    { code: 'ru', label: 'Русский', flag: '🌐' },
    { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
    { code: 'fr', label: 'Français', flag: '🇫🇷' },
    { code: 'it', label: 'Italiano', flag: '🇮🇹' },
    { code: 'pt', label: 'Português', flag: '🇧🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' }
  ];

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
              Call or text Matt anytime for vehicle bulb fitment or Chicago pickup!
            </p>
          </div>

          <div className="card-glass p-5 rounded-2xl border-zinc-800 space-y-2">
            <div className="flex items-center gap-2 text-sky-400 font-bold text-sm">
              <Mail className="w-4 h-4" />
              <span>{t.emailLabel}</span>
            </div>
            <a 
              href={`mailto:${OWNER_CONTACT.orderEmail}`} 
              className="text-amber-300 font-bold text-sm hover:underline block truncate"
            >
              {OWNER_CONTACT.orderEmail}
            </a>
            <p className="text-[11px] text-zinc-400">
              Order Shipping Processing email (or WhatsApp/Call Matt directly).
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
              Local Chicago pickup available with cash or Cash App ($0 shipping).
            </p>
          </div>

        </div>

        {/* Social & WhatsApp Connect Bar with Clickable Icons */}
        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-zinc-300 font-semibold">
            <span className="text-white font-bold">Social Media & Direct Chat:</span>
            <span className="text-xs text-zinc-400 hidden sm:inline">(Click icons to connect)</span>
          </div>

          <div className="flex items-center gap-3">
            {/* WhatsApp Clickable Icon */}
            <a
              href={OWNER_CONTACT.whatsAppUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Chat on WhatsApp (+1 312-385-9229)"
              title="Chat on WhatsApp (+1 312-385-9229)"
              className="w-11 h-11 rounded-2xl bg-emerald-500/15 hover:bg-[#25D366] text-[#25D366] hover:text-white border border-emerald-500/40 hover:border-[#25D366] flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg shadow-emerald-950/40 group"
            >
              <WhatsAppIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* TikTok Clickable Icon */}
            <a
              href={OWNER_CONTACT.tikTokUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok (@mattchicago36)"
              title="TikTok (@mattchicago36)"
              className="w-11 h-11 rounded-2xl bg-zinc-900 hover:bg-black text-zinc-300 hover:text-white border border-zinc-700/80 hover:border-pink-500 flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-pink-500/20 group"
            >
              <TikTokIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>

            {/* Instagram Clickable Icon */}
            <a
              href={OWNER_CONTACT.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram (@ledheadlights.ai.studio)"
              title="Instagram (@ledheadlights.ai.studio)"
              className="w-11 h-11 rounded-2xl bg-purple-500/15 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-pink-400 hover:text-white border border-pink-500/40 hover:border-transparent flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-purple-500/30 group"
            >
              <InstagramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Bio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          
          {/* Brand Info with LEDHeadLights.Ai.Studio */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-500 flex items-center justify-center text-zinc-950 font-black">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black tracking-wider text-white font-heading">
                  LED Bulbs
                </span>
                <p className="text-xs text-sky-400 font-mono font-bold">
                  {OWNER_CONTACT.studioBranding || 'LEDHeadLights.Ai.Studio'}
                </p>
              </div>
            </div>

            <p className="text-zinc-400 text-xs leading-relaxed max-w-sm">
              Precision 6000K Diamond White Mini LED Bulbs engineered for maximum nocturnal clarity. All socket models (H1, H3 Mini, Aftermarket H3 COB Kit, H4, H7 Direct Plug, H7 with Wire Extension, 9005, 9006, H8, H11) in stock at $40 flat per pair with 100% FREE nationwide tracked shipping (7-14 Business Days), Customer Satisfaction Guarantee, and Free Replacement! Curated by Matt in Chicago, IL.
            </p>

            <div className="flex items-center gap-3 pt-1 flex-wrap">
              <button
                onClick={onOpenCashAppModal}
                className="px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5 shadow-md shadow-emerald-600/20"
              >
                <span>Pay on Cash App ($40 Flat)</span>
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

            {/* Direct Social & Chat Clickable Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <span className="text-[11px] font-bold text-zinc-400">Social:</span>
              <a
                href={OWNER_CONTACT.whatsAppUrl}
                target="_blank"
                rel="noreferrer"
                title="Chat on WhatsApp (+1 312-385-9229)"
                aria-label="WhatsApp"
                className="w-8 h-8 rounded-xl bg-emerald-500/20 hover:bg-[#25D366] text-[#25D366] hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-emerald-500/30"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
              <a
                href={OWNER_CONTACT.tikTokUrl}
                target="_blank"
                rel="noreferrer"
                title="TikTok (@mattchicago36)"
                aria-label="TikTok"
                className="w-8 h-8 rounded-xl bg-zinc-900 hover:bg-black text-zinc-300 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-zinc-700 hover:border-pink-500"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href={OWNER_CONTACT.instagramUrl}
                target="_blank"
                rel="noreferrer"
                title="Instagram (@ledheadlights.ai.studio)"
                aria-label="Instagram"
                className="w-8 h-8 rounded-xl bg-purple-500/20 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-pink-500 hover:to-purple-600 text-pink-400 hover:text-white flex items-center justify-center transition-all duration-300 hover:scale-110 border border-pink-500/30"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Socket Links (Including both H7 options) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading">
              Available Socket Models ($40 Flat • Free Shipping)
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-zinc-400">
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H1 Mini LED</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H3 Fog & Auxiliary</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors text-amber-300 font-semibold">Aftermarket H3 COB Kit</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H4 / 9003 Dual Beam</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors text-sky-300 font-semibold">H7 Direct Plug (Wireless)</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors text-sky-300 font-semibold">H7 with Wire Extension</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">9005 / HB5 High Beam</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">9006 / HB4 Low Beam</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H8 Fog & Angel Eyes</a></li>
              <li><a href="#listings" className="hover:text-sky-400 transition-colors">H11 (#1 Best Seller)</a></li>
              <li><a href="#blog" className="hover:text-sky-400 transition-colors text-amber-300 font-semibold flex items-center gap-1"><BookOpen className="w-3 h-3" /> Blog (785 Guides)</a></li>
            </ul>

            {/* SEO & Sitemap Links */}
            <div className="pt-3 border-t border-zinc-800 space-y-1.5 text-[11px] text-zinc-500">
              <div className="font-bold text-zinc-300 uppercase tracking-wider">Search Engine & Crawlers:</div>
              <div className="flex items-center gap-3">
                <a href="/sitemap.xml" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline flex items-center gap-1">
                  <FileText className="w-3 h-3" />
                  <span>Google XML Sitemap</span>
                </a>
                <span>•</span>
                <a href="/robots.txt" target="_blank" rel="noreferrer" className="text-sky-400 hover:underline">
                  robots.txt
                </a>
              </div>
            </div>
          </div>

          {/* Multi-language selector (11 languages) */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white font-heading flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-sky-400" />
              <span>International Languages (11)</span>
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-xs">
              {ALL_LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => onSelectLang(l.code)}
                  className={`px-2.5 py-1.5 rounded-lg text-left flex items-center justify-between border transition-all text-[11px] ${
                    currentLang === l.code
                      ? 'bg-sky-500/20 text-sky-300 border-sky-400/40 font-bold'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white hover:bg-zinc-800'
                  }`}
                >
                  <span className="flex items-center gap-1 truncate">
                    <span>{l.flag}</span>
                    <span className="truncate">{l.label}</span>
                  </span>
                  {currentLang === l.code && <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />}
                </button>
              ))}
            </div>
          </div>

        </div>

        {/* Extended SEO Keyword Footprint */}
        <div className="mt-10 pt-6 border-t border-zinc-900 text-[11px] text-zinc-600 space-y-2">
          <p className="leading-relaxed">
            <strong className="text-zinc-500 font-mono">Popular Automotive Lighting Keywords: </strong>
            6000K Diamond White LED Headlights • Mini LED Bulbs • H7 Direct Plug Wireless • H7 Wire Extension Pigtail • H11 Low Beam LED Conversion • 9005 High Beam Bulbs • 9006 Low Beam • H4 Dual Beam Hi/Low • H8 Fog Lights • H1 Mini LED • H3 Projector Bulbs • CANbus Decoder Error Free • 16000 Lumens Pair • IP68 Waterproof Automotive Lighting • Pontiac Grand Prix LED • VW Jetta Mk6 Mk7 LED Bulbs • Audi A4 S4 LED • Nissan Altima Rogue Headlights • BMW 3-Series Angel Eyes • Ford F-150 LED Bulbs • Toyota Camry Corolla Tacoma Headlights • Chevrolet Silverado Tahoe LED • Dodge Ram 1500 Quad Low Beam • Cash App $muahz26 Orders • Matt Chicago Automotive Lighting Lab • LEDHeadLights.Ai.Studio
          </p>
        </div>

        {/* Bottom copyright & back to top */}
        <div className="mt-6 pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} {OWNER_CONTACT.websiteName} • <span className="text-zinc-400 font-semibold">{OWNER_CONTACT.studioBranding}</span> • Curated by Matt in Chicago, IL. All rights reserved.
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
