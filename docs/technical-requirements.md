# Technical Requirements - Home Massage Platform

## Technology Stack

### Frontend

- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn/ui (all UI components built with Shadcn/ui)
- **State Management**: Zustand or Redux Toolkit
- **Form Handling**: React Hook Form with Zod validation
- **Authentication**: NextAuth.js or Auth0
- **Image Handling**: Next.js Image optimization
- **Real-time Features**: Socket.io or Pusher

### UI Component Strategy with Shadcn/ui

- **Component Library**: All UI components will be built using Shadcn/ui
- **Design System**: Consistent design language using Shadcn/ui components
- **Customization**: Components will be customized to match brand identity
- **Accessibility**: Built-in accessibility features from Radix UI primitives
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Theme Support**: Light/dark mode support using Shadcn/ui theming
- **Component Ownership**: Copy-paste approach for full control over components

### Shadcn/ui Components for Home Massage Platform

#### Core UI Components

- **Layout Components**: Card, Sheet, Dialog, Drawer, Tabs
- **Navigation**: Navigation Menu, Breadcrumb, Pagination
- **Forms**: Input, Textarea, Select, Checkbox, Radio Group, Switch
- **Buttons**: Button, Button Group, Icon Button
- **Data Display**: Table, Badge, Avatar, Progress, Skeleton
- **Feedback**: Alert, Toast, Progress, Spinner
- **Overlay**: Modal, Popover, Tooltip, Dropdown Menu

#### Specialized Components for Massage Platform

- **User Profiles**: Avatar, Card, Badge for ratings
- **Image Galleries**: Carousel, Lightbox, Grid layouts
- **Booking System**: Calendar, Date Picker, Time Picker
- **Rating System**: Star Rating, Progress indicators
- **Search & Filters**: Input with search, Multi-select, Range slider
- **Messaging**: Chat interface, Message bubbles
- **Notifications**: Toast notifications, Alert banners

#### Custom Component Development

- **Masseur Profile Cards**: Custom cards with image, rating, services
- **Service Selection**: Custom service picker with pricing
- **Booking Flow**: Multi-step booking wizard
- **Review System**: Custom review cards with ratings
- **Image Upload**: Drag-and-drop image uploader
- **Availability Calendar**: Custom calendar for masseur availability

### Backend

- **Runtime**: Elysia.js (Bun runtime)
- **API**: RESTful API with OpenAPI documentation
- **Authentication**: JWT tokens with refresh mechanism
- **File Upload**: Multer or similar for image handling
- **Email Service**: Optional (for future use)
- **Payment Processing**: Cash payments only (no online payment processing)
- **Real-time**: WebSocket support

### Database

- **Primary Database**: PostgreSQL
- **ORM**: Prisma or Drizzle
- **Caching**: Redis
- **File Storage**: AWS S3 or Cloudinary
- **Search**: Elasticsearch or PostgreSQL full-text search

### Infrastructure

- **Hosting**: Vercel (Frontend) + Railway/Render (Backend)
- **CDN**: Cloudflare
- **Monitoring**: Sentry for error tracking
- **Analytics**: Google Analytics 4
- **CI/CD**: GitHub Actions

## System Architecture

### High-Level Architecture

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (Next.js)     │◄──►│   (Elysia.js)   │◄──►│   (PostgreSQL)  │
└─────────────────┘    └─────────────────┘    └─────────────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   CDN           │    │   File Storage  │    │   Cache         │
│   (Cloudflare)  │    │   (AWS S3)      │    │   (Redis)       │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### API Architecture

- **RESTful API Design**
  - Resource-based URLs
  - HTTP methods (GET, POST, PUT, DELETE)
  - Status codes and error handling
  - API versioning (v1, v2)

- **Authentication Flow**
  - JWT token-based authentication
  - Refresh token mechanism
  - Role-based access control (RBAC)
  - API rate limiting

## Database Schema

### Core Entities

#### Users Table

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  phone VARCHAR(20),
  role ENUM('customer', 'masseur', 'admin') NOT NULL,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Masseurs Table

```sql
CREATE TABLE masseurs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES users(id) ON DELETE CASCADE,
  bio TEXT,
  experience_years INTEGER,
  certifications JSONB,
  service_areas JSONB,
  is_verified BOOLEAN DEFAULT FALSE,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Services Table

```sql
CREATE TABLE services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  masseur_id UUID REFERENCES masseurs(id) ON DELETE CASCADE,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  duration_minutes INTEGER NOT NULL,
  base_price DECIMAL(10,2) NOT NULL,
  travel_fee DECIMAL(10,2) DEFAULT 0,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Bookings Table

