'use client';
import { Player } from '@lottiefiles/react-lottie-player';

/**
 * 애니메이션 섹션 컴포넌트
 * 화면에서 남는 부분에 애니메이션을 표시한다.
 */
const AnimationSection = () => {
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

export default AnimationSection;
