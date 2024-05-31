import type { PastBusArrival } from '@/types';
import type { PastBusArrivalParams } from './types';
import { toCacheKey } from './utils';

const pastBusArrivalsCache = new Map<string, PastBusArrival[]>();

export const getPastBusArrivalCache = (params: PastBusArrivalParams) => {
  const cacheKey = toCacheKey(params);
  return pastBusArrivalsCache.get(cacheKey);
};

export const savePastBusArrivalCache = (
  params: PastBusArrivalParams,
  arrivals: PastBusArrival[],
) => {
  const cacheKey = toCacheKey(params);
  pastBusArrivalsCache.set(cacheKey, arrivals);
};
