import React from "react";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Terms & Conditions
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last updated: September 2025
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Introduction
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Welcome to our Land Property Website. By accessing or using our
            services, you agree to comply with and be bound by these Terms and
            Conditions. If you do not agree, please do not use this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Property Listings
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All property listings provided on our website are for informational
            purposes only. We strive for accuracy but do not guarantee the
            completeness, reliability, or availability of any property details.
            Users are advised to verify information before making decisions.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
            <li>Provide accurate and truthful information when contacting us.</li>
            <li>Do not use this website for fraudulent or illegal activities.</li>
            <li>
              Respect intellectual property rights and privacy of others when
              using the platform.
            </li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We shall not be held liable for any direct, indirect, or
            consequential damages arising from the use of this website or
            reliance on the information provided herein.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Changes to Terms
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update or modify these Terms and Conditions
            at any time without prior notice. Please review this page regularly
            to stay informed of any changes.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions regarding these Terms & Conditions, please
            contact us at:{" "}
            <span className="font-medium text-indigo-600">
              support@landproperty.com
            </span>
          </p>
        </section>

        {/* Footer */}
        <div className="mt-10 border-t pt-6 text-center text-gray-500 text-sm">
          © {new Date().getFullYear()} Land Property Website. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;