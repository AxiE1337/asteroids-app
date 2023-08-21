import { FC } from 'react'
import { IAsteroid } from '@/types/types'
import { handleAsteroidCount } from '@/utils/asteroidCount'
import styles from './styles.module.scss'

const Cart: FC<ICartProps> = ({ asteroids, setSend }) => {
  const handleSend = () => {
    if (asteroids.length > 0) {
      setSend(true)
    }
  }

  return (
    <div className={styles.cart} data-cy="cart">
      <h1 data-cy="cartText">
        Корзина <br />
        {handleAsteroidCount(asteroids.length.toString())}
      </h1>
      <button
        data-cy="cartBtn"
        onClick={handleSend}
        className={styles.cartSendBtn}
      >
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
