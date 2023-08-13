import styles from './page.module.scss'
import Asteroids from '@/components/asteroids'
import Image from 'next/image'
import Header from '@/components/header'
import { IResponse } from '@/types/types'
import { qAllAsteroids } from '@/consts/url'

export const getAsteroids = async () => {
  try {
    const res = await fetch(qAllAsteroids)
    const data = await res.json()
    return data as IResponse
  } catch (e) {
    console.error(e)
  }
}

export default async function Home() {
  const data = await getAsteroids()

  if (!data?.near_earth_objects) {
    return <div>Whoops something went wrong</div>
  }

  return (
    <main className={styles.main}>
      <Image
        className={styles.planetaPng}
        src="/assets/planeta.png"
        alt="planeta"
        width={436}
        height={436}
        priority
      />
      <Header />
      <Asteroids data={data} next_link={data.links.next} />
    </main>
  )
}