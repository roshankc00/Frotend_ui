import { z } from "zod";

export const AddUserToChatValidation = z.object({
  email: z.string().email(),
});
