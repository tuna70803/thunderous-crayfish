'use client';
import type { BusRoute, FavoriteBus, FavoriteBusKey } from '@/types';

/**
 * 즐겨찾기 버스 키를 만든다.
 * @param bus - 버스 정보
 * @returns 즐겨찾기 버스 키. 버스 정보가 유효하지 않으면 null.
 */
export const makeFavoriteBusKey = (
  bus: BusRoute | null,
): FavoriteBusKey | null => {
  if (!bus) {
    return null;
  }

  if (!bus.stationId || !bus.routeId) {
    return null;
  }

  return `${bus.stationId}-${bus.routeId}`;
};

/**
 * 즐겨찾기 로컬 저장소 키
 */
const FAVORITES_LOCAL_STORAGE_KEY = 'favorite_buses';

/**
 * 즐겨찾기 버스 목록을 로컬 스토리지에 저장한다.
 * @param favorites - 저장할 즐겨찾기 버스 목록
 */
export const saveFavorites = (favorites: FavoriteBus) => {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.setItem(FAVORITES_LOCAL_STORAGE_KEY, JSON.stringify(favorites));
};

/**
 * 로컬 스토리지에 저장한 즐겨찾기 버스 목록을 읽어와 리턴한다.
 * @returns 저장한 즐겨찾기 버스 목록 맵. 저장한 내용이 없거나 에러시에는 null.
 */
export const getSavedFavorites = (): FavoriteBus | null => {
  if (typeof window === 'undefined') {
    return null;
  }

  const savedFavorites = localStorage.getItem(FAVORITES_LOCAL_STORAGE_KEY);
  if (!savedFavorites) {
    return null;
  }

  try {
    return JSON.parse(savedFavorites);
  } catch {
    return null;
  }
};
