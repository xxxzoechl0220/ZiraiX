# ZiraiX Portfolio Website

## Overview

This is a modern portfolio website for ZiraiX, an independent app developer focused on creating life-enhancing applications. The project is built as a full-stack application using React for the frontend, Express.js for the backend, and PostgreSQL with Drizzle ORM for data persistence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system using CSS variables
- **UI Components**: Comprehensive component library based on Radix UI primitives with shadcn/ui styling
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for fast development and optimized builds

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Runtime**: Node.js with ES modules
- **Database ORM**: Drizzle ORM for type-safe database operations
- **Session Management**: PostgreSQL-based session storage using connect-pg-simple
- **Development**: Hot reloading with tsx for TypeScript execution

### Database Strategy
- **Primary Database**: PostgreSQL (configured for Neon serverless)
- **ORM**: Drizzle ORM with automatic type inference
- **Schema Management**: Code-first approach with migration support
- **Connection**: Serverless-ready configuration using @neondatabase/serverless

## Key Components

### Frontend Structure
- **Component Library**: Custom UI components in `/client/src/components/ui/`
- **Page Components**: Feature-rich sections (Hero, AppShowcase, About, Contact, Footer)
- **Internationalization**: Multi-language support (Chinese Simplified/Traditional, English, Korean, Japanese)
- **Responsive Design**: Mobile-first approach with adaptive layouts

### Backend Structure
- **API Routes**: RESTful API structure with `/api` prefix
- **Storage Layer**: Abstracted storage interface supporting both memory and database backends
- **Middleware**: Request logging, JSON parsing, error handling
- **Development Tools**: Vite integration for SSR-like development experience

### Design System
- **Color Scheme**: Custom color palette with primary (purple), secondary (yellow), and accent (teal) colors
- **Typography**: Nunito font for headings, Inter for body text
- **Spacing**: Consistent spacing scale using Tailwind utilities
- **Components**: Comprehensive set of reusable UI components

## Data Flow

### Client-Server Communication
1. Frontend makes API requests to `/api` endpoints
2. Express server processes requests using storage interface
3. Drizzle ORM handles database operations with type safety
4. TanStack Query manages caching and synchronization on frontend

### State Management
- **Server State**: TanStack Query for API data caching and synchronization
- **Local State**: React hooks for component-level state
- **Form State**: React Hook Form with Zod validation schemas

### Internationalization Flow
- Language selection stored in component state
- Translation objects provide localized content
- Dynamic content rendering based on selected language

## External Dependencies

### Core Technologies
- **Database**: Neon PostgreSQL serverless database
- **UI Framework**: Radix UI primitives for accessible components
- **Styling**: Tailwind CSS for utility-first styling
- **Icons**: Lucide React icons with additional social media icons

### Development Tools
- **Build System**: Vite with React plugin and development optimizations
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: ESLint and Prettier (implicit)
- **Replit Integration**: Cartographer plugin for enhanced development experience

### Runtime Dependencies
- **Database Driver**: Neon serverless driver for PostgreSQL
- **Session Management**: PostgreSQL session store
- **Form Handling**: React Hook Form with Zod validation
- **Date Handling**: date-fns for date manipulation

## Deployment Strategy

### Build Process
1. Frontend assets built using Vite and output to `/dist/public`
2. Backend compiled using esbuild for Node.js ESM format
3. Database migrations managed through Drizzle Kit

### Production Configuration
- **Environment Variables**: Database URL and other secrets via environment
- **Static Assets**: Served directly by Express in production
- **Database**: PostgreSQL connection pooling for scalability
- **Session Storage**: Persistent sessions using PostgreSQL

### Development Environment
- **Hot Reloading**: Vite middleware integration for instant updates
- **Database**: Local or cloud PostgreSQL instance
- **Development Server**: Single process serving both API and frontend
- **Replit Integration**: Specialized configuration for Replit development environment

### Scaling Considerations
- **Database**: Serverless PostgreSQL for automatic scaling
- **Frontend**: Static asset optimization through Vite
- **Caching**: TanStack Query provides client-side caching
- **API**: Stateless design allows for horizontal scaling