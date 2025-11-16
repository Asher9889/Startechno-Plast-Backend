import express from "express";
import authRoutes from "./auth.routes";
import contactRoutes from "./contact.routes";

const router = express.Router();

router.use("/auth",  authRoutes);
router.use("/contact", contactRoutes);

export default router;