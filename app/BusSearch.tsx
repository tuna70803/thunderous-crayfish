import { cn, type ClassValue } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import BusSearchContent from "./BusSearchContent";

interface BusSearchProps {
  buttonClass?: ClassValue;
}

const BusSearch = ({ buttonClass }: BusSearchProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn(buttonClass)}>설정</Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 sm:max-w-1/2">
        <SheetHeader>
          <SheetTitle>다른 버스 찾아보기</SheetTitle>
          <SheetDescription>
            조회할 다른 버스를 설정하고 조회 버튼을 눌러주세요
          </SheetDescription>
        </SheetHeader>
        <BusSearchContent />
        <SheetFooter className="mt-20 sm:justify-center">
          <SheetClose asChild>
            <Button>조회</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default BusSearch;
