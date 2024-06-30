import { useCallback, useEffect } from 'react';
import { cn } from '@/lib/utils';
import type { StationInfo } from './types';
import type { LatLng } from '@/types';
import ReSearchButton from './ReSearchButton';
import useKakaoMap from './useKakaoMap';
import useUpdateMapCenterEffect from './useUpdateMapCenterEffect';

interface StationsMapProps {
  className?: string;
  currentLocation: LatLng | null;
  stations: StationInfo[];
  onStationSelect: (stationId: string) => void;
  onReSearchStations: (newLocation: LatLng) => void;
}

/**
 * 버스 정류장 맵 컴포넌트
 * 카카오 맵 SDK를 사용해서 지도를 표시한다.
 * 전달받은 버스 정류소를 지도위에 마커로 표시한다.
 * @param className - 컴포넌트에 적용할 class name
 * @param currentLocation - 현재 위치 정보 (위도, 경도)
 * @param stations - 버스 정류장 목록
 * @param onStationSelect - 버스 정류장 선택 이벤트 핸들러
 * @param onReSearchStations - 버스 정류장 재검색 이벤트 핸들러
 */
const StationsMap = ({
  className,
  currentLocation,
  stations,
  onStationSelect,
  onReSearchStations,
}: StationsMapProps) => {
  const [map, mapContainerRef] = useKakaoMap(currentLocation);
  useUpdateMapCenterEffect(currentLocation, map);

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

  const onReSearch = useCallback(() => {
    if (!map) {
      return;
    }

    const currentMapCenter = map.getCenter();
    onReSearchStations({
      lat: currentMapCenter.getLat(),
      lng: currentMapCenter.getLng(),
    });
  }, [map, onReSearchStations]);

  return (
    <div
      ref={mapContainerRef}
      className={cn('relative h-full w-full', className)}
    >
      <ReSearchButton className="z-10" onClick={onReSearch} />
    </div>
  );
};

export default StationsMap;
