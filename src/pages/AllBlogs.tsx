// src/pages/AllBlogs.tsx
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { blogPosts, BlogPost } from "@/data/blogPosts";

const BlogCard = ({ post }: { post: BlogPost }) => (
  <Link to={`/blog/${post.id}`}>
    <Card className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2 cursor-pointer">
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
  </Link>
);

const AllBlogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="pt-20">
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
      </main>

      <Footer />
    </div>
  );
};

export default AllBlogs;
