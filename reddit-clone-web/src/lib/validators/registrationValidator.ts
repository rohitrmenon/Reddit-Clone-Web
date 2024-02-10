import { z } from "zod";

export const registrationValidator = z.object({
  email: z.string().email(),
  name: z.string().min(3).max(21),
  password: z.string().min(3).max(21),
  username: z.string().min(3).max(21),
  image: z.string(),
});

export type RegistrationPayload = z.infer<typeof registrationValidator>