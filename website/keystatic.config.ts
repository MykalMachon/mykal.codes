// keystatic.config.ts
import { config, fields, collection } from '@keystatic/core';

const postRootPath = import.meta.env.MODE === 'production' ? 'website/src/content' : 'src/content';
const postImageRootPath = import.meta.env.MODE === 'production' ? 'website/src/assets/posts' : 'src/assets/posts';

export default config({
  ui: {
    brand: {
      name: 'mykal.codes',
    }
  },
  storage: {
    kind: import.meta.env.MODE === 'production' ? 'github' : 'local',
    repo: 'mykalmachon/mykal.codes'
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: `${postRootPath}/posts/*`,
      columns: ['pubDate', 'type', 'draft'],
      format: { contentField: 'content' },
      entryLayout: 'content',
      schema: {
        pubDate: fields.date({ label: 'Publication Date' }),
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({ label: 'Description' }),
        heroImage: fields.image({ label: 'Hero Image' }),
        content: fields.mdx({
          label: 'Content', extension: 'md', options: {
            image: {
              directory: postImageRootPath,
              publicPath: `@assets/posts/`
            }
          }
        }),
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