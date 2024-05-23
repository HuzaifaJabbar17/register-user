const { z } = require("zod");

const registrationSchema = z.object({
  firstName: z
    .string({ required_error: "first name is needed" })
    .trim()
    .min(3, { message: "minimum 3 letters required in first name" })
    .max(12, { message: "maximum 12 letters can be there in first name" }),
  lastName: z
    .string({ required_error: "last name is needed" })
    .trim()
    .min(3, { message: "minimum 3 letters required in last name" })
    .max(255, { message: "maximum 12 letters can be there in last name" }),
  email: z
    .string({ required_error: "email is needed" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "minimum 3 letters required in email" })
    .max(12, { message: "maximum 12 letters can be there in email" }),
  password: z
    .string({ required_error: "password is required" })
    .min(7, { message: "minimum 7 letters password is required" })
    .max(1024, { message: "password cannot be greater than 1024 letters" }),
  profileImage: z.string({ required_error: "Profile image must be uploaded" }),
});

module.exports = { registrationSchema };
