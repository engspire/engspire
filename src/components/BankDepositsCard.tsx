import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function BankDepositsCard() {
  return (
    <>
      <div className="card w-80 max-w-xs bg-base-100 shadow-xl">
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
      </div>
      <div className="text-sm text-center max-w-xs">
        <Link className="btn btn-block btn-primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf-6aePOOqgxtcgu-EOXU1HS40HAbC3gVSH-bLb3WGSTN6YPQ/viewform?usp=sf_link">Submit Payment Details</Link>
        <p className="my-4">Please send us the details of the transaction when you make bank deposits.</p>
      </div>
    </>
  );
}
