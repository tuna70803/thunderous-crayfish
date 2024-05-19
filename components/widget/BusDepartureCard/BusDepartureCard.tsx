import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from "@/components/ui/card";
import BusNumber from "../BusNumber";
import RemainTimeLabel from "./RemainTimeLabel";
import EstimatedArrivalTimeLabel from "./EstimatedArrivalTimeLabel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface BusDepartureCardProps {
  busNumber: string;
  nextTimestamp: number;
}

const BusDepartureCard = ({
  busNumber,
  nextTimestamp,
}: BusDepartureCardProps) => {
  return (
    <Card className="w-[300px] relative">
      <CardHeader className="pt-6 px-6 pb-0">
        <BusNumber busNumber={busNumber} />
        <Avatar className="absolute top-4 right-4">
          <AvatarImage />
          <AvatarFallback>{busNumber}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardDescription className="px-6 mt-2">마을버스</CardDescription>
      <CardContent className="flex flex-col mt-6 gap-1">
        <RemainTimeLabel nextTimestamp={nextTimestamp} />
        <EstimatedArrivalTimeLabel nextTimestamp={nextTimestamp} />
      </CardContent>
    </Card>
  );
};

export default BusDepartureCard;
