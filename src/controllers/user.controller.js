import UserModel from "../models/product.model";
const newUser = new UserModel
import EmailManager from "../services/email";
const emailManager = new EmailManager()

class UserController {
    async requestPasswordReset(req, res) {
        const { email } = req.body
        try {
            const user = await UserModel.findOne({ email })
            if (!user) {
                return res.status(404).send("Usuario no encontrado")

            }
            const token = generarResetToken()
            user.resetToken = {
                token: token,
                expire: new Date(Date.now() + 3600000)

            }
            await user.save()
            await emailManager.sendRecoveryMail(email, user.first_name, token)
            res.redirect("/confirmacion-envio")
        } catch (error) {
            res.status(500).send("Error interno del servidor")
            
        }
    }

}

export default UserController