export interface ExternalPastBusArrivalRecord {
  arrivalDate?: string;
  depatureDate?: string;
  infotm?: number;
  RArrivalDate?: string;
  routeId?: number;
  routeSeq?: number;
  runSeq?: number;
  staOrder?: number;
  stationId?: number;
  vehId?: number;
}

export interface ExternalPastBusArrivalsHistory {
  response?: {
    comMsgHeader?: string;
    msgHeader?: {
      queryTime?: string;
      resultCode?: number;
      resultMessage?: string;
    };
    msgBody?: {
      pastArrivalList?: ExternalPastBusArrivalRecord[];
    };
  };
}

export type PastBusArrival = string;

/**
 * 버스 노선 정보 타입
 */
export interface BusRoute {
  /**
   * 버스 노선 관할 지역 코드
   * 1: 서울
   * 2: 경기
   * 3: 인천
   */
  districtCd: string;

  /**
   * 버스 노선 운행 지역 (시단위)
   */
  regionName: string;

  /**
   * 버스 노선 ID
   */
  routeId: string;

  /**
   * 버스 이름
   */
  routeName: string;

  /**
   * 버스 타입 코드
   */
  routeTypeCd: string;

  /**
   * 버스 타입 이름
   */
  routeTypeName: string;

  /**
   * 버스 노선 정류소 순번
   */
  staOrder: string;

  /**
   * 버스 노선 정류소 ID
   */
  stationId: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}
