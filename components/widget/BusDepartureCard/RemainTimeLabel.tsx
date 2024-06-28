'use client';
import { useMemo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RemainTimeLabelProps {
  nextTimestamp: number | null;
  className?: string;
}

/**
 * 버스 출발까지 남은 시간을 표시한다.
 * 시간은 "xx시간 xx분 xx초"로 표시한다.
 * 남은 시간은 시간이 지나면 계속 갱신한다.
 * @param nextTimestamp - 다음 버스 출발 타임스탬프
 * @param className - class name
 */
const RemainTimeLabel = ({
  nextTimestamp,
  className,
}: RemainTimeLabelProps) => {
  const [currentTimestamp, setCurrentTimestamp] = useState(Date.now());
  useEffect(() => {
    setInterval(() => {
      setCurrentTimestamp(Date.now());
    }, REFRESH_TIME);
  }, []);

  const timeDiff = useMemo(() => {
    if (!nextTimestamp) {
      return null;
    }

    return nextTimestamp - currentTimestamp;
  }, [currentTimestamp, nextTimestamp]);

  const remainHour = useMemo(() => {
    if (!timeDiff) {
      return null;
    }

    const hour = timeDiff / HOUR;
    if (hour < 1) {
      return null;
    }

    return Math.floor(hour);
  }, [timeDiff]);

  const remainMinute = useMemo(() => {
    if (!timeDiff) {
      return null;
    }

    const minute = (timeDiff % HOUR) / MINUTE;
    if (minute < 1) {
      return null;
    }

    return Math.floor(minute);
  }, [timeDiff]);

  const remainSecond = useMemo(() => {
    if (!timeDiff) {
      return null;
    }

    const second = (timeDiff % MINUTE) / SECOND;
    return Math.floor(second);
  }, [timeDiff]);

  if (!nextTimestamp) {
    return <p className={cn('text-lg font-semibold', className)}>예정 없음</p>;
  }

  return (
    <p className={cn('text-lg font-semibold', className)}>
      {remainHour !== null ? `${remainHour}시간 ` : ''}
      {remainMinute !== null ? `${remainMinute}분 ` : ''}
      {remainSecond !== null ? `${remainSecond}초` : ''}
    </p>
  );
};

const HOUR = 3_600_000;
const MINUTE = 60_000;
const SECOND = 1000;
const REFRESH_TIME = 1000;

export default RemainTimeLabel;
