'use client';
import { Player } from '@lottiefiles/react-lottie-player';

const BusAnimation = () => {
  return (
    <Player
      autoplay
      loop
      src="/lottie/bus.json"
      style={{
        width: '500px',
        height: '500px',
      }}
    />
  );
};

export default BusAnimation;
