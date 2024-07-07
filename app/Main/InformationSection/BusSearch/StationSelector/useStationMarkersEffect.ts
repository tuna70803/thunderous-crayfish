import { useEffect, useState } from 'react';
import type { StationInfo } from './types';

/**
 * 버스 정류소 마커 표시 이펙트를 사용한다.
 * 전달 받은 정류소 데이터로 맵에 정류소 마커들을 표시한다.
 * 마커는 맵의 중심을 기준으로 일정 범위의 정류소만 표시한다.
 * @param map - 맵 인스턴스
 * @param stations - 버스 정류장 목록
 * @param onStationSelect - 버스 정류장 선택 이벤트 핸들러
 */
const useStationMarkersEffect = (
  map: kakao.maps.Map | null,
  stations: StationInfo[],
  onStationSelect: (stationId: string) => void,
) => {
  const [stationMarkers, setStationMarkers] = useState<kakao.maps.Marker[]>([]);
  useEffect(() => {
    if (!map) {
      return;
    }

    stationMarkers.forEach((marker) => {
      marker.setMap(null);
    });

    const markers = stations.map((item) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(
          item.latlng.lat,
          item.latlng.lng,
        ),
        title: item.name,
      });

      const onMarkerClick = () => onStationSelect(item.id);
      window.kakao.maps.event.addListener(marker, 'click', onMarkerClick);

      return marker;
    });

    setStationMarkers(markers);

    // stationsMarkers의 변경으로 정류소 마커 설정이 트리거 되지 않게 막아둔다.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stations, map, onStationSelect]);
};

export default useStationMarkersEffect;
