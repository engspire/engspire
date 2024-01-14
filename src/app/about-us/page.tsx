import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
    title: "About Engspire",
}

export default function AboutUs() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center block lg:hidden">About Us</h1>
      <div className="flex flex-col gap-4 p-8 justify-center place-items-center lg:place-items-start lg:gap-16 lg:flex-row">
        <div className="text-center lg:text-left sm:max-w-sm">
          <h1 className="text-3xl font-bold text-center hidden lg:block lg:text-left">About Us</h1>
          <div className="stack">
            <div>
              <div className="text-justify">
                <p className="pt-6">At the heart of our virtual space, you&apos;ll discover a dedicated team of enthusiasts driven by a singular mission: to empower you on your journey to mastering the intricate craft of effective communication in English. Our collective dedication springs from a genuine desire to foster a learning environment that is not only dynamic but also incredibly engaging.</p>
                <p className="pt-6">Picture a team of experienced and passionate experts, each with a shared commitment to your success. They are more than educators – they&apos;re mentors, companions, and allies, ready to stand by you as you navigate the fascinating world of language.</p>
                <p className="pt-6">Whether your ambitions lie in the realm of academia, the corridors of professionalism, or the nuances of personal growth, our virtual doors are open to you. We&apos;ve meticulously curated a treasure trove of knowledge, a toolkit of proven techniques, and an unwavering support system, all with the sole purpose of propelling you towards your aspirations.</p>
                <p className="pt-6">The symphony of guidance, encouragement, and insight we provide isn&apos;t just about learning the mechanics of language; it&apos;s about unearthing your unique voice and giving it the wings it deserves. As you explore our offerings, you&apos;re not just entering a virtual space – you&apos;re becoming part of a community that thrives on your progress.</p>
                <span id="contact-us" className="hidden -mt-40"></span>
                <p className="py-6">So, whether you&apos;re about to embark on an academic endeavor, a professional challenge, or a personal transformation, remember that our passionate team is here, ready to be your compass, your collaborator, and your cheerleader. Your journey to confident and impactful communication starts right here, in this space we&apos;ve carefully nurtured for you.</p>
              </div>
            </div>
            <Image alt="Engspire Logo" src="/engspire-logo.ico" className="overflow-hidden max-w-sm" width={320} height={320} style={{ opacity: 0.10 }} />
          </div>
        </div>
        <div>
          <div className="bg-base-200 flex flex-col w-full place-items-center gap-8">
            <h2 className="text-2xl font-bold" id="contact-us">Contact Us</h2>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-32"><Image src="/engspire-logo-with-background.png" alt="Engpsire Logo with Background" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Engspire</h2>
                <Link href="https://engspire.lk" className="text-xs -mt-2 mb-2">engspire.lk</Link>
                <p className="text-xs -mt-2 mb-2">185/4, <br /> Clifton Park, <br /> Sri Dhammaloka Mawatha, <br /> Heenatiyana, <br /> Minuwangoda, <br /> Sri Lanka </p>
                <div className="card-actions justify-start">
                  <Link href="mailto:hello@engspire.lk" className="btn btn-xs btn-ghost bg-info text-info-content lowercase">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /> </svg>
                    hello@engspire.lk
                  </Link>
                </div>
                <div className="card-actions justify-start">
                  <Link href="http://wa.me/+94773393477" target="_blank" className="btn btn-xs btn-ghost bg-success text-success-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>
                    +94773393477
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-base-200 flex flex-col w-full place-items-center gap-8 mt-8">
            <h2 className="text-2xl font-bold">Our Team</h2>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24">
                    <Image src="/people/900-pivithuru.jpg" alt="Pivithuru" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Pivithuru Jayakody</h2>
                <p className="text-xs -mt-2 mb-2">Founder, Teacher</p>
                <div className="card-actions justify-start">
                  <Link href="mailto:pivithuru@engspire.lk" className="btn btn-xs btn-ghost bg-info text-info-content lowercase">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" /> </svg>
                    pivithuru@engspire.lk
                  </Link>
                </div>
                <div className="card-actions justify-start">
                  <Link href="http://wa.me/+94714233477" target="_blank" className="btn btn-xs btn-ghost bg-success text-success-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" /> </svg>
                    +94714233477
                  </Link>
                </div>
              </div>
            </div>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24">
                    <Image src="/people/901-kaveen.jpeg" alt="Kaveen" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Kaveen Perera</h2>
                <p className="text-xs -mt-2 mb-2">Course Coordinator, Teacher</p>
              </div>
            </div>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24">
                    <Image src="/people/906-amali.jpg" alt="Amali" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Amali Samarakoon</h2>
                <p className="text-xs -mt-2 mb-2">Course Coordinator, Teacher</p>
              </div>
            </div>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24">
                    <Image src="/people/903-amanda.jpg" alt="Amanda" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Amanda Liyanage</h2>
                <p className="text-xs -mt-2 mb-2">Teacher</p>
              </div>
            </div>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24">
                    <Image src="/people/904-ameli.jpeg" alt="Ameli" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Ameli Charithma</h2>
                <p className="text-xs -mt-2 mb-2">Teacher</p>
              </div>
            </div>
            <div className="card card-side w-80 max-w-xs bg-base-100 shadow-xl">
              <figure>
                <div className="avatar">
                  <div className="w-24">
                    <Image src="/people/907-hashini.jpeg" alt="Hashini" width={150} height={150} />
                  </div>
                </div>
              </figure>
              <div className="card-body -m-4">
                <h2 className="card-title text-sm">Hashini Dandugamage</h2>
                <p className="text-xs -mt-2 mb-2">Teacher</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
