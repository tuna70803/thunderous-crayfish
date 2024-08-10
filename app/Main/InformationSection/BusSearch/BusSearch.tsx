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
  const [isOpen, setIsOpen] = useState(false);
  const onOpenChange = (open: boolean) => {
    setIsOpen(open);
  };

  const onBusSelect = (newBusRoute: BusRoute) => {
    onSearch(newBusRoute);
    setIsOpen(false);
  };

  return (
    <Drawer open={isOpen} onOpenChange={onOpenChange}>
      <DrawerTrigger asChild>
        <Button className={cn(buttonClass)}>설정</Button>
      </DrawerTrigger>
      <DrawerContent className="h-[98%]">
        <DrawerHeader>
          <DrawerTitle>다른 버스 찾아보기</DrawerTitle>
          <DrawerDescription>
            조회할 다른 버스를 설정하고 조회 버튼을 눌러주세요
          </DrawerDescription>
        </DrawerHeader>
        <BusSearchContent
          className="flex-auto p-0 sm:mt-4 sm:p-4"
          stationSeletorClassName="flex-1"
          busSelectorClassName="px-2 pt-4 h-[200px] max-h-[200px] sm:h-96 sm:max-h-96 sm:px-0"
          onBusSelect={onBusSelect}
        />
        <DrawerFooter className="py-8">
          <DrawerClose asChild>
            <Button className="sm:mx-auto sm:w-1/5">닫기</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default BusSearch;
