// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: 'mykalmachon/mykal.codes'

  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'website/src/content/posts/*',
      columns: ['pubDate', 'type', 'draft'],
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        pubDate: fields.date({ label: 'Publication Date' }),
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        heroImage: fields.image({ label: 'Hero Image' }),
        content: fields.mdx({ label: 'Content', extension: 'md' }),
        type: fields.select({
          label: 'Type',
          options: [
            { label: 'Post', value: 'post' },
            { label: 'Photo', value: 'photo' },
            { label: 'Note', value: 'note' },
            { label: 'Link', value: 'link' }
          ],
          defaultValue: 'post'
        }),
        draft: fields.checkbox({ label: 'Draft' }),
        tags: fields.array(fields.text({ label: 'Tags' }), { label: 'Tag', itemLabel: props => props.value }),
        location: fields.text({ label: 'Location' }),
        url: fields.text({ label: 'Link URL' }),
        customSlug: fields.text({ label: 'Custom Slug' }),
      },
    }),
  },
});