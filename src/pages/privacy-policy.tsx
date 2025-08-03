import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function PrivacyPolicy() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: `We collect information you provide directly to us, such as when you contact us through our website, request services, or apply for internships. This may include your name, email address, phone number, company information, project details, and any other information you choose to provide. We also collect technical information automatically, including IP addresses, browser type, and website usage data through cookies and similar technologies.`
    },
    {
      title: "2. How We Use Your Information",
      content: `We use your information to provide and improve our services, communicate with you about projects and updates, respond to your inquiries, process applications, and send relevant business communications. We may also use aggregated, non-personally identifiable information to analyze website usage and improve our services.`
    },
    {
      title: "3. Information Sharing",
      content: `We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances: with your explicit consent, with trusted service providers who assist in our operations (under strict confidentiality agreements), when required by law or to protect our rights, or in connection with a business transfer or acquisition.`
    },
    {
      title: "4. Data Security",
      content: `We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security. We regularly review and update our security practices to maintain the highest standards.`
    },
    {
      title: "5. Cookies and Tracking",
      content: `Our website uses cookies and similar technologies to enhance your browsing experience, analyze website traffic, and understand user preferences. You can control cookie settings through your browser preferences. Some features of our website may not function properly if you disable cookies.`
    },
    {
      title: "6. Third-Party Services",
      content: `Our website may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these external sites. We encourage you to read their privacy policies before providing any personal information.`
    },
    {
      title: "7. Data Retention",
      content: `We retain your personal information only as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. Client project data is typically retained for a period following project completion for support purposes.`
    },
    {
      title: "8. Your Rights",
      content: `You have the right to access, update, or delete your personal information. You may also opt out of marketing communications at any time. To exercise these rights, please contact us using the information provided below. We will respond to your request within a reasonable timeframe.`
    },
    {
      title: "9. Children's Privacy",
      content: `Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it promptly.`
    },
    {
      title: "10. International Data Transfers",
      content: `Your information may be transferred to and processed in countries other than your country of residence. We ensure appropriate safeguards are in place to protect your personal information in accordance with applicable data protection laws.`
    },
    {
      title: "11. Changes to This Policy",
      content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable laws. We will notify you of significant changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services constitutes acceptance of the updated policy.`
    },
    {
      title: "12. Contact Information",
      content: `If you have questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at ambersolutionspk.info@gmail.com. We are committed to addressing your privacy concerns promptly and transparently.`
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Privacy <span className="text-electric-blue">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information when you use our services.
            </p>
            <div className="text-sm text-gray-400">
              Last Updated: January 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-semibold mb-4 text-electric-blue">
                      {section.title}
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                      {section.content}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Protection Commitment */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-gray-900 border-gray-700">
              <CardContent className="p-8 text-center">
                <h2 className="text-3xl font-bold mb-6">Our Commitment to Your Privacy</h2>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  At Ambersolutions, we are committed to protecting your privacy and maintaining 
                  the confidentiality of your personal information. We employ industry-standard 
                  security measures and follow best practices to ensure your data is safe.
                </p>
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="bg-black rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Secure Storage</h3>
                    <p className="text-gray-400 text-sm">Your data is encrypted and stored securely</p>
                  </div>
                  <div className="bg-black rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Limited Access</h3>
                    <p className="text-gray-400 text-sm">Only authorized personnel can access your information</p>
                  </div>
                  <div className="bg-black rounded-lg p-6">
                    <h3 className="font-semibold mb-2">Regular Audits</h3>
                    <p className="text-gray-400 text-sm">We regularly review our security practices</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions or concerns about this Privacy Policy or how we handle your data, 
              please don't hesitate to reach out to us.
            </p>
            <div className="bg-black rounded-lg p-6 inline-block">
              <div className="text-lg font-semibold mb-2">Privacy Officer</div>
              <div className="text-electric-blue">ambersolutionspk.info@gmail.com</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}