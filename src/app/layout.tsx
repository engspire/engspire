import Footer from "@/components/Footer";
import TopNavigation from "@/components/TopNavigation";
import UserProfileProvider from '@/providers/ProfileProvider';
import TanstackProvider from '@/providers/TanstackProvider';
import { ClerkProvider } from '@clerk/nextjs';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-day-picker/dist/style.css";
import "./globals.css";

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Engspire",
  description: "We are here to inspire Sri Lankans to change the way they teach English as a second language.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <TanstackProvider>
        <UserProfileProvider>
          <html lang="en" data-theme="winter">
            <head>
              <link rel="manifest" href="/manifest.json" />
              <link rel="apple-touch-icon" href="/icon.png"></link>
              <meta name="theme-color" content="#021431" />
            </head>
            <body className={`${inter.className} bg-base-200`}>
              <TopNavigation />
              <div className="min-h-screen py-24 sm:flex justify-center">
                <div className="max-w-[1024px]">
                  {children}
                </div>
              </div>
              <Footer />
              <Analytics />
            </body>
          </html>
        </UserProfileProvider>
      </TanstackProvider>
    </ClerkProvider>
  );
}
