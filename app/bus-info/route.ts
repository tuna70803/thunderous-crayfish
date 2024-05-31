import type { NextRequest } from 'next/server';
import {
  getPastBusArrivalCache,
  savePastBusArrivalCache,
} from '@/cache/pastBusArrivals';
import { fetchExternalPastBusArrivals, toPastBusArrivals } from './utils';

export const GET = async (req: NextRequest) => {
  const searchParams = req.nextUrl.searchParams;
  const day = searchParams.get('day');
  const routeId = searchParams.get('routeId');
  const stationId = searchParams.get('stationId');
  const stationOrder = searchParams.get('stationOrder');

  if (!day || !routeId || !stationId || !stationOrder) {
    return Response.json({ error: '잘못된 요청입니다.' }, { status: 400 });
  }

  const cache = getPastBusArrivalCache({
    day,
    routeId,
    stationId,
    stationOrder,
  });

  if (cache) {
    return Response.json([...cache]);
  }

  const pastBusArrivalsHistory = await fetchExternalPastBusArrivals({
    day,
    routeId,
    stationId,
    stationOrder,
  });

  const pastBusArrivals = toPastBusArrivals(pastBusArrivalsHistory);
  savePastBusArrivalCache(
    { day, routeId, stationId, stationOrder },
    pastBusArrivals,
  );

  return Response.json([...pastBusArrivals]);
};
