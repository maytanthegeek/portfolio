import React, { useState } from 'react';
import './IntroTexts.css';

export default function IntroTexts() {
  const [isFadeIn, setIsFadeIn] = useState(true);
  const [currentSlide, setCurrentSlide] = useState(0.5);

  setTimeout(() => {
    const slide = currentSlide + 0.5;
    if (slide > 3) {
      setCurrentSlide(0.5);
    } else {
      setCurrentSlide(slide);
    }
    setIsFadeIn(!isFadeIn);
  }, 1500);

  return (
    <div>
      { Math.ceil(currentSlide) === 1
        ? <div className={ isFadeIn ? 'intro-text fadeIn' : 'intro-text fadeOut' }>
            I AM TANMAY
          </div>
        : null
      }
      { Math.ceil(currentSlide) === 2
        ? <div className={ isFadeIn ? 'intro-text fadeIn' : 'intro-text fadeOut' }>
        I MAKE PROGRAMS LOOK GOOD
      </div>
        : null
      }
      { Math.ceil(currentSlide) === 3
        ? <div className={ isFadeIn ? 'intro-text fadeIn' : 'intro-text fadeOut' }>
        AND A BIT MORE INTELLIGENT
      </div>
        : null
      }
    </div>
  );
}
