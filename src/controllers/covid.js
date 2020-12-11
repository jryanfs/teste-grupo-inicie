const { getLastCasesOfCovid } = require('../services/covid')

const resultOfTheBiggestCases = async (req, res) => {
  try {
    const result = await getLastCasesOfCovid(req.query)
    return res.status(200).json(result)
  } catch (err) {
    return res.status(500).json({ error: err.message })
  }
}

module.exports = { resultOfTheBiggestCases }
