import { Router } from "express";
import { createOrganizationController } from "./useCases/CreateOrganization";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";



const router = Router();

router.post('/createUser', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/createOrganization', (request, response) => {
    return createOrganizationController.handle(request, response);
})

router.post('/login', (request, response) => {
    return loginController.handle(request, response);
})

export {router}