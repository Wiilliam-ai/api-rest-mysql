import express from "express";
import personas from "./routes/personas.routes.js"
import docentes from "./routes/docente.routes.js"
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
app.use("/api",personas)
app.use("/api2",docentes)

app.use((req,res,next)=>{
    res.status(404).json({
        message:"Endpoint not found"
    })
})
app.listen(PORT)