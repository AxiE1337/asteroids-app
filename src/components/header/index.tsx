import React from 'react'
import styles from './styles.module.scss'

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>ARMAGEDDON 2023</h1>
      <h2>
        ООО “Команда им. Б. Уиллиса”.
        <br /> Взрываем астероиды с 1998 года.
      </h2>
    </header>
  )
}

export default Header
