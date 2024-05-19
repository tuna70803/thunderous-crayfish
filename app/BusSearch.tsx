"use client";
import { useState, type ChangeEventHandler } from "react";
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
import type { BusForm } from "./types";

interface BusSearchProps {
  buttonClass?: ClassValue;
  initBusFormValues?: BusForm;
  onSearch: (busSearchValues: BusForm) => void;
}

const BusSearch = ({
  buttonClass,
  initBusFormValues,
  onSearch,
}: BusSearchProps) => {
  const [busFormValues, setBusFormValues] = useState<BusForm>({
    busNumber: initBusFormValues?.busNumber ?? "",
    stationId: initBusFormValues?.stationId ?? "",
    stationOrder: initBusFormValues?.stationOrder ?? "",
    routeId: initBusFormValues?.routeId ?? "",
  });

  const onBusFormChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setBusFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onSearchClick = () => {
    onSearch(busFormValues);
  };

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
        <BusSearchContent
          className="mt-14"
          busFormValues={busFormValues}
          onBusFormChange={onBusFormChange}
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

export default BusSearch;
