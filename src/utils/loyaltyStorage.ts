export interface LoyaltyOrderRecord {
  confirmationNumber: string;
  itemsSummary: string;
  total: number;
  date: string;
}

export interface LoyaltyState {
  orderCount: number;
  isRepeatBuyer: boolean;
  manualOverrideActive: boolean;
  orders: LoyaltyOrderRecord[];
}

const STORAGE_KEY = 'led_bulbs_repeat_buyer_loyalty_v1';
const LOYALTY_EVENT = 'led-loyalty-updated';

export const REPEAT_BUYER_DISCOUNT_PER_PAIR = 5; // $5.00 OFF per pair
export const REPEAT_BUYER_BONUS_ITEM = 'Free Pair of 6000K LED T10 Interior/License Plate Bulbs';

export function getLoyaltyState(): LoyaltyState {
  if (typeof window === 'undefined') {
    return { orderCount: 0, isRepeatBuyer: false, manualOverrideActive: false, orders: [] };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return { orderCount: 0, isRepeatBuyer: false, manualOverrideActive: false, orders: [] };
    }
    const parsed = JSON.parse(raw);
    const orderCount = typeof parsed.orderCount === 'number' ? parsed.orderCount : 0;
    const manualOverrideActive = Boolean(parsed.manualOverrideActive);
    const isRepeatBuyer = orderCount > 0 || manualOverrideActive;
    return {
      orderCount,
      isRepeatBuyer,
      manualOverrideActive,
      orders: Array.isArray(parsed.orders) ? parsed.orders : [],
    };
  } catch (e) {
    console.error('Error reading loyalty state:', e);
    return { orderCount: 0, isRepeatBuyer: false, manualOverrideActive: false, orders: [] };
  }
}

export function saveLoyaltyState(state: Partial<LoyaltyState>): LoyaltyState {
  if (typeof window === 'undefined') {
    return { orderCount: 0, isRepeatBuyer: false, manualOverrideActive: false, orders: [] };
  }
  try {
    const current = getLoyaltyState();
    const updated: LoyaltyState = {
      ...current,
      ...state,
    };
    updated.isRepeatBuyer = updated.orderCount > 0 || updated.manualOverrideActive;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    window.dispatchEvent(new CustomEvent(LOYALTY_EVENT, { detail: updated }));
    return updated;
  } catch (e) {
    console.error('Error saving loyalty state:', e);
    return getLoyaltyState();
  }
}

export function recordLoyaltyOrder(confirmationNumber: string, itemsSummary: string, total: number): LoyaltyState {
  const current = getLoyaltyState();
  const newRecord: LoyaltyOrderRecord = {
    confirmationNumber,
    itemsSummary,
    total,
    date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
  };
  const updatedOrders = [newRecord, ...current.orders.filter(o => o.confirmationNumber !== confirmationNumber)];
  return saveLoyaltyState({
    orderCount: current.orderCount + 1,
    orders: updatedOrders,
    manualOverrideActive: true,
  });
}

export function toggleManualRepeatBuyer(forceState?: boolean): LoyaltyState {
  const current = getLoyaltyState();
  const nextOverride = typeof forceState === 'boolean' ? forceState : !current.isRepeatBuyer;
  return saveLoyaltyState({
    manualOverrideActive: nextOverride,
    orderCount: nextOverride && current.orderCount === 0 ? 1 : current.orderCount,
  });
}

export function resetLoyaltyState(): LoyaltyState {
  if (typeof window === 'undefined') {
    return { orderCount: 0, isRepeatBuyer: false, manualOverrideActive: false, orders: [] };
  }
  localStorage.removeItem(STORAGE_KEY);
  const empty: LoyaltyState = { orderCount: 0, isRepeatBuyer: false, manualOverrideActive: false, orders: [] };
  window.dispatchEvent(new CustomEvent(LOYALTY_EVENT, { detail: empty }));
  return empty;
}

export function subscribeToLoyaltyUpdates(callback: (state: LoyaltyState) => void): () => void {
  if (typeof window === 'undefined') return () => {};
  const handler = (e: Event) => {
    const custom = e as CustomEvent<LoyaltyState>;
    callback(custom.detail || getLoyaltyState());
  };
  window.addEventListener(LOYALTY_EVENT, handler);
  return () => window.removeEventListener(LOYALTY_EVENT, handler);
}
