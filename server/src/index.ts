import express, { json } from 'express'
import * as dotenv from 'dotenv'

import connectDB from './db/mongoose'
import contactRouter from './routers/contactRouter'

dotenv.config()
connectDB()

const app = express()
const PORT = process.env.PORT || 3001

app.use(json())

app.use('/api/contacts', contactRouter)

app.listen(PORT, () => {
  console.log(`🚀 Server is up on port ${PORT}.`)
})
