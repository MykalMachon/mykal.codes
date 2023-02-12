import MarkdownIt from 'markdown-it';
import { getCollection } from "astro:content";
import { getSortedPosts } from "../../utils/posts";

import { postTypes } from '../../utils/posts';

const md = new MarkdownIt({
  html: true,
  breaks: true,
});

const getPostData = async (type: string = '') => {
  const allPosts = await getCollection('posts', ({ data }) =>
    data.draft != true && type === ''
      ? true
      : data.type == type.slice(0, type.length - 1)
  );
  const postsWithHtml = allPosts.map((post) => ({ html: md.render(post.body).replace(/\n/g, ''), ...post }))
  return getSortedPosts(postsWithHtml);
}

export const getStaticPaths = () => {
  const types = postTypes.map((postType) => ({ params: { type: postType } }));
  const allTypes = { params: { type: 'main' } } // for the "main" feed as json
  return [...types, allTypes]
}

export const get = async ({ params, request }) => {
  const type = params.type;
  const postData = await getPostData(type === 'main' ? '' : type);
  return {
    body: JSON.stringify(postData)
  }
}
