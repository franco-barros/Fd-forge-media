"use client";

import styles from "../../../styles/animations/AnimatedBackground.module.css";

const squares = Array.from(
  { length: 80 },

  (_, i) => ({
    id: i,

    top: Math.random() * 100,

    left: Math.random() * 100,

    size: 4 + Math.random() * 10,

    delay: Math.random() * 8,

    duration: 6 + Math.random() * 10,
  }),
);

const AnimatedBackground = () => {
  return (
    <div className={styles.container}>
      {squares.map((square) => (
        <div
          key={square.id}
          className={styles.square}
          style={{
            top: `${square.top}%`,

            left: `${square.left}%`,

            width: `${square.size}px`,

            height: `${square.size}px`,

            animationDelay: `${square.delay}s`,

            animationDuration: `${square.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
