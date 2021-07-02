import * as express from 'express'
const app = express()

app.get("/", (req, res)=>{
    res.send("Bem Vindo")
})



app.listen(3333)
