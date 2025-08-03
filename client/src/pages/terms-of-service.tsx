import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function TermsOfService() {
  const sections = [
    {
      title: "1. Agreement to Terms",
      content: `By accessing and using Ambersolutions' website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      title: "2. Services Description",
      content: `Ambersolutions provides digital agency services including but not limited to web development, UI/UX design, AI integration, landing page creation, and related digital solutions. We reserve the right to modify, suspend, or discontinue any service at any time.`
    },
    {
      title: "3. Payment Terms",
      content: `Payment terms are specified in individual project proposals. Unless otherwise agreed, a 50% deposit is required before project commencement, with the remainder due upon completion. All payments are non-refundable once work has begun, except in cases of our failure to deliver agreed-upon services.`
    },
    {
      title: "4. Intellectual Property",
      content: `Upon full payment, clients receive full ownership rights to custom-developed work. However, Ambersolutions retains the right to use general methodologies, techniques, and non-confidential knowledge gained during projects. We also retain the right to showcase completed work in our portfolio unless specifically requested otherwise.`
    },
    {
      title: "5. Client Responsibilities",
      content: `Clients are responsible for providing necessary content, feedback, and approvals in a timely manner. Delays in client response may result in project timeline adjustments. Clients must ensure they have proper rights to any content, images, or materials provided to us.`
    },
    {
      title: "6. Confidentiality",
      content: `We respect client confidentiality and will not disclose proprietary information without consent. However, clients acknowledge that general industry knowledge and methodologies may be retained and applied to future projects.`
    },
    {
      title: "7. Limitation of Liability",
      content: `Ambersolutions' liability is limited to the amount paid for services. We are not responsible for any indirect, incidental, or consequential damages. Our services are provided "as is" without warranties of any kind.`
    },
    {
      title: "8. Termination",
      content: `Either party may terminate services with written notice. Upon termination, clients are responsible for payment of all completed work. Ambersolutions reserves the right to terminate services for non-payment or breach of terms.`
    },
    {
      title: "9. Governing Law",
      content: `These terms are governed by applicable local laws. Any disputes will be resolved through binding arbitration or in courts of competent jurisdiction.`
    },
    {
      title: "10. Contact Information",
      content: `For questions about these terms, please contact us at ambersolutionspk.info@gmail.com. We reserve the right to update these terms at any time, with changes effective immediately upon posting.`
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
              Terms of <span className="text-electric-blue">Service</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Please read these terms carefully before using our services. 
              By engaging with Ambersolutions, you agree to these terms and conditions.
            </p>
            <div className="text-sm text-gray-400">
              Last Updated: January 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Questions About Our Terms?</h2>
            <p className="text-xl text-gray-300 mb-8">
              If you have any questions about these Terms of Service, please don't hesitate to contact us.
            </p>
            <div className="bg-gray-900 rounded-lg p-6 inline-block">
              <div className="text-lg font-semibold mb-2">Contact Us</div>
              <div className="text-electric-blue">ambersolutionspk.info@gmail.com</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}