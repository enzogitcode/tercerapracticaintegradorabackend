import { Command } from "commander";

const program= new Command();

program
.option("-p <port>", "puerto en donde se inicia el servidor", 8080)
.option("--mode <mode>","modo de trabajo" ,"produccion")
program.parse()

console.log("Opciones: ", program.opts());
export default program