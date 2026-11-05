/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BulbListing, CartItem, LanguageCode, SocketType } from './types';
import { BULB_LISTINGS, OWNER_CONTACT } from './data/bulbsData';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProductListings } from './components/ProductListings';
import { BulbFinder } from './components/BulbFinder';
import { CustomerReviews } from './components/CustomerReviews';
import { BeamComparison } from './components/BeamComparison';
import { SpecsOverview } from './components/SpecsOverview';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { CartDrawer } from './components/CartDrawer';
import { CashAppOrderModal } from './components/CashAppOrderModal';
import { AiChatSupport } from './components/AiChatSupport';

export default function App() {
  const [currentLang, setCurrentLang] = useState<LanguageCode>('en');
  const [cart, setCart] = useState<CartItem[]>([
    // Initialize with H11 (#1 best seller) as a default cart sample
    { bulb: BULB_LISTINGS.find((b) => b.id === 'H11') || BULB_LISTINGS[6], quantity: 1 },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCashAppModalOpen, setIsCashAppModalOpen] = useState(false);
  const [isAiChatOpen, setIsAiChatOpen] = useState(false);
  const [selectedSocketId, setSelectedSocketId] = useState<SocketType | null>(null);

  // Add bulb to cart
  const handleAddToCart = (bulb: BulbListing) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.bulb.id === bulb.id);
      if (existing) {
        return prev.map((item) =>
          item.bulb.id === bulb.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { bulb, quantity: 1 }];
    });
  };

  // Quick Buy (adds item and opens Cash App modal immediately)
  const handleQuickBuy = (bulb: BulbListing) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.bulb.id === bulb.id);
      if (existing) {
        return prev;
      }
      return [...prev, { bulb, quantity: 1 }];
    });
    setIsCashAppModalOpen(true);
  };

  const handleUpdateQuantity = (socketId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(socketId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.bulb.id === socketId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (socketId: string) => {
    setCart((prev) => prev.filter((item) => item.bulb.id !== socketId));
  };

  const handleSelectSocket = (socket: SocketType) => {
    setSelectedSocketId(socket);
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-sky-500 selection:text-black">
      {/* Navigation Bar */}
      <Navbar
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        cart={cart}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenAiChat={() => setIsAiChatOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          currentLang={currentLang}
          onOpenBulbFinder={() => {
            const el = document.getElementById('finder');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onOpenAiChat={() => setIsAiChatOpen(true)}
          onOpenCashAppModal={() => setIsCashAppModalOpen(true)}
        />

        {/* Separate Listings for H1, H3, H4/9003/HB2, H7, 9005/HB5, H8, H11 ($35.00 each pair) */}
        <ProductListings
          currentLang={currentLang}
          selectedSocketId={selectedSocketId}
          onAddToCart={handleAddToCart}
          onQuickBuy={handleQuickBuy}
        />

        {/* Vehicle Bulb Finder */}
        <BulbFinder
          currentLang={currentLang}
          onSelectSocket={handleSelectSocket}
          onOpenAiChat={() => setIsAiChatOpen(true)}
        />

        {/* 258 5-Star Reviews from Drivers Who Switched from Halogen to LED */}
        <CustomerReviews currentLang={currentLang} />

        {/* 6000K vs Stock Halogen Night Road Comparison */}
        <BeamComparison currentLang={currentLang} />

        {/* 1:1 Mini Technology & Engineering Specs */}
        <SpecsOverview currentLang={currentLang} />

        {/* FAQ Section */}
        <FaqSection
          currentLang={currentLang}
          onOpenCashAppModal={() => setIsCashAppModalOpen(true)}
          onOpenAiChat={() => setIsAiChatOpen(true)}
        />
      </main>

      {/* Footer with Owner Contact & Cash App */}
      <Footer
        currentLang={currentLang}
        onSelectLang={setCurrentLang}
        onOpenCashAppModal={() => setIsCashAppModalOpen(true)}
        onOpenAiChat={() => setIsAiChatOpen(true)}
      />

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        currentLang={currentLang}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={() => {
          setIsCartOpen(false);
          setIsCashAppModalOpen(true);
        }}
      />

      {/* Official Cash App Order & Fulfillment Modal */}
      <CashAppOrderModal
        isOpen={isCashAppModalOpen}
        onClose={() => setIsCashAppModalOpen(false)}
        items={cart}
        currentLang={currentLang}
      />

      {/* Floating AI Chat Support Box */}
      <AiChatSupport
        isOpen={isAiChatOpen}
        onToggle={() => setIsAiChatOpen(!isAiChatOpen)}
        currentLang={currentLang}
        onOpenCashAppModal={() => {
          setIsAiChatOpen(false);
          setIsCashAppModalOpen(true);
        }}
      />
    </div>
  );
}
