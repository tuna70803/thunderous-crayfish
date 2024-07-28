import { useCallback, useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import type { BusRoute } from '@/types';
import { getBusType } from '@/utils/busRoute';
import BusName from '../BusName';
import RemainTimeLabel from './RemainTimeLabel';
import EstimatedDepartureTimeLabel from './EstimatedDepartureTimeLabel';
import ReferenceDateLabel from './ReferenceDateLabel';
import Favorite from './Favorite';

interface BusDepartureCardProps {
  targetBus: Partial<BusRoute> | null;
  nextTimestamp: number | null;
  referenceDate: string;
  isFavorited?: boolean;
  onFavorite?: (bus: Partial<BusRoute>, isFavorited: boolean) => void;
}

/**
 * 버스 출발 카드 컴포넌트
 * 버스 정보와 다음 출발 예정 시간을 하나의 카드로 표시한다.
 * @param targetBus - 대상 버스 정보
 * @param nextTimestamp - 다음 버스 출발 시간 타임스탬프
 * @param referenceDate - 과거 출발 시간 조회 기준 날짜
 * @param isFavorited - 즐겨찾기 등록 여부
 * @param onFavorite - 즐겨찾기 클릭 이벤트 핸들러
 */
const BusDepartureCard = ({
  targetBus,
  nextTimestamp,
  referenceDate,
  isFavorited,
  onFavorite,
}: BusDepartureCardProps) => {
  // busName을 바로 렌더링하면 서버와 클라이언트간 렌더링 트리에 차이가 발생하는 문제가 생긴다.
  // 이 문제를 회피하기위해 클라이언트 단에서 데이터를 설정하고 렌더링하는 방식을 사용한다.
  const [busName, setBusName] = useState('');
  useEffect(() => {
    setBusName(targetBus?.routeName ?? '');
  }, [targetBus?.routeName]);

  const [busTypeIndex, setBusTypeIndex] = useState('');
  useEffect(() => {
    setBusTypeIndex(targetBus?.routeTypeCd ?? '');
  }, [targetBus?.routeTypeCd]);

  const [busType, setBusType] = useState('');
  useEffect(() => {
    const type = getBusType(targetBus?.routeTypeCd ?? '');
    setBusType(type);
  }, [targetBus?.routeTypeCd]);

  const onFavoriteBus = useCallback(
    (isFavorited: boolean) => {
      if (!onFavorite) {
        return;
      }

      if (!targetBus) {
        return;
      }

      onFavorite(targetBus, isFavorited);
    },
    [onFavorite, targetBus],
  );

  return (
    <div className="flex flex-col items-end gap-0.5">
      <Card className="relative w-[300px]">
        <CardHeader className="px-6 pb-0 pt-6">
          <BusName busName={busName} busTypeIndex={busTypeIndex} />
          <Favorite
            className="absolute right-4 top-4"
            isFavorited={Boolean(isFavorited)}
            onFavorite={onFavoriteBus}
          />
        </CardHeader>
        <CardDescription className="mt-2 px-6">{busType}</CardDescription>
        <CardContent className="mt-6 flex flex-col gap-1">
          <RemainTimeLabel nextTimestamp={nextTimestamp} />
          <EstimatedDepartureTimeLabel nextTimestamp={nextTimestamp} />
        </CardContent>
      </Card>
      <ReferenceDateLabel date={referenceDate} className="mr-2" />
    </div>
  );
};

export default BusDepartureCard;
