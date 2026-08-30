import { CurrencyCode, CurrencyConfig } from '../types/travel';
import { CURRENCIES } from '../data/travelData';

export function formatPrice(amountUSD: number, currencyCode: CurrencyCode = 'USD'): string {
  const config: CurrencyConfig = CURRENCIES[currencyCode] || CURRENCIES.USD;
  const converted = amountUSD * config.rateFromUSD;
  
  if (config.code === 'JPY') {
    return `${config.symbol}${Math.round(converted).toLocaleString()}`;
  }
  
  return `${config.symbol}${Math.round(converted).toLocaleString()}`;
}

export function generateBookingRef(): string {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  let ref = 'TV-';
  for (let i = 0; i < 6; i++) {
    ref += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return ref;
}

export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return dateString;
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}
