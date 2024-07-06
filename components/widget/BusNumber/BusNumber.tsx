import { memo, useMemo } from 'react';
import { getBusColor } from '@/utils/busRoute';

interface BusNumberProps {
  busName: string;
  busTypeIndex: string;
}

const BusNumber = ({ busName, busTypeIndex }: BusNumberProps) => {
  const busColor = useMemo(() => getBusColor(busTypeIndex), [busTypeIndex]);

  return (
    <h1
      className="'scroll-m-20 lg:text-5xl' text-4xl font-extrabold tracking-tight"
      style={{
        color: busColor,
      }}
    >
      {busName}
    </h1>
  );
};

export default memo(BusNumber);
