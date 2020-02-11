import { Router } from 'express'

const productRouter = Router()

productRouter.get('/', (_, res) => {
  res.status(200).json({
    message: 'hello product',
  })
})

export default productRouter
