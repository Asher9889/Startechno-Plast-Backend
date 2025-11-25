import { TemplateService } from "./template.service";
import { mailService } from "./mail.service";

export class FormService {
    async notifyAdminLead(payload: any) {
        const html = TemplateService.render("adminLeadNotification", payload);

        await mailService.sendMail("mukesh@startechnoplast.com",
            `New Lead from ${payload.name}`,
            html
        );
    } 

    async notifyUserConfirmation(email: string, payload: any) {
        delete payload.type;
        const html = TemplateService.render("userConfirmation", payload);

        await mailService.sendMail(email, "We received your request", html);
    }
}

export const formService = new FormService();
