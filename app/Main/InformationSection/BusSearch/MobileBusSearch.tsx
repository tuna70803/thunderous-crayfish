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
import type { PlatformBusSearchProps } from './types';

/**
 * 모바일 버스 조회 컴포넌트
 * 모바일 화면에 맞게 구성한 버스 조회 화면을 표시한다.
 * @param searchButtonClass - 조회 버튼에 적용할 class name
 * @param onBusChange - 버스 선택 변경 이벤트 핸들러
 * @param onSearchClick - 조회 버튼 클릭 이벤트 핸들러
 */
const MobileBusSearch = ({
  searchButtonClass,
  onBusChange,
  onSearchClick,
}: PlatformBusSearchProps) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className={cn(searchButtonClass)}>설정</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>다른 버스 찾아보기</DrawerTitle>
          <DrawerDescription>
            조회할 다른 버스를 설정하고 조회 버튼을 눌러주세요
          </DrawerDescription>
        </DrawerHeader>
        <BusSearchContent
          className="mt-4 p-4"
          stationSeletorClassName="h-52"
          busSelectorClassName="max-h-60 overflow-y-auto"
          onBusChange={onBusChange}
        />
        <DrawerFooter>
          <DrawerClose asChild>
            <Button onClick={onSearchClick}>조회</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileBusSearch;
