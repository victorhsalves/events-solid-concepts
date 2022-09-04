import { Router } from "express";
import { createOrganizationController } from "./useCases/CreateOrganization";
import { createUserController } from "./useCases/CreateUser";



const router = Router();

router.post('/createUser', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/createOrganization', (request, response) => {
    return createOrganizationController.handle(request, response);
})

export {router}