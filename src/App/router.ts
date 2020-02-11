import { Router } from 'express'
import productRouter from './Product/route'

const router = Router()
router.use('/product', productRouter)

export default router
