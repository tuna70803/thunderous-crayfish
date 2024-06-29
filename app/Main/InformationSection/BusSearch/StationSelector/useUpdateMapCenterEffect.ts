import { useEffect } from 'react';
import type { LatLng } from '@/types';

/**
 * 맵 중앙 위치 업데이트를 사용한다.
 * @param location - 맵의 중앙으로 업데이트할 위치
 * @param map - Map 인스턴스
 */
const useUpdateMapCenterEffect = (
  location: LatLng | null,
  map: kakao.maps.Map | null,
) => {
  useEffect(() => {
    if (!location) {
      return;
    }

    if (!map) {
      return;
    }

    const newCenter = new window.kakao.maps.LatLng(location.lat, location.lng);
    map.panTo(newCenter);
  }, [location]); // eslint-disable-line react-hooks/exhaustive-deps
};

export default useUpdateMapCenterEffect;
