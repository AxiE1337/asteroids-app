import { qAsteroidById } from '@/consts/url'
import { IAsteroid } from '@/types/types'
import React from 'react'

const fetchAsteroid = async (id: string) => {
  try {
    const res = await fetch(qAsteroidById(id))
    const data = await res.json()
    return data as IAsteroid
  } catch (e) {
    console.error(e)
  }
}

const Page = async ({ params }: { params: { id: string } }) => {
  const data = await fetchAsteroid(params.id)

  if (!data) {
    return (
      <div>
        <h1>Asteroid not found</h1>
      </div>
    )
  }

  return (
    <div>
      asteroid
      <h1>{data.name}</h1>
      <h1>{data.is_potentially_hazardous_asteroid}</h1>
    </div>
  )
}

export default Page
