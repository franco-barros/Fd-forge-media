"use client";

import styles from "../../../styles/animations/AnimatedCircles.module.css";

const createRandomGenerator = (seed: number) => {
  let value = seed;

  return () => {
    value = (value * 16807) % 2147483647;
    return (value - 1) / 2147483646;
  };
};

const random = createRandomGenerator(12345);

const circles = Array.from({ length: 55 }, (_, i) => ({
  id: i,
  top: random() * 100,
  left: random() * 100,
  size: 10 + random() * 18,
  delay: random() * 10,
  duration: 10 + random() * 12,
}));

const AnimatedCircles = () => {
  return (
    <div className={styles.container}>
      {circles.map((circle) => (
        <div
          key={circle.id}
          className={styles.circle}
          style={{
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            animationDelay: `${circle.delay}s`,
            animationDuration: `${circle.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedCircles;
