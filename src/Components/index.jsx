import React from 'react'
import Logo from './SliderPage/Logo/index'
import Slider from './SliderPage/Slider/index'
import {slides} from './List slides/index'
import styles from './sliderPage.module.sass'

export default function SliderPage() {
    return (
        <div>
        <header className={styles.header}>
            <Logo />
        </header>
        <main className={styles.main}>
        <Slider slides={slides}/>
        </main>
        </div>
    )
}
