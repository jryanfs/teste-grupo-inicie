const { stringToDate } = require('./converterDate')

describe('Conversão de data', () => {
  test('criar um object de data com formato valido', () => {
    const value = '2020-12-10'
    const result = stringToDate(value)
    expect(result).toStrictEqual(new Date(2020, 11, 10))
  })
})
