'use client';
import { useEffect, useState } from 'react';
import type { LatLng } from '@/types';
import { toast } from 'sonner';
import { SEOUL_LOCATION_INFO } from './constants';

/**
 * 현재 사용자의 위치 정보를 사용한다.
 * 여러가지 위치 정보중 위도와 경도 정보를 사용할 수 있다.
 * @returns 위도와 경도 정보
 * - userLocation.lat: 위도
 * - userLocation.lng: 경도
 */
const useUserLocation = () => {
  const [userLocation, setUserLocation] = useState<LatLng | null>(() => {
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
      toast.warning('위치 정보를 사용할 수 없어요 😭');
      return;
    }

    const onSuccess = (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({
        lat: latitude,
        lng: longitude,
      });
    };

    const onError = (error: GeolocationPositionError) => {
      switch (error.code) {
        case GeolocationPositionError.PERMISSION_DENIED:
          toast.error('위치 권한이 필요해요 🧐');
          break;
        case GeolocationPositionError.POSITION_UNAVAILABLE:
          toast.error('위치 확인을 실패했어요 🥲');
          break;
        case GeolocationPositionError.TIMEOUT:
          toast.error('위치 요청 시간이 오버됐어요 😇');
          break;
        default:
        // nothing to do.
      }
    };

    window.navigator.geolocation.getCurrentPosition(onSuccess, onError, {
      enableHighAccuracy: true,
    });
  }, []);

  return userLocation;
};

export default useUserLocation;
