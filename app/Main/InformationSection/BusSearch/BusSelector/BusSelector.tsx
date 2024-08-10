import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { BusChip } from '@/components/widget';
import type { BusRoute } from '@/types';
import {
  BUS_CONTAINER_ANIMATION,
  BUS_ITEM_ANIMATION,
  BUS_ITEM_HOVER_ANIMATION,
} from './constants';

interface BusSelectorProps {
  className?: string;
  busRoutes: BusRoute[];
  onSelect: (route: BusRoute) => void;
}

/**
 * 버스 선택 컴포넌트
 * 버스 정류소를 지나는 버스 목록을 표시한다.
 * 버스를 선택할 수 있으며, 선택한 버스는 다르게 표시한다.
 * @param className - 컴포넌트에 적용할 class name
 * @param busRoutes - 버스 노선 목록
 * @param onSelect - 버스 노선 선택 이벤트 핸들러
 */
const BusSelector = ({ className, busRoutes, onSelect }: BusSelectorProps) => {
  if (busRoutes.length === 0) {
    return (
      <div
        className={cn('flex flex-row items-center justify-center', className)}
      >
        <p className="text-sm text-muted-foreground">
          지도에서 버스 정류소를 선택해주세요
        </p>
      </div>
    );
  }

  const busContainerRenderKey = busRoutes[0].stationId;

  return (
    <ScrollArea data-vaul-no-drag>
      <motion.div
        className={cn(
          'flex flex-row flex-wrap content-start items-center justify-center gap-2',
          className,
        )}
        key={busContainerRenderKey}
        variants={BUS_CONTAINER_ANIMATION}
        initial="hidden"
        animate="appear"
      >
        {busRoutes.map((route: BusRoute) => (
          <motion.div
            key={route.routeId}
            variants={BUS_ITEM_ANIMATION}
            whileHover={BUS_ITEM_HOVER_ANIMATION}
          >
            <BusChip
              name={route.routeName}
              typeIndex={route.routeTypeCd}
              onClick={() => onSelect(route)}
            />
          </motion.div>
        ))}
      </motion.div>
      <ScrollBar orientation="vertical" />
    </ScrollArea>
  );
};

export default BusSelector;
