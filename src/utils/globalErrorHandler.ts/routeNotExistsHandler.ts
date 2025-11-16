import { NextFunction, Request, Response } from "express"
import ApiResponse from "../api-response/ApiResponse"

function routeNotExistsHandler(req:Request, res:Response, next:NextFunction) {
    return next(ApiResponse.error(res, "Please check your api endpoints", 404))
}

export default routeNotExistsHandler;