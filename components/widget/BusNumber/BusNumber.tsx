import { memo } from 'react';

interface BusNumberProps {
  busNumber: string;
  // [TODO]
  // 버스 종류 추가하고 색상 설정 : 마을버스, 일반버스, 광역버스, ...
}

const BusNumber = ({ busNumber }: BusNumberProps) => {
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight text-yellow-400 lg:text-5xl">
      {busNumber}
    </h1>
  );
};

export default memo(BusNumber);
