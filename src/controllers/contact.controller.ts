import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import { contactService } from "../services";
import { ApiError, ApiResponse } from "../utils";

async function createBulkEnquiry(req: Request, res: Response, next: NextFunction) {
    try {

        req.body.type = "BULK-ENQUIRY";
        const savedEnquiry = await contactService.createBulkEnquiryService(req.body);
        return ApiResponse.success(res, "Enquiry created successfully", savedEnquiry, StatusCodes.CREATED);
    } catch (error: any) {
        console.log(error);
        if (error instanceof ApiError) {
            return next(error);
        }
        return next(ApiResponse.error(res, error.message, StatusCodes.INTERNAL_SERVER_ERROR, []));
    }
}


export { createBulkEnquiry }