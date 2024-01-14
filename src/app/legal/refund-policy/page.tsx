import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Engspire | Refund Policy",
};

export default function RefundPolicy() {
    return (
        <div>
            <h1 className="text-3xl font-bold text-center">Refund Policy</h1>
            <p className="pt-6">Thank you for choosing Engspire for your online language learning consultation services. We are dedicated to providing you with valuable language learning experiences. If, for any reason, you find it necessary to request a refund, we are here to guide you through the process.</p>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Refund Eligibility</h2>
                <p className="pt-6">We offer refunds for our language learning consultation services within 7 days from the date of purchase. To be eligible for a refund, the following conditions must be met:</p>
                <ol className="list-disc">
                    <li className="py-2">The consultation service must not have been used, and no consultation sessions should have been conducted.</li>
                    <li className="py-2">Your refund request must be made within the stipulated refund period.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Refund Process</h2>
                <p className="pt-6">Upon receiving your refund request, our team will review your eligibility based on the above conditions. If your request is approved, we will initiate the refund to your original method of payment.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Non-refundable Services</h2>
                <p className="pt-6">Please note that certain services are non-refundable. These include:</p>
                <ol className="list-disc">
                    <li className="py-2">Consultation services that have been conducted or scheduled within the refund period.</li>
                    <li className="py-2">Any service that has been partially or fully utilized.</li>
                </ol>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Refund Amount</h2>
                <p className="pt-6">If your refund request is approved, the refunded amount will be determined based on the total purchase price minus any consultation services that have been conducted or scheduled within the refund period.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Requesting a Refund</h2>
                <p className="pt-6">To request a refund for your unused consultation service, please contact our customer support team within 7 days of your purchase. Provide us with your order details and a brief explanation for your refund request. Our team will guide you through the necessary steps.</p>
            </div>
            <div className="my-6">
                <h2 className="text-2xl font-bold text-left">Contact Us</h2>
                <p className="pt-6">If you have any questions or concerns regarding our refund policy for our services, please don&apos;t hesitate to reach out to us via <Link href="mailto:support@engspire.lk" className="text-primary">support@engspire.lk</Link>. We are committed to ensuring your experience with Engspire is seamless and enriching.</p>
            </div>
            <div className="my-6">
                <p className="py-2">Thank you for choosing Engspire as your language learning partner. We are excited to be part of your language journey and look forward to assisting you in achieving your linguistic goals.</p>
            </div>
        </div>
    );
}
