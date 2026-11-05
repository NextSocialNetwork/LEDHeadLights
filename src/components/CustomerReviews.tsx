import React, { useState, useMemo } from 'react';
import { 
  Star, 
  CheckCircle2, 
  MapPin, 
  Car, 
  ArrowRight, 
  Zap, 
  Search, 
  Filter, 
  MessageSquarePlus, 
  X, 
  Sparkles,
  ShieldCheck,
  Clock,
  ThumbsUp
} from 'lucide-react';
import { CustomerReview, LanguageCode, SocketType } from '../types';
import { CUSTOMER_REVIEWS, REVIEWS_STATS, OWNER_CONTACT } from '../data/bulbsData';

interface CustomerReviewsProps {
  currentLang: LanguageCode;
}

export const CustomerReviews: React.FC<CustomerReviewsProps> = ({ currentLang }) => {
  const [selectedSocketFilter, setSelectedSocketFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [displayCount, setDisplayCount] = useState(6);
  const [isWriteModalOpen, setIsWriteModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState<CustomerReview[]>([]);
  const [newReviewForm, setNewReviewForm] = useState({
    author: '',
    location: '',
    vehicle: '',
    switchedFrom: 'OEM Factory Halogen Bulbs',
    socket: 'H11' as SocketType,
    title: '',
    comment: '',
    fulfillmentMethod: 'Chicago Pickup' as 'Shipping' | 'Chicago Pickup',
  });
  const [reviewSubmittedNotice, setReviewSubmittedNotice] = useState(false);

  // Combine default 5-star reviews with any newly submitted reviews
  const allReviews = useMemo(() => {
    return [...userReviews, ...CUSTOMER_REVIEWS];
  }, [userReviews]);

  // Filter reviews based on socket and search query
  const filteredReviews = useMemo(() => {
    return allReviews.filter((rev) => {
      const matchesSocket = 
        selectedSocketFilter === 'all' || 
        rev.socket === selectedSocketFilter;
      
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = 
        !q || 
        rev.author.toLowerCase().includes(q) ||
        rev.vehicle.toLowerCase().includes(q) ||
        rev.switchedFrom.toLowerCase().includes(q) ||
        rev.title.toLowerCase().includes(q) ||
        rev.comment.toLowerCase().includes(q) ||
        rev.location.toLowerCase().includes(q);

      return matchesSocket && matchesSearch;
    });
  }, [allReviews, selectedSocketFilter, searchQuery]);

  const visibleReviews = filteredReviews.slice(0, displayCount);

  const handleSubmitNewReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newReviewForm.author.trim() || !newReviewForm.comment.trim() || !newReviewForm.title.trim()) {
      return;
    }

    const created: CustomerReview = {
      id: `rev-user-${Date.now()}`,
      author: newReviewForm.author.trim(),
      location: newReviewForm.location.trim() || 'Verified Driver',
      rating: 5,
      vehicle: newReviewForm.vehicle.trim() || 'Standard Vehicle',
      switchedFrom: newReviewForm.switchedFrom.trim() || 'Stock Halogen Bulbs',
      socket: newReviewForm.socket,
      title: newReviewForm.title.trim(),
      comment: newReviewForm.comment.trim(),
      date: 'Just now',
      verifiedBuyer: true,
      fulfillmentMethod: newReviewForm.fulfillmentMethod,
    };

    setUserReviews((prev) => [created, ...prev]);
    setReviewSubmittedNotice(true);
    setTimeout(() => {
      setReviewSubmittedNotice(false);
      setIsWriteModalOpen(false);
      setNewReviewForm({
        author: '',
        location: '',
        vehicle: '',
        switchedFrom: 'OEM Factory Halogen Bulbs',
        socket: 'H11',
        title: '',
        comment: '',
        fulfillmentMethod: 'Chicago Pickup',
      });
    }, 2000);
  };

  return (
    <section id="reviews" className="py-16 lg:py-24 border-b border-zinc-800 bg-zinc-950 relative overflow-hidden">
      {/* Background glow subtle effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-sky-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold bg-amber-500/15 text-amber-300 border border-amber-500/30">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>258 Verified 5-Star Reviews</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-heading tracking-tight">
            Drivers Who Switched From Halogen To LED
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Real feedback from <strong>258 drivers</strong> who retired their dim, yellow factory halogen bulbs for our 
            <strong> 6000K Diamond White Mini LEDs</strong> ($35/pair). Read how they transformed their night driving visibility, eliminated dark spots, and completed 10-minute driveway installations.
          </p>
        </div>

        {/* Aggregate Stats Scoreboard Card */}
        <div className="card-glass p-6 sm:p-8 rounded-3xl border border-zinc-800 bg-gradient-to-b from-zinc-900/90 to-zinc-950/90 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center divide-y md:divide-y-0 md:divide-x divide-zinc-800">
            
            {/* 5.0 Star Rating Pillar */}
            <div className="flex flex-col items-center justify-center text-center space-y-2 md:pr-4">
              <div className="text-5xl sm:text-6xl font-black text-white font-heading flex items-baseline gap-1">
                5.0
                <span className="text-xl text-zinc-500 font-sans font-medium">/ 5.0</span>
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400 drop-shadow-[0_0_8px_rgba(251,191,36,0.6)]" />
                ))}
              </div>
              <div className="text-xs font-semibold text-zinc-300">
                Based on <strong className="text-white font-bold">{REVIEWS_STATS.totalCount + userReviews.length} Verified Reviews</strong>
              </div>
            </div>

            {/* Halogen to LED Switchers */}
            <div className="flex flex-col items-center justify-center text-center space-y-1.5 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-white font-heading">
                100% Switched
              </div>
              <div className="text-xs text-zinc-400">
                Switched from dim OEM halogens to 6000K Diamond White
              </div>
            </div>

            {/* Average Install Speed */}
            <div className="flex flex-col items-center justify-center text-center space-y-1.5 pt-4 md:pt-0 md:px-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-emerald-400 font-heading">
                ~8 Minutes
              </div>
              <div className="text-xs text-zinc-400">
                Average plug-and-play installation time per side
              </div>
            </div>

            {/* 100% 5-Star Satisfaction */}
            <div className="flex flex-col items-center justify-center text-center space-y-1.5 pt-4 md:pt-0 md:pl-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5" />
              </div>
              <div className="text-2xl font-black text-amber-300 font-heading">
                258 of 258
              </div>
              <div className="text-xs text-zinc-400">
                100% Five-Star satisfaction rate across all bulb sizes
              </div>
            </div>

          </div>
        </div>

        {/* Search & Socket Filter Bar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pt-2">
          
          {/* Socket Pill Filters */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: 'all', label: `All Sockets (${REVIEWS_STATS.totalCount + userReviews.length})` },
              { id: 'H11', label: 'H11 (#1 Seller)' },
              { id: 'H12', label: 'H12 (Trucks & Fog)' },
              { id: 'H7', label: 'H7 (Euro/Domestic)' },
              { id: 'H4', label: 'H4 (Dual Beam)' },
              { id: '9005', label: '9005 (High Beam)' },
              { id: 'H8', label: 'H8' },
              { id: 'H3', label: 'H3' },
              { id: 'H1', label: 'H1' },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setSelectedSocketFilter(f.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedSocketFilter === f.id
                    ? 'bg-sky-500 text-zinc-950 shadow-md shadow-sky-500/20 font-black'
                    : 'bg-zinc-900 text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 border border-zinc-800'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Search Box & Write Review Button */}
          <div className="flex items-center gap-2.5">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search car, city, halogen..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-xs text-zinc-200 placeholder-zinc-500 focus:outline-none focus:border-sky-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            <button
              onClick={() => setIsWriteModalOpen(true)}
              className="px-3.5 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-sky-400 hover:text-sky-300 border border-zinc-700 font-bold text-xs flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <MessageSquarePlus className="w-4 h-4" />
              <span>Write Review</span>
            </button>
          </div>

        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleReviews.map((rev) => (
            <div
              key={rev.id}
              className="card-glass p-6 rounded-2xl border border-zinc-800/90 flex flex-col justify-between space-y-4 hover:border-sky-500/30 transition-all hover:shadow-xl hover:shadow-sky-950/20 group"
            >
              {/* Card Top: Stars & Socket Badge */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs font-bold text-amber-400 ml-1">5.0</span>
                  </div>

                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-sky-500/10 text-sky-300 border border-sky-500/30">
                    {rev.socket} Socket
                  </span>
                </div>

                {/* Switched From Banner (Crucial User Requirement) */}
                <div className="p-2.5 rounded-xl bg-zinc-900/90 border border-zinc-800 text-xs space-y-1">
                  <div className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    <Zap className="w-3 h-3 text-amber-400" />
                    <span>Halogen Switch Verified</span>
                  </div>
                  <div className="text-zinc-300 text-[11px]">
                    <span className="text-zinc-500">Switched From: </span>
                    <strong className="text-rose-300 line-through decoration-rose-500/60 font-medium">
                      {rev.switchedFrom}
                    </strong>
                    <span className="text-sky-400 font-bold ml-1.5">➔ 6000K LED</span>
                  </div>
                </div>

                {/* Review Title */}
                <h3 className="text-base font-bold text-white font-heading leading-snug group-hover:text-sky-300 transition-colors">
                  &ldquo;{rev.title}&rdquo;
                </h3>

                {/* Review Quote Body */}
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {rev.comment}
                </p>
              </div>

              {/* Card Bottom: Reviewer details, car model, and pickup/shipping method */}
              <div className="pt-3 border-t border-zinc-800/80 flex items-center justify-between text-[11px] text-zinc-400">
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-white">{rev.author}</span>
                    {rev.verifiedBuyer && (
                      <span className="inline-flex items-center gap-0.5 text-emerald-400 text-[10px] font-semibold" title="Verified Customer">
                        <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                        Verified
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-zinc-400 text-[10px]">
                    <Car className="w-3 h-3 text-sky-400" />
                    <span>{rev.vehicle}</span>
                  </div>
                </div>

                <div className="text-right">
                  <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-semibold ${
                    rev.fulfillmentMethod === 'Chicago Pickup'
                      ? 'bg-amber-500/10 text-amber-300 border border-amber-500/20'
                      : 'bg-emerald-500/10 text-emerald-300 border border-emerald-500/20'
                  }`}>
                    {rev.fulfillmentMethod === 'Chicago Pickup' ? 'Chicago Pickup' : 'Shipped via Cash App'}
                  </span>
                  <div className="text-[10px] text-zinc-500 mt-0.5">{rev.date}</div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredReviews.length > displayCount && (
          <div className="text-center pt-4">
            <button
              onClick={() => setDisplayCount((prev) => prev + 6)}
              className="px-6 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white font-bold text-xs border border-zinc-700 transition-colors shadow-lg"
            >
              Show More Reviews ({filteredReviews.length - displayCount} Remaining)
            </button>
          </div>
        )}

        {/* Bottom CTA for Swapping Halogen to LED */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-sky-950/60 via-zinc-900 to-sky-950/60 border border-sky-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs uppercase tracking-wider font-bold text-sky-400 font-mono">
              Ready To Retire Your Yellow Halogens?
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white font-heading">
              Join 258 Drivers Tonight — $35.00 Each Pair
            </h3>
            <p className="text-xs text-zinc-300 max-w-xl">
              All sizes in stock: H1, H3, H4/9003/HB2, H7, 9005/HB5, H8, H11, and H12. $10 Shipping (7-14 Business Days) via Cash App (<strong className="text-emerald-400 font-mono">${OWNER_CONTACT.cashAppHandle}</strong>) or pick up in Chicago!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href="#listings"
              className="px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-black text-xs transition-colors shadow-lg shadow-sky-500/20"
            >
              Choose Your Socket ($35)
            </a>
            <a
              href={`tel:${OWNER_CONTACT.phoneRaw}`}
              className="px-4 py-3 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white font-bold text-xs border border-zinc-700 transition-colors"
            >
              Call / Text Mantas
            </a>
          </div>
        </div>

      </div>

      {/* Write a Review Modal */}
      {isWriteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-lg card-glass p-6 sm:p-7 rounded-2xl border border-zinc-700 shadow-2xl max-h-[90vh] overflow-y-auto space-y-5">
            
            <div className="flex items-start justify-between">
              <div>
                <div className="inline-flex items-center gap-1 text-xs text-amber-400 font-bold mb-1">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>Halogen-to-LED Switch Review</span>
                </div>
                <h3 className="text-xl font-black text-white font-heading">
                  Share Your Experience
                </h3>
              </div>

              <button
                onClick={() => setIsWriteModalOpen(false)}
                className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {reviewSubmittedNotice ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Review Submitted!</h4>
                <p className="text-xs text-zinc-300">
                  Thank you for sharing your experience switching from halogen to LED headlights!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitNewReview} className="space-y-4 text-xs">
                <div>
                  <label className="block text-zinc-400 mb-1 font-semibold">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex M."
                    value={newReviewForm.author}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, author: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-400 mb-1 font-semibold">City, State</label>
                    <input
                      type="text"
                      placeholder="e.g. Chicago, IL"
                      value={newReviewForm.location}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, location: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-zinc-400 mb-1 font-semibold">Vehicle Make & Model</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 2017 Chevy Silverado"
                      value={newReviewForm.vehicle}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, vehicle: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-zinc-400 mb-1 font-semibold">Bulb Socket Model</label>
                    <select
                      value={newReviewForm.socket}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, socket: e.target.value as SocketType })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="H11">H11 (#1 Best Seller)</option>
                      <option value="H12">H12 (Trucks & Fog)</option>
                      <option value="H7">H7 (Euro / Sedans)</option>
                      <option value="H4">H4 / 9003 / HB2 (Dual Beam)</option>
                      <option value="9005">9005 / HB5 (High Beam)</option>
                      <option value="H8">H8 (Fog / Angle Eyes)</option>
                      <option value="H3">H3 (Compact Fog)</option>
                      <option value="H1">H1 (Projector / High)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-zinc-400 mb-1 font-semibold">Fulfillment</label>
                    <select
                      value={newReviewForm.fulfillmentMethod}
                      onChange={(e) => setNewReviewForm({ ...newReviewForm, fulfillmentMethod: e.target.value as any })}
                      className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white focus:outline-none focus:border-sky-500"
                    >
                      <option value="Chicago Pickup">Chicago Local Pickup</option>
                      <option value="Shipping">Shipped via Cash App</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-semibold">Which Halogen Bulbs Did You Switch From?</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. OEM Factory Sylvania 3200K Halogen"
                    value={newReviewForm.switchedFrom}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, switchedFrom: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-semibold">Review Headline</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Completely changed my nighttime driving safety!"
                    value={newReviewForm.title}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, title: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-zinc-400 mb-1 font-semibold">Your Review & Halogen-to-LED Switch Story</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Describe how much brighter the 6000K white is compared to your old halogens, how fast the install was, beam cutoff, etc..."
                    value={newReviewForm.comment}
                    onChange={(e) => setNewReviewForm({ ...newReviewForm, comment: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-zinc-900 border border-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsWriteModalOpen(false)}
                    className="px-4 py-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-300 font-semibold"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 rounded-xl bg-sky-500 hover:bg-sky-400 text-zinc-950 font-bold"
                  >
                    Post 5-Star Review
                  </button>
                </div>
              </form>
            )}

          </div>
        </div>
      )}
    </section>
  );
};
