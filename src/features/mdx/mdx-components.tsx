import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
    h1: ({ children }) => (
        <h1 className="text-4xl font-bold text-primary mb-6 mt-10 leading-tight">
            {children}
        </h1>
    ),
    h2: ({ children }) => (
        <h2 className="text-3xl font-bold text-primary mb-4 mt-8 leading-snug">
            {children}
        </h2>
    ),
    h3: ({ children }) => (
        <h3 className="text-2xl font-bold text-gray-800 mb-3 mt-6">
            {children}
        </h3>
    ),
    p: ({ children }) => (
        <p className="mb-4 text-gray-700 leading-relaxed text-lg">
            {children}
        </p>
    ),
    ul: ({ children }) => (
        <ul className="list-none mb-6 space-y-2 ml-4">
            {children}
        </ul>
    ),
    li: ({ children }) => (
        <li className="text-gray-700 leading-relaxed relative pl-6 before:content-['•'] before:absolute before:left-0 before:text-primary before:font-bold text-lg">
            {children}
        </li>
    ),
    strong: ({ children }) => (
        <strong className="font-bold text-gray-900">
            {children}
        </strong>
    ),
    hr: () => (
        <hr className="my-8 border-t-2 border-gray-200" />
    ),
    blockquote: ({ children }) => (
        <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 my-6">
            {children}
        </blockquote>
    ),
    code: ({ children }) => (
        <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-primary">
            {children}
        </code>
    ),
};