import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10 text-gray-700 pt-20">
      <h1 className="text-3xl font-bold text-center text-gray-900 mb-6">
        Privacy Policy
      </h1>
      <p className="mb-4">
        At <span className="font-semibold">MY EWA CARE</span>, we prioritize your privacy and security.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Data Collection</h2>
      <p>
        We collect essential personal and medical data to provide accurate second opinions and healthcare services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Data Security</h2>
      <p>
        We do not share user data with any third parties unless required for medical services. Our app ensures that login user data is fully secured.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. File Access & Storage</h2>
      <p>
        Our app requires access to your device storage to allow downloading and uploading of medical reports and prescriptions. 
        This access is strictly used for managing health-related documents and is not utilized for any other purpose.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-Party Services</h2>
      <p>
        While we manage third-party services, we are not responsible for their privacy policies. Please review their terms before using their services.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. User Control</h2>
      <p>
        Users can manage or delete their uploaded files at any time. The app does not retain any personal documents beyond user control.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">6. Contact Us</h2>
      <p>
        For privacy concerns, contact {" "}
        <a href="mailto:support@ewahealthcare.com" className="text-blue-500">
          support@ewahealthcare.com
        </a>
      </p>
    </div>
  );
};

export default PrivacyPolicy;