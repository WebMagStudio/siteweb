import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type BlogMeta = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image?: string;
};

export type BlogPost = {
  frontmatter: BlogMeta;
  Content: React.FC;
  slug: string;
};

export async function getAllBlogPosts(): Promise<BlogMeta[]> {
  const files = fs.readdirSync(BLOG_DIR);

  const posts = files.map((filename) => {
    const filePath = path.join(BLOG_DIR, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);

    const slug = filename.replace(/\.mdx?$/, "");

    return {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
    };
  });

  // Trier par date descendante
  return posts.sort((a, b) => +new Date(b.date) - +new Date(a.date));
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | null> {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const source = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(source);

  const mdxSource = await compileMDX({
    source: content,
    components: {},
  });

  return {
    frontmatter: {
      slug,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      author: data.author,
      category: data.category,
    },
    Content: mdxSource.Content,
    slug,
  };
}
