import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { getFeaturedPost, getOtherPosts } from "@/data/blogPosts";

const BlogSection = () => {
  const featuredPost = getFeaturedPost();
  const otherPosts = getOtherPosts(4);

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Dev <span className="text-primary">Log</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Insights, tutorials, and thoughts on game development and the industry
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          <Card className="mb-12 bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="h-64 md:h-auto relative overflow-hidden">
                <img 
                  src={featuredPost?.image} 
                  alt={featuredPost?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                  {featuredPost?.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {featuredPost?.excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar size={16} className="mr-2" />
                  {featuredPost?.date}
                  <Clock size={16} className="ml-4 mr-2" />
                  {featuredPost?.readTime}
                </div>
                <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
                  <Link to="/blog">
                    Read More
                    <ArrowRight size={16} className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          </Card>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherPosts.map((post) => (
              <Card 
                key={post.title}
                className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 relative overflow-hidden">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-secondary to-muted"></div>
                  )}
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center text-xs text-muted-foreground mb-4">
                    <Calendar size={12} className="mr-1" />
                    {post.date}
                    <Clock size={12} className="ml-3 mr-1" />
                    {post.readTime}
                  </div>
                  
                  <Button variant="ghost" className="w-full justify-start p-0 h-auto text-primary hover:text-primary/80">
                    Read More
                    <ArrowRight size={14} className="ml-1" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
