import express from 'express'

const app: express.Application = express()

const startServer = (PORT: number = 3000) => {
  app.listen(PORT, () => {
    console.log(`app listen on PORT ${PORT}`)
  })
}

export { startServer }
