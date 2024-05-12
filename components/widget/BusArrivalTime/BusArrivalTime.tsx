interface BusArrivalTimeProps {
  arrivalTime: string;
}

const BusArrivalTime = ({ arrivalTime }: BusArrivalTimeProps) => {
  return <div className="text-lg font-semibold">{arrivalTime} 도착 예정</div>;
};

export default BusArrivalTime;
