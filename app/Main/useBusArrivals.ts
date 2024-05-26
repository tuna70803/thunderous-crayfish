import { useEffect, useState } from "react";
import axios from "axios";
import { getPreviousWeekdayOrWeekend, toDateString } from "@/utils/date";
import { BusForm } from "./types";

const useBusArrivals = (busFormValues: BusForm) => {
  const [busArrivals, setBusArrivals] = useState([]);
  useEffect(() => {
    const saveBusArrivals = async () => {
      try {
        const arrivals = await fetchBusArrivals(
          busFormValues.stationId,
          busFormValues.stationOrder,
          busFormValues.routeId
        );

        setBusArrivals(arrivals);
      } catch {
        setBusArrivals([]);
      }
    };

    saveBusArrivals();
  }, [busFormValues]);

  return busArrivals;
};

const fetchBusArrivals = async (
  stationId: string,
  stationOrder: string,
  routeId: string
) => {
  try {
    const referenceTimestamp = getPreviousWeekdayOrWeekend(Date.now());
    const referenceDateString = toDateString(referenceTimestamp);
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/bus-info`, {
      params: {
        stationId,
        stationOrder,
        routeId,
        day: referenceDateString,
      },
    });

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default useBusArrivals;
