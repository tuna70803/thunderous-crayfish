import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
} from '@/components/ui/card';
import BusNumber from '../BusNumber';
import RemainTimeLabel from './RemainTimeLabel';
import EstimatedArrivalTimeLabel from './EstimatedArrivalTimeLabel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface BusDepartureCardProps {
  busNumber: string;
  nextTimestamp: number;
}

const BusDepartureCard = ({
  busNumber,
  nextTimestamp,
}: BusDepartureCardProps) => {
  return (
    <Card className="relative w-[300px]">
      <CardHeader className="px-6 pb-0 pt-6">
        <BusNumber busNumber={busNumber} />
        <Avatar className="absolute right-4 top-4">
          <AvatarImage />
          <AvatarFallback>{busNumber}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardDescription className="mt-2 px-6">마을버스</CardDescription>
      <CardContent className="mt-6 flex flex-col gap-1">
        <RemainTimeLabel nextTimestamp={nextTimestamp} />
        <EstimatedArrivalTimeLabel nextTimestamp={nextTimestamp} />
      </CardContent>
    </Card>
  );
};

export default BusDepartureCard;
