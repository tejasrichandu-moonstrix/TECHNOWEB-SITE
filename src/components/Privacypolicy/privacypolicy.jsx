import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-black text-gray-200 pt-24 pb-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-400 mb-2">
            Privacy Policy
          </h1>
          <p className="text-gray-400">Last Updated: October 2025</p>
        </motion.div>

        {/* Policy Content */}
        <motion.div
          className="bg-gray-900 border border-blue-500 rounded-xl p-6 sm:p-10 shadow-md leading-relaxed"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duraion: 0.8 }}
        >
          <div className="space-y-8 text-sm sm:text-base">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                1. Introduction
              </h2>
              <p>
                Welcome to Growthmak! This Privacy Policy explains how Growthmak
                Solutions LLP ("we," "us," or "our") collects, uses, shares, and
                protects your personal information when you visit our website,
                <span className="text-blue-400 font-medium">
                  {" "}
                  www.growthmak.com
                </span>
                , use our services, or interact with us in any other way. We are
                committed to protecting your privacy and handling your data in
                an open and transparent manner. This policy complies with
                applicable data protection laws, including India's Digital
                Personal Data Protection Act, 2023 (DPDPA), the EU's General
                Data Protection Regulation (GDPR), and the California Consumer
                Privacy Act (CCPA). By accessing our Website or using our
                services, you agree to the collection and use of information in
                accordance with this policy.
              </p>
            </section>

            {/* 2. Who We Are */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                2. Who We Are
              </h2>
              <p>
                The entity responsible for your personal data (known as the Data
                Fiduciary) is:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>
                  <strong>Company Name:</strong> Growthmak Solutions LLP
                </li>
                <li>
                  <strong>Operating Address:</strong> Bhartiya City, Thanisandra
                  Main Rd, Devin Paradise Enclave, Bengaluru, Karnataka 560064,
                  India.
                </li>
              </ul>
            </section>

            {/* 3. Information We Collect */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                3. Information We Collect
              </h2>
              <p>We collect personal data in the following ways:</p>

              <h3 className="text-lg font-medium text-blue-300 mt-3">
                3.1 Information You Provide Directly
              </h3>
              <p>
                <strong>Contact and Inquiry Data:</strong> When you fill out our
                "Get a Free Consultation" form or contact us, we collect your
                name, email address, phone number, and company name.
              </p>
              <p>
                <strong>Job Application Data:</strong> When you apply for a
                position, we collect your resume (CV), cover letter, employment
                history, and contact details.
              </p>

              <h3 className="text-lg font-medium text-blue-300 mt-3">
                3.2 Information We Collect Automatically
              </h3>
              <p>
                <strong>Usage and Device Data:</strong> Includes IP address,
                browser type, operating system, referral source, and activity
                timestamps. We collect this data using cookies and similar
                tracking technologies.
              </p>
              <p>
                <strong>Analytics Data:</strong> We use Google Analytics and
                Microsoft Clarity to understand user behavior.
              </p>
            </section>

            {/* 4. Our Role as a Data Processor */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                4. Our Role as a Data Processor
              </h2>
              <p>
                In addition to collecting data for our own purposes, we also act as a
                Data Processor on behalf of our clients. When we run marketing and
                advertising campaigns, we may process personal data of our clients'
                customers. This processing is performed strictly based on the
                instructions of our clients (the Data Fiduciaries) and our
                contractual agreements with them. The client is responsible for
                ensuring they have a lawful basis to collect and share this data
                with us.
              </p>
            </section>

            {/* 5. How We Use Your Information */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                5. How We Use Your Information
              </h2>
              <p>We use your personal data for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide and manage our services.</li>
                <li>To communicate with you and send updates.</li>
                <li>For recruitment and applicant screening.</li>
                <li>To run and measure marketing campaigns.</li>
                <li>To improve website experience and security.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            {/* 6. Lawful Basis for Processing */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                6. Lawful Basis for Processing (for EU/EEA Users)
              </h2>
              <p>Under the GDPR, we process your personal data based on the following lawful grounds:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Consent:</strong> We rely on your consent to process data for
                  sending marketing communications and for placing non-essential cookies.
                </li>
                <li>
                  <strong>Performance of a Contract:</strong> We process your data to take
                  steps at your request before entering into a contract or to fulfill our
                  contractual obligations to you.
                </li>
                <li>
                  <strong>Legitimate Interests:</strong> We process your data for our
                  legitimate interests, such as improving our services, securing our
                  website, and responding to your inquiries, provided these interests
                  are not overridden by your data protection rights.
                </li>
                <li>
                  <strong>Legal Obligation:</strong> We may process your data to comply
                  with our legal and regulatory responsibilities.
                </li>
              </ul>
            </section>

            {/* 7. Data Sharing and Disclosure */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                7. Data Sharing and Disclosure
              </h2>
              <p>
                We do not sell your personal data. We may share your information with
                the following categories of third parties only in the ways that are
                described in this Privacy Policy:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Service Providers:</strong> We engage third-party companies to
                  perform services on our behalf. These include:
                  <ul className="list-disc pl-6 mt-1">
                    <li>
                      <strong>CRM and Cloud Services:</strong> We use Zoho CRM for
                      customer relationship management. Data is stored on Zoho's
                      servers located in India.
                    </li>
                    <li>
                      <strong>Marketing Automation:</strong> We use WhatsApp Marketing
                      Automation and other email marketing platforms to communicate
                      with you.
                    </li>
                    <li>
                      <strong>Analytics and Advertising Partners:</strong> We share data
                      with Google, Microsoft, Meta (Facebook), and LinkedIn to help us
                      with analytics and advertising.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Business Transfers:</strong> In the event of a merger,
                  acquisition, or sale of all or a portion of our assets, your
                  personal data may be transferred to the new owner.
                </li>
                <li>
                  <strong>Legal Authorities:</strong> We may disclose your information
                  if required to do so by law or in response to valid requests by
                  public authorities.
                </li>
              </ul>
            </section>

            {/* 8. Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                8. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies to operate and personalize
                our website. Cookies are small text files stored on your device. We use:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Strictly Necessary Cookies:</strong> Essential for the website
                  to function.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> Help us understand how you use
                  our site (e.g., Google Analytics, Clarity).
                </li>
                <li>
                  <strong>Targeting/Advertising Cookies:</strong> Used to deliver relevant
                  ads to you (e.g., Meta Pixel, Google Ads Tag).
                </li>
              </ul>
              <p className="mt-2">
                You can manage your cookie preferences through the cookie consent
                banner on our website and by adjusting your browser settings.
              </p>
            </section>

            {/* 9. International Data Transfers */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                9. International Data Transfers
              </h2>
              <p>
                We target customers globally, including in the USA and the European
                Union. Your personal information is processed and stored on servers
                provided by Zoho, which are located in India.
              </p>
              <p>
                When we transfer personal data from the EU/EEA or other regions to
                India, we ensure that appropriate safeguards are in place to protect
                your data, such as relying on our service providers' use of Standard
                Contractual Clauses (SCCs) or other legally recognized transfer
                mechanisms.
              </p>
            </section>

            {/* 10. Data Retention */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                10. Data Retention
              </h2>
              <p>
                We will retain your personal data only for as long as is necessary
                for the purposes set out in this Privacy Policy. We will retain and
                use your data to the extent necessary to comply with our legal
                obligations, resolve disputes, and enforce our agreements. As a
                general rule, we will retain your data for a period of 2 years
                after our last contact with you, after which it will be securely
                deleted.
              </p>
            </section>

            {/* 11. Data Security */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                11. Data Security
              </h2>
              <p>
                We have implemented appropriate administrative, technical, and
                physical security measures to protect your personal information
                from unauthorized access, use, alteration, or disclosure.
                However, no method of transmission over the Internet or method
                of electronic storage is 100% secure.
              </p>
            </section>

            {/* 12. Your Legal Rights */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                12. Your Legal Rights
              </h2>
              <p>
                Depending on your location, you have certain rights regarding your
                personal data. These may include:
              </p>

              <h3 className="text-lg font-medium text-blue-300 mt-3">
                12.1. For All Users (including under DPDPA in India):
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Right to Access:</strong> You have the right to request a
                  copy of the personal data we hold about you.
                </li>
                <li>
                  <strong>Right to Correct and Update:</strong> You have the right
                  to request that we correct any inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Right to Erasure:</strong> You have the right to request
                  the erasure of your personal data under certain conditions.
                </li>
                <li>
                  <strong>Right of Grievance Redressal:</strong> You have the right
                  to lodge a complaint with our Grievance Officer.
                </li>
              </ul>

              <h3 className="text-lg font-medium text-blue-300 mt-3">
                12.2. For Residents of the EU/EEA (under GDPR):
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Right to Restrict Processing:</strong> You can request
                  that we limit the processing of your data.
                </li>
                <li>
                  <strong>Right to Data Portability:</strong> You can request
                  that we provide your data to you or another service provider in
                  a machine-readable format.
                </li>
                <li>
                  <strong>Right to Object:</strong> You have the right to object
                  to our processing of your data where we are relying on a
                  legitimate interest.
                </li>
              </ul>

              <h3 className="text-lg font-medium text-blue-300 mt-3">
                12.3. For Residents of California (under CCPA):
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Right to Know:</strong> You have the right to know what
                  personal information we collect, use, and disclose.
                </li>
                <li>
                  <strong>Right to Delete:</strong> You have the right to request
                  the deletion of your personal information.
                </li>
                <li>
                  <strong>Right to Opt-Out of Sale/Sharing:</strong> We do not sell
                  personal information. You have the right to opt-out of the
                  "sharing" of your data for cross-context behavioral advertising.
                  To exercise this right, please contact us.
                </li>
                <li>
                  <strong>Right to Non-Discrimination:</strong> We will not
                  discriminate against you for exercising any of your CCPA rights.
                </li>
              </ul>
              <p className="mt-2">
                To exercise any of these rights, please contact our Data Protection
                Officer using the details provided below.
              </p>
            </section>

            {/* 13. Children's Privacy */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                13. Children's Privacy
              </h2>
              <p>
                Our services are not intended for individuals under the age of 18.
                We do not knowingly collect personal data from children. If we
                become aware that we have collected data from a child without
                parental consent, we will take steps to delete that information.
              </p>
            </section>

            {/* 14. Changes to This Privacy Policy */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                14. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify
                you of any changes by posting the new policy on this page and
                updating the "Last Updated" date at the top. We encourage you to
                review this policy periodically for any changes.
              </p>
            </section>

            {/* 15. How to Contact Us */}
            <section>
              <h2 className="text-xl font-semibold text-blue-400 mb-2">
                15. How to Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, wish to
                exercise your rights, or have a grievance, please contact our
                designated Data Protection and Grievance Officer:
              </p>
              <ul className="list-none pl-0 mt-2">
                <li><strong>Name:</strong> Mohammed Shahul Hameed</li>
                <li><strong>Email:</strong> mohammed@growthmak.com</li>
                <li><strong>Phone:</strong> +91 80896 95249</li>
                <li>
                  <strong>Address:</strong> Bhartiya City, Thanisandra Main Rd, Devin
                  Paradise Enclave, Bengaluru, Karnataka 560064, India.
                </li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
