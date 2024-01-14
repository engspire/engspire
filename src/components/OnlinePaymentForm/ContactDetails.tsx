type ContactDetailsData = {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
};

type ContactDetailsProps = ContactDetailsData & {
  updateFields: (fields: Partial<ContactDetailsData>) => void;
};

export default function ContactDetails({ firstName, lastName, emailAddress, phoneNumber, updateFields }: ContactDetailsProps) {
  return (
    <>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold'>Contact Details</h2>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">First name</span>
        </label>
        <input type="text" placeholder="Kasun" className="input input-bordered" value={firstName} onChange={e => updateFields({ firstName: e.target.value })} required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Last name</span>
        </label>
        <input type="text" placeholder="Udaharana" className="input input-bordered" value={lastName} onChange={e => updateFields({ lastName: e.target.value })} required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email address</span>
        </label>
        <input type="text" placeholder="kasunudaharana@gmail.com" className="input input-bordered" value={emailAddress} onChange={e => updateFields({ emailAddress: e.target.value })} required />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Phone number</span>
        </label>
        <input type="phone" placeholder="+94712345678" className="input input-bordered" value={phoneNumber} onChange={e => updateFields({ phoneNumber: e.target.value })} required />
      </div>
    </>
  );
}
