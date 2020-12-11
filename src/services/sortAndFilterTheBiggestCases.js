const sortAndFilterTheBiggestCases = (cities, intervalOfDays) => {
  const division = intervalOfDays

  const accResults = cities.reduce((acc, item) => {
    if (acc[item.city_ibge_code]) {
      acc[item.city_ibge_code].confirmed_per_100k_inhabitants += item.confirmed_per_100k_inhabitants
    } else {
      acc[item.city_ibge_code] = item
    }
    return acc
  }, {})

  const results = Object.entries(accResults).map(item => {
    return {
      ...item[1],
      average: (item[1].confirmed_per_100k_inhabitants / division)
    }
  })

  return results
}

module.exports = { sortAndFilterTheBiggestCases }
