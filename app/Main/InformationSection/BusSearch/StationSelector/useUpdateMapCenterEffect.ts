import { useEffect, useState } from 'react';
import type { LatLng } from '@/types';

/**
 * 맵 중앙 위치 업데이트를 사용한다.
 * 지정한 위치로 맵의 중앙 위치를 이동시키고,
 * 이 위치에 현위치 마커를 표시한다.
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

  const [centerMarker, setCenterMarker] = useState<kakao.maps.Marker | null>(
    null,
  );

  useEffect(() => {
    if (!map || !location) {
      centerMarker?.setMap(null);
      return;
    }

    if (!centerMarker) {
      const markerImageSrc = '/images/user-position.svg';
      const markerImageSize = new window.kakao.maps.Size(16, 16);
      const markerImageOffset = new window.kakao.maps.Point(8, 8);
      const markerImage = new window.kakao.maps.MarkerImage(
        markerImageSrc,
        markerImageSize,
        { offset: markerImageOffset },
      );

      const marker = new window.kakao.maps.Marker({
        position: new window.kakao.maps.LatLng(location.lat, location.lng),
        image: markerImage,
        title: '내 위치',
      });

      marker.setMap(map);
      setCenterMarker(marker);

      return;
    }

    centerMarker.setPosition(
      new window.kakao.maps.LatLng(location.lat, location.lng),
    );
  }, [map, location, centerMarker]);
};

export default useUpdateMapCenterEffect;
