"use client"
import { useAuth } from '@clerk/nextjs';
import { Payment, User } from 'database';
import { format } from 'date-fns';

export type IPaymentsTableProps = {
  data: IPaymentRecord[];
};

type IPaymentRecord = Payment & { payer: User; payee: User; };

export default function PaymentsTable({ data }: IPaymentsTableProps) {
  const { userId } = useAuth();

  return (
    <div className="overflow-x-auto md:overflow-visible max-w-fill padding-2">
      <table className="table table-xs">
        <thead>
          <tr>
            <td className='w-[100px]'>Date</td>
            <td className='w-[50px]'>Type</td>
            <td>Amount</td>
            <td>Description</td>
            <td>Method</td>
            <td className='w-[100px]'>Status</td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {/* {new Array(5).fill(0).map((_, i) => ( */}
          {data.length > 0 ? data.map((record, i) => (
            <tr>
              <td className='w-[100px]'>{format(record?.paidAt, "yyyy-MM-dd")}</td>
              <td className='w-[50px]'>{record?.payee?.externalId === userId ? (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-primary">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-error">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                </svg>

              )}</td>
              <td>{new Intl.NumberFormat("en-US", { style: "currency", currency: "LKR" }).format(record?.amount)}</td>
              <td>{record?.remarks}</td>
              <td>{record?.method}</td>
              <td className='place-items-center'><span className={`badge badge-ghost badge-outline text-xs p-1`}>{record?.status}</span></td>
              <td className='max-w-[10px]'>
                <button className="btn btn-ghost btn-xs btn-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                  </svg>
                </button>
              </td>
            </tr>
          )) : (
            <tr className='h-[100px]'>
              <td colSpan={6} className='text-center'>
                <label className='btn btn-ghost hover:bg-base-100 cursor-default'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                  </svg>
                  No records
                </label>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
