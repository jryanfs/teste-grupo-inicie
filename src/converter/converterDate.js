const stringToDate = (value) => {
  const [year, month, day] = value.split('-')
  return new Date(year, month - 1, day)
}

module.exports = {
  stringToDate
}
