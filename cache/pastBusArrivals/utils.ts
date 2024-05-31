import type { PastBusArrivalParams } from './types';

export const toCacheKey = (params: PastBusArrivalParams) => {
  return `${params.day}_${params.routeId}_${params.stationId}_${params.stationOrder}`;
};
