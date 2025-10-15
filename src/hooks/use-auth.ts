import { User, useUserStore } from '@/stores/user-store';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

export function useAuth() {
  const router = useRouter();
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    register,
    logout,
    updateProfile,
    uploadAvatar,
    clearError,
  } = useUserStore();

  const handleLogin = async (phone: string, _password: string) => {
    try {
      await login(phone, _password);
      toast.success('Welcome back!', {
        description: 'You have successfully signed in to your account.',
      });
      router.push('/dashboard');
    } catch {
      toast.error('Login failed', {
        description: 'Please check your credentials and try again.',
      });
    }
  };

  const handleRegister = async (userData: {
    firstName: string;
    lastName: string;
    phone: string;
    email?: string;
    password: string;
  }) => {
    try {
      await register(userData);
      toast.success('Account created successfully!', {
        description: 'Welcome to our massage platform. You can now sign in.',
      });
      router.push('/dashboard');
    } catch {
      toast.error('Registration failed', {
        description:
          'Please try again or contact support if the problem persists.',
      });
    }
  };

  const handleLogout = () => {
    logout();
    toast.success('Signed out successfully', {
      description: 'You have been signed out of your account.',
    });
    router.push('/');
  };

  const handleUpdateProfile = async (data: Partial<User>) => {
    try {
      await updateProfile(data);
      toast.success('Profile updated successfully!', {
        description: 'Your profile has been updated.',
      });
    } catch {
      toast.error('Failed to update profile', {
        description:
          'Please try again or contact support if the problem persists.',
      });
    }
  };

  const handleUploadAvatar = async (file: File) => {
    try {
      await uploadAvatar(file);
      toast.success('Avatar updated successfully!', {
        description: 'Your profile picture has been updated.',
      });
    } catch {
      toast.error('Failed to upload avatar', {
        description:
          'Please try again or contact support if the problem persists.',
      });
    }
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login: handleLogin,
    register: handleRegister,
    logout: handleLogout,
    updateProfile: handleUpdateProfile,
    uploadAvatar: handleUploadAvatar,
    clearError,
  };
}
