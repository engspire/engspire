import { Metadata } from "next";
import { courseIntakes } from "../../../.includes/courses";

const code = __dirname.split("/").slice(-1).toString();

export const metadata: Metadata = {
    title: [courseIntakes.get(code)?.title, `(${code})`].join(' ') ?? "Learn English at Engspire",
    description: "Join this course at Engspire and improve your communication skills."
};

export default function RegistrationForm() {
    return (
        <div className="flex justify-center min-w-[320px] md:min-w-[720px]">
            <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSf5cESWA_lnrg_OiK1PKV6pw8oR_HxQE4MuEjEcA7lRKuHG4g/viewform?embedded=true"
                className="min-h-screen w-full"
            >
                <span className="loading loading-bars loading-lg"></span>
            </iframe>
        </div>
    );
}
