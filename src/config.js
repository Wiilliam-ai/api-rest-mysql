import {config} from 'dotenv'

config()

const PORT = process.env.PORT || 3000
const CONF = {
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    port:process.env.DB_PORT,
    database:process.env.DB_NAME
}

export {CONF,PORT}
