import express from 'express'
import cors from 'cors'
import routes from './routes'

const app = express()
app.use(
  cors({
    origin: '*',
  }),
)
app.use(express.json({ limit: '300mb' }))
app.use(routes)

const PORT = 4000
app.listen (PORT, () => console.log(`Server running on http://localhost:${PORT}`))
