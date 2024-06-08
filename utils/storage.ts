'use client';
import type { BusRoute } from '@/types';

const LOCAL_STORAGE_KEY = 'last_saved_bus_route';

export const getSavedBusRoute = (): BusRoute | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const savedBusRoute = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedBusRoute) {
    return null;
  }

  try {
    return JSON.parse(savedBusRoute);
  } catch {
    return null;
  }
};

export const saveBusRoute = (busRoute: BusRoute) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(busRoute));
};
