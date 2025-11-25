import nodemailer from "nodemailer";
import { envConfig } from "../../config";

class MailService {
  private transporter = nodemailer.createTransport({
    host: envConfig.gmailWebMailHost,
    port: envConfig.gmailWebMailPort,
    secure: envConfig.gmailWebMailPort === 465,
    auth: {
      user: envConfig.gmailWebMailUser,
      pass: envConfig.gmailWebMailPass,
    },
  });

  async sendMail(to: string, subject: string, html: string) {
    return this.transporter.sendMail({
      from: envConfig.gmailWebMailUser,
      to,
      subject,
      html
    });
  }
}

export const mailService = new MailService();
