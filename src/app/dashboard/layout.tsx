import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Engspire | Dashboard",
    description: "Reinvent the way you learn English",
};

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="min-h-screen flex justify-center">
          {children}
        </div>
      );
}
