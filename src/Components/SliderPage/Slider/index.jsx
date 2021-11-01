import React, {useState} from 'react'
import styles from './slider.module.sass'

export default function Slider(props) {
    let [click, setClick] = useState(0)
    
    let [delay, setDelay] = useState(0)

    let [autoClick, changeAutoClick] = useState(null);

    const clickPrevSlide = ()=>{
        setClick(click = (click - 1 + props.slides.length) % props.slides.length)
    }

    const clickNextSlide = ()=>{
        setClick(click = (click + 1) % props.slides.length)
    }

    const handleChange = (event)=>{
        let{
            target: {value: delay},
        } = event;

        setDelay(Number(delay*1000))
    }
    
    const startSlideShow = ()=>{
        if (autoClick === null){
            autoClick = setInterval(clickNextSlide, delay)
        }
    }

    /*Вопрос*/
    
    const stopSlideShow = ()=>{
        clearInterval(autoClick);
        changeAutoClick(null);
    }
    
    console.log(stopSlideShow())
    console.log(delay)
    return (
        <>
        <div className={styles.settingsPanelWrapper}>
            <div className={styles.buttonsSlideShowWrapper}>
            <button className={styles.ButtonSlideShow} onClick={startSlideShow}>Slide show</button>   
            <button className={styles.ButtonSlideShow} onClick={stopSlideShow}>Stop slide show</button>
            </div>
            <div className={styles.inputWrapper}>
            <p>Choose delay slide show in second</p>
            <input type="text" name='delay' value={delay} onChange={handleChange}/>
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
