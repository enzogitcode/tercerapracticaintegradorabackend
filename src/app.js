import express from 'express';
import cors from 'cors'
const app = express();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('./src/public'))
import productRouter from './routes/product.router.js'
import cartRouter from './routes/cart.router.js'
import addLogger from './utils/logger.js';
import config from './config/config.js';
import './database.js'
const { port } = config

//Views
import exphbs from 'express-handlebars'
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './src/views');

app.use(addLogger)

//Routes
app.use("/api/products", productRouter)
app.use("/api/carts", cartRouter)

app.get("/loggerTest", (req, res) => {
    req.logger.fatal("Mensaje FATAL")
    req.logger.error("Mensaje ERROR")
    req.logger.warning("Mensaje WARNING")
    req.logger.info("Mensaje INFO")
    req.logger.http("Mensaje HTTP")
    req.logger.debug("Mensaje Debug")
    
    res.send("Logs generados")
})

//Listen
app.listen(port)
