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
    async sendPurchaseMail(email, first_name, ticket) {
        try {
            const mailOptions = {
                from: "My Ecommerce",
                to: email,
                html: `<h1>Confirmación de Compra</h1>
    <p>Gracias por tu compra, ${first_name}</p>
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
    async sendRecoveryMail(email, first_name, token) {
        try {
            const mailOptions = {
                from: "My Ecommerce",
                to: email,
                subject: "Restablecimiento de Contraseña",
                html: `<h1>Restablecimiento de Contraseña</h1>
    <p>Hola ${first_name}</p>
    <p>Has perdido tu contraseña</p>
    <p>Te enviaremos este código de confirmación: </p>
    <strong>${token}</strong>
    <p>Este código expira en una hora</p>
    <a href="http://localhost:8080/password">Restablecer Contraseña</a>
    `
            }

        } catch (error) {
            console.log("Error al enviar al correo de restablecimiento", error)
        }
    }
}
export default EmailManager