import path from "path";
import fs from "fs/promises";
import { z } from "zod";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "blog"); // on récupère le dossier qui contient le contenu

const PostSchema = z.object({
  title: z.string().min(15).max(65),
  description: z.string(),
  publishedAt: z.coerce.string(),
  published: z.boolean().optional().default(false),
});

type Post = z.infer<typeof PostSchema> & {
  slug: string;
  content: string;
};

export const getPosts = async () => {
  const files = await fs.readdir(postsDirectory); // on lit tous les fichiers
  const fileNames = files.filter((f) => f.endsWith(".mdx")); // on récupère uniquement les fichiers terminant par MDX

  const posts: Post[] = []; // on va récupérer les posts

  for await (const fileName of fileNames) {
    const fullPath = path.join(postsDirectory, fileName); // on récupère le path complet
    const fileContent = await fs.readFile(fullPath, "utf-8"); // on récupère le contenu du fichier
    const frontmatter = matter(fileContent); // lit le contenu brut d'un fichier markdown, extrait le frontmatter (métadonnées en haut du fichier) et le contenu markdown

    const safeData = PostSchema.safeParse(frontmatter.data); // on va vérifier que data correspond au schéma défini

    if (!safeData.success) {
      console.error(`Error parsing file: ${fileName}`);
      safeData.error.issues.forEach((issue) => {
        console.error(` - ${issue.path.join(" -> ")}: ${issue.message}`); // permet de savoir si on a oublié des données
      });
      continue;
    }

    if (!safeData.data.published && process.env.NODE_ENV !== "development") {
      continue;
    }

    posts.push({
      ...safeData.data,
      slug: fileName.replace(".mdx", ""),
      content: frontmatter.content,
    });
  }

  return posts;
};

export const getPost = async (slug: string) => {
  const posts = await getPosts();
  return posts.find((post) => post.slug === slug);
};
