"use client";

import styles from "../../../styles/animations/AnimatedCircles.module.css";

const circles = Array.from({ length: 55 }, (_, i) => ({
  id: i,

  top: Math.random() * 100,

  left: Math.random() * 100,

  size: 10 + Math.random() * 18,

  delay: Math.random() * 10,

  duration: 10 + Math.random() * 12,
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
