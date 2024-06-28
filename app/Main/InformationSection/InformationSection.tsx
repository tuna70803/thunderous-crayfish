'use client';
import { useState } from 'react';
import BusDepartureCard from '@/components/widget/BusDepartureCard';
import PastBusTimes from '@/components/widget/PastBusTimes/PastBusTimes';
import { toDateString, toTimeString } from '@/utils/dateTime';
import { getSavedBusRoute, saveBusRoute } from '@/utils/storage';
import type { BusRoute } from '@/types';
import BusSearch from './BusSearch';
import useBusArrivals from './useBusArrivals';
import useReferenceDate from './useReferenceDate';

/**
 * 버스 정보 섹션 컴포넌트
 * 선택한 버스의 도착 시간들을 표시한다.
 * 다른 버스를 선택할 수 있는 기능도 제공한다.
 */
const InformationSection = () => {
  const [currentBusRoute, setCurrentBusRoute] = useState<BusRoute | null>(
    getSavedBusRoute(),
  );

  const onBusSearch = (targetBus: BusRoute | null) => {
    if (!targetBus) {
      return;
    }

    setCurrentBusRoute({ ...targetBus });
    saveBusRoute(targetBus);
  };

  const referenceDate = useReferenceDate();
  const busArrivals = useBusArrivals(currentBusRoute, referenceDate);
  const currentTimestamp = Date.now();
  const todayDateString = toDateString(currentTimestamp);
  const pastBusTimestamps: number[] = busArrivals.map((busTime: string) => {
    const todayTimestamp = `${todayDateString}T${busTime.slice(11)}`;
    return new Date(todayTimestamp).getTime();
  });

  const futureTimestamps = pastBusTimestamps.filter(
    (timestamp) => timestamp > currentTimestamp,
  );
  const nextTargetTimestamp = futureTimestamps[0] ?? null;

  const futureTimes = futureTimestamps.map((timestamp) =>
    toTimeString(timestamp),
  );

  return (
    <div className="flex flex-col items-center overflow-auto p-10">
      <BusDepartureCard
        busNumber={currentBusRoute?.routeName ?? ''}
        nextTimestamp={nextTargetTimestamp}
        referenceDate={referenceDate}
      />
      <div className="mt-6">
        <PastBusTimes arrivals={futureTimes} />
      </div>
      <BusSearch buttonClass="mt-6" onSearch={onBusSearch} />
    </div>
  );
};

export default InformationSection;
