const axios = require('axios')
const env = require('../config/env')
const fns = require('date-fns')

const getInfoOfApiBrazil = async (state, dateStart, intervalOfDays) => {
  const requests = []

  for (let i = 0; i < intervalOfDays; i++) {
    const url = `${env.api.brasilApi.url}?state=${state}&date=${fns.format(fns.addDays(dateStart, i), 'yyyy-MM-dd')}`
    requests.push(axios.get(url, { headers: { Authorization: `token ${env.api.brasilApi.token}` } }))
  }

  const result = await Promise.all(requests)
  const cities = result.reduce((acc, item) => {
    return [...acc, ...item.data.results]
  }, []).filter(item => item.city)

  return cities
}

module.exports = { getInfoOfApiBrazil }
