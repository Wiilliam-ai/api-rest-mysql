import mysql from 'mysql2/promise'
import {CONF} from './config.js'

const conection = await mysql.createConnection(
    {
        host:CONF.host,
        user:CONF.user,
        password:CONF.password,
        port:CONF.port,
        database:CONF.database
    }
)
export {conection}