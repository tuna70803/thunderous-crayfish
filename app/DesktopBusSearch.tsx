import type { ChangeEventHandler } from "react";
import { type ClassValue, cn } from "@/lib/utils";
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
import { BusForm } from "./types";

interface DesktopBusSearchProps {
  searchButtonClass?: ClassValue;
  busFormValues: BusForm;
  onBusFormChange: (name: string, newValue: string) => void;
  onSearchClick: () => void;
}

const DesktopBusSearch = ({
  searchButtonClass,
  busFormValues,
  onBusFormChange,
  onSearchClick,
}: DesktopBusSearchProps) => {
  const onDesktopBusFormChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;
    onBusFormChange(name, value);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn(searchButtonClass)}>설정</Button>
      </SheetTrigger>
      <SheetContent className="w-1/2 sm:max-w-1/2">
        <SheetHeader>
          <SheetTitle>다른 버스 찾아보기</SheetTitle>
          <SheetDescription>
            조회할 다른 버스를 설정하고 조회 버튼을 눌러주세요
          </SheetDescription>
        </SheetHeader>
        <BusSearchContent
          className="mt-14"
          busFormValues={busFormValues}
          onBusFormChange={onDesktopBusFormChange}
        />
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
