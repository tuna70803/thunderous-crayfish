'use client';
import { useEffect, useState } from 'react';
import type { LatLng } from '@/types';
import { SEOUL_LOCATION_INFO } from './constants';

/**
 * 현재 위치 정보를 사용한다.
 * 위치 정보중 위도와 경도 정보를 사용할 수 있다.
 * @returns 위도와 경도 정보
 * - currentLocation.lat: 위도
 * - currentLocation.lng: 경도
 */
const useCurrentLocation = () => {
  const [currentLocation, setCurrentLocation] = useState<LatLng | null>(() => {
    if (
      !process.env.NEXT_PUBLIC_TEST_LAT ||
      !process.env.NEXT_PUBLIC_TEST_LNG
    ) {
      return SEOUL_LOCATION_INFO;
    }

    return {
      lat: Number(process.env.NEXT_PUBLIC_TEST_LAT),
      lng: Number(process.env.NEXT_PUBLIC_TEST_LNG),
    };
  });

  useEffect(() => {
    if (!('geolocation' in navigator)) {
      console.warn('위치 정보를 사용할 수 없습니다.');
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setCurrentLocation({
        lat: latitude,
        lng: longitude,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      switch (error.code) {
        case GeolocationPositionError.PERMISSION_DENIED:
          window.alert('위치 권한이 필요합니다.');
          break;
        case GeolocationPositionError.POSITION_UNAVAILABLE:
          window.alert('위치 정보 확인을 실패했습니다.');
          break;
        case GeolocationPositionError.TIMEOUT:
          window.alert('위치 정보 요청 시간이 오버됐습니다.');
          break;
        default:
        // nothing to do.
      }
    };

    window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });
  }, []);

  return currentLocation;
};

export default useCurrentLocation;
