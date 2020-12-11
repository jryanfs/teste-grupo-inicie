const orderCitiesWithPercentageOfCases = require('../utils/orderCitiesWithPercentageOfCases')
const axios = require('axios')
const env = require('../config/env')
const { getInfoOfApiBrazil } = require('./getInfoOfApiBrazil')
const { sortAndFilterTheBiggestCases } = require('./sortAndFilterTheBiggestCases')
const { stringToDate } = require('../converter/converterDate')
const fns = require('date-fns')

const getLastCasesOfCovid = async (payload) => {
  try {
    const { state, dateEnd, dateStart } = payload

    const newDateStart = stringToDate(dateStart)
    const newDateEnd = stringToDate(dateEnd)
    const intervalOfDays = fns.differenceInDays(newDateEnd, newDateStart) + 1

    const cities = await getInfoOfApiBrazil(state, newDateStart, intervalOfDays)

    const percentageOfCities = sortAndFilterTheBiggestCases(cities, intervalOfDays)

    percentageOfCities.sort(orderCitiesWithPercentageOfCases)

    const citiesWithTheHighestPercentage = percentageOfCities.slice(0, 10)

    const url = env.api.testApi.url

    citiesWithTheHighestPercentage.forEach(async (iten, index) => {
      await axios.post(url, {
        body: {
          id: index,
          NomeCidade: iten.city,
          PercentualDeCasos: (iten.average / 1000).toFixed(2)
        }
      }, {
        headers: {
          MeuNome: 'Jeferson'
        }
      })
    })
    return citiesWithTheHighestPercentage
  } catch (err) {
    console.error(err)
    throw err
  }
}

module.exports = { getLastCasesOfCovid }
