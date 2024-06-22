import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { StationInfo } from './types';
import { LatLng } from '@/types';
import { SEOUL_LOCATION_INFO } from './constants';

interface KakaoMapProps {
  className?: string;
  currentLocation: LatLng | null;
  stations: StationInfo[];
  onStationSelect: (stationId: string) => void;
}

/**
 * 카카오 맵 컴포넌트
 * 카카오 맵 SDK를 사용해서 지도를 표시한다.
 * 전달받은 버스 정류소를 지도위에 마커로 표시한다.
 * @param className - 컴포넌트에 적용할 class name
 * @param currentLocation - 현재 위치 정보 (위도, 경도)
 * @param stations - 버스 정류장 목록
 * @param onStationSelect - 버스 정류장 선택 이벤트 핸들러
 */
const KakaoMap = ({
  className,
  currentLocation,
  stations,
  onStationSelect,
}: KakaoMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<kakao.maps.Map | null>(null);

  useEffect(() => {
    const containerEl = mapContainerRef.current;
    if (!window.kakao.maps || !containerEl || map) {
      return;
    }

    window.kakao.maps.load(() => {
      const location = currentLocation ? currentLocation : SEOUL_LOCATION_INFO;
      const mapOptions = {
        center: new window.kakao.maps.LatLng(location.lat, location.lng),
        level: 2,
      };

      const mapInstance = new window.kakao.maps.Map(containerEl, mapOptions);
      setMap(mapInstance);
    });

    return () => {
      setMap(null);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!map) {
      return;
    }

    stations.forEach((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(
          item.latlng.lat,
          item.latlng.lng,
        ),
        title: item.name,
      });

      const onMarkerClick = () => onStationSelect(item.id);
      window.kakao.maps.event.addListener(marker, 'click', onMarkerClick);
    });
  }, [stations, map, onStationSelect]);

  return (
    <div ref={mapContainerRef} className={cn('h-full w-full', className)} />
  );
};

export default KakaoMap;
