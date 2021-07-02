import { Request, Response } from "express-serve-static-core"
import EmailService from '../services/EmailService'
const User = [
    {
        nome:"Josia Almeida",
        email:"Josiaalmeida0001@gmail.com"
    }
]

export default {
    async index(req: Request, res: Response){
       res.json(User)
    },
    async create(req:Request, res:Response){
        const emailMessage = new EmailService()
        emailMessage.messageEmail({
            to:{
            name:"Josia Josué",
            email:"Josiaalmeida001@gmail.com"
            },
            message:{
                subject:"Bem vindo manoooo",
                body:"Bem Vindo"
            }
        })
        res.send("Criado")
        
    }
}