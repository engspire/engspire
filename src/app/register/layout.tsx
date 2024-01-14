import { Metadata } from 'next'

export const metadata: Metadata = {
    title: "Learn English at Engspire",
    description: "These are the courses that are available at Engspire at the moment. Which one do you want to join?",
}

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
