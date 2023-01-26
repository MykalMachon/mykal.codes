import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { getSortedPosts } from "../../utils/posts";
import { compilePostsForRSS } from "../../utils/rss";

const getPostData = async () => {
  const allPosts = await getCollection('posts', ({ data }) => {
    return data.draft != true && data.type == "post"
  })
  const sortedPosts = getSortedPosts(allPosts);
  const rssPosts = await compilePostsForRSS(sortedPosts);
  return rssPosts;
}

export const get = async () =>
  rss({
    title: "Mykal Machon - Posts Feed",
    description: "Hey! I'm Mykal. Welcome to my posts RSS feed. This contains all my posts.",
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: await Promise.all(await getPostData()),
  });
