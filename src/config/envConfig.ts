import dotenv from "dotenv";
import { IEnvConfig } from "../interfaces/config.interface";

dotenv.config();


const envConfig: IEnvConfig = {
    port: Number(process.env.PORT),
    nodeEnv: process.env.NODE_ENV || "development",
    mongoUser: process.env.MONGO_USER || "",
    mongoPassword: process.env.MONGO_PASSWORD || "",
    mongoHost: process.env.MONGO_HOST || "localhost",
    mongoPort: process.env.MONGO_PORT || "27017",
    mongoAuthSource: process.env.MONGO_AUTHSOURCE || "admin",
    // Build URL dynamically if not provided directly
    dbName: process.env.MONGO_DBNAME || "",
    accessSecret: process.env.JWT_ACCESS_SECRET || "test",
    refreshSecret: process.env.JWT_REFRESH_SECRET || "test",

    // Hostinger
    gmailWebMailHost: process.env.GMAIL_WEB_MAIL_HOST || "smtp.gmail.email",
    gmailWebMailPort: Number(process.env.GMAIL_WEB_MAIL_PORT) || 465,
    gmailWebMailUser: process.env.GMAIL_WEB_MAIL_USER || "mukesh@startecnoplast.com",
    gmailWebMailPass: process.env.GMAIL_WEB_MAIL_PASS || "Mukesh@123",

    // Client Email
    clientEmail: process.env.CLIENT_EMAIL || "",

    //
    enquiryN8NWebhookUrl: process.env.N8N_ENQUIRY || ""

};

export default envConfig;