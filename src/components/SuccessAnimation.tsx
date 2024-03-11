import { DotLottiePlayer } from '@dotlottie/react-player';
import '@dotlottie/react-player/dist/index.css';
import { ReactNode } from 'react';

type SuccessAnimationProps = {
  message?: string | ReactNode;
};

export default function SuccessAnimation({ message }: SuccessAnimationProps) {
  return (
    <div>
      <div className="min-h-[256px] -mt-16">
        <DotLottiePlayer
          src="https://lottie.host/9921a7e2-54e1-4c0d-bfa7-dbf06cb0e010/7BIniamSyy.json"
          autoplay={true}
          loop={false}
        >
        </DotLottiePlayer>
      </div>
      <p className='text-center -mt-12'>{message ?? "Success!"}</p>
    </div>
  );
}
