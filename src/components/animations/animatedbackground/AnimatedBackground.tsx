"use client";

import { useEffect, useState } from "react";
import styles from "../../../styles/animations/AnimatedBackground.module.css";

interface Square {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
}

const generateSquares = (): Square[] =>
  Array.from({ length: 80 }, (_, i) => ({
    id: i,
    top: Math.random() * 100,
    left: Math.random() * 100,
    size: 4 + Math.random() * 10,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 10,
  }));

export default function AnimatedBackground() {
  const [squares, setSquares] = useState<Square[] | null>(null);

  useEffect(() => {
    setSquares(generateSquares());
  }, []);

  if (!squares) return null;

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
}
