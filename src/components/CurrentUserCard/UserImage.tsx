"use client";
import { useUser } from '@clerk/nextjs';
import Image from 'next/image';

interface IUserImageProps {
  imageUrl: string;
}

export default function UserImage({ imageUrl }: IUserImageProps) {
  const { isLoaded, user } = useUser();

  return (
    <div className="w-24 mask mask-squircle" >
      <Image
        alt="User profile icon"
        src={imageUrl}
        className="w-24 h-24"
        width="240"
        height="240"
      />
    </div>
  );
}
