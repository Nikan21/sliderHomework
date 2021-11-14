import React from "react";
import styles from "./logo.module.sass";

export default function Logo() {
  return (
    <img
      className={styles.logo}
      src="/images/marvel-logo.png"
      alt="Logo Marvel"
    />
  );
}
