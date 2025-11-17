import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { contactService } from "../services";
import { ApiError, ApiResponse } from "../utils";

async function createBulkEnquiry(req: Request, res: Response, next: NextFunction) {
    try {

        req.body.type = "BULK-ENQUIRY";
        const savedEnquiry = await contactService.createBulkEnquiryService(req.body);
        return ApiResponse.success(res, "Enquiry created successfully. Our team will get back to you soon", savedEnquiry, StatusCodes.CREATED);
    } catch (error: any) {
        console.log(error);
        if (error instanceof ApiError) {
            return next(error);
        }
        return next(ApiResponse.error(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR, []));
    }
}

async function createCustomerEnquiry(req: Request, res: Response, next: NextFunction) {
    try {
        req.body.type = "CUSTOMER-ENQUIRY";
        const savedEnquiry = await contactService.createCustomerEnquiryService(req.body);
        return ApiResponse.success(res, "Enquiry created successfully. Our team will get back to you soon", savedEnquiry, StatusCodes.CREATED);
    } catch (error: any) {
        console.log(error);
        if (error instanceof ApiError) {
            return next(error);
        }
        return next(ApiResponse.error(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR, []));
    }
}

async function createEnquiry(req: Request, res: Response, next: NextFunction) {
    try {
        req.body.type = "ENQUIRY";
        const savedEnquiry = await contactService.createEnquiryService(req.body);
        return ApiResponse.success(res, "Enquiry created successfully. Our team will get back to you soon", savedEnquiry, StatusCodes.CREATED);
    } catch (error: any) {
        console.log(error);
        if (error instanceof ApiError) {
            return next(error);
        }
        return next(ApiResponse.error(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR, []));
    }
}


export { createBulkEnquiry, createCustomerEnquiry, createEnquiry }