import CourseCards from "@/components/CourseCards";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
    title: "Courses at Engspire",
    description: "Engspire offers several online courses that have been designed for helping you to improve your English language skills.",
};

export default function Courses() {
    return (
        <main>
            <div className="hero">
                <div className="hero-content text-center flex-col lg:flex-row">
                    <Image src="/online-conversation.png" alt="Online Classes" width={250} height={250} />
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Courses</h1>
                        <p className="py-6">We offer several online courses that have been designed for improving specific language areas.</p>
                    </div>
                </div>
            </div>
            <div className="md:mt-10">
                <CourseCards showDetails={true} />
            </div>
        </main>
    );
}
