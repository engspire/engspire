import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { ReactNode } from 'react';

type ErrorAnimationProps = {
  message?: string | ReactNode;
};

export default function ErrorAnimation({ message }: ErrorAnimationProps) {
  return (
    <div>
      <div className="min-h-[256px] -mt-16">
        <DotLottiePlayer
          src="https://lottie.host/0db3e19b-a884-42af-aa69-3a3337caee40/HPhIMPp0AR.json"
          autoplay={true}
          loop={false}
        >
        </DotLottiePlayer>
      </div>
      <p className='text-center -mt-12'>{message ?? "An error occurred!"}</p>
    </div>
  );
}
