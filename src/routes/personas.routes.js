import { Router } from "express";
import { listPersonas,getPersona,createPersona, updatePersona,deletePersona } from "../controllers/personas.controller.js";

const router = Router();

router.get('/personas',listPersonas);
router.get('/personas/:id',getPersona);
router.post('/personas',createPersona);
router.patch('/personas/:id',updatePersona);
router.delete('/personas/:id',deletePersona);


export default router