import type { BusRoute, FavoriteBusKey } from '@/types';

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
