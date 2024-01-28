'use client';
import { useState } from 'react';
import { ICourse, ICourseLabel, courseIntakes, courses } from '../../.includes/courses';
import IntakeCard from '../IntakeCard';
import IntakeDetails from '../IntakeDetails';
import { usePathname } from 'next/navigation';

type TransactionSummaryData = {
  firstName: string,
  lastName: string,
  emailAddress: string,
  phoneNumber: string,
  orderId: string,
  productId: string,
  productName: string,
  amount: number,
  currency: string,
};

type TransactionSummaryProps = TransactionSummaryData & {
  updateFields: (fields: Partial<TransactionSummaryData>) => void;
};

export default function TransactionSummary({ productName, productId, firstName, lastName, emailAddress, phoneNumber, amount, currency, updateFields }: TransactionSummaryProps) {
  const pathname = usePathname();

  const intakeData = courseIntakes.get(`${courses.get((pathname.split("/")[2] as ICourseLabel))?.nextBatchCode}`);

  return (
    <>
      <div>
        <h2 className='card-title mb-2'>
          Contact Details&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-success">
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
          </svg>
        </h2>
        <p>👤{firstName}&nbsp;{lastName}</p>
        <p className="text-sm">✉️ {emailAddress}</p>
        <p className="text-sm">☎️ {phoneNumber}</p>
      </div>
      <div className="mt-6">
        <h2 className='card-title mb-2'>
          Course Details&nbsp;
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-success">
            <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z" clipRule="evenodd" />
          </svg>
        </h2>
        <p className="">{productName}</p>
        <div className="">
          {intakeData && <IntakeDetails data={intakeData} />}
        </div>
      </div>
      <div className='mt-6'>
        <h2 className='card-title mb-2'>
          Payment&nbsp;
          <span className="loading loading-ring loading-xs"></span>
        </h2>
        <select className="select select-bordered w-full max-w-xs mt-2" onChange={(e) => { updateFields({ amount: +e.target.value }); }}>
          <option selected value={intakeData?.amount}>{intakeData?.totalFee}</option>
          {intakeData?.installments && intakeData?.installments.description.length > 0 && (
            intakeData?.installments.breakdown.map((installment, index) => (<option key={index} value={installment.amount}>{installment.label}</option>))
          )}
        </select>
      </div>
    </>
  );
}
