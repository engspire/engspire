import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import BankAccountDetails from './BankAccountDetails';

export default function BankDepositsCard() {
  return (
    <>
      <div className="card max-w-[280px] max-w-xs bg-base-100 shadow-xl">
        <BankAccountDetails />
      </div>
      <div className="text-sm text-center max-w-xs">
        <Link className="btn btn-block btn-primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSf-6aePOOqgxtcgu-EOXU1HS40HAbC3gVSH-bLb3WGSTN6YPQ/viewform?usp=sf_link">Submit Payment Details</Link>
        <p className="my-4">Please send us the details of the transaction when you make bank deposits.</p>
      </div>
    </>
  );
}
