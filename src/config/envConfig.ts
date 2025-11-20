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
    hostingerWebMailHost: process.env.HOSTINGER_WEB_MAIL_HOST || "smtp.titan.email",
    hostingerWebMailPort: Number(process.env.HOSTINGER_WEB_MAIL_PORT) || 465,
    hostingerWebMailUser: process.env.HOSTINGER_WEB_MAIL_AUTH_USER || "mukesh@startecnoplast.com",
    hostingerWebMailPass: process.env.HOSTINGER_WEB_MAIL_AUTH_PASS || "Mukesh@123",

    // Client Email
    clientEmail: process.env.CLIENT_EMAIL || "",

    //
    enquiryN8NWebhookUrl: process.env.ENQUIRY_N8N_WEBHOOK_URL || ""

};

export default envConfig;