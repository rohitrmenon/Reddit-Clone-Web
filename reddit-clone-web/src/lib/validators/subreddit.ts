import {z} from 'zod'

export const SubredditValidator = z.object({
    name: z.string().min(3).max(21),
    creatorId: z.string()
})

export const SubredditSubscriptionValidator = z.object({
    userId: z.string(),
    subredditId: z.string()
})

export type CreateSubredditPayload = z.infer<typeof SubredditValidator>
export type SubscribeToSubredditPayload = z.infer<typeof SubredditSubscriptionValidator>
