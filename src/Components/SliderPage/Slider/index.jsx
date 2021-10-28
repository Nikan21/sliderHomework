import React from 'react'
import styles from './slider.module.sass'

export default function Slider(props) {
    return (
        <>
        <div className={styles.settingsPanelWrapper}>
            <button>Slide show</button>
            <div className={styles.inputWrapper}>
            <p>Choose delay slide show in second</p>
            <input type="text" />
            </div>
            <button>Full screen</button>
        </div>
        <div className={styles.sliderWrapper}>
            <button>Prev</button>
            <img className={styles.image} src={props.slides[4]} alt="" />
            <button>Next</button>
        </div>
        </>
    )
}
