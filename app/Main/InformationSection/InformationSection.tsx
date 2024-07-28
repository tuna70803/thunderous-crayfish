'use client';
import { useState } from 'react';
import { getSavedBusRoute, saveBusRoute } from '@/utils/storage';
import type { BusRoute } from '@/types';
import DepartureInfo from './DepartureInfo';
import BusSearch from './BusSearch';
import Favorites from './Favorites';

/**
 * 버스 정보 섹션 컴포넌트
 * 선택한 버스의 도착 시간들을 표시한다.
 * 다른 버스를 선택할 수 있는 기능도 제공한다.
 */
const InformationSection = () => {
  const [currentBusRoute, setCurrentBusRoute] = useState<BusRoute | null>(
    getSavedBusRoute(),
  );

  const onBusRouteChange = (targetBus: BusRoute | null) => {
    if (!targetBus) {
      return;
    }

    setCurrentBusRoute({ ...targetBus });
    saveBusRoute(targetBus);
  };

  return (
    <div className="flex flex-col items-center overflow-auto p-10">
      <DepartureInfo targetBusRoute={currentBusRoute} />
      <BusSearch buttonClass="mt-6" onSearch={onBusRouteChange} />
      <Favorites className="mt-20" onSelect={onBusRouteChange} />
    </div>
  );
};

export default InformationSection;
