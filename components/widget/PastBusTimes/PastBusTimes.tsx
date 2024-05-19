import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface PastBusTimesProps {
  arrivals: string[];
  className?: string;
}

const PastBusTimes = ({ arrivals, className }: PastBusTimesProps) => {
  const recentArrivals = arrivals.slice(1, 4);

  if (recentArrivals.length === 0) {
    return (
      <p className={cn("text-slate-500", className)}>다음 예정 시간 없음</p>
    );
  }

  return (
    <Table className={cn("w-[100px] text-center", className)}>
      <TableHeader>
        <TableRow>
          <TableHead className="text-center">Next</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {recentArrivals.map((arrival) => (
          <TableRow key={arrival}>
            <TableCell className="text-slate-600">{arrival}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default PastBusTimes;
