export const postTypes = ['links', 'notes', 'photos', 'posts']

export const getNonDraftPosts = (posts: Array<any>) => {
  const nonDraftPosts = posts.filter((post) => {
    return post.data.draft || post.data.draft == false;
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