import express, { Request, Response } from 'express'

const mainRoute = express.Router()

mainRoute.get(`/`, (req: Request, res: Response) =>{
  res.send(`Welcome to Sample API for PhilSci`)
})

export default mainRoute