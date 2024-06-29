import { useEffect, useRef, useState, type MutableRefObject } from 'react';
import type { LatLng } from '@/types';
import { SEOUL_LOCATION_INFO } from './constants';

type UseKakaoMapReturns = [
  kakao.maps.Map | null,
  MutableRefObject<HTMLDivElement | null>,
];

/**
 * 카카오 맵을 사용한다.
 * 초기 값들이 설정된 카카오 맵 인스턴스를 만들어 리턴한다.
 * @param initLocation - 초기 맵 위치
 * @param initLevel - 초기 맵 확대/축소 레벨
 * @returns 카카오 맵 인스턴스와 컨테이너 레퍼런스
 * - map: 카카오 맵 인스턴스. 아직 할당하지 않았다면 null.
 * - mapContainerRef: 맵 컨테이너 레퍼런스. 아직 설정하지 않았다면 null.
 */
const useKakaoMap = (
  initLocation: LatLng | null,
  initLevel = 2,
): UseKakaoMapReturns => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    const containerEl = mapContainerRef.current;
    if (!window.kakao.maps || !containerEl || map) {
      return;
    }

    window.kakao.maps.load(() => {
      const location = initLocation ? initLocation : SEOUL_LOCATION_INFO;
      const mapOptions = {
        center: new window.kakao.maps.LatLng(location.lat, location.lng),
        level: initLevel,
      };

      const mapInstance = new window.kakao.maps.Map(containerEl, mapOptions);
      setMap(mapInstance);
    });

    return () => {
      setMap(null);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [map, mapContainerRef];
};

export default useKakaoMap;
