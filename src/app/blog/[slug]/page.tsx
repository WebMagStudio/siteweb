// import { notFound } from "next/navigation";
// import { getBlogPostBySlug, getAllBlogPosts } from "~/lib/blog";
// import { Metadata } from "next";

// type Props = {
//   params: { slug: string };
// };

// export async function generateStaticParams() {
//   const posts = await getAllBlogPosts();
//   return posts.map((post) => ({ slug: post.slug }));
// }

// export async function generateMetadata({ params }: Props): Promise<Metadata> {
//   const post = await getBlogPostBySlug(params.slug);
//   if (!post) return {};
//   return {
//     title: post.frontmatter.title,
//     description: post.frontmatter.excerpt || "",
//   };
// }

// export default async function BlogPostPage({ params }: Props) {
//   const post = await getBlogPostBySlug(params.slug);
//   if (!post) return notFound();

//   //   const Content = post.content;
//   const { Content } = post;

//   return (
//     <article className="prose mx-auto py-10">
//       <h1>{post.frontmatter.title}</h1>
//       <p className="text-sm text-gray-500">
//         Par {post.frontmatter.author} • {post.frontmatter.date} •{" "}
//         {post.frontmatter.category}
//       </p>
//       <div className="mt-6">
//         <Content />
//       </div>
//     </article>
//   );
// }

// import { Mdx } from "~/features/mdx/Mdx";
// import { notFound } from "next/navigation";
// import { getPost } from "~/lib/posts";

// export default async function RoutePage(props: { params: { slug: string } }) {
//   const post = await getPost(props.params.slug);

//   if (!post) {
//     notFound();
//   }

//   return (
//     <div>
//       <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
//       <h1>{post.title}</h1>
//       <Mdx>{post.content}</Mdx>
//     </div>
//   );
// }

import { Mdx } from "~/features/mdx/Mdx";
import { notFound } from "next/navigation";
import { getPost } from "~/lib/posts";

export default async function RoutePage(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params; // ⬅ on attend la promesse
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="mx-3 my-12 flex flex-col items-center justify-center">
      <section className="mx-6 my-12">
        <p>{new Date(post.publishedAt).toLocaleDateString()}</p>
        <h1 className="text-3xl font-bold sm:text-5xl text-primary">{post.title}</h1>
        <Mdx>{post.content}</Mdx>
        {/* ou <Mdx source={post.content} /> selon ton composant */}
      </section>
    </main>
  );
}

