import { 
  type Provider, 
  type InsertProvider,
  type Appointment,
  type InsertAppointment,
  type Contact,
  type InsertContact,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  // Providers
  getProviders(): Promise<Provider[]>;
  getProvider(id: string): Promise<Provider | undefined>;
  createProvider(provider: InsertProvider): Promise<Provider>;

  // Appointments
  getAppointments(): Promise<Appointment[]>;
  getAppointment(id: string): Promise<Appointment | undefined>;
  createAppointment(appointment: InsertAppointment): Promise<Appointment>;
  getAppointmentsByProvider(providerId: string): Promise<Appointment[]>;

  // Contacts
  getContacts(): Promise<Contact[]>;
  createContact(contact: InsertContact): Promise<Contact>;

  // Testimonials
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private providers: Map<string, Provider>;
  private appointments: Map<string, Appointment>;
  private contacts: Map<string, Contact>;
  private testimonials: Map<string, Testimonial>;

  constructor() {
    this.providers = new Map();
    this.appointments = new Map();
    this.contacts = new Map();
    this.testimonials = new Map();
    this.seedData();
  }

  private seedData() {
    // Seed providers
    const seedProviders: InsertProvider[] = [
      {
        name: "Dr. Sarah Johnson",
        category: "Healthcare",
        experience: "15+ years experience",
        rating: 5,
        reviewCount: 127,
        imageUrl: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        verified: true
      },
      {
        name: "Emma Rodriguez",
        category: "Beauty & Wellness",
        experience: "8+ years experience",
        rating: 5,
        reviewCount: 89,
        imageUrl: "https://images.unsplash.com/photo-1594824388853-2c5d0d1ce6e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        verified: true
      },
      {
        name: "Mike Chen",
        category: "Fitness & Training",
        experience: "12+ years experience",
        rating: 5,
        reviewCount: 203,
        imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        verified: true
      },
      {
        name: "David Wilson",
        category: "Home Services",
        experience: "20+ years experience",
        rating: 5,
        reviewCount: 156,
        imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
        verified: true
      }
    ];

    seedProviders.forEach(provider => {
      this.createProvider(provider);
    });

    // Seed testimonials
    const seedTestimonials: InsertTestimonial[] = [
      {
        clientName: "Sarah M.",
        clientRole: "Healthcare Patient",
        content: "Ambersolutions made it so easy to find and book with Dr. Johnson. No more waiting on hold or playing phone tag. The whole process was seamless!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
      },
      {
        clientName: "James L.",
        clientRole: "Business Professional",
        content: "As a busy professional, I love that I can book my trainer Mike at any time. The platform is intuitive and the providers are all verified and reliable.",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
      },
      {
        clientName: "Maria T.",
        clientRole: "Beauty Client",
        content: "The review system helped me choose the perfect hair stylist. Emma exceeded my expectations, and booking my next appointment was effortless!",
        rating: 5,
        imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=80&h=80"
      }
    ];

    seedTestimonials.forEach(testimonial => {
      this.createTestimonial(testimonial);
    });
  }

  // Providers
  async getProviders(): Promise<Provider[]> {
    return Array.from(this.providers.values());
  }

  async getProvider(id: string): Promise<Provider | undefined> {
    return this.providers.get(id);
  }

  async createProvider(insertProvider: InsertProvider): Promise<Provider> {
    const id = randomUUID();
    const provider: Provider = { ...insertProvider, id };
    this.providers.set(id, provider);
    return provider;
  }

  // Appointments
  async getAppointments(): Promise<Appointment[]> {
    return Array.from(this.appointments.values());
  }

  async getAppointment(id: string): Promise<Appointment | undefined> {
    return this.appointments.get(id);
  }

  async createAppointment(insertAppointment: InsertAppointment): Promise<Appointment> {
    const id = randomUUID();
    const appointment: Appointment = { 
      ...insertAppointment, 
      id, 
      createdAt: new Date()
    };
    this.appointments.set(id, appointment);
    return appointment;
  }

  async getAppointmentsByProvider(providerId: string): Promise<Appointment[]> {
    return Array.from(this.appointments.values()).filter(
      appointment => appointment.providerId === providerId
    );
  }

  // Contacts
  async getContacts(): Promise<Contact[]> {
    return Array.from(this.contacts.values());
  }

  async createContact(insertContact: InsertContact): Promise<Contact> {
    const id = randomUUID();
    const contact: Contact = { 
      ...insertContact, 
      id, 
      createdAt: new Date()
    };
    this.contacts.set(id, contact);
    return contact;
  }

  // Testimonials
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(insertTestimonial: InsertTestimonial): Promise<Testimonial> {
    const id = randomUUID();
    const testimonial: Testimonial = { ...insertTestimonial, id };
    this.testimonials.set(id, testimonial);
    return testimonial;
  }
}

export const storage = new MemStorage();
