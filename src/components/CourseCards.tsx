import Image from "next/image";
import Link from "next/link";
import { courseIntakes, courses } from "../.includes/courses";

const beginnersGrammarCourse = courses.get("beginnersGrammar");
const beginnersGrammarCourseIntake = beginnersGrammarCourse && courseIntakes.get(beginnersGrammarCourse.nextBatchCode.toString());

const pronunciationTraining = courses.get("pronunciationTraining");
const pronunciationTrainingIntake = pronunciationTraining && courseIntakes.get(pronunciationTraining.nextBatchCode.toString());

const spokenEnglish = courses.get("spokenEnglish");
const spokenEnglishIntake = spokenEnglish && courseIntakes.get(spokenEnglish.nextBatchCode.toString());

type CourseCardsProps = {
    showDetails?: boolean;
};

export default function CourseCards({ showDetails }: CourseCardsProps) {
    return (
        <div className="grid grid-cols-1 gap-4 p-10 pb-20 md:grid-cols-2 lg:grid-cols-3">
            {spokenEnglish && (
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <figure className='min-h-[215px]'><Image src="/conversation.png" alt="Conversation" width={400} height={400} className="pt-8 px-8" /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">{spokenEnglish.title}</h2>
                        {showDetails && <p>This program builds your language skills while having one-on-one conversations with multiple teachers to improve your speaking ability.</p>}
                        {showDetails && spokenEnglishIntake && (
                            <>
                                <p>Duration: {spokenEnglishIntake.duration}</p>
                                <p>Total Fee: {spokenEnglishIntake.totalFee}</p>
                            </>
                        )}
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary btn-block"><Link href={spokenEnglish.route}>Learn more</Link></button>
                        </div>
                    </div>
                </div>
            )}
            {beginnersGrammarCourse && (
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <figure className='min-h-[215px]'><Image src="/grammar-course.png" alt="Grammar" width={400} height={400} /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">{beginnersGrammarCourse.title}</h2>
                        {showDetails && <p>This course is most suitable for students who need to learn the basics of English grammar and begin their language training at Engspire.</p>}
                        {showDetails && beginnersGrammarCourseIntake && (
                            <>
                                <p>Duration: {beginnersGrammarCourseIntake.duration}</p>
                                <p>Total Fee: {beginnersGrammarCourseIntake.totalFee}</p>
                            </>
                        )}
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary btn-block"><Link href={beginnersGrammarCourse.route}>Learn more</Link></button>
                        </div>
                    </div>
                </div>
            )}
            {pronunciationTraining && (
                <div className="card max-w-sm bg-base-100 shadow-xl">
                    <figure className='min-h-[215px]'><Image src="/pronunciation.png" alt="Pronunciation" width={400} height={400} /></figure>
                    <div className="card-body text-left">
                        <h2 className="card-title">{pronunciationTraining.title}</h2>
                        {showDetails && <p>This program guides you to improve your pronunciation and sound natural when speaking. You will also learn the basic skills you need to enhance your pronunciation on your own.</p>}
                        {showDetails && pronunciationTrainingIntake && (
                            <>
                                <p>Duration: {pronunciationTrainingIntake.duration}</p>
                                <p>Total Fee: {pronunciationTrainingIntake.totalFee}</p>
                            </>
                        )}
                        <div className="card-actions justify-end mt-4">
                            <button className="btn btn-primary btn-block"><Link href={pronunciationTraining.route}>Learn more</Link></button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
