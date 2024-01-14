import { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "Bank Deposits to Engspire Accounts",
    description: "Send the details of the deposits made to your bank on behalf of Engspire.",
}

export default function Payments() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center block lg:hidden">Payments</h1>
      <div className="flex flex-col gap-4 p-8 justify-center place-items-center lg:place-items-start lg:gap-16 lg:flex-row">
        <div className="text-center lg:text-left sm:max-w-sm">
          <h1 className="text-3xl font-bold text-center hidden lg:block lg:text-left">Payments</h1>
          <div className="flex place-items-start">
            <p className="py-6">We accept these methods of payment.</p>
          </div>
        </div>
        <div>
          <div className="bg-base-200 flex flex-col w-full place-items-center gap-8">
            <h2 className="text-2xl font-bold">Bank Deposits</h2>
            <div className="card w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <Image src="/sampath-bank.jpg" alt="Sampath Bank" width={320} height={140} />
              </figure>
              <div className="card-body -m-4 -mt-8">
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
          </div>
        </div>
      </div>
    </div>
  )
}
