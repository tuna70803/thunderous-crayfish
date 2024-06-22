import { useMemo } from 'react';
import { toTimeString } from '@/utils/date';
import { cn } from '@/lib/utils';
import GradualSpacing from '@/components/magicui/gradual-spacing';

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
    <GradualSpacing
      className={cn(
        'justify-start space-x-0 text-sm font-medium leading-none',
        className,
      )}
      text={`${timeString} 출발 예정`}
      duration={0.2}
      delayMultiple={0.01}
      framerProps={framerMotionProps}
    />
  );
};

const framerMotionProps = {
  hidden: { opacity: 0.5, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default EstimatedArrivalTimeLabel;
