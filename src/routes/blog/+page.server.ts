import { getPosts } from "$lib/getPosts";
import { groupPostsByYear } from "$lib/groupPostsByYear";

export async function load() {
  const posts = await getPosts();
  const groupedPosts = groupPostsByYear(posts);
  return { posts: groupedPosts };
}
