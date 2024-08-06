import { z } from "zod";

export const SignUpValidationSchema = z.object({
  name: z.string().min(3, {
    message: "Name must be of 3 charecter ",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email field is required",
    })
    .email(),
  password: z.string().min(8, {
    message: "Password must be of 8 charecter ",
  }),
});
