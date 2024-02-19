import { z } from "zod";

export const PostValidator = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be a minimum of 3 characters" })
    .max(300, { message: "Title must be a maximum of 300 characters" }),
  content: z.any(),
  authorId: z.string(),
  subredditId: z.string(),
});

export type CreatePostPayload = z.infer<typeof PostValidator>;

