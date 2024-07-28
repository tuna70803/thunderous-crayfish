'use client';
import { useCallback } from 'react';
import useFavorites from '@/store/favorites';
import type { BusRoute } from '@/types';

/**
 * 버스 즐겨찾기 변경 핸들러를 사용한다.
 * 버스를 즐겨찾기하면 저장소에 저장하고,
 * 즐겨찾기를 해제하면 저장소에서 지운다.
 * @returns 버스 즐겨찾기 변경 핸들러
 */
const useFavoriteChanger = () => {
  const { addFavorite, removeFavorite } = useFavorites((state) => state);
  const favoriteChangeHandler = useCallback(
    (targetBus: Partial<BusRoute>, isFavorited: boolean) => {
      if (isFavorited) {
        removeFavorite(targetBus as BusRoute);
        return;
      }

      addFavorite(targetBus as BusRoute);
    },
    [addFavorite, removeFavorite],
  );

  return favoriteChangeHandler;
};

export default useFavoriteChanger;
