import { Router } from "express";


const companyRouter = Router()

companyRouter.get('/', (req, res) => res.status(200).send('UP'))

export default companyRouter