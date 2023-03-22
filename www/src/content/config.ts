import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  slug: ({ defaultSlug, data }) => {
    return data.customSlug || defaultSlug
  },
  schema: z.object({
    title: z.string(),
    pubDate: z.string().transform((val) => new Date(val)),
    type: z.enum(['post', 'photo', 'note', 'link']),
    draft: z.boolean(),
    editDate: z.optional(z.string().transform((val) => new Date(val))),
    tags: z.optional(z.array(z.string())),
    stage: z.optional(z.enum(["seed", "budding", "sapling", "old growth"])),
    customSlug: z.optional(z.string()),
    description: z.optional(z.string()),
    heroImage: z.optional(z.string()),
    location: z.optional(z.string()),
    photos: z.optional(z.array(z.object({
      url: z.string().url(),
      alt: z.string()
    }))),
    url: z.optional(z.string())
  })
})

export const collections = {
  posts,
}