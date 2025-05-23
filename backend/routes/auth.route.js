import express from 'express'
import { Login, Logout, register } from '../controller/auth.controller.js'
const AuthRoutes = express.Router()

AuthRoutes.post('/register', register)
AuthRoutes.post('/login', Login)
AuthRoutes.post('/logout', Logout)

export default AuthRoutes