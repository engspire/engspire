import Script from 'next/script';
import React from 'react';

export default function PaymentLayout({ children }: { children: React.ReactNode; }) {
  return (
    <>
      {children}
      <Script type="text/javascript" src="https://www.payhere.lk/lib/payhere.js" />
    </>
  );
}
