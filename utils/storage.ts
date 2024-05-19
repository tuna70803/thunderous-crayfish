"use client";
import type { BusForm } from "@/app/types";

const LOCAL_STORAGE_KEY = "last_saved_bus_form";
const DEFAULT_BUS_FORM = {
  busNumber: process.env.NEXT_PUBLIC_TEST_BUS_NUMBER ?? "",
  stationId: process.env.NEXT_PUBLIC_TEST_STATION_ID ?? "",
  stationOrder: process.env.NEXT_PUBLIC_TEST_STATION_ORDER ?? "",
  routeId: process.env.NEXT_PUBLIC_TEST_ROUTE_ID ?? "",
};

export const getSavedBusForm = (): BusForm => {
  if (typeof window === "undefined") {
    return DEFAULT_BUS_FORM;
  }

  const savedBusForm = localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!savedBusForm) {
    return DEFAULT_BUS_FORM;
  }

  try {
    return JSON.parse(savedBusForm);
  } catch {
    return DEFAULT_BUS_FORM;
  }
};

export const saveBusForm = (busFormValues: BusForm) => {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(busFormValues));
};
