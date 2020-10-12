import React from 'react';
import './Style.css';
import useWebAnimations, { bounce, heartBeat } from "@wellyshen/use-web-animations";


function Home() {
  // const { ref } = useWebAnimations({ ...bounce });
  const { keyframes, timing } = heartBeat;
  const { ref } = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      // duration: timing.duration * 0.75, // Speed up the animation
      iterations:Infinity,
    },
  });
  return (
    <div className="container">
      <div className="target" ref={ref}>
        <img src={"https://image.freepik.com/free-vector/pair-leather-sports-shoes-wood-background_1284-17526.jpg"} alt="shoe" className="shoe-img" />
      </div>
    </div>
  );
}

export default Home;

