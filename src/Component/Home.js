import React from 'react';
import useWebAnimations, {  pulse } from "@wellyshen/use-web-animations";


function Home() {
  // const { ref } = useWebAnimations({ ...bounce });
  const { keyframes, timing } = pulse;
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
      <img src={" https://secure-images.nike.com/is/image/DotCom/CT8532_104_A_PREM?$SNKRS_COVER_WD$&align=0,1"} />
    </div>           
  );
}

export default Home;

