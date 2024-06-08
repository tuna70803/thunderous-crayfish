import axios from 'axios';

/**
 * 지정한 버스가 정류소를 지난 시간을 조회하고 리턴한다.
 * @param stationId - 버스 정류소 id
 * @param stationOrder - 버스 정류소의 노선 운행 순서
 * @param routeId - 버스 노선 id
 * @param day - 조회할 과거 날짜
 * @returns 지정한 날짜에 버스가 정류소를 지난 시간 목록
 */
export const fetchBusInfo = async (
  stationId: string,
  stationOrder: string,
  routeId: string,
  day: string,
) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/bus-info`, {
      params: {
        stationId,
        stationOrder,
        routeId,
        day,
      },
    });

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
