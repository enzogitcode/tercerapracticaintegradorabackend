/* import dotenv from 'dotenv'
import program from '../utils/commander.js';

const { mode } = program.opts
dotenv.config({
    path: mode === "production" ? "../../.env/production" : "../../.env/production"
})


export const configObject = {
    port: process.env.PORT,
    mongo_Url: process.env.MONGO_URL,
    adminName: process.env.adminName,
    adminPassword: process.env.adminPassword
}
export default configObject */

import dotenv from 'dotenv'
dotenv.config()
export default {
    port: process.env.PORT,
    mongo_Url: process.env.MONGO_URL,
    adminName: process.env.adminName,
    adminPassword: process.env.adminPassword
}