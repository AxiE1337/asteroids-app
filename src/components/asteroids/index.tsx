'use client'

import { useEffect } from 'react'
import { useIntersection } from 'useful-custom-react-hooks'
import { useState, FC } from 'react'
import { IAsteroid, IResponse } from '@/types/types'
import styles from './styles.module.scss'
import Asteroid from '../asteroid'

const loadMoreAsteroids = async (link: string) => {
  const res = await fetch(link)
  const data = (await res.json()) as IResponse
  return data
}

const Asteroids: FC<IAsteroidProps> = ({ data, next_link }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [link, setLink] = useState<string>(next_link)
  const [dataAsteroids, setDataAsteroids] = useState<{
    [date: string]: IAsteroid[]
  }>(data.near_earth_objects)
  const [inLunar, setInLunar] = useState<boolean>(false)
  const { ref, isIntersecting } = useIntersection()

  useEffect(() => {
    if (isIntersecting && !isLoading) {
      const loadMore = async () => {
        setIsLoading(true)
        const data = (await loadMoreAsteroids(link)) as IResponse
        setLink(data.links.next)
        setDataAsteroids((prev) => ({ ...prev, ...data.near_earth_objects }))
        setIsLoading(false)
      }
      loadMore()
    }
  }, [isIntersecting])

  return (
    <div className={styles.asteroidsGroup}>
      <section>
        <h1>
          Ближайшие подлёты
          <br /> астероидов
        </h1>
        <div className={styles.sectionKmLunar}>
          <h1
            onClick={() => setInLunar(false)}
            className={inLunar ? styles.selected : ''}
          >
            в километрах
          </h1>
          |
          <h1
            onClick={() => setInLunar(true)}
            className={!inLunar ? styles.selected : ''}
          >
            в лунных орбитах
          </h1>
        </div>
      </section>
      {Object.keys(dataAsteroids).map((date) => (
        <div className={styles.asteroids} key={date}>
          {dataAsteroids[date].map((asteroid) => (
            <Asteroid asteroid={asteroid} key={asteroid.id} inLunar={inLunar} />
          ))}
        </div>
      ))}
      {!isLoading ? <div ref={ref}>more</div> : <div>loading...</div>}
    </div>
  )
}

export default Asteroids

interface IAsteroidProps {
  data: IResponse
  next_link: string
}
