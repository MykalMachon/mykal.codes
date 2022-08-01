export const getNonDraftPosts = (posts: Array<any>) => {
  const nonDraftPosts = posts.filter((post) => {
    return !post.frontmatter?.draft || post.frontmatter?.draft == false;
  });
  return nonDraftPosts;
};

export const getSortedPosts = (posts: Array<any>) => {
  const sortedPosts = posts.sort(
    // @ts-ignore
    (a, b) => new Date(b.frontmatter.pubDate) - new Date(a.frontmatter.pubDate)
  );
  return sortedPosts;
};

/**
 * gets a sibling of the passed in post; This can be a previous post, or the next post
 *
 * @param {number} postIdx: the index of the current post in the posts param
 * @param {Array<Post>} posts: an array of all the posts in the collection being searched
 * @param {'prev'|'next'} relation: what sibling type we'd like to find, previous post, or next post
 *
 * @returns {Post|null} either a related post, or null if no such post exists
 */
export const getSiblingPost = (
  postIdx: number,
  posts: Array<any>,
  relation: 'prev' | 'next'
) => {
  try {
    // get the index of the sibling post, and select it out of the posts array
    const siblingPostIdx = relation === 'prev' ? postIdx + 1 : postIdx - 1;
    const siblingPost = posts[siblingPostIdx];

    // if this post is a draft, recurse on this function until a non-draft sibling is found
    if (siblingPost.frontmatter?.draft === true) {
      return getSiblingPost(siblingPostIdx, posts, relation);
    }

    // if the sibling post is not a draft, and exists, then return it.
    return siblingPost;
  } catch (err) {
    // if an index out of bound error is thrown by the function, return null as there is no sibling post
    return null;
  }
};
