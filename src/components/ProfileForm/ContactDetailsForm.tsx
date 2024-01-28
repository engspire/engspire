"use client";
import { useProfile } from '@/providers/ProfileProvider';

type ContactDetailsData = {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
};

type ContactDetailsProps = ContactDetailsData & {
  updateFields: (fields: Partial<ContactDetailsData>) => void;
};

export default function ContactDetailsForm({ firstName, lastName, emailAddress, phoneNumber, updateFields }: ContactDetailsProps) {
  const { profile } = useProfile();

  return (
    <>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold text-accent'>How can we contact you?</h2>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">First name</span>
        </label>
        <input type="text" placeholder="Kasun" className="input input-bordered" value={firstName ?? profile?.firstName} onChange={e => updateFields({ firstName: e.target.value })} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Last name</span>
        </label>
        <input type="text" placeholder="Udaharana" className="input input-bordered" value={lastName ?? profile?.lastName} onChange={e => updateFields({ lastName: e.target.value })} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email address</span>
        </label>
        <input type="text" placeholder="kasunudaharana@gmail.com" className="input input-bordered" value={emailAddress ?? profile?.emailAddress} onChange={e => updateFields({ emailAddress: e.target.value })} />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone number</span>
        </label>
        <input type="phone" placeholder="+94712345678" className="input input-bordered" value={phoneNumber ?? profile?.phoneNumber} onChange={e => updateFields({ phoneNumber: e.target.value })} />
      </div>
    </>
  );
}
