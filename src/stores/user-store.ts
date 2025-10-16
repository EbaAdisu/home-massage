import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  role: 'customer' | 'masseur' | 'admin';
  isVerified: boolean;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthActions {
  login: (phone: string, password: string) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  updateProfile: (data: Partial<User>) => Promise<void>;
  uploadAvatar: (file: File) => Promise<void>;
  clearError: () => void;
}

export interface RegisterData {
  firstName: string;
  lastName: string;
  phone: string;
  email?: string;
  password: string;
}

type UserStore = AuthState & AuthActions;

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      // Initial state
      user: null,
      isAuthenticated: false,
      isLoading: false,
      error: null,

      // Actions
      login: async (phone: string, _password: string) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1500));

          // Mock user data - determine role based on phone number for demo
          const mockUser: User = {
            id: '1',
            firstName: 'John',
            lastName: 'Doe',
            phone,
            email: 'john@example.com',
            role: phone.includes('masseur') ? 'masseur' : 'customer',
            isVerified: true,
            avatar: '/avatars/john-doe.jpg',
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: 'Login failed. Please check your credentials.',
          });
          throw error;
        }
      },

      register: async (userData: RegisterData) => {
        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 2000));

          // Mock user data - determine role based on phone number for demo
          const mockUser: User = {
            id: Math.random().toString(36).substr(2, 9),
            firstName: userData.firstName,
            lastName: userData.lastName,
            phone: userData.phone,
            email: userData.email,
            role: userData.phone.includes('masseur') ? 'masseur' : 'customer',
            isVerified: false,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
          };

          set({
            user: mockUser,
            isAuthenticated: true,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: 'Registration failed. Please try again.',
          });
          throw error;
        }
      },

      logout: () => {
        set({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        });
      },

      updateProfile: async (data: Partial<User>) => {
        const { user } = get();
        if (!user) return;

        set({ isLoading: true, error: null });

        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 1000));

          const updatedUser = {
            ...user,
            ...data,
            updatedAt: new Date().toISOString(),
          };

          set({
            user: updatedUser,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: 'Failed to update profile. Please try again.',
          });
          throw error;
        }
      },

      uploadAvatar: async (file: File) => {
        const { user } = get();
        if (!user) return;

        set({ isLoading: true, error: null });

        try {
          // Simulate file upload
          await new Promise(resolve => setTimeout(resolve, 2000));

          // Mock avatar URL
          const avatarUrl = URL.createObjectURL(file);

          const updatedUser = {
            ...user,
            avatar: avatarUrl,
            updatedAt: new Date().toISOString(),
          };

          set({
            user: updatedUser,
            isLoading: false,
            error: null,
          });
        } catch (error) {
          set({
            isLoading: false,
            error: 'Failed to upload avatar. Please try again.',
          });
          throw error;
        }
      },

      clearError: () => {
        set({ error: null });
      },
    }),
    {
      name: 'user-store',
      partialize: state => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);
