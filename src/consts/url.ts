const API_KEY = process.env.API_KEY as string

const START_DATE = new Date().toISOString().slice(0, 10)
const END_DATE = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  .toISOString()
  .slice(0, 10)

export const baseUrl = 'https://api.nasa.gov/neo/rest/v1'
export const qAllAsteroids = `${baseUrl}/feed?start_date=${START_DATE}&end_date=${START_DATE}&api_key=${API_KEY}`
