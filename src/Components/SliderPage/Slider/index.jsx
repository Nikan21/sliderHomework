import React, {useState} from 'react'
import styles from './slider.module.sass'

export default function Slider(props) {
    const [click, setClick] = useState(0)

    const changeClick = ()=>{
        setClick(click + 1)
    }

    console.log(props.slides)
    console.log(click)
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
            <img className={styles.image} src={props.slides[click]} alt="" />
            <button onClick = {changeClick}>Next</button>
        </div>
        </>
    )
}
