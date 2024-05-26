import type { ClassValue } from "@/lib/utils";
import type { BusForm } from "../types";

export interface PlatformBusSearchProps {
  searchButtonClass?: ClassValue;
  busFormValues: BusForm;
  onBusFormChange: (name: string, newValue: string) => void;
  onSearchClick: () => void;
}
