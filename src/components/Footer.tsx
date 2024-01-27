import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer p-10 bg-neutral text-neutral-content text-base-content place-items-center">
            <div className="footer max-w-[1024px]">
                <div>
                    <Link href="/"><Image alt="Engspire Logo" src="/engspire-logo.ico" width={100} height={100} /></Link>
                    <p>Engspire Language School<br />Improving TESL in 🇱🇰 since 2021</p>
                </div>
                <div>
                    <span className="footer-title">Services</span>
                    <Link href="/courses" className="link link-hover">🏫 English Courses</Link>
                    <Link href="https://app.engspire.lk" target="_blank" className="link link-hover">🧿 Engspire Web App</Link>
                    <Link href="https://engreesi.com" target="_blank" className="link link-hover">📚 Engreesi Web App</Link>
                    <Link href="https://youtube.com/@engspire" target="_blank" className="link link-hover">📺 YouTube Videos</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link href="/payments" className="link link-hover">Payments</Link>
                    <Link href="/about-us" className="link link-hover">About Us</Link>
                    <Link href="/about-us#contact-us" className="link link-hover">Contact Us</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link href="/legal/terms-and-conditions" className="link link-hover">Terms & Conditions</Link>
                    <Link href="/legal/privacy-policy" className="link link-hover">Privacy Policy</Link>
                    <Link href="/legal/refund-policy" className="link link-hover">Refund Policy</Link>
                    <Link href="/legal/cookie-policy" className="link link-hover">Cookie Policy</Link>
                </div>
            </div>
        </footer>
    );
}
