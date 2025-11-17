import { contactController } from "../../controllers";
import express from "express";
import { validateBulkEnquiryReqBody, validateCustomerEnquiryReqBody, validateEnquiryReqBody } from "../../middlewares";
const router = express.Router();

router.post("/bulk-enquiry", validateBulkEnquiryReqBody , contactController.createBulkEnquiry);
router.post("/customer-enquiry", validateCustomerEnquiryReqBody , contactController.createCustomerEnquiry);
router.post("/enquiry", validateEnquiryReqBody , contactController.createEnquiry);
export default router;