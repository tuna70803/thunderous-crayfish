import { useState } from 'react';
import type { ClassValue } from '@/lib/utils';
import type { BusRoute } from '@/types';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import BusSearchContent from './BusSearchContent';

interface BusSearchProps {
  buttonClass?: ClassValue;
  onSearch: (targetBus: BusRoute | null) => void;
}

/**
 * 버스 조회 컴포넌트
 * 지도에서 버스 정류소를 선택하고, 정류소를 지나는 버스들을 선택할 수 있다.
 * @param buttonClass - 조회 버튼에 적용할 class name
 * @param onSearch - 조회 버튼 클릭 이벤트 핸들러
 */
const BusSearch = ({ buttonClass, onSearch }: BusSearchProps) => {
  const [targetBusRoute, setTargetBusRoute] = useState<BusRoute | null>(null);
  const onBusChange = (newBus: BusRoute) => {
    setTargetBusRoute(newBus);
  };

  const onSearchClick = () => {
    onSearch(targetBusRoute);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={cn(buttonClass)}>설정</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>다른 버스 찾아보기</DrawerTitle>
          <DrawerDescription>
            조회할 다른 버스를 설정하고 조회 버튼을 눌러주세요
          </DrawerDescription>
        </DrawerHeader>
        <BusSearchContent
          className="p-0 sm:mt-4 sm:p-4"
          stationSeletorClassName="h-52 sm:h-96"
          busSelectorClassName="px-2 h-60 max-h-60 sm:h-96 sm:max-h-96 sm:px-0"
          onBusChange={onBusChange}
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button className="sm:mx-auto sm:w-1/3" onClick={onSearchClick}>
              조회
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BusSearch;
