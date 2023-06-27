import {conection} from '../db.js'

const listPersonas = async (req,res) =>{
    try {
        const sql = "SELECT * FROM view_personas"
        const [rows,field] = await conection.query(sql)
        res.send(rows)
    } catch (error) {
        return res.status(500).json({
            message: "Algo fallo"
        })
    }
}

const getPersona = async (req,res) =>{
    try {
        const id = req.params.id
        const sql = "SELECT * FROM view_personas WHERE id =?"
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

const createPersona = async (req,res) =>{
    try {
        const {nombre,apellido,telefono} = req.body
        const sql = "INSERT INTO Personas(nombre_p,apellido_p,telefono) VALUES(?,?,?)";
        const [rows] = await conection.query(sql,[nombre,apellido,telefono])
        res.send({rows})
    } catch (error) {
        return res.status(500).json({
            message: "Algo fallo"
        })
    }
}

const updatePersona = async (req,res) =>{
    try {
        const id = req.params.id
        const {nombre,apellido,telefono} = req.body
        const sql = "UPDATE Personas SET nombre_p =?,apellido_p =?,telefono =? WHERE id =?";
        const [rows] = await conection.query(sql,[nombre,apellido,telefono,id]);
        res.send({rows})
    } catch (error) {
        return res.status(500).json({
            message: "Algo fallo"
        })
    }
}

const deletePersona = async (req,res) =>{
    try {
        const id = req.params.id
        const sql = "DELETE FROM Personas WHERE id=?";
        const [rows] = await conection.query(sql,[id]);
        res.send({rows})
    } catch (error) {
        return res.status(500).json({
            message: "Algo fallo"
        })
    }
}

export{
    listPersonas,
    getPersona,
    createPersona,
    updatePersona,
    deletePersona
}