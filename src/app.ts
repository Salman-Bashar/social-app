import dotenv from "dotenv"
import { createConnection } from "typeorm"
import log from "./utils/logger"

dotenv.config({ path: __dirname + "/../.env" })

const port = parseInt(process.env.PORT as string, 10)
const host = process.env.HOST as string
const database = process.env.DATABASE as string
const username = process.env.USERNAME as string
const password = process.env.PASSWORD as string

const main = async () => {
  try {
    await createConnection({
      type: "postgres",
      host: host,
      port: port,
      username: username,
      password: password,
      database: database,
      synchronize: true,
    })

    log.info("Database connected...")
  } catch (error) {
    log.error("Cannot connect to database", error)
  }
}

main()
