import React, {useState} from 'react'
import styles from './slider.module.sass'

export default function Slider(props) {
    let [click, setClick] = useState(0)

    const clickPrevSlide = ()=>{
        setClick(click = (click - 1 + props.slides.length) % props.slides.length)
    }

    const clickNextSlide = ()=>{
        setClick(click = (click + 1) % props.slides.length)
    }

    const slideShow = ()=>{
        setInterval(clickNextSlide, 3000)
    }

    console.log(props.slides)
    console.log(click)
    return (
        <>
        <div className={styles.settingsPanelWrapper}>
            <button onClick={slideShow}>Slide show</button>
            <div className={styles.inputWrapper}>
            <p>Choose delay slide show in second</p>
            <input type="text" />
            </div>
            <button>Full screen</button>
        </div>
        <div className={styles.sliderWrapper}>
            <button onClick = {clickPrevSlide}>Prev</button>
            <img className={styles.image} src={props.slides[click]} alt="" />
            <button onClick = {clickNextSlide}>Next</button>
        </div>
        </>
    )
}
