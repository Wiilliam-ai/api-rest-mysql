import {conection} from '../db.js'

const listDocentes = async (req,res) =>{
    try {
        const sql = "SELECT * FROM Docentes"
        const [rows,field] = await conection.query(sql)
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Algo fallo"
        })
    }
}

const getDocente = async (req,res) =>{
    try {
        const id = req.params.id
        const sql = "SELECT * FROM Docentes WHERE id =?"
        const [rows,field] = await conection.query(sql,[id])
        if (rows.length <=0) {
            return res.status(404).json({
                message:"No se encontro el empleado"
            })
        }
        res.send(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "Algo fallo"
        })
    }
}

export{
    listDocentes,
    getDocente
}