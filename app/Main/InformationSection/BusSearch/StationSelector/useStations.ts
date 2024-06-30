/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';
import { fetchNearbyBusStations } from '@/apis/publicDataPortal';
import { xmlStringToObject } from '@/utils/xml';
import { toFixedNumber } from '@/utils/number';
import type { LatLng } from '@/types';
import type { StationInfo } from './types';

/**
 * 버스 정류장 목록 정보를 사용한다.
 * 현재 위치를 중점으로 버스 정류장들을 조회하고 리턴한다.
 * @param currentLocation - 현재 위치
 * @returns 버스 정류잘 목록
 */
const useStations = (currentLocation: LatLng | null) => {
  const [stations, setStations] = useState<StationInfo[]>([]);
  useEffect(() => {
    if (!currentLocation) {
      return;
    }

    (async () => {
      const stationsData = await getNearbyBusStations(currentLocation);
      setStations(stationsData);
    })();
  }, [currentLocation]);

  return stations;
};

/**
 * 현재 위치 근처의 버스 정류소 목록을 가져와 리턴한다.
 * 경유용 가상 버스 정류소는 목록에서 제외한다.
 * @param currentLocation - 현재 위치 정보 (위도, 경도)
 * @returns 현재 위치 근처의 버스 정류소 데이터 목록, 에러시 empty array.
 */
const getNearbyBusStations = async (
  currentLocation: LatLng,
): Promise<StationInfo[]> => {
  const nearbyStations = await fetchNearbyBusStations(currentLocation);
  const data = xmlStringToObject(nearbyStations);
  const realBusStations =
    data?.response?.msgBody?.busStationAroundList?.filter(
      (item: any) => item.stationName.includes('(경유)') === false,
    ) ?? [];

  return (
    realBusStations.map((item: any) => ({
      id: item.stationId,
      name: item.stationName,
      latlng: {
        lat: toFixedNumber(item.y, DECIMAL_PRECISION),
        lng: toFixedNumber(item.x, DECIMAL_PRECISION),
      },
    })) ?? []
  );
};

/**
 * 소수점 자리 수 정확도
 * 위치 값이 너무 상세하면 지도의 버스 정류장 표시랑 차이가 많이나는 경우가 많다.
 * 지도와 가능한 가까운 위치가 될 수 있는 소수점 자리수로 제한한다.
 */
const DECIMAL_PRECISION = 5;

export default useStations;
