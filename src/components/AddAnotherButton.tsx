import { MouseEventHandler } from 'react';

interface IAddAnotherButton {
  buttonName: string;
}

export default function AddAnotherButton({ buttonName: label }: IAddAnotherButton) {
  return (
    <label className="btn btn-ghost btn-xs my-2">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
      </svg>
      {label}
    </label>
  );
}
