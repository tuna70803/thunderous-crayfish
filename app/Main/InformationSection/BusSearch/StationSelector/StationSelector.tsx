/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { fetchNearbyBusStations } from '@/apis/publicDataPortal';
import { xmlStringToObject } from '@/utils/xml';
import type { LatLng } from '@/types';
import type { StationInfo } from './types';
import KakaoMap from './KakaoMap';
import useCurrentLocation from './useCurrentLocation';

interface StationSelectorProps {
  className?: string;
  onSelect: (newStationId: string) => void;
}

/**
 * 버스 정류소 선택 컴포넌트
 * 현재 위치를 중심으로 지도에 버스 정류소를 표시하고 선택할 수 있다.
 * @param className - 컴포넌트에 적용할 class name
 * @param onSelect - 버스 정류소 선택 이벤트 핸들러
 */
const StationSelector = ({ className, onSelect }: StationSelectorProps) => {
  const currentLocation = useCurrentLocation();
  const [stations, setStations] = useState<StationInfo[]>([]);
  useEffect(() => {
    if (!currentLocation) {
      return;
    }

    (async () => {
      const stationsData = await getNearbyBusStations(currentLocation);
      setStations(stationsData);
    })();
  }, [currentLocation]);

  const onStationSelect = useCallback(
    (stationId: string) => onSelect(stationId),
    [onSelect],
  );

  return (
    <div className={cn(className)}>
      <KakaoMap
        stations={stations}
        currentLocation={currentLocation}
        onStationSelect={onStationSelect}
      />
    </div>
  );
};

/**
 * 현재 위치 근처의 버스 정류소 목록을 가져와 리턴한다.
 * @param currentLocation - 현재 위치 정보 (위도, 경도)
 * @returns 현재 위치 근처의 버스 정류소 데이터 목록, 에러시 empty array.
 */
const getNearbyBusStations = async (
  currentLocation: LatLng,
): Promise<StationInfo[]> => {
  const nearbyStations = await fetchNearbyBusStations(currentLocation);
  const data = xmlStringToObject(nearbyStations);

  return (
    data?.response?.msgBody?.busStationAroundList?.map((item: any) => ({
      id: item.stationId,
      name: item.stationName,
      latlng: {
        lat: Number(item.y),
        lng: Number(item.x),
      },
    })) ?? []
  );
};

export default StationSelector;
