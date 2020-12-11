const { sortAndFilterTheBiggestCases } = require('./sortAndFilterTheBiggestCases')

const mock = [
  {
    city: 'Abreu e Lima',
    city_ibge_code: '2600054',
    confirmed: 1003,
    confirmed_per_100k_inhabitants: 999.54159,
    date: '2020-12-04',
    death_rate: 0.1266,
    deaths: 127,
    estimated_population: 100346,
    estimated_population_2019: 99990,
    is_last: false,
    order_for_place: 235,
    place_type: 'city',
    state: 'PE'
  },
  {
    city: 'Abreu e Lima',
    city_ibge_code: '2600054',
    confirmed: 1016,
    confirmed_per_100k_inhabitants: 1012.49676,
    date: '2020-12-05',
    death_rate: 0.126,
    deaths: 128,
    estimated_population: 100346,
    estimated_population_2019: 99990,
    is_last: false,
    order_for_place: 236,
    place_type: 'city',
    state: 'PE'
  },
  {
    city: 'Abreu e Lima',
    city_ibge_code: '2600054',
    confirmed: 1016,
    confirmed_per_100k_inhabitants: 1012.49676,
    date: '2020-12-06',
    death_rate: 0.126,
    deaths: 128,
    estimated_population: 100346,
    estimated_population_2019: 99990,
    is_last: false,
    order_for_place: 237,
    place_type: 'city',
    state: 'PE'
  }
]

describe('Conversão de data', () => {
  test('validar regra de soma e media', () => {
    const result = sortAndFilterTheBiggestCases(mock, 3)
    const compare = [{
      average: 1008.17837,
      city: 'Abreu e Lima',
      city_ibge_code: '2600054',
      confirmed: 1003,
      confirmed_per_100k_inhabitants: 3024.53511,
      date: '2020-12-04',
      death_rate: 0.1266,
      deaths: 127,
      estimated_population: 100346,
      estimated_population_2019: 99990,
      is_last: false,
      order_for_place: 235,
      place_type: 'city',
      state: 'PE'
    }]
    expect(result).toStrictEqual(compare)
  })
})
