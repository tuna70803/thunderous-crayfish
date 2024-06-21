'use client';
import { useMemo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RemainTimeLabelProps {
  nextTimestamp: number | null;
  className?: string;
}

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

  const remain = useMemo(() => {
    if (!nextTimestamp) {
      return null;
    }

    return Math.trunc((nextTimestamp - currentTimestamp) / MINUTE);
  }, [nextTimestamp, currentTimestamp]);

  if (!remain) {
    return <p className={cn('text-lg font-semibold', className)}>예정 없음</p>;
  }

  return (
    <p className={cn('text-lg font-semibold', className)}>{remain}분 뒤</p>
  );
};

const MINUTE = 60_000;
const REFRESH_TIME = 1000;

export default RemainTimeLabel;
