import express, { Application } from 'express'
import { mainRoute, authRoute, dateRoute, areaRoute } from './src/routes/export'
import cors from 'cors'
import mongoose from 'mongoose'
import config from './config/config'
import bodyParser from 'body-parser'

require(`dotenv`).config()

const { PORT } = process.env
const { conn_string, configurations } = config

const app: Application = express()
const port = 4000 || PORT

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(mainRoute)
app.use(authRoute)
app.use(dateRoute)
app.use(areaRoute)

//@ts-ignore
mongoose.connect(conn_string, configurations).then(() => {
  app.listen(port, ()=>{
    console.info(`Server is listening on port ${port}`)
  })
}).catch((err: any) => {
  console.error(err.message)  
})
