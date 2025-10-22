import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-700 pt-20">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Terms & Conditions
      </h1>
      <p className="mb-4">
        Welcome to <span className="font-semibold">MY EWA CARE</span>. By using our services, you agree to the following terms:
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Service Overview</h2>
      <p>
        MY EWA CARE provides direct medical treatment services, second opinions, and healthcare consultations.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Third-Party Services</h2>
      <p>
        We collaborate with third-party healthcare providers, but all service-related payments <strong>must be made through MY EWA CARE</strong>. We are responsible for service coordination, but third-party providers are responsible for their policies and treatment execution.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. User Responsibilities</h2>
      <p>
        Users must provide accurate medical information and follow our payment terms. MY EWA CARE is not liable for misrepresentation of medical conditions.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Account Deletion</h2>
      <p>
        <strong>Users can request account deletion by contacting our support team. To delete your account, please email us at </strong>
        <a href="mailto:support@ewahealthcare.com" className="text-blue-500"><strong>support@ewahealthcare.com</strong></a>.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Contact Us</h2>
      <p>
        For inquiries, please reach out to us at{' '}
        <a href="mailto:support@ewahealthcare.com" className="text-blue-500">
           support@ewahealthcare.com
        </a>.
      </p>
    </div>
  );
};

export default TermsConditions;
