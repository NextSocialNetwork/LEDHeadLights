import React, { useState, useRef, useEffect } from 'react';
import { 
  Sparkles, 
  X, 
  Send, 
  MessageSquare, 
  Phone, 
  ExternalLink, 
  RotateCcw, 
  Bot, 
  User, 
  Zap,
  HelpCircle
} from 'lucide-react';
import { ChatMessage, LanguageCode } from '../types';
import { TRANSLATIONS } from '../data/translations';
import { OWNER_CONTACT } from '../data/bulbsData';

interface AiChatSupportProps {
  isOpen: boolean;
  onToggle: () => void;
  currentLang: LanguageCode;
  onOpenCashAppModal: () => void;
}

export const AiChatSupport: React.FC<AiChatSupportProps> = ({
  isOpen,
  onToggle,
  currentLang,
  onOpenCashAppModal,
}) => {
  const t = TRANSLATIONS[currentLang];
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content: `Hello! I am your **LED Headlights AI Support Specialist** for **LEDHeadlights.Org**. \n\nI can help you:\n• Find the exact bulb socket (H1, H3, H4, H7, 9005, H8, H11) for your vehicle\n• Explain our **6000K Diamond White Mini** technology & 1:1 fitment\n• Help you order via **Cash App ($muahz26)** for $35.00/pair + $10 shipping (7-14 Business Days) or Chicago pickup!\n\nWhat car do you drive?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = async (userText: string) => {
    if (!userText.trim() || isLoading) return;

    const newMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: userText.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updated = [...messages, newMsg];
    setMessages(updated);
    setInput('');
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: updated.map(m => ({ role: m.role, content: m.content })),
          userLanguage: currentLang,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.reply || "I'm here to help! Please tell me your car model or questions about ordering via Cash App ($muahz26).",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages(prev => [...prev, assistantMsg]);
    } catch (err) {
      console.error('Chat error:', err);
      // Helpful fallback
      const errorMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: `I'm having trouble connecting to the network right now, but you can always reach Mantas directly at **${OWNER_CONTACT.phone}** (Call or Text) or email **${OWNER_CONTACT.email}**! \n\nAll bulbs (H1, H3, H4, H7, 9005, H8, H11) are **$35.00 per pair** + **$10 shipping (7-14 Business Days)** via Cash App **$muahz26**, or free local pickup in Chicago.`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickPrompt = (prompt: string) => {
    handleSendMessage(prompt);
  };

  const renderFormattedText = (content: string) => {
    // Quick simple markdown parser for bold, links and bullet lists
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Process bold **text**
      let parsed = line;
      const parts = parsed.split(/(\*\*.*?\*\*)/g);
      return (
        <span key={idx} className="block my-0.5">
          {parts.map((p, pIdx) => {
            if (p.startsWith('**') && p.endsWith('**')) {
              return (
                <strong key={pIdx} className="font-bold text-white">
                  {p.slice(2, -2)}
                </strong>
              );
            }
            return p;
          })}
        </span>
      );
    });
  };

  return (
    <>
      {/* Floating Launcher Button when closed */}
      {!isOpen && (
        <button
          onClick={onToggle}
          className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 p-3 sm:px-5 sm:py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-zinc-950 font-black text-sm shadow-2xl shadow-sky-500/40 flex items-center gap-2.5 transition-all transform hover:scale-105 active:scale-95 group"
          title="Open AI Chat Support"
        >
          <div className="relative">
            <Sparkles className="w-5 h-5 text-zinc-950 animate-pulse" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-sky-500" />
          </div>
          <span className="hidden sm:inline font-heading tracking-wide">
            {t.aiChatTitle}
          </span>
        </button>
      )}

      {/* Floating AI Chat Window when opened - Fits mobile phone viewport cleanly */}
      {isOpen && (
        <div className="fixed bottom-3 right-3 left-3 sm:left-auto sm:right-6 sm:bottom-6 z-50 sm:w-[420px] h-[540px] max-h-[85vh] card-glass rounded-2xl border border-sky-400/40 shadow-2xl flex flex-col justify-between overflow-hidden glow-6000k">
          
          {/* Chat Window Header */}
          <div className="p-4 bg-zinc-900/90 border-b border-zinc-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 flex items-center justify-center text-zinc-950 shadow-md">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-white font-heading">
                    {t.aiChatTitle}
                  </h4>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                    Online
                  </span>
                </div>
                <p className="text-[11px] text-zinc-400">
                  LEDHeadlights.Org • Mantas ({OWNER_CONTACT.phone})
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([messages[0]])}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
                title="Restart Chat"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={onToggle}
                className="p-1.5 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2.5 bg-zinc-950/70 border-b border-zinc-800/80 overflow-x-auto flex gap-1.5 scrollbar-none text-[11px]">
            <button
              onClick={() => handleQuickPrompt('What bulb fits my car?')}
              className="px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-sky-300 border border-zinc-800 whitespace-nowrap transition-colors"
            >
              🚗 Bulb Fitment?
            </button>
            <button
              onClick={() => handleQuickPrompt('How do I pay with Cash App?')}
              className="px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-emerald-300 border border-zinc-800 whitespace-nowrap transition-colors"
            >
              💵 Cash App Payment?
            </button>
            <button
              onClick={() => handleQuickPrompt('What is 6000K Diamond White?')}
              className="px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-zinc-800 whitespace-nowrap transition-colors"
            >
              💡 6000K vs Halogen?
            </button>
            <button
              onClick={() => handleQuickPrompt('Can I pick up locally in Chicago?')}
              className="px-2.5 py-1 rounded-full bg-zinc-900 hover:bg-zinc-800 text-amber-300 border border-zinc-800 whitespace-nowrap transition-colors"
            >
              📍 Chicago Pickup?
            </button>
          </div>

          {/* Messages Flow Container */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs leading-relaxed">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.role === 'assistant' && (
                  <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0 mt-0.5">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[85%] p-3.5 rounded-2xl ${
                    m.role === 'user'
                      ? 'bg-sky-500 text-zinc-950 font-medium rounded-tr-none'
                      : 'bg-zinc-900/90 text-zinc-200 border border-zinc-800 rounded-tl-none'
                  }`}
                >
                  <div className="space-y-1">
                    {renderFormattedText(m.content)}
                  </div>
                  <div
                    className={`text-[9px] mt-1.5 font-mono ${
                      m.role === 'user' ? 'text-zinc-800 text-right' : 'text-zinc-500'
                    }`}
                  >
                    {m.timestamp}
                  </div>
                </div>

                {m.role === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-300 flex items-center justify-center shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 items-center text-zinc-400 text-xs py-1">
                <div className="w-6 h-6 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-2 h-2 rounded-full bg-sky-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input & Direct Contact Footer */}
          <div className="p-3 bg-zinc-900 border-t border-zinc-800 space-y-2">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={t.aiChatPlaceholder}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-zinc-950 border border-zinc-700 focus:border-sky-400 text-white text-sm sm:text-xs placeholder-zinc-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 disabled:opacity-50 text-zinc-950 transition-colors shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>

            <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1">
              <span>Direct: <a href={`tel:${OWNER_CONTACT.phoneRaw}`} className="text-sky-300 font-bold hover:underline">{OWNER_CONTACT.phone}</a></span>
              <button
                onClick={onOpenCashAppModal}
                className="text-emerald-400 font-bold hover:underline flex items-center gap-1"
              >
                <span>Pay on Cash App</span>
                <ExternalLink className="w-2.5 h-2.5" />
              </button>
            </div>
          </div>

        </div>
      )}
    </>
  );
};
