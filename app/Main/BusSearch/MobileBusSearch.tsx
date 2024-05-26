import type { ChangeEventHandler } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import BusSearchContent from "./BusSearchContent";
import type { PlatformBusSearchProps } from "./types";

const MobileBusSearch = ({
  searchButtonClass,
  busFormValues,
  onBusFormChange,
  onSearchClick,
}: PlatformBusSearchProps) => {
  const onMobileBusFormChange: ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    const { name, value } = event.target;
    onBusFormChange(name, value);
  };

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
          busFormValues={busFormValues}
          onBusFormChange={onMobileBusFormChange}
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
