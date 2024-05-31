'use client';
import { useMemo, useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface RemainTimeLabelProps {
  nextTimestamp: number;
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

  const remain = useMemo(
    () => Math.trunc((nextTimestamp - currentTimestamp) / MINUTE),
    [nextTimestamp, currentTimestamp],
  );

  return (
    <p className={cn('text-lg font-semibold', className)}>{remain}분 뒤</p>
  );
};

const MINUTE = 60_000;
const REFRESH_TIME = 1000;

export default RemainTimeLabel;
