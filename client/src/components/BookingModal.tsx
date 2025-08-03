import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertAppointmentSchema, type InsertAppointment, type Provider } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

interface BookingModalProps {
  providerId: string;
  onClose: () => void;
}

const timeSlots = [
  "9:00 AM", "10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM", "4:00 PM"
];

export default function BookingModal({ providerId, onClose }: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: provider } = useQuery<Provider>({
    queryKey: ["/api/providers", providerId],
  });

  const form = useForm<InsertAppointment>({
    resolver: zodResolver(insertAppointmentSchema),
    defaultValues: {
      providerId,
      clientName: "",
      clientEmail: "",
      clientPhone: "",
      appointmentDate: "",
      appointmentTime: "",
      notes: "",
      status: "pending"
    }
  });

  const bookingMutation = useMutation({
    mutationFn: (data: InsertAppointment) => apiRequest("POST", "/api/appointments", data),
    onSuccess: () => {
      toast({
        title: "Appointment booked successfully!",
        description: "You'll receive a confirmation email shortly.",
      });
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/appointments"] });
    },
    onError: () => {
      toast({
        title: "Failed to book appointment",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  });

  const onSubmit = (data: InsertAppointment) => {
    if (!selectedDate || !selectedTime) {
      toast({
        title: "Please select date and time",
        description: "Both date and time are required.",
        variant: "destructive",
      });
      return;
    }

    bookingMutation.mutate({
      ...data,
      appointmentDate: selectedDate,
      appointmentTime: selectedTime
    });
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-gray-900 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        >
          <div className="p-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">Book Appointment</h3>
              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </Button>
            </div>

            {provider && (
              <Card className="bg-black border-gray-700 mb-6">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-4">
                    <img 
                      src={provider.imageUrl || ""} 
                      alt={provider.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="text-lg">{provider.name}</div>
                      <div className="text-sm text-electric-blue">{provider.category}</div>
                    </div>
                  </CardTitle>
                </CardHeader>
              </Card>
            )}
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold mb-4 flex items-center space-x-2">
                  <Calendar size={20} className="text-electric-blue" />
                  <span>Select Date & Time</span>
                </h4>
                <div className="space-y-4">
                  <Input
                    type="date"
                    min={getTomorrowDate()}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="bg-black border-gray-700 focus:border-electric-blue"
                  />
                  
                  <div className="grid grid-cols-3 gap-2">
                    {timeSlots.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTime(time)}
                        className={selectedTime === time 
                          ? "bg-electric-blue text-black" 
                          : "border-gray-700 hover:border-electric-blue"
                        }
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold mb-4 flex items-center space-x-2">
                  <Clock size={20} className="text-electric-blue" />
                  <span>Your Information</span>
                </h4>
                <div className="space-y-4">
                  <Input
                    {...form.register("clientName")}
                    placeholder="Full Name"
                    className="bg-black border-gray-700 focus:border-electric-blue"
                  />
                  {form.formState.errors.clientName && (
                    <p className="text-red-400 text-sm">{form.formState.errors.clientName.message}</p>
                  )}
                  
                  <Input
                    {...form.register("clientEmail")}
                    type="email"
                    placeholder="Email Address"
                    className="bg-black border-gray-700 focus:border-electric-blue"
                  />
                  {form.formState.errors.clientEmail && (
                    <p className="text-red-400 text-sm">{form.formState.errors.clientEmail.message}</p>
                  )}
                  
                  <Input
                    {...form.register("clientPhone")}
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-black border-gray-700 focus:border-electric-blue"
                  />
                  {form.formState.errors.clientPhone && (
                    <p className="text-red-400 text-sm">{form.formState.errors.clientPhone.message}</p>
                  )}
                  
                  <Textarea
                    {...form.register("notes")}
                    placeholder="Additional Notes (Optional)"
                    className="bg-black border-gray-700 focus:border-electric-blue resize-none"
                    rows={3}
                  />
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <Button 
                variant="outline"
                onClick={onClose}
                className="flex-1 border-gray-700 hover:border-electric-blue"
              >
                Cancel
              </Button>
              <Button 
                onClick={form.handleSubmit(onSubmit)}
                disabled={bookingMutation.isPending}
                className="flex-1 bg-electric-blue text-black hover:bg-white transition-colors"
              >
                {bookingMutation.isPending ? "Booking..." : "Confirm Booking"}
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
