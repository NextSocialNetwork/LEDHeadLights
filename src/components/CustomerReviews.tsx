import React, { useState, useMemo } from 'react';
import { 
  Star, 
  CheckCircle2, 
  ThumbsUp, 
  Search, 
  Filter, 
  Car, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  Zap,
  Plus,
  X
} from 'lucide-react';
import { LanguageCode } from '../types';
import { ALL_CUSTOMER_REVIEWS, REVIEWS_COUNT, AVERAGE_RATING, CustomerReview } from '../data/reviewsData';
import { OWNER_CONTACT } from '../data/bulbsData';

interface CustomerReviewsProps {
  currentLang: LanguageCode;
  onOpenCashAppModal: () => void;
  onOpenAiChat: () => void;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({
  currentLang,
  onOpenCashAppModal,
  onOpenAiChat,
}) => {
  const [selectedMake, setSelectedMake] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [helpfulVotes, setHelpfulVotes] = useState<Record<string, number>>({});
  const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
  const [userSubmittedReviews, setUserSubmittedReviews] = useState<CustomerReview[]>([]);
  const [newReviewForm, setNewReviewForm] = useState({
    name: '',
    location: '',
    vehicle: '',
    socket: 'H11',
    title: '',
    review: '',
    switchedFrom: 'Stock OEM Halogens',
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const reviewsPerPage = 9;

  // Combine default 289 reviews with any reviews submitted in this session
  const allReviewsList = useMemo(() => {
    return [...userSubmittedReviews, ...ALL_CUSTOMER_REVIEWS];
  }, [userSubmittedReviews]);

  // Distinct vehicle brands requested by user
  const POPULAR_MAKES = [
    'All',
    'Pontiac',
    'VW',
    'Audi',
    'Nissan',
    'BMW',
    'Mercedes',
    'Buick',
    'Dodge',
    'Ford',
    'Chrysler',
    'Mitsubishi',
    'Toyota',
    'Infiniti',
    'Lexus',
    'Honda',
    'GMC',
    'Chevrolet',
    'Jeep',
    'Subaru'
  ];

  // Filter reviews
  const filteredReviews = useMemo(() => {
    return allReviewsList.filter((rev) => {
      const matchesMake = 
        selectedMake === 'All' || 
        rev.make.toLowerCase() === selectedMake.toLowerCase() ||
        (selectedMake === 'VW' && (rev.make.toLowerCase() === 'vw' || rev.make.toLowerCase() === 'volkswagen')) ||
        (selectedMake === 'Mercedes' && (rev.make.toLowerCase().includes('mercedes')));

      const text = `${rev.author} ${rev.location} ${rev.vehicle} ${rev.make} ${rev.socket} ${rev.title} ${rev.review} ${rev.switchedFrom}`.toLowerCase();
      const matchesSearch = searchQuery === '' || text.includes(searchQuery.toLowerCase());

      return matchesMake && matchesSearch;
    });
  }, [allReviewsList, selectedMake, searchQuery]);

  const totalPages = Math.ceil(filteredReviews.length / reviewsPerPage) || 1;
  const paginatedReviews = filteredReviews.slice(
    (currentPage - 1) * reviewsPerPage,
    currentPage * reviewsPerPage
  );

  const handleHelpfulClick = (id: string, initialCount: number) => {
    setHelpfulVotes((prev) => {
      const current = prev[id] !== undefined ? prev[id] : initialCount;
      return { ...prev, [id]: current + 1 };
    });
  };

  const handleMakeChange = (make: string) => {
    setSelectedMake(make);
    setCurrentPage(1);
  };

  const handleSearchChange = (q: string) => {
    setSearchQuery(q);
    setCurrentPage(1);
  };

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewForm.name || !newReviewForm.review) return;

    const newRev: CustomerReview = {
      id: `rev-user-${Date.now()}`,
      author: newReviewForm.name,
      location: newReviewForm.location || 'United States',
      rating: 5,
      date: 'Just now',
      vehicle: newReviewForm.vehicle || 'Vehicle Halogen Replacement',
      make: newReviewForm.vehicle.split(' ')[0] || 'Custom',
      socket: `${newReviewForm.socket} Mini LED`,
      title: newReviewForm.title || 'Switched from Halogen to 6000K LED',
      review: newReviewForm.review,
      switchedFrom: newReviewForm.switchedFrom || 'Factory Yellow Halogens',
      verifiedBuyer: true,
      helpfulCount: 1,
    };

    setUserSubmittedReviews([newRev, ...userSubmittedReviews]);
    setSubmitSuccess(true);
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitModalOpen(false);
      setNewReviewForm({
        name: '',
        location: '',
        vehicle: '',
        socket: 'H11',
        title: '',
        review: '',
        switchedFrom: 'Stock OEM Halogens',
      });
    }, 1800);
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">
        
