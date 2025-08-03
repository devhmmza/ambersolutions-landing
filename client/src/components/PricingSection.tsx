import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const pricingTiers = [
  {
    name: "Starter",
    price: "$499",
    description: "Perfect for small projects and personal websites",
    features: [
      "Landing Page Design",
      "Responsive Layout",
      "Basic SEO Setup",
      "Contact Form",
      "2 Revisions",
      "7-day Delivery"
    ]
  },
  {
    name: "Professional",
    price: "$1,299",
    description: "Ideal for businesses and growing companies",
    features: [
      "Multi-page Website",
      "Custom Design",
      "CMS Integration",
      "SEO Optimization",
      "Analytics Setup",
      "5 Revisions",
      "14-day Delivery"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "$2,999",
    description: "Complete solution for large organizations",
    features: [
      "Full Web Application",
      "Custom Development",
      "Database Integration",
      "API Development",
      "Security Implementation",
      "Unlimited Revisions",
      "30-day Delivery"
    ]
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

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`bg-black border-gray-700 hover:border-electric-blue transition-all duration-300 relative ${
                tier.popular ? 'border-electric-blue scale-105' : ''
              }`}>
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-electric-blue text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold mb-2">{tier.name}</CardTitle>
                  <div className="text-4xl font-bold text-electric-blue mb-2">{tier.price}</div>
                  <p className="text-gray-400 text-sm">{tier.description}</p>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-center space-x-3">
                        <Check size={16} className="text-electric-blue flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      tier.popular 
                        ? 'bg-electric-blue text-black hover:bg-white' 
                        : 'border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black'
                    } transition-colors`}
                    variant={tier.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
