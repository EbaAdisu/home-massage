# Home Massage Platform - Folder Structure

## Current Project Structure

```
home-massage/
├── docs/                           # Project documentation
│   ├── action-plan.md             # Development roadmap
│   ├── project-requirements.md    # Functional requirements
│   ├── technical-requirements.md  # Technical specifications
│   ├── folder-structure.md        # This file - folder structure documentation
│   └── README.md                  # Documentation index
├── src/                           # Source code
│   ├── app/                      # Next.js App Router
│   │   ├── favicon.ico           # Site favicon
│   │   ├── globals.css           # Global styles
│   │   ├── layout.tsx            # Root layout component
│   │   └── page.tsx              # Home page component
│   ├── components/               # Reusable components
│   │   ├── ui/                   # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── select.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── label.tsx
│   │   │   ├── form.tsx
│   │   │   └── sonner.tsx
│   │   ├── forms/                # Form components
│   │   ├── layout/               # Layout components
│   │   ├── features/             # Feature-specific components
│   │   ├── animations/           # Animation components
│   │   │   ├── page-transition.tsx
│   │   │   ├── fade-in.tsx
│   │   │   ├── slide-up.tsx
│   │   │   └── loading-spinner.tsx
│   │   ├── theme-provider.tsx    # Theme provider component
│   │   └── theme-selector.tsx    # Theme selector component
│   ├── lib/                      # Utility libraries
│   │   ├── utils.ts              # General utilities
│   │   └── theme.ts              # Theme configuration
│   ├── services/                 # API service functions
│   ├── hooks/                    # Custom React hooks
│   ├── stores/                   # Zustand stores
│   │   └── theme-store.ts        # Theme state management
│   ├── types/                    # TypeScript type definitions
│   ├── data/                     # Mock data
│   └── styles/                   # Styling files
├── public/                       # Static assets
│   ├── file.svg                  # SVG icons
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── .cursor/                      # Cursor IDE configuration
│   └── rules/                    # Cursor rules
│       ├── shadcn-mcp-usage.mdc # Shadcn MCP usage rule
│       └── folder-structure.mdc  # Folder structure rule
├── node_modules/                 # Dependencies
├── package.json                 # Project dependencies and scripts
├── package-lock.json            # Lock file for dependencies
├── next.config.ts               # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── eslint.config.mjs            # ESLint configuration
├── postcss.config.mjs           # PostCSS configuration
├── next-env.d.ts                # Next.js TypeScript declarations
├── .prettierrc                  # Prettier configuration
├── .prettierignore              # Prettier ignore file
├── components.json              # Shadcn/ui configuration
└── README.md                    # Project README
```

## Planned Folder Structure (To Be Created)

```
home-massage/
├── docs/                           # Project documentation
├── src/                           # Source code
│   ├── app/                      # Next.js App Router
│   │   ├── (auth)/              # Auth route group
│   │   │   ├── login/           # Login page
│   │   │   ├── register/        # Registration page
│   │   │   └── layout.tsx        # Auth layout
│   │   ├── (dashboard)/         # Dashboard route group
│   │   │   ├── customer/        # Customer dashboard
│   │   │   ├── masseur/         # Masseur dashboard
│   │   │   └── layout.tsx        # Dashboard layout
│   │   ├── api/                 # API routes
│   │   │   ├── auth/            # Authentication endpoints
│   │   │   ├── users/           # User management
│   │   │   ├── masseurs/        # Masseur endpoints
│   │   │   ├── bookings/        # Booking endpoints
│   │   │   └── reviews/         # Review endpoints
│   │   ├── search/              # Search functionality
│   │   ├── profile/             # User profiles
│   │   ├── booking/             # Booking flow
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout
│   │   └── page.tsx             # Home page
│   ├── components/              # Reusable components
│   │   ├── ui/                  # Shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── input.tsx
│   │   │   ├── card.tsx
│   │   │   └── ...
│   │   ├── forms/               # Form components
│   │   │   ├── login-form.tsx
│   │   │   ├── register-form.tsx
│   │   │   └── booking-form.tsx
│   │   ├── layout/              # Layout components
│   │   │   ├── header.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── navigation.tsx
│   │   ├── features/            # Feature-specific components
│   │   │   ├── auth/            # Authentication components
│   │   │   ├── booking/         # Booking components
│   │   │   ├── profile/         # Profile components
│   │   │   ├── search/          # Search components
│   │   │   └── review/          # Review components
│   │   └── animations/          # Animation components
│   │       ├── page-transition.tsx
│   │       ├── fade-in.tsx
│   │       └── slide-up.tsx
│   ├── lib/                     # Utility libraries
│   │   ├── utils.ts             # General utilities
│   │   ├── validations.ts       # Form validation schemas
│   │   ├── constants.ts         # App constants
│   │   └── api.ts               # API utilities
│   ├── services/                # API service functions
│   │   ├── auth-service.ts      # Authentication API calls
│   │   ├── user-service.ts      # User management API calls
│   │   ├── masseur-service.ts   # Masseur API calls
│   │   ├── booking-service.ts   # Booking API calls
│   │   ├── review-service.ts    # Review API calls
│   │   └── search-service.ts    # Search API calls
│   ├── hooks/                   # Custom React hooks
│   │   ├── use-auth.ts          # Authentication hook
│   │   ├── use-booking.ts       # Booking management
│   │   ├── use-theme.ts         # Theme management
│   │   └── use-animation.ts     # Animation hooks
│   ├── stores/                  # Zustand stores
│   │   ├── user-store.ts        # User state management
│   │   ├── masseur-store.ts     # Masseur state management
│   │   ├── booking-store.ts     # Booking state management
│   │   └── theme-store.ts       # Theme state management
│   ├── types/                   # TypeScript type definitions
│   │   ├── user.ts              # User types
│   │   ├── masseur.ts           # Masseur types
│   │   ├── booking.ts           # Booking types
│   │   ├── theme.ts             # Theme types
│   │   └── api.ts               # API response types
│   ├── data/                    # Mock data
│   │   ├── users.ts             # Mock user data
│   │   ├── masseurs.ts          # Mock masseur data
│   │   ├── bookings.ts          # Mock booking data
│   │   └── reviews.ts           # Mock review data
│   └── styles/                  # Styling files
│       ├── globals.css          # Global styles
│       ├── components.css       # Component styles
│       └── themes/              # Theme-specific styles
│           ├── wellness.css
│           ├── luxury.css
│           ├── modern.css
│           └── ...
├── public/                      # Static assets
│   ├── images/                  # Image assets
│   │   ├── masseurs/            # Masseur profile images
│   │   ├── services/            # Service images
│   │   └── backgrounds/         # Background images
│   ├── icons/                   # Icon assets
│   └── favicon.ico              # Site favicon
├── .cursor/                     # Cursor IDE configuration
│   └── rules/                   # Cursor rules
│       ├── shadcn-mcp-usage.mdc # Shadcn MCP usage rule
│       └── folder-structure.mdc # Folder structure rule
└── ...                         # Configuration files
```

