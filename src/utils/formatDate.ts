const formatDate = (date: string) => {
  const months = [
    'Янв',
    'Фев',
    'Мар',
    'Апр',
    'Май',
    'Июн',
    'Июл',
    'Авг',
    'Сен',
    'Окт',
    'Ноя',
    'Дек',
  ]

  const dateParts = date.split('-')
  const day = parseInt(dateParts[2])
  const month = months[parseInt(dateParts[1]) - 1]
  const year = parseInt(dateParts[0])

  return `${day} ${month} ${year}`
}

export default formatDate
