import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, Lightbulb, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    title: "Zenflow",
    category: "Web Application",
    url: "https://zenflow-theta.vercel.app/",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    clientProblem: "Our client needed a note-taking solution specifically designed for people with ADHD. Traditional apps were too cluttered and overwhelming, causing distraction rather than helping with focus and organization.",
    challenge: "Create a minimal, distraction-free interface that accommodates ADHD users' unique needs for simplicity and clarity.",
    solution: "We developed Zenflow with a clean, minimalist design featuring intuitive navigation, reduced visual clutter, and focus-enhancing elements. The app includes distraction-free writing mode and simplified organization.",
    results: "95% user satisfaction rate with significantly improved note-taking consistency among ADHD users.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Local Storage API"],
    duration: "6 weeks",
    features: ["Minimal UI Design", "Distraction-Free Mode", "Quick Note Creation", "Simple Organization"]
  },
  {
    title: "Redirect Reaper",
    category: "Browser Extension & Landing Page",
    url: "https://redirect-reaper.vercel.app/",
    image: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    clientProblem: "The client wanted to launch an ad blocker extension but struggled with user acquisition. They needed a compelling landing page that clearly communicated the benefits and drove downloads.",
    challenge: "Design a conversion-focused landing page that effectively explains technical benefits to non-technical users while building trust.",
    solution: "We created a sleek, professional landing page with clear value propositions, social proof, and seamless download flow. The design emphasizes privacy protection and improved browsing experience.",
    results: "40% increase in conversion rate and 3x improvement in user engagement metrics.",
    techStack: ["Next.js", "Framer Motion", "Tailwind CSS", "Vercel Analytics"],
    duration: "4 weeks",
    features: ["High-Converting Design", "Trust Indicators", "Clear Value Props", "Mobile Optimized"]
  },
  {
    title: "Key Log Chocker",
    category: "Security Tool Landing Page",
    url: "https://key-log-chocker-landing-page.vercel.app/",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    clientProblem: "Our client developed a keylogger protection tool but needed to educate users about keylogging threats while positioning their solution as the go-to security measure.",
    challenge: "Communicate complex security concepts in an accessible way while building urgency around the threat without causing alarm.",
    solution: "We designed an educational yet reassuring landing page that explains keylogging risks clearly, demonstrates the solution's effectiveness, and provides easy installation steps with security badges.",
    results: "60% increase in tool downloads and 85% improvement in user understanding of keylogging threats.",
    techStack: ["React", "TypeScript", "Framer Motion", "Security Icons"],
    duration: "5 weeks",
    features: ["Educational Content", "Security Focus", "Trust Badges", "Easy Installation Guide"]
  }
];

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Case <span className="text-electric-blue">Studies</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real client challenges, innovative solutions, and measurable results. 
            See how we transform problems into successful digital experiences.
          </p>
        </motion.div>

        <div className="space-y-16">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-700 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-electric-blue text-black px-3 py-1 rounded-full text-sm font-medium">
                        {study.category}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Button 
                        variant="secondary"
                        className="bg-white/90 text-black hover:bg-white"
                        onClick={() => window.open(study.url, '_blank')}
                      >
                        View Live Project <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>

                  {/* Content Section */}
                  <CardContent className="p-8 lg:p-12">
                    <div className="mb-6">
                      <h3 className="text-3xl font-bold mb-2">{study.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span>{study.duration}</span>
                        <span>•</span>
                        <span>{study.techStack.length} Technologies</span>
                      </div>
                    </div>

                    {/* Client Problem */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Target className="w-5 h-5 text-red-400" />
                        <h4 className="text-lg font-semibold text-red-400">Client Challenge</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {study.clientProblem}
                      </p>
                    </div>

                    {/* Our Solution */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Lightbulb className="w-5 h-5 text-electric-blue" />
                        <h4 className="text-lg font-semibold text-electric-blue">Our Solution</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {study.solution}
                      </p>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <TrendingUp className="w-5 h-5 text-green-400" />
                        <h4 className="text-lg font-semibold text-green-400">Results Achieved</h4>
                      </div>
                      <p className="text-gray-300 leading-relaxed">
                        {study.results}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {study.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-electric-blue rounded-full"></div>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tech Stack */}
                    <div>
                      <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.techStack.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-black rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Create Your Success Story?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Every project starts with understanding your unique challenges. 
              Let's discuss how we can solve your problems and achieve your goals.
            </p>
            <Button 
              size="lg"
              className="bg-electric-blue text-black hover:bg-electric-blue/90"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Start Your Project
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}