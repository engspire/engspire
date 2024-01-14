'use client';
import { useState } from 'react';
import { ICourse, courseIntakes } from '../../.includes/courses';
import IntakeCard from '../IntakeCard';

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
  const [course, setCourse] = useState<ICourse | undefined>(undefined);

  const intakeData = courseIntakes.get(productId);

  return (
    <>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold'>Contact Details</h2>
        <p>{firstName}&nbsp;{lastName}</p>
        <p className="text-sm">✉️ {emailAddress}</p>
        <p className="text-sm">☎️ {phoneNumber}</p>
      </div>
      <div className='mt-4 mb-2'>
        <h2 className='font-bold'>Course Details</h2>
        <p className="">{productName}</p>
      </div>
      <div className="my-4 flex justify-center">
        {intakeData && <IntakeCard data={intakeData} />}
      </div>
      <div className='mt-6 mb-2'>
        <h2 className='font-bold'>Paying amount</h2>
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
