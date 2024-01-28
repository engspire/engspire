import { Metadata } from "next";
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Courses at Engspire",
  description: "Engspire offers several online courses that have been designed for helping you to improve your English language skills.",
};

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Script type="text/javascript" src="https://www.payhere.lk/lib/payhere.js" />
    </>
  );
}
