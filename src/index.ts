import express from 'express'
import cors from 'cors'
import router from './route'
const app = express()

app.use(cors())
app.use(router)


app.listen(3333)
