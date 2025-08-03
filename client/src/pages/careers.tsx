import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Clock, MapPin, Laptop, Users, Award } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const internshipApplicationSchema = insertContactSchema.extend({
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  portfolio: z.string().url("Please enter a valid portfolio URL").optional().or(z.literal("")),
  availability: z.string().min(1, "Please select your availability")
});

type InternshipApplication = z.infer<typeof internshipApplicationSchema>;

const internshipPositions = [
  {
    title: "Frontend Development Intern",
    icon: Laptop,
    description: "Work with React, TypeScript, and modern CSS frameworks to build user interfaces",
    skills: ["React", "TypeScript", "CSS/Tailwind", "HTML"]
  },
  {
    title: "UI/UX Design Intern", 
    icon: Award,
    description: "Create beautiful and functional designs for web applications and landing pages",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"]
  },
  {
    title: "AI/ML Development Intern",
    icon: GraduationCap,
    description: "Help develop AI-powered features and integrate machine learning solutions",
    skills: ["Python", "Machine Learning", "APIs", "Data Analysis"]
  }
];

export default function Careers() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InternshipApplication>({
    resolver: zodResolver(internshipApplicationSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "Internship Application",
      message: "",
      position: "",
      experience: "",
      portfolio: "",
      availability: ""
    }
  });

  const applicationMutation = useMutation({
    mutationFn: (data: InternshipApplication) => {
      const applicationData = {
        ...data,
        message: `
Position: ${data.position}
Experience Level: ${data.experience}
Portfolio: ${data.portfolio || 'Not provided'}
Availability: ${data.availability}

Additional Message:
${data.message}
        `
      };
      return apiRequest("POST", "/api/contacts", applicationData);
    },
    onSuccess: () => {
      toast({
        title: "Application submitted successfully!",
        description: "We'll review your application and get back to you within 48 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Failed to submit application",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InternshipApplication) => {
    applicationMutation.mutate(data);
  };

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
              Join Our <span className="text-electric-blue">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Start your career in tech with hands-on experience at Ambersolutions. 
              We offer exciting internship opportunities for passionate students and fresh graduates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internship Benefits */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Why Intern With Us?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Gain real-world experience working on actual client projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: "Mentorship",
                description: "Work directly with experienced developers and designers who will guide your learning"
              },
              {
                icon: Laptop,
                title: "Real Projects",
                description: "Contribute to live client projects and see your work make a real impact"
              },
              {
                icon: GraduationCap,
                title: "Skill Development",
                description: "Learn modern technologies and industry best practices through hands-on experience"
              }
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-700 h-full hover:border-electric-blue transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center text-black mx-auto mb-6">
                      <benefit.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Available Positions */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Available Positions</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Choose the internship that matches your interests and skills
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {internshipPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-700 h-full">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-electric-blue rounded-lg flex items-center justify-center text-black mb-6">
                      <position.icon size={32} />
                    </div>
                    <h3 className="text-xl font-semibold mb-4">{position.title}</h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{position.description}</p>
                    <div>
                      <h4 className="font-semibold mb-3">Required Skills:</h4>
                      <div className="flex flex-wrap gap-2">
                        {position.skills.map((skill) => (
                          <span 
                            key={skill}
                            className="bg-electric-blue text-black px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Apply Now</h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Ready to start your journey with us? Fill out the application form below
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border-gray-700">
                <CardContent className="p-8">
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name *</label>
                        <Input
                          {...form.register("name")}
                          placeholder="Your full name"
                          className="bg-gray-900 border-gray-700 focus:border-electric-blue"
                        />
                        {form.formState.errors.name && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Email *</label>
                        <Input
                          {...form.register("email")}
                          type="email"
                          placeholder="your@email.com"
                          className="bg-gray-900 border-gray-700 focus:border-electric-blue"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Position *</label>
                        <Select onValueChange={(value) => form.setValue("position", value)}>
                          <SelectTrigger className="bg-gray-900 border-gray-700 focus:border-electric-blue">
                            <SelectValue placeholder="Select a position" />
                          </SelectTrigger>
                          <SelectContent>
                            {internshipPositions.map((position) => (
                              <SelectItem key={position.title} value={position.title}>
                                {position.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {form.formState.errors.position && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.position.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Experience Level *</label>
                        <Select onValueChange={(value) => form.setValue("experience", value)}>
                          <SelectTrigger className="bg-gray-900 border-gray-700 focus:border-electric-blue">
                            <SelectValue placeholder="Select experience level" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                            <SelectItem value="intermediate">Intermediate (1-2 years)</SelectItem>
                            <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.experience && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.experience.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium mb-2">Portfolio URL</label>
                        <Input
                          {...form.register("portfolio")}
                          placeholder="https://yourportfolio.com"
                          className="bg-gray-900 border-gray-700 focus:border-electric-blue"
                        />
                        {form.formState.errors.portfolio && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.portfolio.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium mb-2">Availability *</label>
                        <Select onValueChange={(value) => form.setValue("availability", value)}>
                          <SelectTrigger className="bg-gray-900 border-gray-700 focus:border-electric-blue">
                            <SelectValue placeholder="Select availability" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="full-time">Full-time (40 hours/week)</SelectItem>
                            <SelectItem value="part-time">Part-time (20 hours/week)</SelectItem>
                            <SelectItem value="flexible">Flexible hours</SelectItem>
                          </SelectContent>
                        </Select>
                        {form.formState.errors.availability && (
                          <p className="text-red-400 text-sm mt-1">{form.formState.errors.availability.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">Cover Letter / Additional Information</label>
                      <Textarea
                        {...form.register("message")}
                        placeholder="Tell us why you're interested in this position and what you hope to learn..."
                        rows={6}
                        className="bg-gray-900 border-gray-700 focus:border-electric-blue resize-none"
                      />
                      {form.formState.errors.message && (
                        <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                      )}
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-electric-blue text-black hover:bg-white transition-colors text-lg py-6"
                      disabled={applicationMutation.isPending}
                    >
                      {applicationMutation.isPending ? "Submitting..." : "Submit Application"}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}