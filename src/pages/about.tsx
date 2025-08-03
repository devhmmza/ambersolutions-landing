import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Code, Palette, Zap, Users, Award, Clock } from "lucide-react";

export default function About() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-friendly interfaces that convert visitors into customers"
    },
    {
      icon: Zap,
      title: "AI Integration",
      description: "Smart AI-powered solutions to automate and enhance your business"
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Expertise",
      description: "Years of experience delivering successful projects across various industries"
    },
    {
      icon: Clock,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising on quality"
    },
    {
      icon: Users,
      title: "Client-Focused",
      description: "We work closely with you to understand and exceed your expectations"
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
              About <span className="text-electric-blue">Ambersolutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We are a digital agency specializing in creating impactful web solutions that help businesses grow online. 
              From beautiful landing pages to complex AI-powered applications, we turn your ideas into reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your business needs
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full hover:border-electric-blue transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center text-black mx-auto mb-6">
                      <service.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Ambersolutions?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine technical expertise with creative vision to deliver exceptional results
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-700 h-full">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center text-black mx-auto mb-6">
                      <reason.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{reason.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{reason.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Key Benefits */}
          <motion.div 
            className="bg-gray-900 rounded-lg p-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-center">What Sets Us Apart</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "100% Custom Solutions - No Templates",
                "24/7 Support & Communication",
                "Modern, Responsive Design",
                "SEO-Optimized Development",
                "Fast Loading & Performance",
                "Scalable & Future-Proof Code"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle size={20} className="text-electric-blue flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To empower businesses of all sizes with cutting-edge digital solutions that drive growth, 
              enhance user experience, and create lasting value. We believe every business deserves 
              a professional online presence that reflects their unique vision and goals.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}