/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Calendar, 
  Clock, 
  ArrowRight, 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Tag, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  Mail, 
  Phone 
} from 'lucide-react';
import { BlogPost, getAllBlogArticles, BLOG_CATEGORIES, TOTAL_BLOG_COUNT } from '../data/blogData';
import { LanguageCode } from '../types';
import { OWNER_CONTACT } from '../data/bulbsData';

interface BlogSectionProps {
  currentLang: LanguageCode;
  onOpenCashAppModal: () => void;
  onOpenAiChat: () => void;
}

export const BlogSection: React.FC<BlogSectionProps> = ({
  currentLang,
  onOpenCashAppModal,
  onOpenAiChat,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Articles (785)');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const PAGE_SIZE = 9;

  // Retrieve all 785 deterministic articles
  const allArticles = useMemo(() => getAllBlogArticles(), []);

  // Filter articles based on category and search query
  const filteredArticles = useMemo(() => {
    return allArticles.filter((article) => {
      const matchesCategory = 
        selectedCategory === 'All Articles (785)' || 
        article.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      if (!q) return matchesCategory;

      const matchesSearch = 
        article.title.toLowerCase().includes(q) ||
        article.summary.toLowerCase().includes(q) ||
        (article.vehicleMake && article.vehicleMake.toLowerCase().includes(q)) ||
        (article.socketType && article.socketType.toLowerCase().includes(q)) ||
        article.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [allArticles, selectedCategory, searchQuery]);

  // Pagination calculation
  const totalPages = Math.ceil(filteredArticles.length / PAGE_SIZE) || 1;
  const paginatedArticles = useMemo(() => {
    const startIndex = (currentPage - 1) * PAGE_SIZE;
    return filteredArticles.slice(startIndex, startIndex + PAGE_SIZE);
  }, [filteredArticles, currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    const elem = document.getElementById('blog');
    if (elem) elem.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="blog" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Automotive Lighting Knowledge Hub • {TOTAL_BLOG_COUNT} Published Guides</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white font-heading">
              LED Headlights Blog & Installation Hub
            </h2>
            <p className="text-zinc-400 text-sm">
              Comprehensive DIY tutorials, vehicle socket fitment databases, beam cutoff adjustments, and CANbus troubleshooting written by Matt and the Chicago engineering team.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center gap-4 shrink-0">
            <div>
              <div className="text-[10px] uppercase font-bold text-zinc-400">Total Articles</div>
              <div className="text-2xl font-black text-sky-400 font-heading">{TOTAL_BLOG_COUNT} Guides</div>
            </div>
            <div className="h-8 w-px bg-zinc-800" />
            <div>
              <div className="text-[10px] uppercase font-bold text-zinc-400">Curator & Tech</div>
              <div className="text-sm font-bold text-white">Matt (Chicago, IL)</div>
            </div>
          </div>
        </div>

        {/* Search Bar & Quick Categories */}
        <div className="space-y-4">
          <div className="relative max-w-3xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search 785 articles by vehicle (VW, Pontiac, Ford, Toyota), socket (H7, H11, H4), or topic (CANbus, projector)..."
              className="w-full pl-12 pr-10 py-3.5 rounded-xl bg-zinc-900 border border-zinc-700 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-500/20 text-white placeholder-zinc-500 text-sm transition-all"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {BLOG_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setCurrentPage(1);
                }}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap shrink-0 border ${
                  selectedCategory === cat
                    ? 'bg-sky-500 text-zinc-950 border-sky-400 shadow-md shadow-sky-500/20'
                    : 'bg-zinc-900 text-zinc-300 hover:bg-zinc-800 border-zinc-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Filter Keyword Pills */}
          <div className="flex items-center gap-1.5 flex-wrap text-xs text-zinc-400 pt-1">
            <span className="text-[11px] font-mono uppercase text-zinc-500 mr-1">Trending Searches:</span>
            {['H7 Direct Plug', 'H7 Wire Extension', 'VW Jetta', 'Pontiac Grand Prix', 'Toyota Camry H11', 'Ford F-150', 'CANbus Flicker', '6000K vs Halogen'].map((kw) => (
              <button
                key={kw}
                onClick={() => {
                  setSearchQuery(kw);
                  setCurrentPage(1);
                }}
                className="px-2.5 py-1 rounded-md bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-sky-300 border border-zinc-800 text-[11px] transition-colors"
              >
                #{kw}
              </button>
            ))}
          </div>
        </div>

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs text-zinc-400 border-t border-zinc-800/80 pt-4">
          <div>
            Showing <span className="font-bold text-white">{paginatedArticles.length}</span> of <span className="font-bold text-sky-400">{filteredArticles.length}</span> articles
            {searchQuery && <span> matching "<span className="text-white">{searchQuery}</span>"</span>}
          </div>
          <div>
            Page <span className="font-bold text-white">{currentPage}</span> of <span className="font-bold text-white">{totalPages}</span>
          </div>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedArticles.map((article) => (
            <article
              key={article.id}
              onClick={() => setActiveArticle(article)}
              className="card-glass rounded-2xl p-6 border border-zinc-800 hover:border-sky-500/50 hover:bg-zinc-900/60 transition-all cursor-pointer flex flex-col justify-between group space-y-4 shadow-lg hover:shadow-sky-500/10"
            >
              <div className="space-y-3">
                {/* Meta header */}
                <div className="flex items-center justify-between gap-2 text-[11px]">
                  <span className="px-2.5 py-0.5 rounded-full bg-sky-500/15 text-sky-300 font-bold border border-sky-400/20 font-mono">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-400">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-sky-300 transition-colors line-clamp-2">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-zinc-400 line-clamp-3 leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-zinc-400 font-mono text-[11px]">
                  <span className="text-sky-400">#{article.id}</span>
                  <span>•</span>
                  <span>{article.socketType || 'LED Kit'}</span>
                </div>
                <div className="text-sky-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 text-xs">
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Empty state */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12 card-glass rounded-2xl border border-zinc-800 space-y-3">
            <BookOpen className="w-8 h-8 text-zinc-500 mx-auto" />
            <h3 className="text-base font-bold text-white">No articles matched your search</h3>
            <p className="text-xs text-zinc-400 max-w-md mx-auto">
              Try searching by socket (e.g. H7, H11, 9005) or car make (Pontiac, VW, Audi, Dodge, Toyota). Or ask our AI Assistant!
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Articles (785)');
              }}
              className="px-4 py-2 rounded-xl bg-zinc-800 text-xs font-bold text-white hover:bg-zinc-700"
            >
              Reset Search
            </button>
          </div>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Quick jump page numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum: number;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`w-9 h-9 rounded-xl text-xs font-bold transition-all border ${
                    currentPage === pageNum
                      ? 'bg-sky-500 text-zinc-950 border-sky-400 shadow-md shadow-sky-500/20'
                      : 'bg-zinc-900 text-zinc-400 border-zinc-800 hover:text-white'
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white disabled:opacity-30 disabled:pointer-events-none transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

      </div>

      {/* Full Article Reader Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-3xl card-glass p-6 sm:p-8 rounded-2xl border border-zinc-700 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            {/* Modal Navigation */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded bg-sky-500 text-zinc-950 font-black text-xs font-mono">
                    Article #{activeArticle.id}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-zinc-800 text-sky-300 text-xs font-bold">
                    {activeArticle.category}
                  </span>
                  <span className="text-zinc-400 text-xs flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {activeArticle.readTime}
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white font-heading pt-2 leading-snug">
                  {activeArticle.title}
                </h2>
                <div className="text-xs text-zinc-400 flex items-center gap-2 pt-1">
                  <span>By <strong>{activeArticle.author}</strong></span>
                  <span>•</span>
                  <span>Published {activeArticle.publishDate}</span>
                </div>
              </div>

              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors border border-zinc-800 shrink-0"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Article Summary Callout */}
            <div className="p-4 rounded-xl bg-sky-950/30 border border-sky-500/30 text-xs text-sky-200 leading-relaxed">
              <strong className="block text-sky-300 mb-1 font-mono uppercase tracking-wide">Guide Overview:</strong>
              {activeArticle.summary}
            </div>

            {/* Article Body Content */}
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed font-sans">
              {activeArticle.content.map((p, idx) => (
                <p key={idx} className="text-zinc-300">
                  {p}
                </p>
              ))}
            </div>

            {/* Technical Fitment Box */}
            <div className="p-4 rounded-xl bg-zinc-900 border border-zinc-800 space-y-3">
              <h4 className="text-xs font-bold uppercase text-zinc-400 tracking-wider flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-sky-400" />
                <span>Featured Bulb Specifications for this Guide:</span>
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block font-mono">SOCKET</span>
                  <span className="font-bold text-sky-300">{activeArticle.socketType || 'H11 / Universal'}</span>
                </div>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block font-mono">COLOR TEMP</span>
                  <span className="font-bold text-white">6000K Diamond White</span>
                </div>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block font-mono">PRICE</span>
                  <span className="font-bold text-emerald-400">$40 Flat / Pair</span>
                </div>
                <div className="p-2 rounded bg-zinc-950/60 border border-zinc-800">
                  <span className="text-[10px] text-zinc-400 block font-mono">SHIPPING</span>
                  <span className="font-bold text-white">100% FREE ($0)</span>
                </div>
              </div>
            </div>

            {/* Article Tags */}
            <div className="flex items-center gap-1.5 flex-wrap">
              <Tag className="w-3.5 h-3.5 text-zinc-500" />
              {activeArticle.tags.map((t, idx) => (
                <span key={idx} className="text-[11px] px-2 py-0.5 rounded bg-zinc-900 text-zinc-400 border border-zinc-800">
                  #{t}
                </span>
              ))}
            </div>

            {/* Modal Bottom CTA */}
            <div className="pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <div className="text-xs text-zinc-400">
                <span>Direct Cash App Tag: </span>
                <strong className="text-emerald-400 font-mono text-sm">$muahz26</strong>
                <span className="block text-[11px] text-zinc-400">Customer Satisfaction Guarantee & Free Replacement</span>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenAiChat();
                  }}
                  className="px-4 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs border border-zinc-700 transition-colors text-center"
                >
                  Ask AI About {activeArticle.socketType || 'Bulbs'}
                </button>

                <button
                  onClick={() => {
                    setActiveArticle(null);
                    onOpenCashAppModal();
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-emerald-600/20"
                >
                  <span>Order Pair ($40 Flat • Free Shipping)</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
