import React from "react";

const UserAgreement = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          User Agreement
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last updated: September 2025
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. Acceptance of Agreement
          </h2>
          <p className="text-gray-600 leading-relaxed">
            By accessing and using this Land Property Website, you agree to be
            bound by the terms outlined in this User Agreement. If you do not
            agree, please discontinue use of the website immediately.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Eligibility
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Users must be at least 18 years of age or have legal parental/guardian 
            consent to use this website. By using our platform, you confirm that 
            you meet these requirements.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. User Responsibilities
          </h2>
          <ul className="list-disc pl-6 text-gray-600 leading-relaxed space-y-2">
            <li>Provide accurate and truthful information when registering or contacting us.</li>
            <li>Use this website only for lawful purposes related to real estate and land property.</li>
            <li>Refrain from submitting misleading, fraudulent, or offensive content.</li>
            <li>Respect the rights and privacy of other users and property owners.</li>
          </ul>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Intellectual Property
          </h2>
          <p className="text-gray-600 leading-relaxed">
            All content, design, and branding on this website are the intellectual 
            property of the Land Property Website and may not be copied, distributed, 
            or used without prior written consent.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. Termination of Access
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to suspend or terminate user access at our sole 
            discretion if there is a breach of this Agreement or misuse of the 
            platform.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Governing Law
          </h2>
          <p className="text-gray-600 leading-relaxed">
            This User Agreement shall be governed by and construed in accordance 
            with the laws of India. Any disputes will be subject to the exclusive 
            jurisdiction of the courts in your local state.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Contact Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            For questions about this User Agreement, please contact us at:{" "}
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

export default UserAgreement;