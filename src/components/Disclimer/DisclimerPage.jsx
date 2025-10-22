import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const DisclaimerPage = () => {
  const [displayedText, setDisplayedText] = useState("");

  const fullText = `
The information provided by Company Name Technologies Pvt. Ltd., "we," "our," or "us" on https://yourdomain.com (the "Site") is for general informational purposes only. By using our website, you accept this disclaimer in full. If you disagree with any part of this disclaimer, please do not use our website.

1. Content and Accuracy
The content on this website has been created and curated by our team and may include material generated with the assistance of AI tools. While we strive to ensure the information is accurate and up-to-date, we make no representations or warranties, express or implied, about the completeness, accuracy, reliability, or suitability of the information for any purpose. Any reliance you place on such information is strictly at your own risk.

2. Intellectual Property and Copyright
All content, including text, graphics, images, and multimedia, is either owned by Company Name Technologies Pvt. Ltd. or used under license or fair use. Some images and graphics used on this website are sourced from third-party platforms such as Pexels, Freepik, and similar royalty-free resources. These images are the copyright of their respective owners, and we do not claim ownership of them.

3. No Liability
In no event shall Company Name Technologies Pvt. Ltd., its affiliates, partners, or employees be held liable for any direct, indirect, incidental, or consequential damages arising from your use of or reliance on the information on this site. This includes, but is not limited to, damages for loss of data, business interruption, or financial loss.

4. External Links
Our website may contain links to third-party websites or services that are not owned or controlled by Company Name Technologies Pvt. Ltd. We are not responsible for the content, terms, or privacy practices of any external sites linked from our platform. Visiting those sites is at your own discretion and risk.

5. Changes to This Disclaimer
We may update this disclaimer from time to time. The latest version will always be available on this page, and we encourage you to review it periodically.

6. Contact Us
If you have any questions regarding this disclaimer, you can contact us at:
Company Name Technologies Pvt. Ltd.
Puthanathani, Malappuram, Kerala - 678552
`;

  // Typing effect
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      if (i < fullText.length) {
        setDisplayedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 5);
    return () => clearInterval(typingInterval);
  }, []);

  // Highlight numbered headings
  const highlightHeadings = (text) => {
    return text.split(/\n(?=\d+\.\s)/).map((section, index) => {
      const match = section.match(/^(\d+\..*)/);
      if (match) {
        return (
          <div key={index} className="mb-4">
            <p className="text-blue-600 font-semibold text-lg">{match[1]}</p>
            <p className="text-gray-800 whitespace-pre-line">
              {section.replace(match[1], "").trim()}
            </p>
          </div>
        );
      }
      return (
        <p key={index} className="text-gray-800 whitespace-pre-line mb-4">
          {section.trim()}
        </p>
      );
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-3xl sm:text-4xl font-bold text-blue-600 mb-2">
            DISCLAIMER
          </h1>
          <p className="text-gray-600">Effective Date: January 1, 2025</p>
        </motion.div>

        {/* Disclaimer Box */}
        <motion.div
          className="bg-white border-2 border-blue-200 rounded-lg p-6 sm:p-8 shadow-sm"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-sm sm:text-base leading-relaxed">
            {highlightHeadings(displayedText)}
          </div>

          {/* Contact Info */}
          {displayedText.includes("Contact Us") && (
            <div className="mt-6 text-gray-800">
              <div className="flex items-center mt-2">
                <span className="mr-2">✉</span>
                <span className="font-medium">info@companyname.com</span>
              </div>
              <div className="flex items-center mt-2">
                <span className="mr-2">🌐</span>
                <span className="font-medium">
                  https://yourdomainname.com
                </span>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default DisclaimerPage;
