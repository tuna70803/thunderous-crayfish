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

/**
 * 위치 정보 타입 (위도, 경도)
 */
export interface LatLng {
  /**
   * 위도
   */
  lat: number;

  /**
   * 경도
   */
  lng: number;
}

/**
 * 즐겨찾기 버스 키 타입
 */
export type FavoriteBusKey = `${BusRoute['stationId']}-${BusRoute['routeId']}`;

/**
 * 즐겨찾기 버스 타입
 * 즐겨찾기는 고유의 키에 버스 데이터를 값으로 가지는 맵으로 구성한다.
 */
export type FavoriteBus = Record<FavoriteBusKey, BusRoute>;
