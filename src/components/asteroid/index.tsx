'use client'

import { FC, useState } from 'react'
import { IAsteroid } from '@/types/types'
import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import formatNumberWithSpaces from '@/utils/formatNumberWithSpaces'
import formatDate from '@/utils/formatDate'

const Asteroid: FC<IAsteroidProps> = ({
  asteroid,
  inLunar,
  handleAddToCart,
  isCart,
}) => {
  const [inCart, setInCart] = useState<boolean>(false)
  const { kilometers, lunar } = asteroid.close_approach_data[0].miss_distance
  const { estimated_diameter_max, estimated_diameter_min } =
    asteroid.estimated_diameter.meters

  const handeleAdd = () => {
    if (handleAddToCart) {
      handleAddToCart(asteroid)
      setInCart(true)
    }
  }

  return (
    <div className={styles.asteroid} key={asteroid.name}>
      <h1>{formatDate(asteroid.close_approach_data[0].close_approach_date)}</h1>
      <section className={styles.approach_data}>
        <div className={styles.asteroidSize}>
          <h2>
            {inLunar
              ? Number(lunar).toFixed(0) + ' lunar'
              : formatNumberWithSpaces(Number(kilometers).toFixed(0)) + ' км'}
          </h2>
          <Image src="/assets/Arrow1.svg" width={100} height={15} alt="arrow" />
        </div>
        <Image
          src="/assets/rock.png"
          width={estimated_diameter_max > 50 ? 50 : estimated_diameter_max}
          height={estimated_diameter_max > 50 ? 50 : estimated_diameter_max}
          alt="rock"
        />
        <div className={styles.asteroidLink}>
          <Link href={`asteroid/${asteroid.id}`}>
            {asteroid.name.replace(/[()]/g, '')}
          </Link>
          <h2>{'Ø ' + estimated_diameter_max.toFixed(0) + ' m'}</h2>
        </div>
      </section>
      <section className={styles.orderSection}>
        {!isCart && (
          <button onClick={handeleAdd} className={inCart ? styles.inCart : ''}>
            {inCart ? 'В КОРЗИНЕ' : 'ЗАКАЗАТЬ'}
          </button>
        )}
        {asteroid.is_potentially_hazardous_asteroid && (
          <h2 className={styles.hazardous_asteroid}>
            <span>⚠ </span>Опасен
          </h2>
        )}
      </section>
    </div>
  )
}

export default Asteroid

interface IAsteroidProps {
  asteroid: IAsteroid
  inLunar: boolean
  isCart: boolean
  handleAddToCart?: (asteroid: IAsteroid) => void
}
