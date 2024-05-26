"use client";
import { useState } from "react";
import type { ClassValue } from "@/lib/utils";
import useMediaQuery from "@/hooks/useMediaQuery";
import type { BusForm } from "../types";
import DesktopBusSearch from "./DesktopBusSearch";
import MobileBusSearch from "./MobileBusSearch";

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

  const onBusFormChange = (name: string, newValue: string) => {
    setBusFormValues((prevValues) => ({
      ...prevValues,
      [name]: newValue,
    }));
  };

  const onSearchClick = () => {
    onSearch(busFormValues);
  };

  const isDesktop = useMediaQuery("(min-width: 640px)");
  if (isDesktop) {
    return (
      <DesktopBusSearch
        searchButtonClass={buttonClass}
        busFormValues={busFormValues}
        onBusFormChange={onBusFormChange}
        onSearchClick={onSearchClick}
      />
    );
  }

  return (
    <MobileBusSearch
      searchButtonClass={buttonClass}
      busFormValues={busFormValues}
      onBusFormChange={onBusFormChange}
      onSearchClick={onSearchClick}
    />
  );
};

export default BusSearch;
