// src/pages/BlogPage.tsx
import { useParams, Link } from "react-router-dom";
import { getPostById } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import ScrollToTopOnMount from "@/components/ScrollToTopOnMount";

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "iframe"],
  attributes: {
    ...defaultSchema.attributes,
    iframe: ["src", "title", "allow", "allowfullscreen", "frameborder", "width", "height", "loading", "referrerpolicy"],
  },
};

export default function BlogPage() {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : null;

  if (!post) {
    return <p className="text-center mt-20">Blog post not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 px-6">
      <ScrollToTopOnMount />
      <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
        <ArrowLeft size={20} className="mr-2" />
        Back to All Posts
      </Link>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-muted-foreground mb-6">
        <span className="flex items-center gap-2"><Calendar size={16} />{post.date}</span>
        <span className="flex items-center gap-2"><Clock size={16} />{post.readTime}</span>
      </div>

      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkBreaks]}
        rehypePlugins={[rehypeHighlight, rehypeRaw, [rehypeSanitize, sanitizeSchema]]}
        components={{
          img: ({node, ...props}) => <img {...props} className="rounded-lg my-6 mx-auto" />,
          iframe: ({node, ...props}) => (
            <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
              <iframe {...props} className="w-full h-full" />
            </div>
          ),
        }}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
}