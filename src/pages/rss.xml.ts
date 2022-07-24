import rss from '@astrojs/rss';
import { getNonDraftPosts } from '../utils/posts';

// @ts-ignore
const postImportResult = import.meta.globEager('../posts/**/*.md');
const postObjects = Object.values(postImportResult);
const nonDraftPosts = getNonDraftPosts(postObjects);
const sortedPosts = nonDraftPosts.sort(
  // @ts-ignore
  (a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
);

const compiledPosts = sortedPosts.map(async (post) => ({
  link: `posts/${post.frontmatter.slug}`,
  title: post.frontmatter.title,
  pubDate: post.frontmatter.pubDate,
  description: `${await post.compiledContent()} <br /> <br /> <a href="${
    // @ts-ignore
    import.meta.env.SITE
  }posts/${post.frontmatter.slug}">read post on site</a>`,
}));

export const get = async () =>
  rss({
    title: 'Mykal Machon (mykal.codes)',
    description:
      "Welcome to my site's RSS feed! I use this is a blog / place to put stuff I want to share.",
    // @ts-ignore
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: await Promise.all(compiledPosts),
  });
