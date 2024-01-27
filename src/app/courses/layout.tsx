import CourseCards from "@/components/CourseCards";
import { Metadata } from "next";
import Image from "next/image";

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
        <>{children}</>
    );
}
