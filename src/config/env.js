require('dotenv').config()

module.exports = {
  api: {
    brasilApi: {
      url: process.env.URL_API_BRASIL,
      token: process.env.TOKEN
    },
    testApi: { url: process.env.URL_TEST_API },
    port: process.env.PORT
  }
}
