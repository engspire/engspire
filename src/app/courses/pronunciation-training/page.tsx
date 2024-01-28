import IntakeCard from '@/components/IntakeCard';
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import { courseIntakes, courses } from "../../../.includes/courses";


const course = courses.get("pronunciationTraining");
const intake = course && courseIntakes.get(course.nextBatchCode.toString());

export const metadata: Metadata = {
    title: "Pronunciation Training at Engspire",
    description: "This program guides you to improve your pronunciation and sound natural when speaking. You will also learn the basic skills you need to enhance your pronunciation on your own.",
};

export default function PronunciationTraining() {
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
                                <p className="pt-6">This specialized program is dedicated to honing your English speaking skills to a more advanced level. Through this program, you will gain proficiency in articulating words and sentences more naturally.</p>
                                <p className="py-6">A key feature of this program is the introduction to the International Phonetic Alphabet (IPA), a powerful tool that helps to find the accurate pronunciation of words. Beyond the program&apos;s duration, you will acquire effective self-practice techniques that will contribute to your ongoing learning process.</p>
                            </div>
                            {intake && intake.startDate && (
                                <div className="mb-6 alert glass text-sm">
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current inline w-6 h-6 mr-1.5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                        <span>{intake.status === "next intake" ? "Next intake starts" : "Ongoing batch started"} on {format(intake.startDate, "PPP")}</span>
                                    </p>
                                </div>
                            )}
                        </div>
                        <Image alt="Grammar" src="/lips.png" className="overflow-hidden max-w-sm" width={320} height={320} style={{ opacity: 0.25 }} />
                    </div>
                </div>
            </div>
        </div>
    );
}
