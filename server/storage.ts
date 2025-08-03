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
        clientName: "Emily Zhang",
        clientRole: "Product Manager, ByteLabs",
        content: "Working with AmbersolutionsPK was a game-changer for our startup. They transformed our idea into a sleek landing page that boosted our conversion rate by 40%. Their team truly understands design, execution, and user experience.",
        rating: 5
      },
      {
        clientName: "David Lee",
        clientRole: "Founder, Streamify AI",
        content: "We needed a custom AI tool, and AmbersolutionsPK delivered beyond expectations. From concept to deployment, everything was handled with precision and creativity. Their expertise in AI and web technologies is unmatched.",
        rating: 5
      },
      {
        clientName: "Sarah Johnson",
        clientRole: "UX Designer, CloudArc",
        content: "AmbersolutionsPK built our portfolio site, and the results were stunning. Clean design, smooth animations, and delivered on time. They are the perfect partner for anyone who values minimalism with impact.",
        rating: 5
      },
      {
        clientName: "Alex Carter",
        clientRole: "CTO, NovaEdge Solutions",
        content: "Our company required a dashboard solution with custom backend logic. AmbersolutionsPK handled it flawlessly. The communication was seamless, and they exceeded every expectation. Highly recommend their services.",
        rating: 5
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
