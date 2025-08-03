import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import type { Provider } from "@shared/schema";

interface ProvidersProps {
  onBookingOpen: (providerId: string) => void;
}

export default function ProvidersSection({ onBookingOpen }: ProvidersProps) {
  const { data: providers, isLoading } = useQuery<Provider[]>({
    queryKey: ["/api/providers"],
  });

  if (isLoading) {
    return (
      <section id="providers" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse text-gray-400">Loading providers...</div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="providers" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Featured Providers</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Top-rated professionals ready to serve you
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {providers?.map((provider, index) => (
            <motion.div
              key={provider.id}
              className="bg-black p-6 rounded-xl border border-gray-700 hover:border-electric-blue transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src={provider.imageUrl || "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300"} 
                alt={provider.name} 
                className="w-full h-48 object-cover rounded-lg mb-4" 
              />
              
              <div className="flex items-center mb-2">
                <div className="flex text-yellow-400 text-sm">
                  {Array.from({ length: provider.rating }).map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <span className="ml-2 text-gray-400 text-sm">({provider.reviewCount} reviews)</span>
              </div>
              
              <h3 className="text-xl font-semibold mb-1">{provider.name}</h3>
              <p className="text-electric-blue text-sm mb-2">{provider.category}</p>
              <p className="text-gray-400 text-sm mb-4">{provider.experience}</p>
              
              <Button 
                onClick={() => onBookingOpen(provider.id)}
                className="w-full bg-electric-blue text-black hover:bg-white transition-colors"
              >
                Book Appointment
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Button 
            variant="outline"
            className="border-electric-blue text-electric-blue hover:bg-electric-blue hover:text-black transition-colors px-8 py-3"
          >
            View All Providers
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
