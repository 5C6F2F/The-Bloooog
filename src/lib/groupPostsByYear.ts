import type { Post } from "$lib/types";

export function groupPostsByYear(posts: Post[]): Record<string, Post[]> {
  let groupedPosts = {} as Record<string, Post[]>;

  for (const post of posts) {
    const year = new Date(post.date).toLocaleDateString("ja-JP", {
      year: "numeric",
    });

    if (!groupedPosts[year]) {
      groupedPosts[year] = [];
    }

    groupedPosts[year].push(post);
  }

  return groupedPosts;
}
