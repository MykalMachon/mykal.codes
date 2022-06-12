import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('../posts/**/*.md');
const postObjects = Object.values(postImportResult);
const formattedPosts = postObjects.map((post) => ({
  link: post.frontmatter.slug,
  title: post.frontmatter.title,
  pubDate: post.frontmatter.pubDate,
}));

export const get = () =>
  rss({
    title: 'Mykal Machon (mykal.codes)',
    description:
      "Welcome to my site's RSS feed! I use this is a blog / place to put stuff I want to share.",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: formattedPosts,
  });
