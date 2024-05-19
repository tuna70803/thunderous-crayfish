import axios from "axios";
import BusNumber from "@/components/widget/BusNumber";
import BusArrivalTime from "@/components/widget/BusArrivalTime";
import PastBusTimes from "@/components/widget/PastBusTimes/PastBusTimes";

const BusInfoSection = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API}/bus-info`, {
    params: {
      day: process.env.NEXT_PUBLIC_TEST_DAY,
      routeId: process.env.NEXT_PUBLIC_TEST_ROUTE_ID,
      stationId: process.env.NEXT_PUBLIC_TEST_STATION_ID,
      stationOrder: process.env.NEXT_PUBLIC_TEST_STATION_ORDER,
    },
  });

  return (
    <>
      <BusNumber busNumber="66" />
      <BusArrivalTime arrivalTime="08:38" />
      <div className="flex flex-row gap-4 mt-6">
        <PastBusTimes pastType="1day" arrivals={["08:00", "09:00", "10:00"]} />
        <PastBusTimes pastType="2day" arrivals={["08:05", "09:05", "10:11"]} />
        <PastBusTimes pastType="7day" arrivals={["08:33", "09:25", "10:32"]} />
      </div>
    </>
  );
};

export default BusInfoSection;
