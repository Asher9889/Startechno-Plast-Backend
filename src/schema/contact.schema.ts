import z from "zod";

const categoryOptions = ["Plastic Components", "Injection Moulding", "Tooling Design", "Other"] as const;

const contactSchema = z.object({
    name: z
        .string({"error": "Name is required"})
        .trim()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[a-zA-Z ]+$/, "Please Enter a valid Name"),
    phone: z
        .string({"error": "Phone is required"})
        .trim()
        .regex(/^[6-9][0-9]{9}$/, "Please Enter a valid 10 digit Phone Number"),
    category: z.enum(categoryOptions, {error: "Please select a valid category"}),
    city: z
        .string({error: "City is required"})
        .trim()
        .min(2, "Please Enter a valid City")
        .regex(/^[a-zA-Z ]+$/, "Please Enter a valid City"),
});

type TContact = z.infer<typeof contactSchema>;



const customerEnquirySchema = z.object({
    name: z
        .string({"error": "Name is required"})
        .trim()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[a-zA-Z ]+$/, "Please Enter a valid Name"),
    phone: z
        .string({"error": "Phone is required"})
        .trim()
        .regex(/^[6-9][0-9]{9}$/, "Please Enter a valid 10 digit Phone Number"),
    email: z.email("Please Enter a valid Email"),
    message: z.string({"error": "Message is required"}).trim().min(10, "Message must be at least 10 characters").max(1000, "Message must be at most 1000 characters")
   
});

type TcustomerEnquirySchema = z.infer<typeof customerEnquirySchema>;

export const foundHowOptions = ["GOOGLE", "LINKEDIN", "REFERENCE", "OTHER"] as const;

const enquirySchema = z.object({
   name: z.string()
        .min(4, "Name must be at least 4 characters")
        .max(50, "Name must be at most 50 characters")
        .regex(/^[a-zA-Z ]+$/, "Name must be alphabets only"),

    company: z.string().trim().min(4, "Company is required").max(50, "Company must be at most 50 characters")
        .regex(/^[a-zA-Z ]+$/, "Company must be alphabets only"),

    email: z.email("Invalid email address"),

    phone: z
        .string()
        .trim()
        .min(1, "Phone Number is required")
        .regex(/^[6-9][0-9]{9}$/, "Enter a valid 10-digit Indian phone number"),

    message: z
        .string()
        .trim()
        .min(1, "Message is required")
        .min(5, "Message must be at least 5 characters"),
    foundHow: z.enum( foundHowOptions, { error: "Please select valid how you heard about us" }),
   
});

type TEnquirySchema = z.infer<typeof enquirySchema>;

export { contactSchema, type TContact, categoryOptions, customerEnquirySchema, type TcustomerEnquirySchema, enquirySchema, type TEnquirySchema };