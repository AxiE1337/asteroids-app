import styles from './page.module.scss'
import Asteroids from '@/components/asteroids'
import { IResponse } from '@/types/types'
import { qAllAsteroids } from '@/consts/url'
import ErrorPage from '@/components/error'

const getAsteroids = async (): Promise<IResponse | undefined> => {
  try {
    const res = await fetch(qAllAsteroids)
    const data = await res.json()
    return data
  } catch (e) {
    console.error(e)
  }
}

export default async function Home() {
  const data = await getAsteroids()

  if (!data?.near_earth_objects) {
    return <ErrorPage message="Whoops something went wrong" showLink={false} />
  }

  return (
    <main className={styles.main}>
      <Asteroids data={data} next_link={data.links.next} />
    </main>
  )
}
