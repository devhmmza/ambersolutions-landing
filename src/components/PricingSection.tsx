import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const services = [
  {
    name: "Landing Pages",
    price: "$1000–$1500",
    delivery: "2–4 days",
    description: "Fully responsive, SEO-friendly Next.js + Tailwind landing pages"
  },
  {
    name: "AI Tools (Mini SaaS)",
    price: "$999–$2,499",
    delivery: "3–5 days",
    description: "Tools like resume AI, PDF Q&A, summarizers, transcribers",
    popular: true
  },
  {
    name: "Portfolio & Resume Sites",
    price: "$700–$1,199",
    delivery: "2–4 days",
    description: "Clean, modern personal sites for devs/designers"
  },
  {
    name: "Dashboards",
    price: "$1100–$1,999",
    delivery: "4–7 days",
    description: "Admin panels or user dashboards (Next.js/Supabase)"
  },
  {
    name: "Backend Services",
    price: "$599–$1,499",
    delivery: "3–6 days",
    description: "Custom logic/API + DB (FastAPI/Supabase)"
  },
  {
    name: "Fix + Improve Website",
    price: "$299–$499",
    delivery: "1–2 days",
    description: "Repair & improve broken/unfinished code"
  },
  {
    name: "Voice/Audio AI Tools",
    price: "$999–$1,999",
    delivery: "3–5 days",
    description: "Whisper-based speech-to-text tools, with UX"
  },
  {
    name: "AI-Powered Automations",
    price: "$999–$2,499",
    delivery: "3–6 days",
    description: "Web scraping, notifications, GPT-based workflows"
  },
  {
    name: "Mini Browser Games",
    price: "$799–$1,499",
    delivery: "3–5 days",
    description: "Fun JS/React-based games (Snake, Quiz, Flappy Bird clone)"
  },
  {
    name: "Custom GPT Bot",
    price: "$3,000–$5,000",
    delivery: "3–5 days",
    description: "Custom GPT chatbot with prompt engineering"
  },
  {
    name: "Websites",
    price: "$2,199–$3,499",
    delivery: "4–7 days",
    description: "Full-fledged websites (static to dynamic)"
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Pricing Plans</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transparent pricing for every project size and budget
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-black border-gray-700 hover:border-electric-blue transition-all duration-300 relative h-full ${
                service.popular ? 'border-electric-blue' : ''
              }`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-electric-blue text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg font-bold mb-2">{service.name}</CardTitle>
                  <div className="text-2xl font-bold text-electric-blue mb-1">{service.price}</div>
                  <div className="text-sm text-gray-400 mb-3">Delivery: {service.delivery}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">{service.description}</p>
                </CardHeader>
                
                <CardContent className="pt-0">
                
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
