import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MapPin, Mail, Clock, Twitter, Instagram, Facebook } from "lucide-react";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";

export default function ContactSection() {
  const { toast } = useToast();

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: ""
    }
  });

  // ✅ Formspree submission handler
  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/meozlrqw", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
        form.reset();
      } else {
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Network error, please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Left side */}
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
                  <div className="text-gray-400">ambersolutionspk.info@gmail.com</div>
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

            {/* Social links */}
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-electric-blue hover:text-black transition-colors"
                onClick={() => window.open('https://www.instagram.com/ambersolutionspk?igsh=d3FyYTVtcno3MG9k', '_blank')}>
                <Instagram size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-electric-blue hover:text-black transition-colors"
                onClick={() => window.open('https://x.com/AmbersoPK?t=47I_SErXy7JNg1dqlnu7Xw&s=09', '_blank')}>
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="bg-gray-700 hover:bg-electric-blue hover:text-black transition-colors"
                onClick={() => window.open('https://www.facebook.com/share/1CjXy5TQKj/', '_blank')}>
                <Facebook size={20} />
              </Button>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="bg-black border-gray-700">
              <CardContent className="p-8">
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input {...form.register("name")} placeholder="Your full name" className="bg-gray-900 border-gray-700 focus:border-electric-blue" />
                    {form.formState.errors.name && <p className="text-red-400 text-sm mt-1">{form.formState.errors.name.message}</p>}
                  </div>
                  
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input {...form.register("email")} type="email" placeholder="your@email.com" className="bg-gray-900 border-gray-700 focus:border-electric-blue" />
                    {form.formState.errors.email && <p className="text-red-400 text-sm mt-1">{form.formState.errors.email.message}</p>}
                  </div>
                  
                  {/* Subject */}
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
                    {form.formState.errors.subject && <p className="text-red-400 text-sm mt-1">{form.formState.errors.subject.message}</p>}
                  </div>
                  
                  {/* Message */}
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <Textarea {...form.register("message")} rows={4} placeholder="Tell us about your project..." className="bg-gray-900 border-gray-700 focus:border-electric-blue resize-none" />
                    {form.formState.errors.message && <p className="text-red-400 text-sm mt-1">{form.formState.errors.message.message}</p>}
                  </div>
                  
                  {/* Submit */}
                  <Button type="submit" className="w-full bg-electric-blue text-black hover:bg-white transition-colors transform hover:scale-105">
                    Send Message
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
