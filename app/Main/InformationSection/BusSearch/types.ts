import type { ClassValue } from '@/lib/utils';
import type { BusRoute } from '@/types';

export interface PlatformBusSearchProps {
  searchButtonClass?: ClassValue;
  onBusChange: (bus: BusRoute) => void;
  onSearchClick: () => void;
}
