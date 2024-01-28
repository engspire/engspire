import { addWeeks, addYears, isBefore, parseISO } from "date-fns";

export const courseLabels = {
    beginnersGrammar: "beginnersGrammar",
    pronunciationTraining: "pronunciationTraining",
    spokenEnglish: "spokenEnglish",
} as const;

export type ICourseLabel = (typeof courseLabels)[keyof typeof courseLabels];

export type ICourse = {
    title: string,
    route: string,
    nextBatchCode: number,
    startDate: Date,
};

export type ICourseIntake = ICourse & {
    courseLabel: ICourseLabel,
    status: "next intake" | "ongoing batch",
    canRegister: boolean,
    registrationUrl: string,
    batchCode: number,
    duration: string,
    startDate: Date,
    endDate: Date,
    classDays: {
        Monday?: boolean,
        Tuesday?: boolean,
        Wednesday?: boolean,
        Thursday?: boolean,
        Friday?: boolean,
        Saturday?: boolean,
        Sunday?: boolean,
    },
    classTime: string,
    totalFeeStrikethrough?: string,
    totalFee: string,
    amount: number,
    currency: ICurrency,
    installments?: IPaymentInstallments;
    whatsAppUrl?: string,
};

export type ICurrency = 'LKR' | 'USD' | 'GBP'; 

export type IPaymentInstallments = {
    description: string[],
    breakdown: IPaymentInstallment[];
};

export type IPaymentInstallment = {
    amount: number,
    currency: ICurrency,
    label: string,
};

export const courses = new Map<ICourseLabel, ICourse>();

courses.set("beginnersGrammar", {
    title: "Beginners' Grammar",
    route: "/courses/beginners-grammar",
    nextBatchCode: 240168,
    startDate: parseISO("2024-01-12"),
});

courses.set("pronunciationTraining", {
    title: "Pronunciation Training",
    route: "/courses/pronunciation-training",
    nextBatchCode: 240112,
    // startDate: parseISO("2024-01-30"),
});

courses.set("spokenEnglish", {
    title: "Spoken English Course",
    route: "/courses/spoken-english",
    nextBatchCode: 240156,
    startDate: parseISO("2024-01-13"),
});

export const courseIntakes = new Map<string, ICourseIntake>();

const beginnersGrammarIntake = {
    ...(courses.get("beginnersGrammar") as ICourse)
};
courseIntakes.set(beginnersGrammarIntake.nextBatchCode.toString(), {
    ...beginnersGrammarIntake,
    courseLabel: "beginnersGrammar",
    status: isBefore(beginnersGrammarIntake.startDate, new Date()) ? "ongoing batch" : "next intake",
    canRegister: true,
    // registrationUrl: `/register/${beginnersGrammarIntake.nextBatchCode}`,
    registrationUrl: `https://docs.google.com/forms/d/e/1FAIpQLScyz6T2eDw_0qgVaJTLTfpzTKRIE5E-jj1vpS3JRZd4By_t-g/viewform?usp=sf_link`,
    batchCode: beginnersGrammarIntake.nextBatchCode,
    duration: "10 weeks",
    startDate: beginnersGrammarIntake.startDate,
    endDate: addWeeks(beginnersGrammarIntake.startDate, 10),
    classDays: {
        Monday: true,
        Friday: true,
    },
    classTime: "8:30pm - 10:30pm",
    totalFee: "LKR 5,000",
    amount: 5000,
    currency: 'LKR',
    installments: {
        description: ["LKR 2,500 × 2"],
        breakdown: [
            { amount: 2500, currency: "LKR", label: "LKR 2,500" },
        ]
    },
    whatsAppUrl: "https://chat.whatsapp.com/GTaqZE31gMvFKeQ5qwwmxX",
});

const pronunciationTrainingIntake = {
    ...(courses.get("pronunciationTraining") as ICourse)
};
courseIntakes.set(pronunciationTrainingIntake.nextBatchCode.toString(), {
    ...pronunciationTrainingIntake,
    courseLabel: "pronunciationTraining",
    status: isBefore(pronunciationTrainingIntake.startDate, new Date()) ? "ongoing batch" : "next intake",
    canRegister: false,
    // registrationUrl: `/register/${pronunciationTrainingIntake.nextBatchCode}`,
    registrationUrl: `https://docs.google.com/forms/d/e/1FAIpQLSdZoOcGTeeD_zss-fEhXENlPyvZNK8PBQDF2R4Mu9whydB-3w/viewform?usp=sf_link`,
    batchCode: pronunciationTrainingIntake.nextBatchCode,
    duration: "6 weeks",
    startDate: pronunciationTrainingIntake.startDate,
    endDate: addWeeks(pronunciationTrainingIntake.startDate, 6),
    classDays: {
        Tuesday: true,
    },
    classTime: "8:30pm - 10:30pm",
    totalFee: "LKR 5,000",
    amount: 5000,
    currency: 'LKR',
    whatsAppUrl: "https://chat.whatsapp.com/KmMzo5TB7qlGXw5NFbn6qt",
});

const spokenEnglishIntake = {
    ...(courses.get("spokenEnglish") as ICourse)
};
courseIntakes.set(spokenEnglishIntake.nextBatchCode.toString(), {
    ...spokenEnglishIntake,
    courseLabel: "spokenEnglish",
    status: isBefore(spokenEnglishIntake.startDate, new Date()) ? "ongoing batch" : "next intake",
    canRegister: true,
    // registrationUrl: `/register/${spokenEnglishIntake.nextBatchCode}`,
    registrationUrl: `https://docs.google.com/forms/d/e/1FAIpQLSeD_cQcEAx5MeDnnvsAitJXdLrfiUmyuLSru9FgskLQT88hXA/viewform?usp=sf_link`,
    batchCode: spokenEnglishIntake.nextBatchCode,
    duration: "10 weeks",
    startDate: spokenEnglishIntake.startDate,
    endDate: addWeeks(spokenEnglishIntake.startDate, 20),
    classDays: {
        Saturday: true,
    },
    classTime: "8:30pm - 10:30pm",
    totalFee: "LKR 15,000",
    amount: 15000,
    currency: 'LKR',
    installments: {
        description: ["LKR 5,000 × 3"],
        breakdown: [
            { amount: 10000, currency: "LKR", label: "LKR 10,000" },
            { amount: 7500, currency: "LKR", label: "LKR 7,500" },
            { amount: 5000, currency: "LKR", label: "LKR 5,000" },
        ]
    },
    whatsAppUrl: "https://chat.whatsapp.com/LEQ4Hz8tIFG3vlazkShUP0",
});
