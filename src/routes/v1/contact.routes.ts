import { contactController } from "../../controllers";
import express from "express";
const router = express.Router();

router.post("/bulk-enquiry", contactController.createBulkEnquiry);

export default router;