import rss from '@astrojs/rss';

const postImportResult = import.meta.globEager('../posts/**/*.md');
const postObjects = Object.values(postImportResult);
const sortedPosts = postObjects.sort(
  (a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
);

const compiledPosts = sortedPosts.map(async (post) => ({
  link: post.frontmatter.slug,
  title: post.frontmatter.title,
  pubDate: post.frontmatter.pubDate,
  description: `${await post.compiledContent()} <br /> <br /> <a href="${
    import.meta.env.SITE
  }posts/${post.frontmatter.slug}">read post on site</a>`,
}));

export const get = async () =>
  rss({
    title: 'Mykal Machon (mykal.codes)',
    description:
      "Welcome to my site's RSS feed! I use this is a blog / place to put stuff I want to share.",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: await Promise.all(compiledPosts),
  });
