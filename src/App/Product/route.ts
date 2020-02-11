import { Router } from 'express'
import { getAllProduct } from './GetProduct.bs'

const productRouter = Router()

productRouter.get('/', (_, res) => {
  if (getAllProduct) {
    return res.status(200).json({
      message: getAllProduct(),
    })
  }
  return res.status(200).json({
    message: 'hello product',
  })
})

export default productRouter
