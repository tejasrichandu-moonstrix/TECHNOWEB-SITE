import React from "react";
import { motion } from "framer-motion";

// Terms and Conditions Page Component
const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-white pt-32 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
            Terms and Conditions
          </h1>
        </motion.div>
        {/* Content */}
        <motion.div
          className="bg-white border border-blue-300 rounded-lg p-6 sm:p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-6 text-gray-800 text-sm sm:text-base">
            {/* Introduction */}
            <p>
              Welcome to Trickydot Technologies' Terms and Conditions. By using our
              website and services, you agree to comply with and be bound by the
              following terms and conditions. If you do not agree with these terms,
              please do not use our website or services.
            </p>
            {/* 1. Use of Our Website and Services */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                1. Use of Our Website and Services
              </h2>
              <p>
                You must not use our website or services in any way that causes, or
                may cause, damage to the website or impairment of the availability
                or accessibility of the website; or in any way which is
                unlawful, illegal, fraudulent, or harmful, or in connection with
                any unlawful, illegal, fraudulent, or harmful purpose or activity.
              </p>
            </section>
            {/* 2. Services Offered */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                2. Services Offered
              </h2>
              <p>
                Our services include, but are not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Website design and development</li>
                <li>Mobile app development</li>
                <li>Digital marketing</li>
                <li>SEO services</li>
                <li>UI/UX design</li>
                <li>E-commerce solutions</li>
                <li>Custom software development</li>
                <li>IT consulting</li>
              </ul>
            </section>
            {/* 3. User Responsibilities */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                3. User Responsibilities
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your
                account and password and for restricting access to your computer.
                You agree to accept responsibility for all activities that occur
                under your account or password.
              </p>
            </section>
            {/* 4. Use of Third-Party Tools */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                4. Use of Third-Party Tools
              </h2>
              <p>
                We use tools such as Google Analytics to collect anonymous traffic
                data, create reports on website activity, and provide other services
                related to internet usage. These tools may use cookies and similar
                technologies to collect and analyze information about use of the
                services.
              </p>
            </section>
            {/* 5. Intellectual Property */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                5. Intellectual Property
              </h2>
              <p>
                All content, logos, trademarks, and materials on this website are
                owned by Trickydot Technologies or its content suppliers and are
                protected by copyright laws. You may not reproduce, distribute,
                modify, transmit, reuse, repost, or use the content of this site
                for public or commercial purposes without written permission.
              </p>
            </section>
            {/* 6. Payments and Invoicing */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                6. Payments and Invoicing
              </h2>
              <p>
                Payment terms are due within 15 days of the invoice date unless
                otherwise agreed upon in writing. Late payments may incur a late
                fee. We accept payments via bank transfer, credit card, and other
                agreed-upon methods.
              </p>
            </section>
            {/* 7. Limitation of Liability */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                7. Limitation of Liability
              </h2>
              <p>
                To the fullest extent permitted by applicable law, Trickydot
                Technologies shall not be liable for any indirect, incidental,
                special, consequential, or punitive damages, or any loss of profits
                or revenues, whether incurred directly or indirectly, or any loss
                of data, use, goodwill, or other intangible losses, resulting from
                your use of our website or services.
              </p>
            </section>
            {/* 8. External Links */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                8. External Links
              </h2>
              <p>
                Our website may contain links to third-party websites or services
                that are not owned or controlled by Trickydot Technologies. We have
                no control over, and assume no responsibility for, the content,
                privacy policies, or practices of any third-party websites or
                services.
              </p>
            </section>
            {/* 9. Termination of Access */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                9. Termination of Access
              </h2>
              <p>
                We reserve the right, in our sole discretion, to restrict, suspend,
                or terminate your access to all or any part of our website or
                services at any time, with or without cause, and without prior
                notice or liability.
              </p>
            </section>
            {/* 10. Changes to These Terms */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                10. Changes to These Terms
              </h2>
              <p>
                We reserve the right to modify these terms at any time. Any changes
                will be posted on this page with an updated revision date. Your
                continued use of our website or services after any such changes
                constitutes your acceptance of the new terms.
              </p>
            </section>
            {/* 11. Governing Law */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                11. Governing Law
              </h2>
              <p>
                These terms and conditions are governed by and construed in accordance
                with the laws of India. Any disputes relating to these terms and
                conditions will be subject to the exclusive jurisdiction of the
                courts of India.
              </p>
            </section>
            {/* 12. Contact Information */}
            <section>
              <h2 className="text-xl font-semibold text-blue-600 border-b border-blue-300 pb-2 mb-2">
                12. Contact Information
              </h2>
              <p>
                For any questions regarding these terms and conditions, please contact us:
              </p>
              <ul className="list-none pl-0 mt-2">
                <li><strong>Trickydot Technologies Pvt. Ltd.</strong></li>
                <li>Email: info@trickydot.com</li>
                <li>Phone: +91 1234567890</li>
                <li>Address: Puthanathani, Malappuram, Kerala - 678552</li>
              </ul>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Main App Component
const App = () => {
  return (
    <>
      <TermsAndConditions />
    </>
  );
};

export default App;
