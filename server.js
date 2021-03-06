import db from './db/connection.js'
import routes from './routes/index.js'

import express from 'express'
import cors from 'cors'
import logger from 'morgan'

const PORT = process.env.PORT || 3000
const app = express()

//middleware
app.use(express.json())
app.use(cors())
app.use(logger('dev'))

app.use('/api', routes)
//

db.on('connected', () => {
  console.log('Connected to MongoDB!')
  app.listen(PORT, () =>
    console.log(`Express server application is running on port ${PORT}`)
  )
})
