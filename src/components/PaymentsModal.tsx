import { mockPayments } from '../.mocks/payments';
import PaymentsTable from './PaymentsTable/PaymentsTable';

export default function PaymentsModal() {
  function getPaymentRecords() {
    return mockPayments;
  }

  function calculateTotalPaid() {
    const totalPaid = { _sum: { amount: 28500 } };

    return totalPaid;
  }

  function calculateTotalIncome() {
    const totalIncome = { _sum: { amount: 1500 } };

    return totalIncome;
  }

  const paymentTableData = getPaymentRecords();
  const totalPaid = calculateTotalPaid();
  const totalIncome = calculateTotalIncome();

  if (totalPaid && totalIncome && paymentTableData) return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="PaymentsModal" className="modal modal-top md:modal-middle">
        <div className="modal-box max-h-screen md:max-h-fit md:w-11/12 md:max-w-fit">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold -mt-8"><span className='text-secondary'>My Payments</span></h1>
            <div className="mt-2 mb-6">
              <div className="stats stats-vertical lg:stats-horizontal bg-base-200 text-secondary">

                <div className="stat">
                  <div className="stat-title">Account Balance</div>
                  <div className="stat-value">{new Intl.NumberFormat("en-US", { style: "currency", currency: "LKR" }).format(0)}</div>
                  <div className="stat-actions">
                    <button className="btn btn-sm btn-success">Add funds</button>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Total Paid</div>
                  <div className="stat-value">{new Intl.NumberFormat("en-US", { style: "currency", currency: "LKR" }).format(totalPaid._sum.amount ?? 0)}</div>
                  <div className="stat-actions">
                    <button className="btn btn-sm btn-info">View history</button>
                  </div>
                </div>

                <div className="stat">
                  <div className="stat-title">Total Income</div>
                  <div className="stat-value">{new Intl.NumberFormat("en-US", { style: "currency", currency: "LKR" }).format(totalIncome._sum.amount ?? 0)}</div>
                  <div className="stat-actions">
                    <button className="btn btn-sm btn-warning">Withdraw funds</button>
                  </div>
                </div>

              </div>
            </div>
            <div className='mt-6'>
              <h2 className="text-base font-bold -mt-8 mb-2"><span className='text-secondary'>Transaction History</span></h2>
              <PaymentsTable data={paymentTableData as any} />
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
  else return (<div className="min-h-[114px] grid place-items-center text-center"><span className="loading loading-bars loading-lg" ></span></div>);
}



