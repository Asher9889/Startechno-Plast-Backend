import { Request, Response, NextFunction } from "express";
import { contactSchema, customerEnquirySchema } from "../../schema/contact.schema";
import { enquirySchema } from "../../schema";
import { ApiResponse } from "../../utils";

function validateBulkEnquiryReqBody(req: Request, res: Response, next: NextFunction) {
    const result = contactSchema.safeParse(req.body);
    if(!result.success){
       const errors = result.error.issues.map((error) => ({field: error.path[0], message: error.message})) 
        return next(ApiResponse.error(res, "Please provide valid request body", 400, errors))
    }
    next()
}
function validateCustomerEnquiryReqBody(req: Request, res: Response, next: NextFunction) {
    const result = customerEnquirySchema.safeParse(req.body);
    if(!result.success){
       const errors = result.error.issues.map((error) => ({field: error.path[0], message: error.message})) 
        return next(ApiResponse.error(res, "Please provide valid request body", 400, errors))
    }
    next()
}
function validateEnquiryReqBody(req: Request, res: Response, next: NextFunction) {
    const result = enquirySchema.safeParse(req.body);
    if(!result.success){
       const errors = result.error.issues.map((error) => ({field: error.path[0], message: error.message})) 
        return next(ApiResponse.error(res, "Please provide valid request body", 400, errors))
    }
    next()
}

export { validateBulkEnquiryReqBody, validateCustomerEnquiryReqBody, validateEnquiryReqBody }
