import IntakeCard from '@/components/IntakeCard';
import { format } from "date-fns";
import { Metadata } from "next";
import Image from "next/image";
import { courseIntakes, courses } from "../../../.includes/courses";


const course = courses.get("beginnersGrammar");
const intake = course && courseIntakes.get(course.nextBatchCode.toString());

export const metadata: Metadata = {
    title: "Beginners' Grammar Course at Engspire",
    description: "This course is most suitable for students who need to learn the basics of English grammar and begin their language training at Engspire.",
};


export default function BeginnersGrammarCourse() {
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
                                <p className="pt-6">Whether you&apos;re a student preparing for academic success, a professional aiming to boost your career, or simply someone who values clear communication, this course is your key to progress. Learn at your pace through engaging lessons and interactive exercises, all carefully curated under the guidance of our experienced teachers.</p>
                                <p className="py-6">Join a community of learners led by our dedicated teachers, who share your enthusiasm for growth, and set yourself on a path to becoming a confident English communicator. Enroll today in the Beginners&apos; Grammar Course at Engspire and take your first step towards mastering English grammar!</p>
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
                        <Image alt="Grammar" src="/books.png" className="overflow-hidden max-w-sm" width={320} height={320} style={{ opacity: 0.25 }} />
                    </div>
                    <div className="font-sans text-base mt-4 text-left">
                        <h4 className="text-xl font-bold mb-4">📚 Syllabus</h4>
                        <ol className="list-decimal pl-6">
                            <li className="mb-4">
                                <strong className="font-bold">Introduction to Beginners’ Grammar</strong>
                                <ol className="list-decimal pl-6">
                                    <li>Sentence Formation</li>
                                    <li>Sentence Openers</li>
                                </ol>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Word Classes, Verb Forms and Combinations</strong>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Active Voice / Passive Voice</strong>
                                <ul className="list-disc pl-6">
                                    <li>Present Continuous Tense</li>
                                    <li>Present Perfect Continuous Tense</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Pronouns and Determiners</strong>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Non-action "be"</strong>
                                <ul className="list-disc pl-6">
                                    <li>"am", "is", "are", "was", "were", and Modal Verbs (1) + "be"</li>
                                    <li>“have been”, “being”</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Basic Prepositions</strong>
                                <ul className="list-disc pl-6">
                                    <li>Prepositions of Place and Movement</li>
                                    <li>Other frequently used prepositions</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Facts, States, and Habitual Actions</strong>
                                <ul className="list-disc pl-6">
                                    <li>Simple Present Tense</li>
                                    <li>Non-ing (Stative) verbs</li>
                                    <li>Talking about Daily Routines</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Finished Actions</strong>
                                <ul className="list-disc pl-6">
                                    <li>Simple Past Tense</li>
                                    <li>Present Perfect Tense</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Past Actions in Past Time</strong>
                                <ul className="list-disc pl-6">
                                    <li>Past Continuous Tense</li>
                                    <li>Past Perfect Tense</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Future Actions</strong>
                                <ul className="list-disc pl-6">
                                    <li>Simple Future Tense + Modal Verbs (2)</li>
                                    <li>Expressing Probability</li>
                                    <li>Present Continuous + Future Time Expression</li>
                                    <li>"going to" + V1</li>
                                </ul>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Conditional Tenses</strong>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Modal Verbs (3)</strong>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Conjunctions</strong>
                            </li>
                            <li className="mb-4">
                                <strong className="font-bold">Relative Clauses</strong>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    );
}
