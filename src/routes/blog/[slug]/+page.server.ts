import { getPosts } from "$lib/getPosts.js";
import { error } from "@sveltejs/kit";

export async function load({ params }) {
  const post = (await getPosts()).find((post) => post.slug == params.slug);

  if (!post) {
    return { post: error(404, "記事が見つかりませんでした") };
  }

  return {
    post: {
      title: post.title,
      slug: post.slug,
      date: post.date,
      updateDate: post.updateDate,
      tags: post.tags,
      content: post.content,
    },
  };
}
