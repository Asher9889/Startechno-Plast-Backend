import { TContact } from "../schema";
import { Contact } from "../models";
import { ApiError, ApiResponse } from "../utils";
import { StatusCodes } from "http-status-codes";
import axios from "axios";
import { envConfig } from "../config";

export async function createBulkEnquiryService(enquiryData: TContact) {
    try {
        const enquiry = new Contact(enquiryData);
        const savedEnquiry = await enquiry.save();
        if(!savedEnquiry) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to save enquiry", []);
        }

        return savedEnquiry;
    } catch (error: any) {
        if( error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message, []);
    }
}

export async function createCustomerEnquiryService(enquiryData: TContact) {
    try {
        const enquiry = new Contact(enquiryData);
        const savedEnquiry = await enquiry.save();
        if(!savedEnquiry) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to save enquiry", []);
        }

        return savedEnquiry;
    } catch (error: any) {
        if( error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message, []);
    }
}

export async function createEnquiryService(enquiryData: TContact) {
    try {
        const enquiry = new Contact(enquiryData);
        const savedEnquiry = await enquiry.save();
        if(!savedEnquiry) {
            throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Failed to save enquiry", []);
        }
        await axios.post(envConfig.enquiryN8NWebhookUrl, enquiryData); // trigger n8n workflow
        return savedEnquiry;
    } catch (error: any) {
        if( error instanceof ApiError) {
            throw error;
        }
        throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, error.message, []);
    }
}