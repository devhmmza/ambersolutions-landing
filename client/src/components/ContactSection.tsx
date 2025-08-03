import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Clock, Linkedin, Github, Twitter } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertContact>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  const contactMutation = useMutation({
    mutationFn: (data: InsertContact) => apiRequest("POST", "/api/contacts", data),
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contacts"] });
    },
    onError: () => {
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertContact) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-xl text-gray-300 mb-8">
              Have questions or want to discuss your next project? We'd love to hear from you.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center text-black">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="font-semibold">Location</div>
                  <div className="text-gray-400">Based in Shanghai, China</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center text-black">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="font-semibold">Email</div>
                  <div className="text-gray-400">hello@ambersolutionspk.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-electric-blue rounded-lg flex items-center justify-center text-black">
                  <Clock size={20} />
                </div>
                <div>
                  <div className="font-semibold">Response Time</div>
                  <div className="text-gray-400">Within 24 hours</div>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <Button
                variant="ghost"
                size="icon"
                className="bg-gray-700 hover:bg-electric-blue hover:text-black transition-colors"
              >
                <Linkedin size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-gray-700 hover:bg-electric-blue hover:text-black transition-colors"
              >
                <Github size={20} />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="bg-gray-700 hover:bg-electric-blue hover:text-black transition-colors"
              >
                <Twitter size={20} />
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
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
                    <label className="block text-sm font-medium mb-2">Email</label>
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
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <Select onValueChange={(value) => form.setValue("subject", value)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700 focus:border-electric-blue">
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Inquiry</SelectItem>
                        <SelectItem value="project">New Project</SelectItem>
                        <SelectItem value="support">Technical Support</SelectItem>
                        <SelectItem value="partnership">Partnership</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.subject && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      {...form.register("message")}
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="bg-gray-900 border-gray-700 focus:border-electric-blue resize-none"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={contactMutation.isPending}
                    className="w-full bg-electric-blue text-black hover:bg-white transition-colors transform hover:scale-105"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
