import express from 'express'
import uerRouter from './routes/user.routes'
const app = express()
const router = express.Router()
const port = 3000

app.use('/api', uerRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
