'use client';
import { create } from 'zustand';
import type { BusRoute, FavoriteBus } from '@/types';
import { getSavedFavorites, makeFavoriteBusKey, saveFavorites } from './utils';

interface FavoritesState {
  favorites: FavoriteBus;
  addFavorite: (bus: BusRoute) => void;
  removeFavorite: (bus: BusRoute) => void;
  hasFavorite: (bus: BusRoute | null) => boolean;
}

/**
 * 즐겨찾기 버스 목록을 사용한다.
 * 즐겨찾기는 최대 10개까지 등록할 수 있다.
 */
const useFavorites = create<FavoritesState>((set, get) => ({
  favorites: (() => {
    const savedFavorites = getSavedFavorites();
    if (!savedFavorites) {
      return {};
    }

    return savedFavorites;
  })(),
  addFavorite: (bus: BusRoute) => {
    const currentCount = Object.keys(get().favorites).length;
    if (currentCount >= 10) {
      return;
    }

    const key = makeFavoriteBusKey(bus);
    if (!key) {
      return;
    }

    const exists = Boolean(get().favorites[key]);
    if (exists) {
      return;
    }

    const newFavorites = {
      ...get().favorites,
      [key]: { ...bus },
    };

    set(() => ({
      favorites: newFavorites,
    }));

    saveFavorites(newFavorites);
  },
  removeFavorite: (bus: BusRoute) => {
    const targetKey = makeFavoriteBusKey(bus);
    if (!targetKey) {
      return null;
    }

    const exists = Boolean(get().favorites[targetKey]);
    if (!exists) {
      return;
    }

    const newFavorites = { ...get().favorites };
    delete newFavorites[targetKey];

    set(() => ({
      favorites: newFavorites,
    }));

    saveFavorites(newFavorites);
  },
  hasFavorite: (bus: BusRoute | null) => {
    const targetKey = makeFavoriteBusKey(bus);
    if (!targetKey) {
      return false;
    }

    const exists = Boolean(get().favorites[targetKey]);
    return exists;
  },
}));

export default useFavorites;
