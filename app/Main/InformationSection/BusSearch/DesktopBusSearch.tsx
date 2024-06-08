import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import BusSearchContent from './BusSearchContent';
import type { PlatformBusSearchProps } from './types';

/**
 * 데스크탑 버스 조회 컴포넌트
 * 데스크탑 화면에 맞게 구성한 버스 조회 화면을 표시한다.
 * @param searchButtonClass - 조회 버튼에 적용할 class name
 * @param onBusChange - 버스 선택 변경 이벤트 핸들러
 * @param onSearchClick - 조회 버튼 클릭 이벤트 핸들러
 */
const DesktopBusSearch = ({
  searchButtonClass,
  onBusChange,
  onSearchClick,
}: PlatformBusSearchProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn(searchButtonClass)}>설정</Button>
      </SheetTrigger>
      <SheetContent className="sm:max-w-1/2 w-1/2">
        <SheetHeader>
          <SheetTitle>다른 버스 찾아보기</SheetTitle>
          <SheetDescription>
            조회할 다른 버스를 설정하고 조회 버튼을 눌러주세요
          </SheetDescription>
        </SheetHeader>
        <BusSearchContent className="mt-14" onBusChange={onBusChange} />
        <SheetFooter className="mt-20 sm:justify-center">
          <SheetClose asChild>
            <Button onClick={onSearchClick}>조회</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default DesktopBusSearch;