        {/* Header with 5.0 Rating Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Verified Customer Reviews
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading">
            289 Five-Star Reviews
          </h2>

          <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
            Real feedback from <strong>289 verified drivers</strong> who threw away their dim yellow OEM halogens and upgraded to <strong>6000K Diamond White Mini LEDs</strong>.
          </p>

          {/* Rating Summary Card */}
          <div className="card-glass p-5 rounded-2xl border border-zinc-800 max-w-2xl mx-auto mt-6">
            <div className="flex flex-col sm:flex-row items-center justify-around gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-zinc-800">
              
              {/* Star Score */}
              <div className="flex flex-col items-center">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-3xl font-black text-white font-heading mt-1">
                  5.0 <span className="text-sm font-normal text-zinc-400">/ 5.0</span>
                </div>
                <span className="text-xs text-sky-400 font-bold mt-0.5">
                  100% 5-Star Rating (289 Reviews)
                </span>
              </div>

              {/* Highlights */}
              <div className="pt-3 sm:pt-0 sm:pl-6 space-y-1 text-xs text-left text-zinc-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>100%</strong> of drivers reported superior night visibility</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>8-12 min</strong> average plug & play DIY install time</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>0</strong> glare complaints • Sharp halogen focal cutoff</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span><strong>$40 Flat</strong> set price • 100% FREE Tracked Shipping</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="space-y-4 max-w-5xl mx-auto">
          {/* Search input + Write Review button */}
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                placeholder="Search reviews (e.g. F-150, Grand Prix, Jetta, Civic, rain, deer, 10 min)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-zinc-900 border border-zinc-700 text-white placeholder-zinc-500 text-xs sm:text-sm focus:outline-none focus:border-sky-400"
              />
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={() => setIsSubmitModalOpen(true)}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-sky-500/15 hover:bg-sky-500/25 text-sky-300 font-bold text-xs border border-sky-400/30 transition-colors flex items-center justify-center gap-1.5 shrink-0"
              >
                <Plus className="w-4 h-4" />
                <span>Write a Review</span>
              </button>

              <button
                onClick={onOpenCashAppModal}
                className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs transition-colors flex items-center justify-center gap-1.5 shrink-0 shadow-lg shadow-emerald-950/40"
              >
                <span>Order $40 Flat</span>
              </button>
            </div>
          </div>

