import type { ChangeEvent } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import type { BusForm } from '../types';

interface BusSearchContentProps {
  className?: string;
  busFormValues: BusForm;
  onBusFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const BusSearchContent = ({
  className,
  busFormValues,
  onBusFormChange,
}: BusSearchContentProps) => {
  return (
    <div className={cn('flex flex-col gap-8', className)}>
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="busNumber">버스 번호</Label>
        <Input
          id="busNumber"
          name="busNumber"
          value={busFormValues.busNumber}
          onChange={onBusFormChange}
        />
      </div>
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="stationId">정류소 ID</Label>
        <Input
          id="stationId"
          name="stationId"
          value={busFormValues.stationId}
          onChange={onBusFormChange}
        />
      </div>
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="stationOrder">정류소 순번</Label>
        <Input
          id="stationOrder"
          name="stationOrder"
          value={busFormValues.stationOrder}
          onChange={onBusFormChange}
        />
      </div>
      <div className="flex flex-col items-start gap-1.5">
        <Label htmlFor="routeId">노선 ID</Label>
        <Input
          id="routeId"
          name="routeId"
          value={busFormValues.routeId}
          onChange={onBusFormChange}
        />
      </div>
    </div>
  );
};

export default BusSearchContent;
