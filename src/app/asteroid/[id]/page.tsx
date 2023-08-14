import { qAsteroidById } from '@/consts/url'
import { IAsteroidSelf } from '@/types/types'
import styles from './styles.module.scss'
import formatNumberWithSpaces from '@/utils/formatNumberWithSpaces'
import formatDate from '@/utils/formatDate'
import ErrorPage from '@/components/error'
import Link from 'next/link'

const fetchAsteroid = async (id: string) => {
  try {
    const res = await fetch(qAsteroidById(id))
    const data = await res.json()
    return data as IAsteroidSelf
  } catch (e) {
    console.error(e)
  }
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchAsteroid(params.id)

  if (!data) {
    return <ErrorPage message="Asteroid not found" />
  }

  return (
    <main className={styles.asteroidMain}>
      <section className={styles.asteroidSection}>
        <Link className={styles.linkGoBack} href="/">
          Назад
        </Link>
        <h1 className={styles.asteroidName}>{data.name}</h1>
        <div className={styles.asteroidApproaches}>
          <h1>Сближения</h1>
          {data.close_approach_data.map((approach, i) => (
            <section key={i}>
              <h3>
                Дата максимального сближения: <br />
                {formatDate(approach.close_approach_date)}
              </h3>
              <h3>
                Скорость{': '}
                {Number(
                  approach.relative_velocity.kilometers_per_second
                ).toFixed(0)}{' '}
                км/с
              </h3>
              <h3>
                {`Дистанция до земли: ${formatNumberWithSpaces(
                  Number(approach.miss_distance.kilometers).toFixed(0)
                )} km`}
              </h3>
              <h3>В орбите {approach.orbiting_body}</h3>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}

export default Page
