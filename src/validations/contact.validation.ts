import z from "zod";

const categoryOptions = ["Plastic Components", "Injection Moulding", "Tooling Design", "Other"] as const;

const contactSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters")
        .regex(/^[a-zA-Z ]+$/, "Please Enter a valid Name"),
    phone: z
        .string()
        .trim()
        .regex(/^[6-9][0-9]{9}$/, "Please Enter a valid Phone Number"),
    category: z.enum(categoryOptions, "Please select a valid category"),
    city: z
        .string()
        .trim()
        .min(2, "Please Enter a valid City")
        .regex(/^[a-zA-Z ]+$/, "Please Enter a valid City"),
});

type TContact = z.infer<typeof contactSchema>;

function validateContact(contact: TContact) {
    const result = contactSchema.safeParse(contact);
    return result;
}

export { validateContact, type TContact, categoryOptions };