import { cn } from '@/lib/utils';
import type { BusRoute } from '@/types';
import { getBusColor } from '@/utils/busRoute';

interface FavoriteItemProps {
  className?: string;
  bus: BusRoute;
  onSelect: (bus: BusRoute) => void;
}

/**
 * 즐겨찾기 버스 개별 아이템 컴포넌트
 * @param className - class name
 * @param bus - 즐겨찾기한 버스의 데이터
 * @param onSelect - 즐겨찾기 아이템 선택 이벤트 핸들러
 */
const FavoriteItem = ({ className, bus, onSelect }: FavoriteItemProps) => {
  const color = getBusColor(bus.routeTypeCd);

  return (
    <span
      className={cn('text-xs font-bold', className)}
      style={{ color }}
      onClick={() => onSelect(bus)}
    >
      {bus.routeName}
    </span>
  );
};

export default FavoriteItem;
