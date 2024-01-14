import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Engspire | Terms and Conditions",
};

export default function TermsAndConditions() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Terms and Conditions</h1>
            <p className="pt-6">Welcome to Engspire. These Terms and Conditions outline the terms governing your use of our website and the purchase of our language learning services.</p>
            <p className="pt-6"> By accessing our website and engaging with our services, you agree to comply with these terms. Please read them carefully before proceeding with any interactions.</p>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Use of the Website</h2>
                <ol className="list-decimal">
                    <li className="py-2">You must be at least 13 years old to use our website and services.</li>
                    <li className="py-2">The confidentiality of your account information, including your username and password, is your responsibility.</li>
                    <li className="py-2">During registration and checkout, you agree to provide accurate and current information.</li>
                    <li className="py-2">The website must not be used for any unlawful or unauthorized purposes.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Service Information and Pricing</h2>
                <ol className="list-decimal">
                    <li className="py-2">We aim to offer accurate service descriptions, images, and pricing details. However, the accuracy or completeness of this information is not guaranteed.</li>
                    <li className="py-2">Prices are subject to change without prior notice. Promotions or discounts are time-limited and may have additional terms.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Bookings and Payments</h2>
                <ol className="list-decimal">
                    <li className="py-2">Placing an order on our website constitutes an offer to purchase our language learning services.</li>
                    <li className="py-2">We reserve the right to decline or cancel orders due to reasons such as service availability, pricing errors, or suspected fraudulent activities.</li>
                    <li className="py-2">You authorize us to charge the total service amount, including taxes and applicable fees, to your chosen payment method.</li>
                    <li className="py-2">Secure third-party payment processors are used to handle payment information. We do not store or have access to full payment details.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Cancellations, Returns, and Refunds</h2>
                <ol className="list-decimal">
                    <li className="py-2">Our Cancellation, Return, and Refund Policy governs the process and conditions for cancellations and refunds. Refer to the policy on our website for more details.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Intellectual Property</h2>
                <ol className="list-decimal">
                    <li className="py-2">All content on our website, including text, images, logos, and graphics, is protected by intellectual property rights and owned by Engspire or its licensors.</li>
                    <li className="py-2">Use, reproduction, distribution, or modification of content from our website requires our prior written consent.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Limitation of Liability</h2>
                <ol className="list-decimal">
                    <li className="py-2">Engspire, its directors, employees, or affiliates are not liable for direct, indirect, incidental, special, or consequential damages related to your website use or service purchase.</li>
                    <li className="py-2">No warranties or representations, express or implied, are provided regarding the quality, accuracy, or suitability of our language learning services.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Amendments and Termination</h2>
                <ol className="list-none">
                    <li className="py-2">We reserve the right to amend, update, or terminate these Terms and Conditions without prior notice. It&apos;s your responsibility to review these terms periodically for any changes.</li>
                </ol>
            </div>
            <div className="my-6">
                <p className="py-2">Thank you for choosing Engspire for your language learning journey. We are excited to assist you in achieving your linguistic goals while adhering to these terms and conditions.</p>
            </div>
        </div>
    );
}
