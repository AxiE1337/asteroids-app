import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'

const Header = () => {
  return (
    <header className={styles.header}>
      <Image
        className={styles.planetaPng}
        src="/assets/planeta.png"
        alt="planeta"
        width={377}
        height={436}
        sizes="(max-width: 768px) 1000px, 377px"
        priority
      />
      <h1>ARMAGEDDON 2023</h1>
      <h2>
        ООО “Команда им. Б. Уиллиса”.
        <br /> Взрываем астероиды с 1998 года.
      </h2>
    </header>
  )
}

export default Header
