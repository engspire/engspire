"use client";

export default function MoreActionsButton() {
  return (
    <div className="dropdown">
      <button className="btn w-full lg:btn-ghost" tabIndex={0}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg><span>More actions</span>
      </button>
      <ul tabIndex={0} className="dropdown-content  bg-neutral text-neutral-content z-[1] menu p-2 shadow rounded-box w-full min-w-[200px] justify-center">
        <li><a className='justify-center lg:justify-start' href="/courses"><span className='hidden lg:inline'>🧿</span>Join a course</a></li>
        <li><a className='justify-center lg:justify-start' href="https://engreesi.com" target='_blank'><span className='hidden lg:inline'>📚</span>Explore lessons</a></li>
        <li><a className='justify-center lg:justify-start' href="/payments"><span className='hidden lg:inline'>🪙</span>Make a payment</a></li>
        <li><a className='justify-center lg:justify-start' href="/support"><span className='hidden lg:inline'>😟</span>Request support</a></li>
      </ul>
    </div>
  );
}
