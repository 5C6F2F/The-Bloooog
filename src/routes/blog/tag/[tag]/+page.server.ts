import { getPosts } from "$lib/getPosts";
import { groupPostsByYear } from "$lib/groupPostsByYear.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const posts = await getPosts();
  const tag = params.tag;
  const taggedPosts = posts.filter((post) => post.tags.includes(tag));

  if (taggedPosts.length === 0) {
    error(404, `タグ "${tag}" の記事は見つかりませんでした`);
  }

  const groupedTaggedPosts = groupPostsByYear(taggedPosts);

  return {
    tag,
    posts: groupedTaggedPosts,
  };
}
