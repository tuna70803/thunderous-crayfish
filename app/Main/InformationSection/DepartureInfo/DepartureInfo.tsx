'use client';
import useFavorites from '@/store/favorites';
import BusDepartureCard from '@/components/widget/BusDepartureCard';
import PastBusTimes from '@/components/widget/PastBusTimes/PastBusTimes';
import { toDateString, toTimeString } from '@/utils/dateTime';
import type { BusRoute } from '@/types';
import useBusArrivals from './useBusArrivals';
import useReferenceDate from './useReferenceDate';
import useFavoriteChanger from './useFavoriteChanger';

interface DepartureInfoProps {
  targetBusRoute: BusRoute | null;
}

/**
 * 버스 출발 시간 정보 컴포넌트
 * 대상 버스의 다음 출발 시간을 카드로 표시한다.
 * 출발 시간 카드로 버스를 즐겨찾기 할 수 있다.
 * 그 다음 출발 시간들도 목록으로 표시한다.
 * @param targetBusRoute - 정보를 표시할 버스 경로
 */
const DepartureInfo = ({ targetBusRoute }: DepartureInfoProps) => {
  const referenceDate = useReferenceDate();
  const busArrivals = useBusArrivals(targetBusRoute, referenceDate);
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

  const { hasFavorite } = useFavorites((state) => state);
  const onFavoriteChange = useFavoriteChanger();

  return (
    <>
      <BusDepartureCard
        targetBus={targetBusRoute}
        nextTimestamp={nextTargetTimestamp}
        referenceDate={referenceDate}
        isFavorited={hasFavorite(targetBusRoute)}
        onFavorite={onFavoriteChange}
      />
      <div className="mt-6">
        <PastBusTimes arrivals={futureTimes} />
      </div>
    </>
  );
};

export default DepartureInfo;
