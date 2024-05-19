export interface PastBusArrivalParams {
  day: string;
  routeId: string;
  stationId: string;
  stationOrder: string;
}

export type PastBusArrivalCacheKey = PastBusArrivalParams;
