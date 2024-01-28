'use client';
import { usePathname } from 'next/navigation';
import { ICourseLabel, courseIntakes, courses } from '../../.includes/courses';
import IntakeDetails from '../IntakeDetails';

type SignUpSummaryData = {
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

type SignUpSummaryProps = SignUpSummaryData & {
  updateFields: (fields: Partial<SignUpSummaryData>) => void;
};

export default function SignUpSummary({ productName, productId, firstName, lastName, emailAddress, phoneNumber, amount, currency, updateFields }: SignUpSummaryProps) {
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
        <p className="font-semibold mb-2">{productName}</p>
        <div className="">
          {intakeData && <IntakeDetails data={intakeData} />}
        </div>
      </div>
    </>
  );
}
