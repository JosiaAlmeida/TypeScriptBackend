interface To {
    name:string, 
    email:string
}
interface Message{
    subject:string
    body:string
}

class SendEmail {
    messageEmail(to:To, message:Message){
        console.log(`Email enviado para ${to.name}: ${message.body}`)
    }
}

export default  SendEmail