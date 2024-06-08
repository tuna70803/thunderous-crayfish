import { useEffect, useState } from 'react';
import { fetchBusInfo } from '@/apis/internal';
import { getPreviousWeekdayOrWeekend, toDateString } from '@/utils/date';
import type { BusRoute } from '@/types';

/**
 * 버스의 과거 도착 시간들을 사용한다.
 * @param busRoute - 버스 정보
 * @returns 버스의 과거 도착 시간 목록
 */
const useBusArrivals = (busRoute: BusRoute | null) => {
  const [busArrivals, setBusArrivals] = useState([]);
  useEffect(() => {
    if (!busRoute) {
      return;
    }

    const saveBusArrivals = async () => {
      try {
        const arrivals = await getBusArrivals(
          busRoute.stationId,
          busRoute.staOrder,
          busRoute.routeId,
        );

        setBusArrivals(arrivals);
      } catch {
        setBusArrivals([]);
      }
    };

    saveBusArrivals();
  }, [busRoute]);

  return busArrivals;
};

/**
 * 과거 버스 도착 시간 정보를 가져온다.
 * 버스는 평일과 주말 배차 간격이 다르므로
 * 오늘이 평일이면 가장 가까운 과거 평일 시간대를,
 * 오늘이 주말이면 가장 가까운 과거 주말 시간대를
 * 조회해서 목록을 리턴한다.
 * @param stationId - 버스 정류소 id
 * @param stationOrder - 버스 정류소의 노선 운행 순서
 * @param routeId - 버스 노선 id
 * @returns 과거 버스 도착 시간 목록
 */
const getBusArrivals = async (
  stationId: string,
  stationOrder: string,
  routeId: string,
) => {
  try {
    const referenceTimestamp = getPreviousWeekdayOrWeekend(Date.now());
    const referenceDateString = toDateString(referenceTimestamp);
    const busArrivals = await fetchBusInfo(
      stationId,
      stationOrder,
      routeId,
      referenceDateString,
    );

    return busArrivals;
  } catch (error) {
    return Promise.reject(error);
  }
};

export default useBusArrivals;
