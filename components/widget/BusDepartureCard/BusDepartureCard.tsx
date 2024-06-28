import { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import BusNumber from '../BusNumber';
import RemainTimeLabel from './RemainTimeLabel';
import EstimatedDepartureTimeLabel from './EstimatedDepartureTimeLabel';
import ReferenceDateLabel from './ReferenceDateLabel';

interface BusDepartureCardProps {
  busNumber: string;
  nextTimestamp: number | null;
  referenceDate: string;
}

/**
 * 버스 출발 카드 컴포넌트
 * 버스 정보와 다음 출발 예정 시간을 하나의 카드로 표시한다.
 * @param busNumber - 버스 번호
 * @param nextTimestamp - 다음 버스 출발 시간 타임스탬프
 * @param referenceDate - 과거 출발 시간 조회 기준 날짜
 */
const BusDepartureCard = ({
  busNumber,
  nextTimestamp,
  referenceDate,
}: BusDepartureCardProps) => {
  // busNumber를 바로 렌더링하면 서버와 클라이언트간 렌더링 트리에 차이가 발생하는 문제가 생긴다.
  // 이 문제를 회피하기위해 약간 불필요한 처리를 하긴하지만
  // 클라이언트 단에서 데이터를 설정하고 렌더링하는 방식을 사용한다.
  const [displayBusNumber, setDisplayBusNumber] = useState('');
  useEffect(() => {
    setDisplayBusNumber(busNumber);
  }, [busNumber]);

  return (
    <div className="flex flex-col items-end gap-0.5">
      <Card className="relative w-[300px]">
        <CardHeader className="px-6 pb-0 pt-6">
          <BusNumber busNumber={displayBusNumber} />
          <Avatar className="absolute right-4 top-4">
            <AvatarImage />
            <AvatarFallback>{displayBusNumber}</AvatarFallback>
          </Avatar>
        </CardHeader>
        <CardDescription className="mt-2 px-6">마을버스</CardDescription>
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
