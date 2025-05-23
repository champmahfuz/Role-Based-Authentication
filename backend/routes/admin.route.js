import express from 'express'
import { deletUser, Getuser } from '../controller/admin.controller.js'
import { isAdmin } from '../middleware/verifyToken.js'

const AdminRoutes = express.Router()
AdminRoutes.get('/getuser', isAdmin, Getuser)
AdminRoutes.delete('/delete/:id', isAdmin, deletUser)

export default AdminRoutes