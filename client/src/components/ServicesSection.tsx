import { motion } from "framer-motion";
import { 
  Globe, 
  Bot, 
  User, 
  BarChart3, 
  Server, 
  Wrench, 
  Mic, 
  Zap, 
  Gamepad2, 
  MessageSquare, 
  Monitor, 
  Palette 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "High-converting landing pages that capture leads and drive results"
  },
  {
    icon: Bot,
    title: "AI Tools (Mini SaaS)",
    description: "Custom AI-powered applications and automation tools"
  },
  {
    icon: User,
    title: "Portfolio & Resume Sites",
    description: "Professional portfolio websites that showcase your expertise"
  },
  {
    icon: BarChart3,
    title: "Dashboards",
    description: "Interactive data visualization and analytics dashboards"
  },
  {
    icon: Server,
    title: "Backend Services",
    description: "APIs, authentication, and business logic implementation"
  },
  {
    icon: Wrench,
    title: "Fix + Improve Websites",
    description: "Optimization and enhancement of existing web applications"
  },
  {
    icon: Mic,
    title: "Voice/Audio AI Tools",
    description: "Speech recognition and audio processing applications"
  },
  {
    icon: Zap,
    title: "AI-Powered Automations",
    description: "Intelligent workflow automation and process optimization"
  },
  {
    icon: Gamepad2,
    title: "Mini Browser Games",
    description: "Engaging web-based games and interactive experiences"
  },
  {
    icon: MessageSquare,
    title: "Custom GPT Bot",
    description: "Intelligent chatbots powered by advanced AI models"
  },
  {
    icon: Monitor,
    title: "Websites",
    description: "Complete website development from concept to deployment"
  },
  {
    icon: Palette,
    title: "Branding Kit",
    description: "Complete brand identity including logos and design systems"
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Services We Offer</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            From AI-powered tools to complete digital solutions, we deliver excellence across all technology domains.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="bg-gray-900 p-8 rounded-xl border border-gray-700 hover:border-electric-blue transition-all duration-300 transform hover:scale-105"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-electric-blue text-3xl mb-4">
                <service.icon size={32} />
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-400 mb-4">{service.description}</p>
              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
