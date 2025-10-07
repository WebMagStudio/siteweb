import { MDXRemote } from "next-mdx-remote-client/rsc";
import { Suspense } from "react";

export const Mdx = ({children} : { children: string }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MDXRemote source= {children} />
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
