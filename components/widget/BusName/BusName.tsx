import { memo, useMemo } from 'react';
import { getBusColor } from '@/utils/busRoute';

interface BusNameProps {
  busName: string;
  busTypeIndex: string;
}

/**
 * 버스 이름 컴포넌트
 * 버스 이름을 버스 타입에 맞는 컬러로 표시한다.
 * @param busName - 버스 이름
 * @param busTypeIndex - 버스 타입 인덱스
 */
const BusName = ({ busName, busTypeIndex }: BusNameProps) => {
  const busColor = useMemo(() => getBusColor(busTypeIndex), [busTypeIndex]);

  return (
    <h1
      className="'scroll-m-20 lg:text-5xl' text-4xl font-extrabold tracking-tight"
      style={{
        color: busColor,
      }}
    >
      {busName}
    </h1>
  );
};

export default memo(BusName);
