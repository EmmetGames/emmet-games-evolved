import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blogPosts";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm"; // GitHub-flavored markdown (tables, strikethrough, etc.)
import rehypeHighlight from "rehype-highlight"; // Code syntax highlighting
// Allow iframes in the sanitize schema (optional but safer if using sanitize)

const sanitizeSchema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames || []), "iframe"],
  attributes: {
    ...defaultSchema.attributes,
    iframe: [
      "src",
      "title",
      "allow",
      "allowfullscreen",
      "frameborder",
      "width",
      "height",
      "loading",
      "referrerpolicy",
    ],
  },
};

const AllBlogs = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const BlogCard = ({ post }: { post: BlogPost }) => (
    <Card 
      className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      onClick={() => setSelectedPost(post)}
    >
      <div className="relative overflow-hidden">
        <div className="aspect-[16/10] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-3">
          {post.title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <div className="flex items-center gap-1">
            <Calendar size={12} />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock size={12} />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Card>
  );

  const BlogPostView = ({ post }: { post: BlogPost }) => (
    <div className="max-w-4xl mx-auto">
      <Button
        variant="ghost"
        onClick={() => setSelectedPost(null)}
        className="mb-6 text-primary hover:text-primary/80"
      >
        <ArrowLeft size={20} className="mr-2" />
        Back to All Posts
      </Button>
      
      <article className="prose prose-lg max-w-none dark:prose-invert">        
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            {post.title}
          </h1>
          
          <div className="flex items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock size={16} />
              <span>{post.readTime}</span>
            </div>
          </div>
        </header>
        
        <article className="prose prose-lg max-w-none dark:prose-invert">
         <ReactMarkdown
          remarkPlugins={[remarkGfm, remarkBreaks]}
          rehypePlugins={[
            rehypeHighlight,
            rehypeRaw,
            [rehypeSanitize, sanitizeSchema],
          ]}
          components={{
              img: ({node, ...props}) => (
                <img {...props} className="rounded-lg my-6 mx-auto" />
              ),
              // Make iframes responsive + styled
              iframe: ({node, ...props}) => (
                <div className="my-6 aspect-video w-full overflow-hidden rounded-lg">
                  <iframe {...props} className="w-full h-full" />
                </div>
              ),
            }}
          >
          {post.content}
          </ReactMarkdown>
        </article>
      </article>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        {!selectedPost ? (
          <>
            {/* Header Section */}
            <section className="py-16 bg-gradient-hero">
              <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto text-center">
                  <Link 
                    to="/" 
                    className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-6"
                  >
                    <ArrowLeft size={20} className="mr-2" />
                    Back to Home
                  </Link>
                  
                  <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                    Dev Log
                  </h1>
                  
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    Insights, stories, and updates from the world of game development
                  </p>
                </div>
              </div>
            </section>

            {/* Blog Posts Grid */}
            <section className="py-20 bg-background">
              <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                  {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              </div>
            </section>
          </>
        ) : (
          <section className="py-20 bg-background">
            <div className="container mx-auto px-6">
              <BlogPostView post={selectedPost} />
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AllBlogs;