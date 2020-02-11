import express from 'express'
import router from './router'

const app: express.Application = express()
app.use(router)

const startServer = (PORT: number = 3000) => {
  app.listen(PORT, () => {
    console.log(`app listen on PORT ${PORT}`)
  })
}

export { startServer }
