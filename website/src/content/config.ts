import { z, defineCollection } from 'astro:content';

const posts = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      type: z.enum(['post', 'photo', 'note', 'link']),
      draft: z.boolean(),
      tags: z.optional(z.array(z.string())),
      stage: z.optional(z.enum(["seed", "budding", "sapling", "old growth"])),
      description: z.optional(z.string()),
      heroImage: z.optional(image()),
      location: z.optional(z.string()),
      photos: z.optional(z.array(z.object({
        url: z.string().url(),
        alt: z.string()
      }))),
      url: z.optional(z.string().url())
    })
})

const links = defineCollection({
	schema: () => {
		z.object({
			title: z.string(),
			description: z.string(),
			link: z.string().url()
		})
	}
})

export const collections = {
  posts,
}