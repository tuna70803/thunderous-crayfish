import { useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { getBusColor } from '@/utils/busRoute';

interface BusBadgeProps {
  name: string;
  typeIndex: string;
}

/**
 * 버스 뱃지 컴포넌트
 * 버스 타입에 맞는 배경 컬러와 이름을 뱃지 모양으로 표시한다.
 * @param name - 버스 이름
 * @param typeIndex - 버스 타입 인덱스
 */
const BusBadge = ({ name, typeIndex }: BusBadgeProps) => {
  const busColor = useMemo(() => getBusColor(typeIndex), [typeIndex]);

  return <Badge style={{ backgroundColor: busColor }}>{name}</Badge>;
};

export default BusBadge;
