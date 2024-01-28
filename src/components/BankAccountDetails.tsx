import Image from 'next/image';

export default function BankAccountDetails() {
  return (
    <>
      <figure>
        <Image src="/sampath-bank.jpg" alt="Sampath Bank" width={320} height={140} />
      </figure>
      <div className="card-body -m-4 -mt-6">
        <div>
          <label htmlFor="account-name" className="text-sm">Account Number</label>
          <p id="account-name" className="font-bold">121214031672</p>
        </div>
        <div>
          <label htmlFor="account-name" className="text-sm">Name of the Account</label>
          <p id="account-name" className="font-bold">Engspire</p>
        </div>
        <div>
          <label htmlFor="account-name" className="text-sm">Bank</label>
          <p id="account-name" className="font-bold">Sampath Bank PLC</p>
        </div>
        <div>
          <label htmlFor="account-name" className="text-sm">Branch</label>
          <p id="account-name" className="font-bold">Gampaha Super Branch</p>
        </div>
      </div>
    </>
  );
}
