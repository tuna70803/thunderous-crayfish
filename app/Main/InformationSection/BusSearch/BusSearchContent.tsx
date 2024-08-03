/* eslint-disable @typescript-eslint/no-explicit-any */
import { useCallback, useState } from 'react';
import { cn } from '@/lib/utils';
import type { BusRoute } from '@/types';
import { fetchBusRoutesAtStation } from '@/apis/publicDataPortal';
import { xmlStringToObject } from '@/utils/xml';
import StationSelector from './StationSelector';
import BusSelector from './BusSelector';

interface BusSearchContentProps {
  className?: string;
  stationSeletorClassName?: string;
  busSelectorClassName?: string;
  onBusChange: (targetBus: BusRoute) => void;
}

/**
 * 버스 조회 컨텐트 컴포넌트
 * 현재 위치를 중심으로 지도위에 버스 정류소를 표시한다.
 * 버스 정류소를 선택하면 해당 정류소를 지나는 버스 목록을 표시하고 선택할 수 있다.
 * @param className - 컴포넌트에 적용할 class name
 * @param stationSeletorClassName - 버스 정류소 선택 맵에 적용할 class name
 * @param busSelectorClassName - 버스 선택 목록에 적용할 class name
 * @param onBusChange - 버스 변경 이벤트 핸들러
 */
const BusSearchContent = ({
  className,
  stationSeletorClassName,
  busSelectorClassName,
  onBusChange,
}: BusSearchContentProps) => {
  const [busRoutes, setBusRoutes] = useState<BusRoute[]>([]);
  const onStationSelect = useCallback(async (newStationId: string) => {
    const newBusRoutes = await getBusRoutes(newStationId);
    setBusRoutes(newBusRoutes);
  }, []);

  const [currentBusRoute, setCurrentBusRoute] = useState<BusRoute | null>(null);
  const onTargetBusSelect = useCallback(
    (newBusRoute: BusRoute) => {
      setCurrentBusRoute(newBusRoute);
      onBusChange(newBusRoute);
    },
    [onBusChange],
  );

  return (
    <div className={cn('flex flex-col', className)}>
      <StationSelector
        className={stationSeletorClassName}
        onSelect={onStationSelect}
      />
      <BusSelector
        className={busSelectorClassName}
        busRoutes={busRoutes}
        currentBusRoute={currentBusRoute}
        onSelect={onTargetBusSelect}
      />
    </div>
  );
};

/**
 * 지정한 버스 정류소를 지나는 버스 노선 목록을 조회하고 리턴한다.
 * @param busStationId - 버스 정류장 id
 * @returns 해당 정류소를 지나는 버스 노선 데이터 목록, 에러시 empty array.
 */
const getBusRoutes = async (busStationId: string) => {
  if (!busStationId) {
    return [];
  }

  const routesXml = await fetchBusRoutesAtStation(busStationId);
  const data = xmlStringToObject(routesXml);

  return (
    data?.response?.msgBody?.busRouteList.map((item: any) => ({
      ...item,
      stationId: busStationId,
    })) ?? []
  );
};

export default BusSearchContent;
