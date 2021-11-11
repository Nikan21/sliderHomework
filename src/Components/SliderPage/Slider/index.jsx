import React, { useState } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import styles from "./slider.module.sass";

export default function Slider(props) {
  let [click, setClick] = useState(0);

  let [delay, setDelay] = useState(1);

  let [autoClick, changeAutoClick] = useState(null);

  const clickPrevSlide = () => {
    setClick((click) => {
      return (click - 1 + props.slides.length) % props.slides.length;
    });
  };

  const clickNextSlide = () => {
    setClick((click) => (click + 1) % props.slides.length);
  };

  const handleChange = (event) => {
    let {
      target: { value: delay },
    } = event;

    setDelay(Number(delay));
  };

  const startSlideShow = () => {
    if (autoClick === null) {
      changeAutoClick(setInterval(clickNextSlide, delay * 1000));
    }
  };

  const stopSlideShow = () => {
    clearInterval(autoClick);
    changeAutoClick(null);
  };

  const handle = useFullScreenHandle();

  console.log(delay);
  return (
    <>
      <div className={styles.settingsPanelWrapper}>
        <div className={styles.buttonsSlideShowWrapper}>
          <button className={styles.ButtonSlideShow} onClick={startSlideShow}>
            Slide show
          </button>
          <button className={styles.ButtonSlideShow} onClick={stopSlideShow}>
            Stop slide show
          </button>
        </div>
        <div className={styles.inputWrapper}>
          <p className={styles.mainText}>Choose delay slide show in second</p>
          <input
            className={styles.inputTime}
            type="number"
            name="delay"
            min="1"
            max="60"
            value={delay}
            onChange={handleChange}
          />
        </div>
        <button className={styles.buttonFullScreen} onClick={handle.enter}>
          Full screen
        </button>
      </div>
      <div className={styles.sliderWrapper}>
        <FullScreen className={styles.fullScrean} handle={handle}>
        <button className={styles.sideButtonLeft} onClick={clickPrevSlide}>{"<"}</button>
          <div className={styles.fullScreenWrapper}>
          <button className={styles.buttonExitFullScreen} onClick={handle.exit}>Exit Full Screen</button>
          <img className={styles.image} src={props.slides[click]} alt="" />
          </div>
        <button className={styles.sideButtonRight} onClick={clickNextSlide}>{">"}</button>
        </FullScreen>
      </div>
    </>
  );
}
