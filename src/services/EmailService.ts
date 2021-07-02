interface ITo {
    name:string, 
    email:string
}
interface IMessage{
    subject:string
    body:string
}

interface IMaitoDTO{
    to: ITo
    message: IMessage
}

class SendEmail {
    messageEmail({to, message}: IMaitoDTO){
        console.log(`Email enviado para ${to.name}: ${message.body}`)
    }
}

export default  SendEmail