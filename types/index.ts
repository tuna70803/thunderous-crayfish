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

export interface BusRoute {
  districtCd: string;
  regionName: string;
  routeId: string;
  routeName: string;
  routeTypeCd: string;
  routeTypeName: string;
  staOrder: string;
  stationId: string;
}

export interface LatLng {
  lat: number;
  lng: number;
}
