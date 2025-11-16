import {  Request, Response } from "express";
import { type TContact, validateContact } from "../validations";
import { ApiResponse } from "../utils";
import { StatusCodes } from "http-status-codes";

function createBulkEnquiry(req:Request, res:Response) {
    try {
        const { name, phone, category, city } = req.body as TContact;
        const result = validateContact({ name, phone, category, city });
        if(!result.success){
            const errors = result.error
            return ApiResponse.error(res, "Invalid Form Data", StatusCodes.BAD_REQUEST, errors)
        }
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
}


export { createBulkEnquiry }