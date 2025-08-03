import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Zenflow",
    category: "Web App",
    url: "https://zenflow-theta.vercel.app/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "A beautiful note taking app for people with ADHD - very minimal and clutter free"
  },
  {
    title: "Redirect Reaper",
    category: "Landing Page",
    url: "https://redirect-reaper.vercel.app/",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "An ad blocker extension with sleek landing page"
  },
  {
    title: "Key Log Chocker",
    category: "Landing Page",
    url: "https://key-log-chocker-landing-page.vercel.app/",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    description: "A tool that helps users to keep themselves safe from keylog attacks - with beautiful landing page"
  }
];

export default function ProjectsSection() {

  return (
    <section id="projects" className="py-20">
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

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
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
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    View Project →
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
