import { FC } from 'react'
import { IAsteroid } from '@/types/types'
import styles from './styles.module.scss'

const Cart: FC<ICartProps> = ({ asteroids, setSend }) => {
  const handleSend = () => {
    if (asteroids.length > 0) {
      setSend(true)
    }
  }

  return (
    <div className={styles.cart}>
      <h1>
        Корзина <br />
        {asteroids.length} астероида
      </h1>
      <button onClick={handleSend} className={styles.cartSendBtn}>
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
