import { IMailProvider, IMessage } from "../IMailProvider";
import nodemailer from 'nodemailer';
import Mail from "nodemailer/lib/mailer";
import { env } from "process";

export class MailtrapMailProvider implements IMailProvider {
    private transporter: Mail;

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: env.MAILTRAP_PROVIDER_HOST,
            port: env.MAILTRAP_PROVIDER_PORT,
            auth: {
                user: env.MAILTRAP_PROVIDER_USER,
                pass: env.MAILTRAP_PROVIDER_PASS
            }
        });

    }

    async sendMail(message: IMessage): Promise<void> {
        await this.transporter.sendMail({
            to: {
                name: message.to.name,
                address: message.to.email,
            },
            from: {
                name: message.from.name,
                address: message.from.email,
            },
            subject: message.subject,
            html: message.body,
        })
    }
}