import { deletePerson, getPerson, postPerson, updatePerson } from "../controllers/personController.js";
import express from 'express'

const router = express.Router()

router.get('/person', getPerson);

router.post('/person',postPerson);

router.delete('/:id',deletePerson);

router.put('/:id',updatePerson)


export default router;

