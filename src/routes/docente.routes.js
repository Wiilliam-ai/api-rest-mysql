import { Router } from "express";
import { getDocente, listDocentes } from "../controllers/docente.controller";

const router = Router()


router.get('/docentes',listDocentes);
router.get('/docentes/:id',getDocente);


export default router