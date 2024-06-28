import { useMemo } from 'react';
import { toTimeString } from '@/utils/dateTime';
import { cn } from '@/lib/utils';
import GradualSpacing from '@/components/magicui/gradual-spacing';

interface EstimatedDepartureTimeLabelProps {
  nextTimestamp: number | null;
  className?: string;
}

/**
 * 버스 예상 출발 시간 컴포넌트
 * 이전 출발 타임스탬프로 몇시 몇분에 출발 예정인지 표시한다.
 * @param nextTimestamp - 다음 버스 출발 타임스탬프
 * @param className - class name
 */
const EstimatedDepartureTimeLabel = ({
  nextTimestamp,
  className,
}: EstimatedDepartureTimeLabelProps) => {
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
      duration={0.5}
      delayMultiple={0.02}
      framerProps={framerMotionProps}
    />
  );
};

const framerMotionProps = {
  hidden: { opacity: 0.5, x: -10 },
  visible: { opacity: 1, x: 0 },
};

export default EstimatedDepartureTimeLabel;
