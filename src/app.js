import express from 'express'
import bodyParser from 'body-parser'

import bookRoutes from './routes/BookRoutes'

const app = express()
const BASE_URI = '/api/v1'

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(BASE_URI, bookRoutes)

app.get('*', (req, res) => {
  res.status(200).send({messsage: 'Welcome to this API'})
})

export default app
