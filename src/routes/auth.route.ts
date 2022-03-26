import express from 'express'
import { AuthController } from '../controllers/export'

const { 
  login,
  register
 } = AuthController

const authRoute = express.Router()

authRoute.post(`/login`, login)
authRoute.post(`/signup`, register)

export default authRoute