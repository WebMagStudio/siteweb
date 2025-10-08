import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";
import { mdxComponents } from "./mdx-components";

export const Mdx = ({ children }: { children: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote source={children} components={mdxComponents} />
    </Suspense>
  );
};


// src/features/mdx/Mdx.tsx
// import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"; // version RSC pour App Router

// type MdxProps = {
//   source: MDXRemoteSerializeResult;
// };

// export const Mdx = ({ source }: MdxProps) => {
//   return <MDXRemote {...source} />;
// };
