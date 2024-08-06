import { z } from "zod";

export const LoginValidationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8, {
    message: "Password must be of 8 charecter ",
  }),
});
