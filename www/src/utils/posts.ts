export const getNonDraftPosts = (posts: Array<any>) => {
  const nonDraftPosts = posts.filter((post) => {
    return !post.frontmatter?.draft || post.frontmatter?.draft == false;
  });
  return nonDraftPosts;
};

export const getSortedPosts = (posts: Array<any>) => {
  const sortedPosts = posts.sort(
    // @ts-ignore
    (a, b) => new Date(b.data.pubDate) - new Date(a.data.pubDate)
  );
  return sortedPosts;
};