import axios from 'axios';
import type { LatLng } from '@/types';

/**
 * 지정한 위치 근처의 버스 정류소 목록을 조회하고 리턴한다.
 * @param currentLatLng - 조회할 위치 (위도, 경도)
 * @returns 근처 버스 정류소 목록 XML 데이터
 */
export const fetchNearbyBusStations = async (currentLatLng: LatLng) => {
  try {
    const res = await axios.get(
      'https://apis.data.go.kr/6410000/busstationservice/getBusStationAroundList',
      {
        params: {
          serviceKey: process.env.NEXT_PUBLIC_DATA_PORTAL_KEY ?? '',
          x: currentLatLng.lng,
          y: currentLatLng.lat,
        },
      },
    );

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};

/**
 * 지정한 버스 정류소를 지나는 버스 노선 목록을 조회하고 리턴한다.
 * @param stationId - 버스 정류소 id
 * @returns 버스 정류소를 지나는 버스 노선 목록 XML 데이터
 */
export const fetchBusRoutesAtStation = async (stationId: string) => {
  try {
    const res = await axios.get(
      'https://apis.data.go.kr/6410000/busstationservice/getBusStationViaRouteList',
      {
        params: {
          serviceKey: process.env.NEXT_PUBLIC_DATA_PORTAL_KEY ?? '',
          stationId: stationId,
        },
      },
    );

    return res.data;
  } catch (error) {
    return Promise.reject(error);
  }
};
