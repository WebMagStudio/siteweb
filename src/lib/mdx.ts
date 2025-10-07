import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const contentPath = path.join(process.cwd(), "content", "blog");

export function getPostSlugs() {
  return fs.readdirSync(contentPath).filter((file) => file.endsWith(".mdx"));
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(contentPath, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    meta: data,
    content,
  };
}

export async function getSerializedPost(slug: string) {
  const { content, meta } = getPostBySlug(slug);
  const mdxSource = await serialize(content);
  return { mdxSource, meta };
}
