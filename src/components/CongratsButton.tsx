import { h, RefObject } from 'preact';
import { useState, useRef } from 'preact/hooks';
import confetti from 'canvas-confetti';

const CongratsButton = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const button: RefObject<null | HTMLButtonElement> = useRef(null);

  const doCongrats = async () => {
    if (!playing) {
      setPlaying(true);
      // do some confetti math
      const buttonBox = button.current.getBoundingClientRect();
      const confettiX = (buttonBox.left + buttonBox.width / 2) / window.innerWidth;
      const confettiY = (buttonBox.top + buttonBox.height / 2) / window.innerHeight;
      // play the kazoo
      await new Audio('/congrats.mp3').play();
      // throw some confetti
      confetti({
        particleCount: 140,
        startVelocity: 30,
        spread: 240,
        origin: {
          x: confettiX,
          y: confettiY,
        },
      });
      setTimeout(() => {
        setPlaying(false);
      }, 3000);
    }
  };

  return (
    <button class="btn--small" ref={button} onClick={doCongrats}>
      {children}
    </button>
  );
};

export default CongratsButton;
