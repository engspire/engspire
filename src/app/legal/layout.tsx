import Script from 'next/script';
import React from 'react';

export default function LegalLayout({ children }: { children: React.ReactNode; }) {
  return (
    <div className="p-12 text-justify" style={{ zIndex: 0 }}>
      {children}
    </div>
  );
}
