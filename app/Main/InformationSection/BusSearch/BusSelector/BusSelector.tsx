import { Check as CheckIcon } from 'lucide-react';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import type { BusRoute } from '@/types';

interface BusSelectorProps {
  className?: string;
  busRoutes: BusRoute[];
  currentBusRoute: BusRoute | null;
  onSelect: (route: BusRoute) => void;
}

/**
 * 버스 선택 컴포넌트
 * 버스 정류소를 지나는 버스 목록을 표시한다.
 * 버스를 선택할 수 있으며, 선택한 버스는 다르게 표시한다.
 * @param className - 컴포넌트에 적용할 class name
 * @param busRoutes - 버스 노선 목록
 * @param currentBusRoute - 현재 선택된 버스 노선
 * @param onSelect - 버스 노선 선택 이벤트 핸들러
 */
const BusSelector = ({
  className,
  busRoutes,
  currentBusRoute,
  onSelect,
}: BusSelectorProps) => {
  if (busRoutes.length === 0) {
    return (
      <p className="py-4 text-sm text-muted-foreground">
        지도에서 버스 정류소를 선택해주세요
      </p>
    );
  }

  return (
    <div className={className}>
      <Table>
        <TableBody>
          {busRoutes.map((route: BusRoute) => (
            <TableRow
              key={route.routeId}
              className={`cursor-pointer ${currentBusRoute?.routeId === route.routeId && 'bg-muted/50'}`}
              onClick={() => onSelect(route)}
            >
              <TableCell>{route.routeTypeName}</TableCell>
              <TableCell>{route.routeName}</TableCell>
              <TableCell className="w-[50px]">
                {currentBusRoute?.routeId === route.routeId && (
                  <CheckIcon className="stroke-gray-500" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default BusSelector;
