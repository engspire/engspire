"use client";
import { parseISO } from "date-fns";
import { DayPicker } from "react-day-picker";

import CourseCards from "@/components/CourseCards";
import { courseIntakes, courses } from "../../.includes/courses";

const beginnersGrammarCourse = courses.get("beginners-grammar");
const beginnersGrammarCourseIntake = beginnersGrammarCourse && courseIntakes.get(beginnersGrammarCourse.nextBatchCode.toString());

const pronunciationTraining = courses.get("pronunciation-training");
const pronunciationTrainingIntake = pronunciationTraining && courseIntakes.get(pronunciationTraining.nextBatchCode.toString());

const spokenEnglish = courses.get("spoken-english");
const spokenEnglishIntake = spokenEnglish && courseIntakes.get(spokenEnglish.nextBatchCode.toString());

export default function Register() {
    return (
        <main>
            <div className="hero bg-base-200 xl:pb-16">
                <div className="hero-content text-center flex-col lg:flex-row">
                    <div className="max-w-md">
                        <h1 className="text-4xl font-bold">Register for a course</h1>
                        <p className="py-6">These are the courses that are available at the moment. Which one do you want to join?</p>
                    </div>
                    <DayPicker mode="multiple" selected={[
                        new Date(parseISO("2023-08-27")),
                        new Date(parseISO("2023-09-12")),
                        new Date(parseISO("2023-10-11")),
                    ]} modifiersClassNames={{
                        today: 'font-bold bg-neutral text-neutral-content',
                        selected: 'font-bold bg-primary text-primary-content'
                    }} className="hidden xl:block" />
                </div>
            </div>
            <CourseCards />
        </main>
    );
}
