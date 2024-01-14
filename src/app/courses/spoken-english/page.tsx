import IntakeCard from '@/components/IntakeCard';
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import { courseIntakes, courses } from "../../../.includes/courses";


const course = courses.get("spokenEnglish");
const intake = course && courseIntakes.get(course.nextBatchCode.toString());

export const metadata: Metadata = {
    title: "Spoken English Course at Engspire",
    description: "This program builds your language skills while having one-on-one conversations with multiple teachers to improve your speaking ability.",
};

export default function SpokenEnglishCourse() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center block lg:hidden">{course?.title}</h1>
            <div className="flex flex-col gap-4 p-8 justify-center place-items-center lg:place-items-start lg:gap-16 lg:flex-row-reverse">
                {intake && <IntakeCard data={intake} showJoin />}
                <div className="text-center lg:text-left sm:max-w-sm">
                    <h1 className="text-3xl font-bold text-center hidden lg:block lg:text-left">{course?.title}</h1>
                    <div className="stack">
                        <div>
                            <div className="text-justify">
                                <p className="pt-6">In this special program, you&apos;ll get better at speaking English by having one-on-one conversations with friendly teachers who will guide you throughout the course. It&apos;s like chatting with friends, but you&apos;ll learn a lot in the meantime. They&apos;ll help you improve your fluency and sound more confident.</p>
                                <p className="pt-6">The idea behind this program is to give you direct help that fits you best. When you talk with us, they&apos;ll motivate you to improve the good things you have in your speech and help you to fix any small mistakes you might make. This way, every chat you have will make you better at speaking.</p>
                                <p className="py-6">No matter if you want to do better in school, speak better at work, or just feel better when you are having conversations, this program is excellent for you. Our team of teachers are ready to help you to become a better speaker. So, if you&apos;re excited to talk and learn, join us and get started on improving your speaking skill!</p>
                            </div>
                            {intake && (
                                <div className="mb-6 alert glass text-sm">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current inline w-6 h-6 mr-1.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{intake.status === "next intake" ? "Next intake starts" : "Ongoing batch started"} on {format(intake.startDate, "PPP")}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                        <Image alt="Grammar" src="/conversation.png" className="overflow-hidden max-w-sm" width={320} height={320} style={{ opacity: 0.25 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
