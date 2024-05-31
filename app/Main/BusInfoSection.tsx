'use client';
import { useState } from 'react';
import BusDepartureCard from '@/components/widget/BusDepartureCard';
import PastBusTimes from '@/components/widget/PastBusTimes/PastBusTimes';
import { toDateString, toTimeString } from '@/utils/date';
import { getSavedBusForm, saveBusForm } from '@/utils/storage';
import type { BusForm } from './types';
import BusSearch from './BusSearch';
import useBusArrivals from './useBusArrivals';

function BusInfoSection() {
  const [busFormValues, setBusFormValues] =
    useState<BusForm>(getSavedBusForm());

  const onBusSearch = (busSearchValues: BusForm) => {
    setBusFormValues({ ...busSearchValues });
    saveBusForm(busSearchValues);
  };

  const busArrivals = useBusArrivals(busFormValues);
  const currentTimestamp = Date.now();
  const todayDateString = toDateString(currentTimestamp);
  const pastBusTimestamps: number[] = busArrivals.map((busTime: string) => {
    const todayTimestamp = `${todayDateString}T${busTime.slice(11)}`;
    return new Date(todayTimestamp).getTime();
  });

  const futureTimestamps = pastBusTimestamps.filter(
    (timestamp) => timestamp > currentTimestamp,
  );
  const nextTargetTimestamp = futureTimestamps[0];

  const futureTimes = futureTimestamps.map((timestamp) =>
    toTimeString(timestamp),
  );

  return (
    <div className="flex flex-col items-center overflow-auto p-10">
      <BusDepartureCard
        busNumber={busFormValues.busNumber}
        nextTimestamp={nextTargetTimestamp}
      />
      <div className="mt-6">
        <PastBusTimes arrivals={futureTimes} />
      </div>
      <BusSearch
        buttonClass="mt-6"
        initBusFormValues={busFormValues}
        onSearch={onBusSearch}
      />
    </div>
  );
}

export default BusInfoSection;
