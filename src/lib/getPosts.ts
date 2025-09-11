import matter from "gray-matter";
import { marked } from "marked";
import type { Post } from "./types";

export async function getPosts(): Promise<Post[]> {
  const markdowns: Record<string, { default: string }> = import.meta.glob(
    "$posts/**/*.md",
    {
      eager: true,
      query: "?raw",
    },
  );

  const posts = await extractPosts(markdowns);

  // 新しい順にソート
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

async function extractPosts(
  posts: Record<string, { default: string }>,
): Promise<Post[]> {
  const promisePosts = Object.values(posts).map(async (contents) => {
    const { data, content: content_string } = matter(contents.default);
    const content = await marked(content_string);

    return {
      title: data.title,
      slug: data.slug,
      date: data.date,
      updateDate: data.updateDate,
      tags: data.tags || [],
      content,
    } as Post;
  });

  return await Promise.all(promisePosts);
}
