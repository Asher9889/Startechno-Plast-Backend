import nodemailer from "nodemailer";
import { envConfig } from "../../config";
// import { IBookConsultationForm, IConditionConsultationForm } from "../../interfaces";
import path from "path";
import fs from "fs";
// import { IQuickDoctorConnectForm } from "../../interfaces/entities/contact.entity";

export default class MailService {
    transporter: nodemailer.Transporter;
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: envConfig.gmailWebMailHost,
            port: envConfig.gmailWebMailPort,
            secure: envConfig.gmailWebMailPort === 465,
            auth: {
                user: envConfig.gmailWebMailUser,
                pass: envConfig.gmailWebMailPass,
            },
        })
    }

    private renderTemplate(templateName: string, variables: Record<string, any>) {
        const templatePath = path.join(__dirname, `../templates/${templateName}.html`);
        let html = fs.readFileSync(templatePath, "utf-8");

        Object.keys(variables).forEach((key) => {
            html = html.replace(new RegExp(`{{${key}}}`, "g"), variables[key]);
        });

        return html;
    }

    sendUserConfirmationMail(email: string) {
        const mailOptions = {
            from: envConfig.gmailWebMailUser,
            to: email,
            subject: "Thank you for your registration",
            text: "Thank you for your registration",
            html: this.renderTemplate("userConfirmation", { name: "John Doe" }),
        }
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info);
            }
        })
    }

    sendAdminLeadNotificationMail(email: string) {
        const mailOptions = {
            from: envConfig.gmailWebMailUser,
            to: email="mukesh@startechnoplast.com",
            subject: "Thank you for your registration",
            text: "Thank you for your registration",
            html: this.renderTemplate("adminLeadNotification", { name: "John Doe" }),
        }
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info);
            }
        })
    }
}


