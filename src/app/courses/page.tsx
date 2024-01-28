"use client";
import CourseCards from "@/components/CourseCards";
import MyCoursesView from '@/components/MyCoursesView';
import { useProfile } from '@/providers/ProfileProvider';
import Image from "next/image";

export default function Courses() {
    const { userId } = useProfile();

    return (
        <main>
            <div className="hero">
                <div className="hero-content mt-8 text-center flex-col lg:flex-row">
                    <Image src="/online-conversation.png" alt="Online Classes" width={250} height={250} />
                    <div className="max-w-md mx-4">
                        <h1 className="text-5xl font-bold md:text-left">Courses</h1>
                        {!userId && <p className="py-6 md:text-left">We offer the following courses at Engspire.</p>}
                    </div>
                </div>
            </div>
            {userId && <div className="flex justify-center mt-8">
                <div className="max-w-sm">
                    <MyCoursesView />
                </div>
            </div>}
            {userId && <h3 className="mt-12 text-center text-3xl font-semibold">Available courses</h3>}
            <CourseCards showDetails={true} />
        </main>
    );
}
