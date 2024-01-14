import CourseCards from '@/components/CourseCards';
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex align-top place-items-center text-center flex-col lg:flex-row lg:justify-center lg:text-left">
        <Image alt="English Diploma" src="/english-diploma.png" className="min-w-[320px] m-16 max-w-xs md:max-w-lg" height={400} width={400} />
        <div className="max-w-xs sm:max-w-sm">
          <h1 className="text-5xl font-bold">We&apos;re Engspire</h1>
          <p className="py-6">We create opportunities for Sri Lankans who wish to improve their English language skills by building a community driven by innovation and creativity.</p>
          <a href="/courses" className="btn btn-primary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></svg>Join a Course</a>
        </div>
      </div>
      <div className="flex align-top place-items-center text-center flex-col lg:flex-row lg:justify-center lg:text-left my-12">
        <div className="max-w-xs sm:max-w-sm">
          <h1 className="text-4xl font-semibold">Engspire <span className="font-light">Web App</span></h1>
          <p className="py-6">We&apos;re building a platform to unite learners and teachers in a way they can work together to reinvent their language learning experience. It&apos;s currently in development, and we&apos;re continuously adding new features.</p>
          <a href="https://app.engspire.lk" target="_blank" className="btn btn-secondary"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" /></svg>Get Early Access</a>
        </div>
        <Image alt="Engspire Web App" src="/mobile-app.png" className="w-96 p-8 max-w-xs" height={400} width={400} />
      </div>
      <div className="bg-white flex align-top place-items-center text-center flex-col lg:flex-row lg:justify-center lg:text-left my-12 p-12 rounded-full">
        <Image alt="Engspire Web App" src="/reader.gif" className="w-96 p-8 max-w-xs" height={350} width={350} />
        <div className="max-w-xs sm:max-w-sm">
          <h1 className="text-4xl font-semibold">Engreesi <span className="font-light">Web App</span></h1>
          <p className="pt-6">Engreesi Web App project makes English learning accessible to everyone in Sri Lanka. It gives you access to hundreds of free lessons and articles.</p>
          <p className="py-6">මේ ඇප් එකෙන් ලංකාවේ ඕනෑම කෙනෙක්ට ඉංග්‍රීසි පාඩම් නොමිලේ ඉගෙනගන්න පුළුවන්.</p>
          <a href="https://engreesi.engspire.lk" target='_blank' className="btn btn-accent"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>Open App</a>
        </div>
      </div>
      <div className="hero mt-24">
        <div className="hero-content text-center flex-col lg:flex-row">
          <Image src="/online-conversation.png" alt="Online Classes" width={250} height={250} />
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Courses</h1>
            <p className="pt-6">We offer several online courses that have been designed for improving specific language areas.</p>
          </div>
        </div>
      </div>
      <div className="md:mt-10">
        <CourseCards />
      </div>
      <div className="flex align-top place-items-center text-center flex-col">
        <div className="">
          <Image alt="Engspire" src="/engspire-logo-with-background.png" className="mask mask-squircle w-[160px] m-8 max-w-xs" height={400} width={400} />
        </div>
        <div className="max-w-xs md:max-w-md">
          <h1 className="text-4xl">Follow us on WhatsApp</h1>
          <p className="py-6">If you&apos;d like to receive latest news and updates from us, you can follow our official channel on WhatsApp.<br />Use the following button to join.</p>
          <a href="https://whatsapp.com/channel/0029Va9ubmj23n3iQte7qR3q" target="_blank" className="btn btn-success"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /></svg>Follow</a>
        </div>
      </div>
    </div>
  );
}
