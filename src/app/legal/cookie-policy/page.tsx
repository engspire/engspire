import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engspire | Cookie Policy",
};

export default function CookiePolicy() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Cookie Policy</h1>
            <p className="pt-6">This Cookie Policy explains how Engspire uses cookies and similar technologies on our website. By using our website, you consent to the use of cookies as outlined in this policy. We encourage you to read this policy to understand how cookies are used and how you can manage your cookie preferences.</p>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">What Are Cookies?</h2>
                <p className="pt-6">Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you visit websites. They allow the website to recognize your device and remember your preferences and actions, enhancing your browsing experience.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Types of Cookies We Use</h2>
                <ol className="list-decimal">
                    <li className="py-2"><strong>Essential Cookies:</strong> These cookies are necessary for the proper functioning of our website. They enable core features such as secure login, account management, and transaction processing.</li>
                    <li className="py-2"><strong>Analytical Cookies:</strong> These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This data allows us to improve the website&apos;s performance and user experience.</li>
                    <li className="py-2"><strong>Functionality Cookies:</strong> Functionality cookies enable personalized features, such as remembering your language preferences and settings, to provide a more tailored experience.</li>
                    <li className="py-2"><strong>Advertising and Tracking Cookies:</strong> We may use cookies to gather information about your online activities, including pages visited and links clicked. This information may be used to deliver personalized advertisements on our website and other websites you visit.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Third-Party Cookies</h2>
                <p className="pt-6">Some cookies on our website are placed by third-party service providers. These third parties assist us in analyzing website performance, providing certain features, and delivering targeted advertisements.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Data Security</h2>
                <p className="pt-6">Industry-standard security measures are implemented to safeguard your personal information from unauthorized access, alteration, disclosure, or destruction. However, while we employ every effort to ensure your data&apos;s security, no internet transmission or electronic storage method is entirely secure.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Cookies and Tracking Technologies</h2>
                <p className="pt-6">Cookies and similar technologies are used to enhance your browsing experience, analyze website traffic, and gather information about your interactions with our website. You can adjust your browser settings to disable cookies, but this might limit certain features and functionality.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Managing Your Cookie Preferences</h2>
                <p className="pt-6">You have the option to manage your cookie preferences through your browser settings. You can accept or decline cookies, delete cookies already stored on your device, or set your browser to notify you when a website attempts to place cookies. Please note that by disabling certain cookies, you may impact the functionality and features available on our website.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Opting Out of Advertising Cookies</h2>
                <p className="pt-6">If you wish to opt out of receiving targeted advertisements based on your browsing behavior, you can use the opt-out tools provided by certain advertising networks. Please be aware that opting out does not mean you will stop seeing ads altogether, but that the ads may be less relevant to your interests.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Changes to This Cookie Policy</h2>
                <p className="pt-6">We may update this Cookie Policy to reflect changes in our practices or for other operational, legal, or regulatory reasons. Any changes will be posted on this page, and the date of the last update will be indicated at the top of the policy.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Contact Us</h2>
                <p className="pt-6">If you have any questions or concerns about our use of cookies or this Cookie Policy, please contact us using the information provided on our website.</p>
            </div>
            <div className="my-6">
                <p className="py-2">Thank you for choosing Engspire. We aim to provide you with a seamless and personalized browsing experience while respecting your privacy and preferences.</p>
            </div>
        </div>
    );
}
