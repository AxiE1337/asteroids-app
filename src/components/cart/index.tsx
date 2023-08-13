import { FC } from 'react'
import { IAsteroid } from '@/types/types'
import styles from './styles.module.scss'

const Cart: FC<ICartProps> = ({ asteroids, setSend }) => {
  return (
    <div className={styles.cart}>
      <h1>
        Корзина <br />
        {asteroids.length} астероида
      </h1>
      <button onClick={() => setSend(true)} className={styles.cartSendBtn}>
        Отправить
      </button>
    </div>
  )
}

export default Cart

interface ICartProps {
  asteroids: IAsteroid[]
  setSend: (value: boolean) => void
}
