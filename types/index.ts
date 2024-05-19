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
