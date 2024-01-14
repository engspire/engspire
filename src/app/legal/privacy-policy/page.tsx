import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engspire | Privacy Policy",
};

export default function PrivacyPolicy() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Privacy Policy</h1>
            <p className="pt-6">At Engspire, safeguarding your personal information and ensuring your privacy is of the utmost importance to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website or engage with our services. By using our website, you consent to the practices outlined in this policy.</p>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Information We Collect</h2>
                <p className="pt-6">When you interact with our website, we may collect the following information:</p>
                <ol className="list-decimal">
                    <li className="py-2"><strong>Personal identification information:</strong> This includes details like your name, email address, and phone number, which you voluntarily provide during registration or when making a purchase.</li>
                    <li className="py-2"><strong>Payment and billing information:</strong> To process your orders, we collect payment and billing information, including credit card details. This sensitive information is securely handled by trusted third-party payment processors.</li>
                    <li className="py-2"><strong>Browsing information:</strong> Our website may automatically collect your IP address, browser type, and device information using cookies and similar technologies. This helps us improve your browsing experience and understand how you interact with our website.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Use of Information</h2>
                <p className="pt-6">We use the collected information for the following purposes:</p>
                <ol className="list-decimal">
                    <li className="py-2"><strong>Order processing:</strong> We use your information to process and fulfill your orders, including shipping and delivery.</li>
                    <li className="py-2"><strong>Communication:</strong> We communicate with you regarding your purchases, provide customer support, and respond to your inquiries or requests.</li>
                    <li className="py-2"><strong>Personalization:</strong> Your shopping experience is enhanced through personalized product recommendations and promotions based on your preferences and browsing history.</li>
                    <li className="py-2"><strong>Improvements:</strong> Feedback and browsing patterns are utilized to enhance our website, products, and services.</li>
                    <li className="py-2"><strong>Security:</strong> We employ measures to detect and prevent fraud, unauthorized activities, and abuse of our website.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Information Sharing</h2>
                <p className="pt-6">We respect your privacy and do not transfer your personal information to third parties without your consent, except in the following cases:</p>
                <ol className="list-decimal">
                    <li className="py-2">Trusted service providers: We may share your data with third-party service providers who assist us in operating our website, processing payments, and delivering products. These providers are contractually bound to handle your data securely and confidentially.</li>
                    <li className="py-2">Legal requirements: We may disclose your information if required by law or in response to valid legal requests or orders.</li>
                </ol>
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
                <h2 className="text-2xl font-bold text-left">Changes to the Privacy Policy</h2>
                <p className="pt-6">We retain the right to modify this Privacy Policy. Any changes will be posted on this page along with the &quot;last updated&quot; date. We encourage you to review this policy periodically to remain informed about how your information is collected, used, and protected.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Contact Us</h2>
                <p className="pt-6">For questions, concerns, or requests concerning our Privacy Policy or your personal information, please contact us using the information provided on our website.</p>
            </div>
            <div className="my-6">
                <p className="py-2">Thank you for trusting Engspire with your language learning journey. We are excited to assist you in achieving your linguistic goals while respecting your privacy and security.</p>
            </div>
        </div>
    );
}
