import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        author: z.string().default('Pablo Bianco'),
        publishedAt: z.date(),
        description: z.string(),
        isPublish: z.boolean(),
        isDraft: z.boolean().default(false),
    }),
});

export const collections = { posts: postsCollection };