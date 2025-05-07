import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import DbCon from './utlis/db.js'
import AuthRoutes from './routes/auth.route.js'
import cookieparser from 'cookie-parser'
import AdminRoutes from './routes/admin.route.js'

dotenv.config()

const PORT = process.env.PORT || 3000
const app = express()
DbCon()
app.use(express.json())
app.use(cookieparser())
app.use(cors())

app.get('/', (req, res) => {
    res.send('test')
})

app.use('/api/auth', AuthRoutes)
app.use('/api/admin', AdminRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
})