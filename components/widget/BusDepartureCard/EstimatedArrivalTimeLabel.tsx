import { useMemo } from "react";
import { toTimeString } from "@/utils/date";
import { cn } from "@/lib/utils";

interface EstimatedArrivalTimeLabelProps {
  nextTimestamp: number;
  className?: string;
}

const EstimatedArrivalTimeLabel = ({
  nextTimestamp,
  className,
}: EstimatedArrivalTimeLabelProps) => {
  const timeString = useMemo(
    () => toTimeString(nextTimestamp),
    [nextTimestamp]
  );

  return (
    <small className={cn("text-sm font-medium leading-none", className)}>
      {timeString} 출발 예정
    </small>
  );
};

export default EstimatedArrivalTimeLabel;
