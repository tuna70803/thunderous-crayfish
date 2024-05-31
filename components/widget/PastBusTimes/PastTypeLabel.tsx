import { useMemo } from 'react';
import { PastType } from './types';

interface PastTypeLabelProps {
  pastType: PastType;
}

const PastTypeLabel = ({ pastType }: PastTypeLabelProps) => {
  const label = useMemo(() => {
    switch (pastType) {
      case '1day':
        return '1일전';
      case '2day':
        return '2일전';
      case '7day':
        return '7일전';
      default:
        return 'unknown';
    }
  }, [pastType]);

  return <span>{label}</span>;
};

export default PastTypeLabel;
