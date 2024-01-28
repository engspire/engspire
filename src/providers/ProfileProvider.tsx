"use client";
import { apiClient } from '@/apiClient';
import { useAuth } from '@clerk/nextjs';
import { useQuery } from '@tanstack/react-query';
import { ReactNode, createContext, useContext } from 'react';

type IProfileContext = {
  userId: string | null,
  profile: any,
  hasEmailAddress: boolean,
  isLoading: boolean,
  error: any,
};

const ProfileContext = createContext<Partial<IProfileContext>>({});

export default function ProfileProvider({ children }: { children: ReactNode; }) {
  const { userId, isLoaded, getToken } = useAuth();

  const { data: profile, isLoading, error } = useQuery({
    queryKey: ["userProfile"], queryFn: async () => {
      try {
        const { data } = await apiClient(await getToken()).patch('/v1/me');

        return data;
      } catch (error) {
        throw error;
      }
    }
  });

  const hasEmailAddress = profile?.emailAddress ? true : false;

  return (
    <ProfileContext.Provider value={{ userId, profile, hasEmailAddress, isLoading: !isLoaded && isLoading, error }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  return useContext(ProfileContext);
}