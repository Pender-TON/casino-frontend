import React from 'react';
import { animated, useSpring } from 'react-spring';

interface ClickAnimationProps {
  x: number;
  y: number;
  onEnd: () => void;
  style?: React.CSSProperties;
}

const ClickAnimation: React.FC<ClickAnimationProps> = ({ x, y, onEnd }) => {
  const props = useSpring({
    from: { opacity: 1, y },
    to: { opacity: 0, y: y - 50 },
    config: { duration: 1000 },
    onRest: onEnd,
  });

  return (
    <animated.div
      style={{
        position: 'absolute',
        left: x,
        top: props.y,
        opacity: props.opacity,
      }}
    >
      +1
    </animated.div>
  );
};

export default ClickAnimation;