```sql
CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  masseur_id UUID REFERENCES masseurs(id) ON DELETE CASCADE,
  service_id UUID REFERENCES services(id) ON DELETE CASCADE,
  booking_date TIMESTAMP NOT NULL,
  duration_minutes INTEGER NOT NULL,
  total_price DECIMAL(10,2) NOT NULL,
  status ENUM('pending', 'confirmed', 'in_progress', 'completed', 'cancelled') DEFAULT 'pending',
  special_requests TEXT,
  address JSONB NOT NULL,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Reviews Table

```sql
CREATE TABLE reviews (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  booking_id UUID REFERENCES bookings(id) ON DELETE CASCADE,
  customer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  masseur_id UUID REFERENCES masseurs(id) ON DELETE CASCADE,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  comment TEXT,
  is_verified BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## API Endpoints

### Authentication Endpoints

```
POST /api/auth/register
POST /api/auth/login
POST /api/auth/logout
POST /api/auth/refresh
POST /api/auth/forgot-password
POST /api/auth/reset-password
```

### User Management

```
GET    /api/users/profile
PUT    /api/users/profile
DELETE /api/users/account
POST   /api/users/upload-avatar
```

### Masseur Endpoints

```
GET    /api/masseurs
GET    /api/masseurs/:id
POST   /api/masseurs/profile
PUT    /api/masseurs/profile
GET    /api/masseurs/:id/services
POST   /api/masseurs/services
PUT    /api/masseurs/services/:id
DELETE /api/masseurs/services/:id
```

### Booking Endpoints

```
GET    /api/bookings
POST   /api/bookings
GET    /api/bookings/:id
PUT    /api/bookings/:id
DELETE /api/bookings/:id
POST   /api/bookings/:id/cancel
```

### Review Endpoints

```
GET    /api/reviews/masseur/:id
POST   /api/reviews
PUT    /api/reviews/:id
DELETE /api/reviews/:id
```

## Security Requirements

### Authentication & Authorization

- **JWT Token Security**
  - Short-lived access tokens (15 minutes)
  - Long-lived refresh tokens (7 days)
  - Secure token storage
  - Token rotation on refresh

- **Password Security**
  - Bcrypt hashing with salt rounds ≥ 12
  - Password complexity requirements
  - Account lockout after failed attempts
  - Two-factor authentication (optional)

### Data Protection

- **Input Validation**
  - Server-side validation for all inputs
  - SQL injection prevention
  - XSS protection
  - CSRF protection

- **Data Encryption**
  - HTTPS for all communications
  - Database encryption at rest
  - Sensitive data encryption
  - Secure file upload handling

### API Security

- **Rate Limiting**
  - 100 requests per minute per IP
  - 1000 requests per hour per user
  - Different limits for authenticated users

- **CORS Configuration**
  - Restricted to frontend domain
  - Preflight request handling
  - Credential support

## Performance Requirements

### Response Times

- **API Response Times**
  - < 200ms for simple queries
  - < 500ms for complex queries
  - < 1000ms for file uploads

- **Page Load Times**
  - < 2 seconds for initial page load
  - < 1 second for subsequent navigation
  - < 3 seconds for image-heavy pages

### Scalability

- **Concurrent Users**
  - Support 1000+ concurrent users
  - Horizontal scaling capability
  - Database connection pooling

- **Data Storage**
  - Efficient image compression
  - CDN for static assets
  - Database indexing strategy

## Development Standards

### Code Quality

- **TypeScript Configuration**
  - Strict mode enabled
  - No implicit any
  - Strict null checks
  - ESLint + Prettier

- **Testing Requirements**
  - Unit tests for business logic
  - Integration tests for API endpoints
  - E2E tests for critical user flows
  - 80%+ code coverage

### Git Workflow

- **Branch Strategy**
  - Main branch for production
  - Develop branch for staging
  - Feature branches for development
  - Pull request reviews required

- **Commit Standards**
  - Conventional commits format
  - Descriptive commit messages
  - Atomic commits
  - No direct commits to main

## Deployment Requirements

### Environment Configuration

- **Environment Variables**
  - Database connection strings
  - API keys and secrets
  - JWT secrets
  - File storage credentials

- **Configuration Management**
  - Environment-specific configs
  - Secret management
  - Feature flags
  - Monitoring configuration

### Monitoring & Logging

- **Application Monitoring**
  - Error tracking with Sentry
  - Performance monitoring
  - Uptime monitoring
  - Custom metrics

- **Logging Strategy**
  - Structured logging (JSON)
  - Log levels (DEBUG, INFO, WARN, ERROR)
  - Log aggregation
  - Retention policies

## Third-Party Integrations

### Payment Processing

- **Stripe Integration**
  - Payment method management
  - Subscription handling
  - Webhook processing
  - PCI compliance

### Email Services

- **SendGrid Integration**
  - Transactional emails
  - Email templates
  - Delivery tracking
  - Bounce handling

### File Storage

- **AWS S3 Integration**
  - Image upload and storage
  - CDN integration
  - Access control
  - Backup strategies

## Future Technical Considerations

### Scalability Improvements

- **Microservices Architecture**
  - Service separation
  - API gateway
  - Service discovery
  - Load balancing

### Advanced Features

- **Real-time Features**
  - WebSocket implementation
  - Push notifications
  - Live chat support
  - Real-time updates

### Mobile Development

- **React Native**
  - Shared codebase
  - Platform-specific optimizations
  - Offline capabilities
  - Push notifications
