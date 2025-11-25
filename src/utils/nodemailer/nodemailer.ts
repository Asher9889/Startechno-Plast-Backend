import nodemailer from "nodemailer";
import { envConfig } from "../../config";
// import { IBookConsultationForm, IConditionConsultationForm } from "../../interfaces";
import path from "path";
import fs from "fs";
// import { IQuickDoctorConnectForm } from "../../interfaces/entities/contact.entity";

class MailService{
    transporter: nodemailer.Transporter;
    constructor(){
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
    sendUserConfirmationMail(email: string){
        const mailOptions = {
            from: envConfig.gmailWebMailUser,
            to: email,
            subject: "Thank you for your registration",
            text: "Thank you for your registration",
            html: fs.readFileSync(path.join(__dirname, "../templates/userConfirmation.html"), "utf-8"),
        }
        this.transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
            }
        })
    }
}

const transporter = nodemailer.createTransport({
    host: envConfig.gmailWebMailHost,
    port: envConfig.gmailWebMailPort, // 465 (SSL) or 587 (TLS)
    secure: envConfig.gmailWebMailPort === 465, // true for 465, false for 587
    auth: {
        user: envConfig.gmailWebMailUser,
        pass: envConfig.gmailWebMailPass,
    },
});

