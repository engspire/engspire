"use client";
import { addMinutes, format, parse, setHours, setMinutes } from 'date-fns';
import { useEffect, useRef, useState } from 'react';

interface ITimeRangeProps {
  sendDataToParent: (data: { startTime: string, endTime: string; }) => void;
}

export default function TimeRange(props: ITimeRangeProps) {
  const TIME_FORMAT = "hh:mm a";

  const startTimeRef = useRef<HTMLSelectElement | null>(null);
  const endTimeRef = useRef<HTMLSelectElement | null>(null);

  const [startTime, setStartTime] = useState("07:00 PM");
  const [defaultEndTime, setDefaultEndTime] = useState("07:15 PM");
  const [endTime, setEndTime] = useState(defaultEndTime);
  const [endTimeOptions, setEndTimeOptions] = useState<string[]>([]);

  const startTimeOptions = new Array(24).fill(0).map((_, i) => new Array(12).fill(0).map((_, j) => format(new Date(0, 0, 0, i, j * 5), TIME_FORMAT)).flat()).flat();

  useEffect(() => {
    const parsedStartTime = parse(startTime, TIME_FORMAT, new Date());

    // Create a new Date object and set hours and minutes
    const startTimeDateObject = setHours(setMinutes(new Date(), parsedStartTime.getMinutes()), parsedStartTime.getHours());

    const newDefaultEndTimeDateObject = addMinutes(startTimeDateObject, 15);
    const newDefaultEndTime = format(newDefaultEndTimeDateObject, TIME_FORMAT);

    setDefaultEndTime(newDefaultEndTime);

    const _endTimeOptions: string[] = [];

    let endTimeOption;
    let newEndTimeDateObject = startTimeDateObject;
    while (endTimeOption !== "12:00 AM") {
      newEndTimeDateObject = addMinutes(newEndTimeDateObject, 5);
      endTimeOption = format(newEndTimeDateObject, TIME_FORMAT);
      _endTimeOptions.push(endTimeOption);
      if (endTimeOption === "12:00 AM") break;
    }

    setEndTimeOptions(_endTimeOptions);
  }, [startTime]);

  const sendDataToParent = (e: any) => {
    setStartTime(startTimeRef?.current?.value ?? startTime);
    startTime && endTimeRef && props.sendDataToParent({ startTime: startTimeRef?.current?.value ?? "", endTime: endTimeRef?.current?.value ?? "" });
  };

  return (
    <div>
      <div className='flex flex-row items-center gap-1'>
        <label htmlFor="" className='text-sm'>From</label>
        <select className="select select-xs select-bordered" defaultValue={startTime} ref={startTimeRef} onChange={sendDataToParent}>
          {startTimeOptions.map((option, i) => <option>{option}</option>)}
        </select>
        <label htmlFor="" className='text-sm'>to</label>
        <select className="select select-xs select-bordered" defaultValue={defaultEndTime} ref={endTimeRef} onChange={sendDataToParent}>
          {endTimeOptions.map((option, i) => <option>{option}</option>)}
        </select>
        <div className="tooltip tooltip-top md:tooltip-right z-50" data-tip="Remove">
          <button className="btn btn-square btn-xs btn-error md:btn-ghost hover:btn-error" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
      </div>
    </div>
  );
}