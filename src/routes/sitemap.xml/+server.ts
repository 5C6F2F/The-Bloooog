import { type RequestHandler } from "@sveltejs/kit";
import * as sitemap from "super-sitemap";
import { getPosts } from "$lib/getPosts";
import type { Post } from "$lib/types";

export const GET: RequestHandler = async () => {
  const allPosts = await getPosts();
  const { posts, tags } = await getPostsAndTags(allPosts);

  return await sitemap.response({
    origin: "https://the-bloooog.pages.dev",
    paramValues: {
      "/blog/[slug]": posts,
      "/blog/tag/[tag]": tags,
    },
    defaultPriority: 0.5,

    // @ts-ignore
    processPaths: (paths: sitemap.PathObj[]) => {
      return paths;
    },
  });
};

async function getPostsAndTags(allPosts: Post[]) {
  const posts = allPosts.map((post) => ({
    values: [post.slug],
    lastmod: post.updateDate || post.date,
  }));

  const allTags = allPosts.flatMap((post) => post.tags);
  const tags = [...new Set(allTags)];

  return { posts, tags };
}
