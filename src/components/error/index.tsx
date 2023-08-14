import { FC } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'

const ErrorPage: FC<IErrorPageProps> = ({ message, showLink = true }) => {
  return (
    <main className={styles.errorPage}>
      <h1>Some error occured</h1>
      <h2>{message}</h2>
      {showLink && (
        <Link className={styles.link} href="/">
          Go to home page
        </Link>
      )}
    </main>
  )
}

export default ErrorPage

interface IErrorPageProps {
  message: string
  showLink?: boolean
}
