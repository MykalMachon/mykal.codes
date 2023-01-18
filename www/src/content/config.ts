import { z, defineCollection } from 'astro:content';

const notes = defineCollection({
  slug: ({ id, defaultString, data, body }) => {
    return data.slug || defaultString
  },
  schema: {
    title: z.string(),
    slug: z.string(),
    description: z.optional(z.string()),
    pubDate: z.string().datetime(),
    editDate: z.optional(z.string().datetime()),
    heroImage: z.optional(z.string().url()),
    stage: z.enum(["seed", "budding", "sapling", "old growth"]),
    draft: z.boolean(),
    tags: z.array(z.string())
  }
})

const posts = defineCollection({
  slug: ({ id, defaultString, data, body }) => {
    return data.slug || defaultString
  },
  schema: {
    title: z.string(),
    slug: z.string(),
    description: z.optional(z.string()),
    pubDate: z.string().datetime(),
    editDate: z.optional(z.string().datetime()),
    heroImage: z.optional(z.string().url()),
    stage: z.enum(["seed", "budding", "sapling", "old growth"]),
    draft: z.boolean(),
    tags: z.array(z.string())
  }
})

const photos = defineCollection({
  slug: ({ id, defaultString, data, body }) => {
    return data.slug || defaultString
  },
  schema: {
    title: z.string(),
    slug: z.string(),
    pubDate: z.string().datetime(),
    location: z.optional(z.string()),
    photos: z.array(z.object({
      url: z.string().url(),
      alt: z.string()
    })),
    tags: z.array(z.string())
  }
})

const links = defineCollection({
  slug: ({ id, defaultString, data, body }) => {
    return data.slug || defaultString
  },
  schema: {
    title: z.string(),
    slug: z.string(),
    pubDate: z.string().datetime(),
    url: z.string()
  }
})

export const collections = {
  notes,
  posts,
  photos,
  links,
}