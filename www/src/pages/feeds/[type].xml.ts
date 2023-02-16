import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

import { getSortedPosts } from "../../utils/posts";
import { postTypes } from '../../utils/posts';
import { compilePostsForRSS } from "../../utils/rss";

const getPostData = async (type: string = '') => {
  const allPosts = await getCollection('posts', ({ data }) =>
    data.draft != true && type === ''
      ? true
      : data.type == type.slice(0, type.length - 1)
  );
  const sortedPosts = getSortedPosts(allPosts);
  const rssPosts = await compilePostsForRSS(sortedPosts);
  return rssPosts;
}

export const getStaticPaths = () => {
  const types = postTypes.map((postType) => ({ params: { type: postType } }));
  const allTypes = { params: { type: 'main' } } // for the "main" feed as json
  return [...types, allTypes]
}

export const get = async ({ params }) =>
  rss({
    title: `Mykal Machon - ${params.type} Feed`,
    description: `Hey! I'm Mykal. Welcome to my ${params.type} RSS feed. This contains all my posts, photos, notes, etc.`,
    site: import.meta.env.SITE,
    customData: `<language>en-us</language>`,
    items: await Promise.all(await getPostData(params.type === 'main' ? '' : params.type)),
  });
