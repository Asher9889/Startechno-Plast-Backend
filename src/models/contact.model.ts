import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    type: {
        type: String,
        enum: ["BULK-ENQUIRY", "CUSTOMER-ENQUIRY"],
        required: [true, "Type is required"]
    },
    phone: {
        type: String,
        required: [true, "Phone number is required"]

    },
    email: {
        type: String,
        default: null
    },
    category: {
        type: String,
        default: null
    },
    city: {
        type: String,
        default: null
    },
    message: {
        type: String,
        default: null
    }
})

export const Contact = mongoose.model("Contact", contactSchema);