"use client";

export default function ViewPaymentsButton() {
  return (
    <a href="#my-payments" className="btn btn-secondary :not:md:btn-block" onClick={() => (document.getElementById('PaymentsModal') as HTMLDialogElement).showModal()}>View my payments</a>
  );
}
