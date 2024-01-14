type AvailableDaysData = {
  monday: boolean,
  tuesday: boolean,
  wednesday: boolean,
  thursday: boolean,
  friday: boolean,
  saturday: boolean,
  sunday: boolean,
};

type AvailableDaysProps = AvailableDaysData & {
  updateFields: (fields: Partial<AvailableDaysData>) => void;
};

export default function AvailableDaysForm({ monday, tuesday, wednesday, thursday, friday, saturday, sunday, updateFields }: AvailableDaysProps) {
  return (
    <>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold text-accent'>Which days are you free to learn?</h2>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={monday} onChange={(e) => updateFields({ monday: e.target.checked })} />
          <span className="label-text text-xl">Monday</span>
        </label>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={tuesday} onChange={(e) => updateFields({ tuesday: e.target.checked })} />
          <span className="label-text text-xl">Tuesday</span>
        </label>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={wednesday} onChange={(e) => updateFields({ wednesday: e.target.checked })} />
          <span className="label-text text-xl">Wednesday</span>
        </label>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={thursday} onChange={(e) => updateFields({ thursday: e.target.checked })} />
          <span className="label-text text-xl">Thursday</span>
        </label>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={friday} onChange={(e) => updateFields({ friday: e.target.checked })} />
          <span className="label-text text-xl">Friday</span>
        </label>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={saturday} onChange={(e) => updateFields({ saturday: e.target.checked })} />
          <span className="label-text text-xl">Saturday</span>
        </label>
      </div>
      <div className="form-control place-items-start m-0 p-0">
        <label className="label cursor-pointer gap-2">
          <input type="checkbox" className="checkbox checkbox-primary" checked={sunday} onChange={(e) => updateFields({ sunday: e.target.checked })} />
          <span className="label-text text-xl">Sunday</span>
        </label>
      </div>
    </>
  );
}
