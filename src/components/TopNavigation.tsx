"use client";
import { UserButton, useUser } from '@clerk/nextjs';
import Link from "next/link";

export default function TopNavigation() {
    const { isLoaded, isSignedIn, user } = useUser();

    return (
        <div className="navbar fixed bg-neutral text-neutral-content justify-center min-h-[85px]" style={{ zIndex: 99 }}>
            <div className="navbar max-w-[1440px]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden p-2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu dropdown-content mt-3 z-[1] p-2 shadow bg-neutral text-neutral-content rounded-box rounded-t-none w-[280px]">
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/courses">Courses</Link>
                                <ul className="p-2">
                                    <li><Link className="hover:!text-neutral-content" href="/courses/beginners-grammar">Beginners&apos; Grammar</Link></li>
                                    <li><Link className="hover:!text-neutral-content" href="/courses/pronunciation-training">Pronunciation Training</Link></li>
                                    <li><Link className="hover:!text-neutral-content" href="/courses/spoken-english">Spoken English Course</Link></li>
                                </ul>
                            </li>
                            <li><Link href="/payments">Payments</Link></li>
                            <li><Link href="/about-us">About</Link></li>
                        </ul>
                    </div>
                    <Link href="/" className="btn btn-ghost normal-case text-xl text-primary-content p-0 md:px-4">Engspire</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-1">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/courses">Courses</Link></li>
                        {/* <li tabIndex={0}>
                            <details>
                                <summary>Courses</summary>
                                <ul className="bg-neutral p-2 w-56 rounded-t-none">
                                    <li><Link className="hover:!text-neutral-content" href="/courses">All courses</Link></li>
                                    <li><Link className="hover:!text-neutral-content" href="/courses/beginners-grammar">Beginners&apos; Grammar</Link></li>
                                    <li><Link className="hover:!text-neutral-content" href="/courses/pronunciation-training">Pronunciation Training</Link></li>
                                    <li><Link className="hover:!text-neutral-content" href="/courses/spoken-english">Spoken English Course</Link></li>
                                </ul>
                            </details>
                        </li> */}
                        <li><Link href="/payments">Payments</Link></li>
                        <li><Link href="/about-us">About</Link></li>
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    {isLoaded && !isSignedIn ? (
                        <>
                            <Link href="/register" className="btn">Join</Link>
                            <Link href="/account/sign-in" className="btn btn-primary">Sign in</Link>
                        </>
                    ) : isLoaded && user && (
                        <div className="-mr-3 flex flex-row gap-3">
                            <div className="tooltip tooltip-bottom" data-tip="Calendar">
                                <Link href="#calendar" className="btn btn-sm btn-square lg:!btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                                    </svg>
                                </Link>
                            </div>
                            <div className="tooltip tooltip-bottom" data-tip="Notifications">
                                <Link href="#notifications" className="btn btn-sm btn-square lg:!btn-square btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                    </svg>
                                </Link>
                            </div>
                            <Link href="/dashboard" className="btn btn-sm :not:lg:btn-square btn-ghost pl-1 pr-0 -ml-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z" />
                                </svg>
                                <span className='hidden md:inline'>Dashboard&nbsp;</span>
                                <UserButton afterSignOutUrl='/' />
                            </Link>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
