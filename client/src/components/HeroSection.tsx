import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const brands = [
  "TRUSTED BY", "HEALTHCARE PLUS", "BEAUTY EXPERTS", "FITNESS PROS", 
  "HOME SERVICES", "WELLNESS CENTER", "PROFESSIONAL CARE"
];

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCount(Math.floor(current));
    }, 16);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count}{suffix}</span>;
}

export default function HeroSection() {
  const scrollToProviders = () => {
    const element = document.querySelector("#providers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-6xl md:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="text-white">Idea.</div>
                <div className="text-white">Execution.</div>
                <div className="text-electric-blue">Trust.</div>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                We turn ideas into impactful digital experiences through innovative solutions and trusted expertise.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex justify-center space-x-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  ✅ <AnimatedCounter target={100} />% Client Trust
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-electric-blue">
                  🚀 Delivered <AnimatedCounter target={115} />+ Projects
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button 
                onClick={scrollToProviders}
                className="bg-electric-blue text-black px-8 py-4 text-lg font-semibold hover:bg-white transition-colors transform hover:scale-105"
              >
                Book Appointment Now
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Brand Trust Strip */}
      <div className="absolute bottom-0 left-0 right-0 py-12 border-y border-gray-800 overflow-hidden">
        <div className="flex space-x-12 animate-scroll">
          {[...brands, ...brands].map((brand, index) => (
            <span key={index} className="text-gray-500 text-sm font-medium whitespace-nowrap">
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
