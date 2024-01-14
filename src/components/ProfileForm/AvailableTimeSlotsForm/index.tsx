import TimeRangesBucket from './TimeRangesBucket';

type AvailableTimeSlotsData = {
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean,
  mondaySlots: TimeSlot[],
  tuesdaySlots: TimeSlot[],
  wednesdaySlots: TimeSlot[],
  thursdaySlots: TimeSlot[],
  fridaySlots: TimeSlot[],
  saturdaySlots: TimeSlot[],
  sundaySlots: TimeSlot[],
};

export type TimeSlot = {
  startTime: string,
  endTime: string,
};

type AvailableTimeSlotsProps = AvailableTimeSlotsData & {
  updateFields: (fields: Partial<AvailableTimeSlotsData>) => void;
};

export default function AvailableTimeSlotsForm({ monday, tuesday, wednesday, thursday, friday, saturday, sunday, mondaySlots, tuesdaySlots, wednesdaySlots, thursdaySlots, fridaySlots, saturdaySlots, sundaySlots, updateFields }: AvailableTimeSlotsProps) {
  return (
    <>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold text-accent'>When are you free on these days?</h2>
      </div>
      <div className="grid gap-2">
        {monday && (<TimeRangesBucket day="Monday" />)}
        {tuesday && (<TimeRangesBucket day="Tuesday" />)}
        {wednesday && (<TimeRangesBucket day="Wednesday" />)}
        {thursday && (<TimeRangesBucket day="Thursday" />)}
        {friday && (<TimeRangesBucket day="Friday" />)}
        {saturday && (<TimeRangesBucket day="Saturday" />)}
        {sunday && (<TimeRangesBucket day="Sunday" />)}
      </div>
    </>
  );
}