          {/* Quick Vehicle Brand Pills */}
          <div className="space-y-1.5">
            <div className="text-[11px] font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
              <Car className="w-3.5 h-3.5 text-sky-400" />
              Filter by Vehicle Brand:
            </div>
            <div className="flex gap-1.5 overflow-x-auto pb-2 scrollbar-none sm:flex-wrap">
              {POPULAR_MAKES.map((make) => (
                <button
                  key={make}
                  onClick={() => handleMakeChange(make)}
                  className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border shrink-0 ${
                    selectedMake.toLowerCase() === make.toLowerCase()
                      ? 'bg-sky-500 text-zinc-950 border-sky-400 shadow-md shadow-sky-500/20'
                      : 'bg-zinc-900/90 text-zinc-300 border-zinc-800 hover:border-zinc-700 hover:text-white'
                  }`}
                >
                  {make}
                </button>
              ))}
            </div>
          </div>

          {/* Filter status & counter */}
          <div className="flex items-center justify-between text-xs text-zinc-400 pt-1">
            <span>
              Showing <strong className="text-white">{filteredReviews.length}</strong> of {allReviewsList.length} reviews
              {selectedMake !== 'All' && <span> for <strong>{selectedMake}</strong></span>}
            </span>
            <span>
              Page {currentPage} of {totalPages}
            </span>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {paginatedReviews.map((rev) => {
            const currentHelpful = helpfulVotes[rev.id] !== undefined ? helpfulVotes[rev.id] : rev.helpfulCount;

            return (
              <div
                key={rev.id}
                className="card-glass p-5 rounded-2xl border border-zinc-800 flex flex-col justify-between space-y-4 hover:border-sky-500/40 transition-all card-glass-hover"
              >
                {/* Review Card Header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-zinc-400 font-mono">
                      {rev.date}
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white font-heading leading-snug">
                    "{rev.title}"
                  </h4>

                  <p className="text-xs text-zinc-300 leading-relaxed">
                    {rev.review}
                  </p>
                </div>

                {/* Review Card Meta */}
                <div className="pt-3 border-t border-zinc-800/80 space-y-2.5">
                  <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-zinc-800/90 text-[11px] space-y-1">
                    <div className="flex items-center justify-between text-zinc-300 font-medium">
                      <span className="text-zinc-400 flex items-center gap-1">
                        <Car className="w-3 h-3 text-sky-400" />
                        Vehicle:
                      </span>
                      <strong className="text-white">{rev.vehicle}</strong>
                    </div>
                    <div className="flex items-center justify-between text-zinc-400 text-[10px]">
                      <span>Socket:</span>
                      <span className="font-mono text-sky-300 font-bold">{rev.socket}</span>
                    </div>
                    <div className="text-[10px] text-zinc-400 truncate">
                      <span className="text-zinc-500">Switched from: </span>
                      <span className="text-amber-300/80">{rev.switchedFrom}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs pt-1">
                    <div className="space-y-0.5">
                      <div className="font-bold text-white flex items-center gap-1">
                        <span>{rev.author}</span>
                        <span title="Verified Purchase">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                        </span>
                      </div>
                      <span className="text-[10px] text-zinc-400 block">
                        {rev.location}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleHelpfulClick(rev.id, rev.helpfulCount)}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-sky-300 text-[11px] font-medium flex items-center gap-1 border border-zinc-800 transition-colors"
                      title="Mark as helpful"
                    >
                      <ThumbsUp className="w-3 h-3 text-sky-400" />
                      <span>{currentHelpful}</span>
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 pt-6">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous Page"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-1">
              {[...Array(Math.min(totalPages, 7))].map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-8 h-8 rounded-xl text-xs font-bold transition-all ${
                      currentPage === pageNum
                        ? 'bg-sky-500 text-zinc-950 shadow'
                        : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-800 hover:text-white border border-zinc-800'
                    }`}
                  >
                    {pageNum}
                  </button>
                );
              })}
              {totalPages > 7 && <span className="text-zinc-600 px-1">...</span>}
            </div>

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              aria-label="Next Page"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Callout Footer */}
        <div className="card-glass p-6 sm:p-8 rounded-2xl border border-sky-500/30 bg-sky-950/20 max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <span className="text-xs font-mono uppercase tracking-wider text-sky-400 font-bold">
              Ready to Upgrade Your Night Driving?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              Join 289 Happy Drivers — $40 Flat / Pair
            </h3>
            <p className="text-xs text-zinc-300 max-w-lg">
              100% FREE Tracked Shipping (7-14 Business Days) • Customer Satisfaction Guarantee & Free Replacement Included! Pay easily via Cash App (<strong>${OWNER_CONTACT.cashAppHandle}</strong>) or free Chicago pickup.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenCashAppModal}
              className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-black text-xs sm:text-sm tracking-wide transition-all shadow-xl shadow-emerald-500/20 flex items-center gap-2"
            >
              <span>Order on Cash App</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {isSubmitModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative w-full max-w-lg card-glass p-6 rounded-2xl border border-zinc-700 shadow-2xl space-y-4">
            
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <div className="space-y-0.5">
                <span className="text-[10px] uppercase font-bold text-sky-400 font-mono">Customer Feedback</span>
                <h3 className="text-lg font-bold text-white font-heading">
                  Share Your Halogen-to-LED Experience
                </h3>
              </div>
              <button
                onClick={() => setIsSubmitModalOpen(false)}
                className="p-1.5 rounded-lg bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submitSuccess ? (
              <div className="py-8 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Review Added Successfully!</h4>
                <p className="text-xs text-zinc-400">Thank you for sharing your experience with our 6000K Mini LEDs.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-3 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-400 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. David M."
                      value={newReviewForm.name}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">City, State</label>
                    <input
                      type="text"
                      placeholder="e.g. Chicago, IL"
                      value={newReviewForm.location}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-400 mb-1">Vehicle (Year & Model) *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2017 Ford F-150"
                      value={newReviewForm.vehicle}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, vehicle: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1">Bulb Socket</label>
                    <select
                      value={newReviewForm.socket}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, socket: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                    >
                      <option value="H11">H11 (#1 Best Seller)</option>
                      <option value="H7">H7 (German & Domestic)</option>
                      <option value="9005">9005 (High Beam Powerhouse)</option>
                      <option value="H4">H4 / 9003 (Dual Beam)</option>
                      <option value="H8">H8 (Fog & Low)</option>
                      <option value="H1">H1 (Single Beam)</option>
                      <option value="H3">H3 (Fog / Aux)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">Switched From</label>
                  <input
                    type="text"
                    placeholder="e.g. Factory Yellow Halogens"
                    value={newReviewForm.switchedFrom}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, switchedFrom: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">Review Headline</label>
                  <input
                    type="text"
                    placeholder="e.g. Night and day difference over stock halogens!"
                    value={newReviewForm.title}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1">Your Review *</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="How was the 10-minute install? How does the 6000K diamond white look compared to your old halogens?"
                    value={newReviewForm.review}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, review: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-700 text-white focus:outline-none focus:border-sky-400"
                  />
                </div>

                <div className="flex items-center gap-1 text-amber-400 text-xs py-1">
                  <span>Rating:</span>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                  <span className="text-zinc-400 ml-1">(5.0 Stars)</span>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold transition-colors"
                >
                  Submit Review
                </button>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
};
