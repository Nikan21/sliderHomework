import React from 'react'
import styles from './logo.module.sass'
import logo from '../../../assets/images/marvel-logo.png'


export default function Logo() {
    return (
        <img className={styles.logo} src={logo} alt="Logo Marvel" />
    )
}
