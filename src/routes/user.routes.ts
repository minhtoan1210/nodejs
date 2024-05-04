import express from 'express'
const uerRouter = express.Router()

uerRouter.get('/', (req, res) => {
  res.send('Birds home page')
})

export default uerRouter
