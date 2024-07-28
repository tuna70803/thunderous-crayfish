import axios from 'axios';
import type { PastBusArrivalParams } from '@/cache/pastBusArrivals';
import type { ExternalPastBusArrivalsHistory } from '@/types';

export const fetchExternalPastBusArrivals = async ({
  day,
  routeId,
  stationId,
  stationOrder,
}: PastBusArrivalParams) => {
  try {
    const res = await axios.get(process.env.EXTERNAL_BUS_API ?? '', {
      params: {
        serviceKey: process.env.EXTERNAL_BUS_SERVICE_KEY ?? '',
        sDay: day,
        routeId,
        stationId,
        staOrder: stationOrder,
      },
    });

    return res.data as ExternalPastBusArrivalsHistory;
  } catch {
    return Promise.reject();
  }
};

export const toPastBusArrivals = (history: ExternalPastBusArrivalsHistory) => {
  const arrivalDates =
    history.response?.msgBody?.pastArrivalList?.map(
      (item) => item.RArrivalDate ?? '',
    ) ?? [];

  return arrivalDates.filter((item) => item);
};
