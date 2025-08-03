# Overview

This is a modern web application for "Ambersolutionspk", a digital agency that provides various web development and AI services. The application features a dark-themed, minimalist design with an agency homepage showcasing services, featured providers, projects, pricing, testimonials, and contact functionality. The backend supports appointment booking, contact form submissions, and provider management through a REST API.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React with TypeScript using Vite as the build tool
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with a custom dark theme (black background, white text, electric blue accents)
- **UI Components**: Shadcn/ui component library with Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Animations**: Framer Motion for smooth animations and transitions
- **Forms**: React Hook Form with Zod validation
- **Design System**: Custom color palette with CSS variables for theming

## Backend Architecture
- **Framework**: Express.js with TypeScript
- **API Design**: RESTful API with structured error handling
- **Storage**: In-memory storage implementation with interface for future database integration
- **Validation**: Zod schemas for request/response validation
- **Development**: Vite integration for hot module replacement in development

## Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema**: Well-defined database schema for providers, appointments, contacts, and testimonials
- **Current Implementation**: Memory-based storage with seeded data for development
- **Production Ready**: Database schema and migrations prepared for PostgreSQL deployment

## Key Features
- **Agency Website**: Complete homepage with hero section, services, projects showcase
- **Provider Directory**: Listing of service providers with ratings and categories
- **Appointment Booking**: Modal-based booking system with form validation
- **Contact Management**: Contact form with backend submission handling
- **Testimonials**: Display system for client testimonials
- **Responsive Design**: Mobile-first approach with responsive breakpoints

## External Dependencies

- **UI Framework**: React 18 with TypeScript support
- **Database**: PostgreSQL (via Neon Database serverless)
- **ORM**: Drizzle ORM with Drizzle Kit for migrations
- **Styling**: Tailwind CSS with PostCSS processing
- **Components**: Radix UI primitives for accessible components
- **Validation**: Zod for schema validation
- **HTTP Client**: Fetch API with custom request wrapper
- **Development**: Replit-specific plugins for development environment
- **Animation**: Framer Motion for UI animations
- **Icons**: Lucide React for consistent iconography
- **Date Handling**: date-fns for date manipulation
- **Form Management**: React Hook Form with Hookform Resolvers