import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp, ExternalLink, Phone, Mail } from 'lucide-react';
import { LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

interface FaqSectionProps {
  currentLang: LanguageCode;
  onOpenCashAppModal: () => void;
  onOpenAiChat: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({
  currentLang,
  onOpenCashAppModal,
  onOpenAiChat,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How much are the bulbs and what does shipping cost?',
      a: `All bulb sockets (H1, H3, H4/9003/HB2, H7, 9005/HB5, H8, H11, and H12) are exactly **$35.00 each pair** (2 bulbs included). Flat-rate nationwide tracked shipping (7-14 business days) is **$10**. Total for one pair shipped is **$45.00**. Payment for shipping orders is sent directly via **Cash App** to **https://cash.app/$muahz26** ($muahz26).`,
    },
    {
      q: 'Can I pick them up locally in Chicago, IL?',
      a: `**Yes!** If you are in the Chicago area, local in-person pickup is available for **$35.00 per pair with $0 shipping**. You can pay with cash or Cash App upon pickup. Contact Mantas directly at **+1 (312) 385 - 9229** (Call or Text) or email **MantasChicago36@Gmail.Com** to coordinate pickup location and time.`,
    },
    {
      q: 'How do I pay and place my order on Cash App?',
      a: `1. Open Cash App and send the total amount ($45 for 1 pair shipped, $80 for 2 pairs shipped) to **https://cash.app/$muahz26** (CashTag: **$muahz26**).\n2. In the Cash App note/memo, write your **Name, Shipping Address, and the Bulb Socket(s)** you need (e.g. "John Smith, 1x H11, 123 Main St, Chicago IL 60601").\n3. You can also text or call Mantas at **(312) 385-9229** or email **MantasChicago36@Gmail.Com** with your order info for immediate tracking confirmation!`,
    },
    {
      q: 'What makes 6000K Diamond White the best color temperature?',
      a: `6000K Diamond White produces a pure, crisp daylight white beam. Unlike dim yellow 3200K halogens, 6000K illuminates street signs, lane markers, and roadside hazards with high optical contrast. Unlike 8000K+ deep blue bulbs, 6000K does not cause eye strain and maintains strong penetrating power in fog, rain, and snow.`,
    },
    {
      q: 'Will these Mini LED bulbs fit inside my factory headlight housing & dust covers?',
      a: `**Yes, absolutely.** These are true **1:1 Mini bulbs** engineered to match factory halogen bulb dimensions. There is no bulky external ballast box or dangling wire harness, allowing 100% of factory dust caps and waterproof back covers to seal shut normally.`,
    },
    {
      q: 'Do they have cooling fans and will they overheat?',
      a: `Each bulb features an integrated **12,000 RPM silent high-speed micro turbo cooling fan** paired with an aerospace-grade 6063 aluminum heatsink. This active cooling setup pulls heat away from the LED chips instantly, maintaining maximum brightness and achieving a **50,000+ hour operational lifespan**.`,
    },
    {
      q: 'Will these trigger CANbus error codes or hyper-flash?',
      a: `Our Mini LED bulbs are equipped with an advanced internal smart IC driver designed to match halogen resistance on 99% of modern passenger vehicles. They run without triggering bulb-out dash warning lights or radio static interference.`,
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
            <HelpCircle className="w-3.5 h-3.5" />
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
            Everything You Need to Know
          </h2>
          <p className="text-zinc-400 text-sm">
            Details on Cash App ordering, $10 shipping (7-14 Business Days), Chicago pickup, and socket compatibility.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="card-glass rounded-2xl border border-zinc-800 overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-sm text-white hover:text-sky-300 transition-colors"
                >
                  <span className="font-heading text-sm sm:text-base">{faq.q}</span>
                  {isOpen ? (
                    <ChevronUp className="w-4 h-4 text-sky-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-zinc-500 shrink-0" />
                  )}
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-zinc-300 border-t border-zinc-800/80 leading-relaxed whitespace-pre-line">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-base font-bold text-white">Still have questions about your car or order?</h4>
            <p className="text-xs text-zinc-400">
              Ask our AI assistant right now or call/text Mantas directly at (312) 385-9229.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenAiChat}
              className="px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold text-xs transition-colors"
            >
              Open AI Chat
            </button>
            <button
              onClick={onOpenCashAppModal}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center gap-1.5"
            >
              <span>Pay on Cash App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
