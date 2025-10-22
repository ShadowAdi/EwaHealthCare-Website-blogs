import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-700 pt-20">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Refund Policy
      </h1>
      <p className="mb-4">
        We strive to provide high-quality medical consultations and services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. No Refund Policy</h2>
      <p>
        MY EWA CARE does not offer refunds for any services. All payments made through our platform are final.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Payment Responsibility</h2>
      <p>
        Users must ensure they review the service details before making payments. Any third-party services booked through MY EWA CARE must also be paid through our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Contact Us</h2>
      <p>
        For any concerns, reach out to us at{" "}
        <a href="mailto:support@ewahealthcare.com" className="text-blue-500">
          support@ewahealthcare.com
        </a>
      </p>
    </div>
  );
};

export default RefundPolicy;

