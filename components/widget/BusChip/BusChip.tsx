import { useMemo } from 'react';
import { BusBadge } from '@/components/widget';
import { getBusType } from '@/utils/busRoute';

interface BusChipProps {
  name: string;
  typeIndex: string;
  onClick?: () => void;
}

/**
 * 버스 칩 컴포넌트
 * 버스 뱃지와 버스의 타입을 칩 모양으로 표시한다.
 * 화면 크기에 따라 칩의 모양을 조금 달라진다.
 * @param name - 버스 이름
 * @param typeIndex - 버스 타입 인덱스
 * @param onClick - 클릭 이벤트 핸들러
 */
const BusChip = ({ name, typeIndex, onClick }: BusChipProps) => {
  const busType = useMemo(() => getBusType(typeIndex), [typeIndex]);

  return (
    <div
      className="flex h-fit w-fit cursor-pointer flex-row items-center rounded-full border border-slate-300 p-0.5 transition-colors hover:bg-slate-50 sm:p-1.5"
      onClick={onClick}
    >
      <BusBadge name={name} typeIndex={typeIndex} />
      <span className="px-2 text-xs text-slate-700 sm:text-sm">{busType}</span>
    </div>
  );
};

export default BusChip;
