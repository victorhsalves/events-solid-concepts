import { Router } from "express";
import { authenticateUserController } from "./useCases/AuthenticateUser";
import { createOrganizationController } from "./useCases/CreateOrganization";
import { createUserController } from "./useCases/CreateUser";
import { loginController } from "./useCases/Login";
import { logoutController } from "./useCases/Logout";



const router = Router();

router.get('/test', (request, response) => {
    console.log('request.cookie: ', request.cookies);
    console.log('response.cookies', JSON.stringify(response.cookie));

    return request.cookies
})


router.post('/createUser', (request, response) => {
    return createUserController.handle(request, response);
})

router.post('/createOrganization',
    (request, response, next) => {
        return authenticateUserController.handle(request, response, next);
    },
    (request, response) => {
        return createOrganizationController.handle(request, response);
    })

router.post('/signin', (request, response) => {
    return loginController.handle(request, response);
})

router.post('/logout', (request, response) => {
    return logoutController.handle(request, response);
})

export { router }