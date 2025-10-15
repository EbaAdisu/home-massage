# Home Massage Platform - Development Session Prompt

## 🎯 Project Overview

This is a **Home Massage Platform** - a Next.js 15+ application for connecting customers with professional massage therapists. The platform allows customers to book in-home massage services and masseurs to manage their services.

## 📋 Session Instructions

### 1. **ALWAYS Start Here**

- Read the project documentation in `docs/` folder
- Check the current action plan in `docs/action-plan.md`
- Review the folder structure in `docs/folder-structure.md`
- Understand the project requirements and technical specs

### 2. **Development Rules - CRITICAL**

#### **UI Components - ALWAYS Use Shadcn MCP**

- **NEVER** assume component availability
- **ALWAYS** use `mcp_shadcn_search_items_in_registries` before suggesting components
- **ALWAYS** use `mcp_shadcn_view_items_in_registries` to get component details
- **ALWAYS** use `mcp_shadcn_get_item_examples_from_registries` for usage examples
- **ALWAYS** use `mcp_shadcn_get_add_command_for_items` for installation commands

#### **Animations - ALWAYS Use Framer Motion**

- **NEVER** use CSS animations or Tailwind animation classes
- **ALWAYS** use Framer Motion for ALL animations
- Use existing animation components: `FadeIn`, `SlideUp`, `PageTransition`, `StaggerChildren`, `HoverLift`
- Follow the Framer Motion rule in `.cursor/rules/framer-motion-animations.mdc`

#### **Data Strategy - MOCK DATA ONLY**

- **NO BACKEND API CALLS** - This is UI-only development
- **ALWAYS** use mock data for all functionality
- **ALWAYS** create realistic mock data in `src/data/` folder
- **NEVER** implement real API integrations
- Focus on beautiful UI/UX with mock data until frontend is complete

#### **Folder Structure - ALWAYS Follow**

- **ALWAYS** check `docs/folder-structure.md` before creating files
- **ALWAYS** update folder structure documentation when making changes
- Follow the planned structure and naming conventions

### 3. **Current Project Status**

#### **✅ Phase 1 COMPLETED**

- Next.js 15.5.5 with TypeScript
- Prettier code formatting
- ESLint configuration
- 25+ Shadcn/ui components installed
- Advanced theming system (4 themes: Wellness, Luxury, Modern, Spa)
- Framer Motion animation system
- Zustand state management
- Beautiful homepage with animations
- GitHub repository connected

#### **✅ Phase 2 COMPLETED**

- **Authentication System**: Beautiful login/register forms with phone validation, password reset, form validation with React Hook Form + Zod
- **User Profile Management**: Complete profile editing with avatar upload, theme integration
- **Masseur Registration Wizard**: Multi-step registration with service selection, availability setup, pricing configuration
- **Dashboard Systems**: Customer and masseur dashboards with role-based navigation
- **Top Loading Bar**: Real loading states with theme integration and Framer Motion animations

#### **🚀 Phase 3 READY TO START**

- **Masseur Features**: Portfolio management, service management, availability management, earnings tracking

### 4. **Development Workflow**

#### **Before Starting Any Task:**

1. Read the action plan to understand current phase
2. Check what's completed and what's next
3. Use Shadcn MCP tools for UI components
4. Follow Framer Motion for animations
5. Update folder structure documentation

#### **During Development:**

- Use existing animation components
- Follow theme system integration
- Maintain responsive design
- Add proper TypeScript types
- Use Zustand for state management

#### **After Completing Tasks:**

- **ALWAYS** update the action plan checkboxes
- **ALWAYS** update folder structure documentation
- **NO COMMITS** - User will review and commit manually
- Test functionality and animations

### 5. **Key Files to Check**

#### **Documentation:**

- `docs/action-plan.md` - Current development roadmap
- `docs/folder-structure.md` - Project organization
- `docs/project-requirements.md` - Business requirements
- `docs/technical-requirements.md` - Technical specifications

#### **Configuration:**

- `package.json` - Dependencies and scripts
- `components.json` - Shadcn/ui configuration
- `.cursor/rules/` - Development rules

#### **Core Components:**

- `src/lib/theme.ts` - Theme system
- `src/stores/theme-store.ts` - Theme state management
- `src/components/animations/` - Animation components
- `src/components/theme-selector.tsx` - Theme switching

### 6. **Technology Stack**

- **Framework**: Next.js 15.5.5 with TypeScript
- **UI**: Shadcn/ui components
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **State**: Zustand
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Theming**: Advanced multi-theme system

### 7. **Current Phase Goals**

#### **Phase 2: Authentication & User Management**

- Create login/register forms with validation
- Implement user profile management
- Build masseur registration wizard
- Create dashboard systems
- Add avatar upload functionality

### 8. **Quality Standards**

- **Code Quality**: Use Prettier formatting, ESLint rules
- **Type Safety**: Full TypeScript implementation
- **Accessibility**: Follow WCAG guidelines
- **Performance**: Optimize animations and loading
- **Responsive**: Mobile-first design approach
- **Theming**: Support all 4 theme presets

### 9. **Git Workflow**

- Always commit changes with descriptive messages
- Push to GitHub repository: `https://github.com/EbaAdisu/home-massage`
- Keep main branch clean and functional
- Document major changes in commit messages

### 10. **Session Checklist**

- [ ] Read project documentation
- [ ] Check current action plan status
- [ ] Use Shadcn MCP for UI components
- [ ] Use Framer Motion for animations
- [ ] Follow folder structure rules
- [ ] Use mock data only (no backend API calls)
- [ ] Update action plan when tasks complete
- [ ] Update folder structure documentation
- [ ] Test functionality with exact order: `npm run lint` → `npm run format` → `npm run build`
- [ ] **NO COMMITS** - User will review and commit manually

## 🎯 **Ready to Continue Development!**

Start by reading the action plan and understanding what needs to be done next. Always follow the development rules and maintain the high quality standards established in Phase 1.

**Remember**: This is a professional massage platform - keep the design elegant, animations smooth, and user experience premium! 🧘‍♀️✨
