import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "E-commerce Landing Page",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "High-converting product landing page with integrated payment processing"
  },
  {
    title: "SaaS Dashboard",
    category: "Website",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Analytics dashboard for subscription management platform"
  },
  {
    title: "Creative Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Minimalist portfolio showcase for creative professional"
  },
  {
    title: "Tech Startup Landing",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Modern landing page for AI technology startup"
  },
  {
    title: "Corporate Website",
    category: "Website",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Professional corporate website with CMS integration"
  },
  {
    title: "Designer Portfolio",
    category: "Portfolio",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Interactive portfolio for UX/UI designer"
  },
  {
    title: "Health App Landing",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Landing page for mobile health application"
  },
  {
    title: "Brand Identity Kit",
    category: "Branding Kit",
    image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "Complete brand identity system with logo and guidelines"
  }
];

export default function ProjectsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerView = 3;

  const nextSlide = () => {
    setCurrentIndex((prev) => 
      prev + itemsPerView >= projects.length ? 0 : prev + itemsPerView
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => 
      prev === 0 ? Math.max(0, projects.length - itemsPerView) : prev - itemsPerView
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Recent Work</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Showcasing our latest projects across landing pages, websites, portfolios, and branding.
          </p>
        </motion.div>

        <div className="relative">
          <div className="flex justify-between items-center mb-8">
            <Button
              onClick={prevSlide}
              variant="outline"
              size="icon"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              onClick={nextSlide}
              variant="outline"
              size="icon"
              className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${currentIndex}-${index}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="bg-gray-900 border-gray-700 hover:border-electric-blue transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-electric-blue text-black px-3 py-1 rounded-full text-sm font-medium">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <Button 
                      variant="ghost"
                      className="text-electric-blue hover:text-white p-0"
                    >
                      View Project →
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
