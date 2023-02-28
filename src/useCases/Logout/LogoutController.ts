import { Request, Response } from "express";




export class LogoutController {


    async handle(request: Request, response: Response) {
        try {
            return response.status(200).cookie('auth-token', '').json({ auth: false, token: '' });
        } catch (err: any) {
            return response.status(403).json({
                message: err.message || 'Unexpected Error'
            })
        }
    }
}