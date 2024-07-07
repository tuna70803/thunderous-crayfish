/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useLayoutEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import type { LatLng } from '@/types';
import StationsMap from './StationsMap';
import useUserLocation from './useUserLocation';
import useStations from './useStations';

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
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(null);
  const [userLocation, refreshUserLocation] = useUserLocation();
  useLayoutEffect(() => {
    setCurrentLocation(userLocation);
  }, [userLocation]);

  const stations = useStations(currentLocation);
  const onStationSelect = useCallback(
    (stationId: string) => onSelect(stationId),
    [onSelect],
  );

  const onRefreshUserLocation = useCallback(
    () => refreshUserLocation(),
    [refreshUserLocation],
  );

  const onReSearchStations = useCallback((newLocation: LatLng) => {
    setCurrentLocation(newLocation);
  }, []);

  return (
    <div className={cn('h-96', className)} data-vaul-no-drag>
      <StationsMap
        stations={stations}
        currentLocation={currentLocation}
        onStationSelect={onStationSelect}
        onRefreshUserLocation={onRefreshUserLocation}
        onReSearchStations={onReSearchStations}
      />
    </div>
  );
};

export default StationSelector;
