"use client";

import React, { useState } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

import { FaCheck } from "react-icons/fa";
import styles from "../../../styles/practicearea/PracticeAreasMobile.module.css";

interface PracticeArea {
  id: string;
  title: string;
  items: string[];
  icon?: React.ReactNode;
}

interface Props {
  practiceAreas: PracticeArea[];
}

const PracticeAreasMobile: React.FC<Props> = ({ practiceAreas }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 20,
    },
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
  });

  return (
    <div className={styles.wrapper}>
      <div ref={sliderRef} className={`keen-slider ${styles.sliderMobile}`}>
        {practiceAreas.map((area) => (
          <div key={area.id} className={`keen-slider__slide ${styles.slide}`}>
            <article id={`area-${area.id}`} className={styles.areaCard}>
              {area.icon && (
                <div className={styles.iconWrapper}>{area.icon}</div>
              )}

              <h4>{area.title}</h4>

              <ul className={styles.itemList}>
                {area.items.map((item, index) => (
                  <li key={index}>
                    <span className={styles.checkCircle}>
                      <FaCheck size={10} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className={styles.dots}>
        {practiceAreas.map((_, idx) => (
          <button
            key={idx}
            onClick={() => instanceRef.current?.moveToIdx(idx)}
            className={`${styles.dot} ${
              currentSlide === idx ? styles.activeDot : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PracticeAreasMobile;
