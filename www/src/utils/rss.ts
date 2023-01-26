import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

const compileHTMLForRSS = async (post) => {
  const primaryHTML = parser.render(post.body);
  const additionalHTML = `
    <hr /> 
    <p>
      Thanks for reading this post in your RSS reader! <br />
      If you want to respond you can 
      <a href="mailto:hello@mykal.codes">write me an Email</a> or reach
      out on <a href="https://indieweb.social/@mykalmachon">Mastodon</a>.
    </p>
    <p>
      <a href="${import.meta.env.SITE}/${post.data.type}s/${post.slug}">
        Read the full post on the site
      </a>
    </p>
  `
  return sanitizeHtml(primaryHTML + additionalHTML);
}

export const compilePostsForRSS = async (posts: any[]) => {
  return posts.map(async (post) => ({
    title: post.data.title,
    description: await compileHTMLForRSS(post),
    pubDate: post.data.pubDate,
    link: `${import.meta.env.SITE}/${post.data.type}s/${post.slug}`
  }))
}