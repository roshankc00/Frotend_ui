import { z } from "zod";

export const CreateChatValidation = z.object({
  email: z.string().email(),
  name: z.string().min(2, {
    message: " must be of 2 charecter ",
  }),
});
