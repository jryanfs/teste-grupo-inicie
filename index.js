const app = require('./src/app')
const env = require('./src/config/env')

app.listen(env.api.port || 5000)
