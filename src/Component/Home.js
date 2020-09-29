import React from 'react';
import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";


function Home() {
  // const { ref } = useWebAnimations({ ...bounce });
  const { keyframes, timing } = bounce;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      duration: timing.duration * 0.75, // Speed up the animation
    },
  });
  return (
    <div className="container">
      <div className="target" ref={ref} />
    </div>           
  );
}

export default Home;

