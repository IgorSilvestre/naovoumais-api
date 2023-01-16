import { Router } from "express";
import companyRouter from "./domainRoutes/company.routes";

const routes = Router()

routes.use('/company', companyRouter)

export default routes