## Folder Structure Guidelines

### **App Router Structure**

- Use route groups `(group-name)` for logical organization
- Keep related pages together in the same folder
- Use `layout.tsx` for shared layouts within route groups

### **Components Organization**

- **ui/**: Shadcn/ui components (copy-paste from registry)
- **forms/**: Form-specific components
- **layout/**: Layout and navigation components
- **features/**: Feature-specific components organized by domain
- **animations/**: Reusable animation components

### **State Management**

- **stores/**: Zustand stores organized by domain
- **hooks/**: Custom hooks for component logic
- **types/**: TypeScript type definitions

### **Data Management**

- **data/**: Mock data files for development
- **lib/**: Utility functions and API helpers
- **services/**: API service functions for backend communication

### **Services Organization**

- **auth-service.ts**: Authentication API calls (login, register, logout)
- **user-service.ts**: User management API calls (profile, preferences)
- **masseur-service.ts**: Masseur API calls (profile, services, availability)
- **booking-service.ts**: Booking API calls (create, update, cancel)
- **review-service.ts**: Review API calls (create, update, delete)
- **search-service.ts**: Search API calls (filter, search, recommendations)

### **Styling**

- **styles/**: CSS files and theme-specific styles
- Use Tailwind CSS for utility classes
- Use CSS modules for component-specific styles

## Naming Conventions

### **Files and Folders**

- Use kebab-case for folder names: `user-profile/`
- Use kebab-case for file names: `booking-form.tsx`
- Use PascalCase for component files: `BookingForm.tsx`

### **Components**

- Use PascalCase for component names
- Use descriptive names that indicate purpose
- Group related components in feature folders

### **Hooks**

- Start with `use-` prefix: `use-auth.ts`
- Use kebab-case for hook names
- Keep hooks focused on single responsibility

### **Stores**

- Use descriptive names: `user-store.ts`
- Include `-store` suffix for clarity
- Group related state in the same store

## Services Architecture

### **Service Layer Pattern**

- **Services** handle all API communication
- **Stores** use services to fetch and update data
- **Components** use stores, not services directly
- **Mock Data** can be easily replaced with real API calls

### **Service Function Structure**

```typescript
// Example: auth-service.ts
export const authService = {
  login: async (credentials: LoginCredentials) => Promise<AuthResponse>,
  register: async (userData: RegisterData) => Promise<AuthResponse>,
  logout: async () => Promise<void>,
  refreshToken: async () => Promise<AuthResponse>,
};
```

### **Integration with Stores**

```typescript
// Example: user-store.ts
const useUserStore = create((set, get) => ({
  user: null,
  login: async credentials => {
    const response = await authService.login(credentials);
    set({ user: response.user });
  },
}));
```

## Development Workflow

1. **Check folder structure** before creating new files
2. **Update this documentation** when structure changes
3. **Follow naming conventions** consistently
4. **Organize components** by feature and responsibility
5. **Keep related files** in the same folder
6. **Use services** for all API communication
7. **Keep services** separate from business logic

## Maintenance

- **Always update** `docs/folder-structure.md` when adding/removing folders
- **Follow the structure** outlined in this document
- **Use the Cursor rule** to maintain consistency
- **Review structure** regularly for optimization
