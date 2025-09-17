import React from "react";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 px-6 py-12 lg:px-20">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-2xl p-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Disclaimer
        </h1>
        <p className="text-sm text-gray-500 text-center mb-10">
          Last updated: September 2025
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            1. General Information
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The information provided on this Land Property Website is for
            general informational purposes only. While we make every effort to
            ensure that the content is accurate and up to date, we do not make
            any representations or warranties of any kind regarding the
            completeness, reliability, or suitability of the information.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            2. Property Listings
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Property details, images, and pricing listed on our website are
            subject to change without notice. We are not responsible for any
            discrepancies or outdated information. Users are encouraged to
            verify property details with authorized representatives before
            making any decisions.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            3. No Professional Advice
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The content provided on this website does not constitute legal,
            financial, or real estate advice. Users should consult with
            qualified professionals before making any investment or property
            purchase decisions.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            4. Limitation of Liability
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Under no circumstances shall we be held liable for any direct,
            indirect, incidental, or consequential damages arising out of the
            use of this website or reliance on its content. Users access this
            website at their own risk.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            5. External Links
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our website may contain links to third-party websites. We are not
            responsible for the content, accuracy, or reliability of any
            information on these external sites. Visiting external websites is
            at the user’s discretion and risk.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            6. Updates to This Disclaimer
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We reserve the right to update, modify, or change this Disclaimer at
            any time without prior notice. Users are encouraged to review this
            page regularly for the latest information.
          </p>
        </section>

        {/* Section 7 */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">
            7. Contact Us
          </h2>
          <p className="text-gray-600 leading-relaxed">
            If you have any questions about this Disclaimer, please contact us
            at:{" "}
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

export default Disclaimer;