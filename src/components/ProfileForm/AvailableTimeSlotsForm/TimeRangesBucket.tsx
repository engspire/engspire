import AddAnotherButton from '@/components/AddAnotherButton';
import TimeRange from '@/components/TimeRange';
import { useState } from 'react';
import { TimeSlot } from '.';

type ITimeRangesBucketProps = {
  day: string,
};

/**
 * TODO:
 * - Each bucket should support adding multiple time slots.
 * - Time slots should be ordered according to time of day.
 * - User should not be able to pick overlapping time slots.
 */
export default function TimeRangesBucket({ day }: ITimeRangesBucketProps) {
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([])
  
  function getDataFromTimeRange(data: any) {
    console.log({ data });
  };

  return (
    <div tabIndex={0} className="collapse collapse-plus bg-base-300">
      <input type="radio" name={day.toLowerCase()} />
      <div className="collapse-title text-xl font-medium">
        {day}
      </div>
      <div className="collapse-content">
        <TimeRange sendDataToParent={getDataFromTimeRange} />
        <AddAnotherButton buttonName='Add another time slot' />
      </div>
    </div>
  );
}
