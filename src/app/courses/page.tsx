"use client";
import CourseCards from "@/components/CourseCards";
import { useProfile } from '@/providers/ProfileProvider';
import Image from "next/image";

export default function Courses() {
    const { profile, isLoading } = useProfile();

    return (
        <main>
            <div className="hero">
                <div className="hero-content text-center flex-col lg:flex-row">
                    <Image src="/online-conversation.png" alt="Online Classes" width={250} height={250} />
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Courses</h1>
                        <p className="py-6">{!isLoading && profile?.firstName && `Hi ${profile.firstName}!`}<br/>These are the courses we offer at Engspire.</p>
                    </div>
                </div>
            </div>
            <div className="md:mt-10">
                <CourseCards showDetails={true} />
            </div>
        </main>
    );
}
