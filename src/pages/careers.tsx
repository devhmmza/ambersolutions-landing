import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GraduationCap, Laptop, Users, Award } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const internshipApplicationSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email"),
  subject: z.string().default("Internship Application"),
  message: z.string().optional(),
  position: z.string().min(1, "Please select a position"),
  experience: z.string().min(1, "Please select your experience level"),
  portfolio: z.string().url("Invalid portfolio URL").optional().or(z.literal("")),
  availability: z.string().min(1, "Please select your availability"),
});

type InternshipApplication = z.infer<typeof internshipApplicationSchema>;

const internshipPositions = [
  {
    title: "Frontend Development Intern",
    icon: Laptop,
    description: "Work with React, TypeScript, and modern CSS frameworks to build user interfaces",
    skills: ["React", "TypeScript", "CSS/Tailwind", "HTML"],
  },
  {
    title: "UI/UX Design Intern",
    icon: Award,
    description: "Create beautiful and functional designs for web applications and landing pages",
    skills: ["Figma", "Adobe Creative Suite", "Prototyping", "User Research"],
  },
  {
    title: "AI/ML Development Intern",
    icon: GraduationCap,
    description: "Help develop AI-powered features and integrate machine learning solutions",
    skills: ["Python", "Machine Learning", "APIs", "Data Analysis"],
  },
];

export default function Careers() {
  const { toast } = useToast();

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
      availability: "",
    },
  });

  // ✅ Formspree submission
  const onSubmit = async (data: InternshipApplication) => {
    try {
      const payload = {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: `
Internship Position: ${data.position}
Experience Level: ${data.experience}
Portfolio: ${data.portfolio || "Not provided"}
Availability: ${data.availability}

Cover Letter:
${data.message}
        `,
      };

      const res = await fetch("https://formspree.io/f/meozlrqw", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast({ title: "Application submitted!", description: "We’ll get back to you within 48 hours." });
        form.reset();
      } else {
        toast({ title: "Submission failed", description: "Please try again later.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Error", description: "Network issue, try again.", variant: "destructive" });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ✅ Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 className="text-4xl md:text-6xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            Join Our <span className="text-electric-blue">Team</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Start your career in tech with hands-on experience at Ambersolutions. Apply for our internships below.
          </p>
        </div>
      </section>

      {/* ✅ Application Form */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-6 max-w-4xl">
          <Card className="bg-black border-gray-700">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Full Name *</label>
                    <Input {...form.register("name")} placeholder="Your name" className="bg-gray-900 border-gray-700" />
                    {form.formState.errors.name && <p className="text-red-400">{form.formState.errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block mb-2">Email *</label>
                    <Input {...form.register("email")} type="email" placeholder="your@email.com" className="bg-gray-900 border-gray-700" />
                    {form.formState.errors.email && <p className="text-red-400">{form.formState.errors.email.message}</p>}
                  </div>
                </div>

                {/* Position & Experience */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Position *</label>
                    <Select onValueChange={(v) => form.setValue("position", v)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700">
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        {internshipPositions.map((p) => (
                          <SelectItem key={p.title} value={p.title}>{p.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {form.formState.errors.position && <p className="text-red-400">{form.formState.errors.position.message}</p>}
                  </div>
                  <div>
                    <label className="block mb-2">Experience Level *</label>
                    <Select onValueChange={(v) => form.setValue("experience", v)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700">
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                        <SelectItem value="intermediate">Intermediate (1-2 years)</SelectItem>
                        <SelectItem value="advanced">Advanced (2+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.experience && <p className="text-red-400">{form.formState.errors.experience.message}</p>}
                  </div>
                </div>

                {/* Portfolio & Availability */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block mb-2">Portfolio URL</label>
                    <Input {...form.register("portfolio")} placeholder="https://portfolio.com" className="bg-gray-900 border-gray-700" />
                    {form.formState.errors.portfolio && <p className="text-red-400">{form.formState.errors.portfolio.message}</p>}
                  </div>
                  <div>
                    <label className="block mb-2">Availability *</label>
                    <Select onValueChange={(v) => form.setValue("availability", v)}>
                      <SelectTrigger className="bg-gray-900 border-gray-700">
                        <SelectValue placeholder="Select availability" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                    {form.formState.errors.availability && <p className="text-red-400">{form.formState.errors.availability.message}</p>}
                  </div>
                </div>

                {/* Cover Letter */}
                <div>
                  <label className="block mb-2">Cover Letter / Additional Info</label>
                  <Textarea {...form.register("message")} rows={6} placeholder="Tell us why you're a great fit..." className="bg-gray-900 border-gray-700" />
                </div>

                {/* Submit */}
                <Button type="submit" className="w-full bg-electric-blue text-black hover:bg-white">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
