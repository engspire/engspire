import BankDepositsCard from '@/components/BankDepositsCard';
import OnlinePaymentForm from '@/components/OnlinePaymentForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Payments to Engspire",
  description: "You can use these methods to make payments for our services.",
};

export default function Payments() {
  return (
    <>
      <div className="flex flex-col gap-4 p-8 justify-start place-items-center">
        <div className="text-center lg:text-left sm:max-w-sm">
          <h1 className="text-3xl font-bold text-center">Payments</h1>
          <div className="flex place-items-start">
            <p className="pt-6 pb-16">We accept these methods of payment.</p>
          </div>
        </div>
        <div className="flex-col gap-12 lg:flex lg:flex-row">
          <div className="flex flex-col w-full place-items-center gap-8">
            <h2 className="text-2xl font-bold">Bank Deposits</h2>
            <BankDepositsCard />
          </div>
          <div className="flex flex-col w-full place-items-center gap-8 mt-10 lg:mt-0">
            <h2 className="text-2xl font-bold">Online payments</h2>
            <OnlinePaymentForm />
          </div>
        </div>
      </div>
    </>
  );
}
