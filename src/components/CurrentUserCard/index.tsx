"use client";
import { useProfile } from '@/providers/ProfileProvider';
import { useUser } from '@clerk/nextjs';
import CompleteProfileAlert from '../CompleteProfileAlert';
import EditProfileButton from '../EditProfileButton';
import UserImage from './UserImage';

export default function CurrentUserCard() {
  const { isLoaded, user } = useUser();
  const { profile, hasEmailAddress, isLoading } = useProfile();

  if (!isLoaded) return (<div className="min-h-[114px] grid place-items-center text-center"><span className="loading loading-bars loading-lg" ></span></div>);
  else return (
    <>
      <div className="flex flex-row rounded-2xl bg-base-100 shadow-xl p-2 min-w-[300px]">
        <div className="min-w-24">
          <UserImage imageUrl={user?.imageUrl ?? "/user-image.webp"} />
        </div>
        <div className="p-2">
          <h2 className="font-bold text-base text-secondary line-clamp-1">{user?.fullName}</h2>
          <div className="flex flex-col gap-1">
            <p className="text-xs">{user?.username ?? user?.emailAddresses[0].emailAddress}</p>
            <p className="text-xs font-semibold text-accent">100 followers, 100 following</p>
            <div className="flex flex-row gap-3">
              <p className="text-xs font-semibold text-success">⭐ 100</p>
              <p className="text-xs font-semibold text-success">🍏 100</p>
              <p className="text-xs font-semibold text-success">❤️ 100</p>
            </div>
          </div>
        </div>
      </div>
      {!isLoading && (profile && hasEmailAddress ? <EditProfileButton /> : <CompleteProfileAlert />)}
    </>
  );
}
