import {
  Table,
  TableCaption,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import type { PastType } from "./types";
import PastTypeLabel from "./PastTypeLabel";

interface PastBusTimesProps {
  pastType: PastType;
  arrivals: string[];
}

const PastBusTimes = ({ pastType, arrivals }: PastBusTimesProps) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <PastTypeLabel pastType={pastType} />
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {arrivals.map((arrival) => (
          <TableRow key={`${pastType}-${arrival}`}>
            <TableCell>{arrival}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PastBusTimes;
