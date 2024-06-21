import { useMemo } from 'react';
import { toTimeString } from '@/utils/date';
import { cn } from '@/lib/utils';

interface EstimatedArrivalTimeLabelProps {
  nextTimestamp: number | null;
  className?: string;
}

const EstimatedArrivalTimeLabel = ({
  nextTimestamp,
  className,
}: EstimatedArrivalTimeLabelProps) => {
  const timeString = useMemo(() => {
    if (!nextTimestamp) {
      return null;
    }

    return toTimeString(nextTimestamp);
  }, [nextTimestamp]);

  if (!timeString) {
    return null;
  }

  return (
    <small className={cn('text-sm font-medium leading-none', className)}>
      {timeString} 출발 예정
    </small>
  );
};

export default EstimatedArrivalTimeLabel;
