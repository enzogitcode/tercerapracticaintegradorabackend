import nodemailer from 'nodemailer'

class EmailManager {
    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            port: 587,
            auth: {
                user: "coderhouse50015@gmail.com"
                , pass: "norp renb afxw uxyq"

            }
        })
    }
    async enviarCorreoCompra(email, firt_name, ticket) {
        try {
            const mailOptions = {
                from: "Coder Test <coderhouse50015@gmail.com>",
                to: email,
                html: `<h1>Confirmación de Compra</h1>
    <p>Gracias por tu compra, ${firt_name}</p>
    <p>El número de tu orden es:${ticket}</p>
    <strong>${token}</strong>
    <p>Este código expira en una hora</p>
    `
            }
            await this.transporter.sendMail(mailOptions)

        } catch (error) {
            console.log("Error al enviar el mail", error)
        }
    }
    async enviarCorreoRestablecimiento() {

    }
}
export default EmailManager