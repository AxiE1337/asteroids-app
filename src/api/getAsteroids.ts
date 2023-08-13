import { qAllAsteroids } from '@/consts/url'
import { IResponse } from '@/types/types'

export const getAsteroids = async () => {
  const res = await fetch(qAllAsteroids)
  const data = await res.json()
  return data as IResponse
}
