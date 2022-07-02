import { getNonDraftPosts } from "./posts";

export const getPostsByTags = (tag: string, posts: Array<any>) => {
  const publishedPosts = getNonDraftPosts(posts);
  const postList = publishedPosts.reduce((accPosts, currPost) => {
    const postTags = currPost.frontmatter.tags;
    const newPostList = [...accPosts];
    if(postTags.includes(tag)) newPostList.push(currPost);
    return newPostList;
  }, [])
  return {
    tag: tag,
    posts: postList
  }
};

export const getAllTags = (posts: Array<any>) => {
  const publishedPosts = getNonDraftPosts(posts);
  return publishedPosts.reduce((accTags: Array<string>, currPost: any) => {
    const tags = currPost.frontmatter.tags;
    // find all the new tags in the array
    const newTagList = [...accTags];
    tags.forEach((tag) => {
      if (!newTagList.includes(tag)) newTagList.push(tag);
    });
    // return the new tag list
    return newTagList;
  }, []);
};
