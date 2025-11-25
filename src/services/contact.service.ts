import { TContact, TcustomerEnquirySchema, TEnquirySchema } from "../schema";
import { Contact } from "../models";
import { ApiError, formService } from "../utils";
import { StatusCodes } from "http-status-codes";
import { envConfig } from "../config";
import { userFormAutomation } from "../utils";

export async function createBulkEnquiryService(enquiryData: TContact) {
    try {
        const enquiry = new Contact(enquiryData);
        const savedEnquiry = await enquiry.save();
        if(!savedEnquiry) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to save enquiry", []);
        }
        await userFormAutomation(envConfig.enquiryN8NWebhookUrl, enquiryData) // trigger n8n workflow
        await formService.notifyAdminLead(enquiryData);
        // formService.notifyUserConfirmation(enquiryData.email, enquiryData);

        return savedEnquiry;
    } catch (error: any) {
        if( error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message, []);
    }
}

export async function createCustomerEnquiryService(enquiryData: TcustomerEnquirySchema) {
    try {
        const enquiry = new Contact(enquiryData);
        const savedEnquiry = await enquiry.save();
        if(!savedEnquiry) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to save enquiry", []);
        }
        await userFormAutomation(envConfig.enquiryN8NWebhookUrl, enquiryData) // trigger n8n workflow
        await formService.notifyAdminLead(enquiryData);
        await formService.notifyUserConfirmation(enquiryData.email, enquiryData);

        return savedEnquiry;
    } catch (error: any) {
        if( error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message, []);
    }
}

export async function createEnquiryService(enquiryData: TEnquirySchema) {
    try {
        const enquiry = new Contact(enquiryData);
        const savedEnquiry = await enquiry.save();
        if(!savedEnquiry) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to save enquiry", []);
        }
        await userFormAutomation(envConfig.enquiryN8NWebhookUrl, enquiryData) // trigger n8n workflow
        await formService.notifyAdminLead(enquiryData);
        await formService.notifyUserConfirmation(enquiryData.email, enquiryData);
        return savedEnquiry;
    } catch (error: any) {
        if( error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message, []);
    }
}