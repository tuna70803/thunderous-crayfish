'use client';
import { useState } from 'react';
import type { ClassValue } from '@/lib/utils';
import useMediaQuery from '@/hooks/useMediaQuery';
import type { BusRoute } from '@/types';
import DesktopBusSearch from './DesktopBusSearch';
import MobileBusSearch from './MobileBusSearch';

interface BusSearchProps {
  buttonClass?: ClassValue;
  onSearch: (targetBus: BusRoute | null) => void;
}

/**
 * 버스 조회 컴포넌트
 * 지도에서 버스 정류소를 선택하고, 정류소를 지나는 버스들을 선택할 수 있다.
 * @param buttonClass - 조회 버튼에 적용할 class name
 * @param onSearch - 조회 버튼 클릭 이벤트 핸들러
 */
const BusSearch = ({ buttonClass, onSearch }: BusSearchProps) => {
  const [targetBusRoute, setTargetBusRoute] = useState<BusRoute | null>(null);
  const onBusChange = (newBus: BusRoute) => {
    setTargetBusRoute(newBus);
  };

  const onSearchClick = () => {
    onSearch(targetBusRoute);
  };

  const isDesktop = useMediaQuery('(min-width: 640px)');
  if (isDesktop) {
    return (
      <DesktopBusSearch
        searchButtonClass={buttonClass}
        onBusChange={onBusChange}
        onSearchClick={onSearchClick}
      />
    );
  }

  return (
    <MobileBusSearch
      searchButtonClass={buttonClass}
      onBusChange={onBusChange}
      onSearchClick={onSearchClick}
    />
  );
};

export default BusSearch;
