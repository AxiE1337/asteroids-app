export const handleAsteroidCount = (value: string): string => {
  if (value.slice(value.length - 1) === '1' && value !== '11') {
    return `${value} Астероид`
  }
  if (
    value.slice(value.length - 1) > '1' &&
    value.slice(value.length - 1) < '5' &&
    value !== '12' &&
    value !== '13' &&
    value !== '14'
  ) {
    return `${value} Астероида`
  }
  return `${value} Астероидов`
}
