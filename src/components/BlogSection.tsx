import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const BlogSection = () => {
  const posts = [
    {
      title: "My Top 10 Video Games for 2024",
      excerpt: "A curated list of the most impactful games that shaped my development perspective this year.",
      date: "Dec 15, 2024",
      readTime: "8 min read",
      category: "Game Reviews",
      featured: true
    },
    {
      title: "Cabinet Complete",
      excerpt: "Building my custom arcade cabinet from scratch - lessons learned and tips for fellow developers.",
      date: "Nov 28, 2024",
      readTime: "12 min read",
      category: "Hardware"
    },
    {
      title: "To Plan A Mockingbird",
      excerpt: "Deep dive into narrative design and how classic literature influences modern game storytelling.",
      date: "Nov 10, 2024",
      readTime: "15 min read",
      category: "Game Design"
    },
    {
      title: "The Quest To Connect Consoles",
      excerpt: "Exploring cross-platform development challenges and solutions in modern game development.",
      date: "Oct 22, 2024",
      readTime: "10 min read",
      category: "Technical"
    }
  ];

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
              <div className="h-64 md:h-auto bg-gradient-to-br from-primary/20 to-accent/20 relative">
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
              </div>
              <div className="p-8 flex flex-col justify-center">
                <Badge variant="secondary" className="w-fit mb-3">
                  {posts[0].category}
                </Badge>
                <h3 className="text-2xl font-bold mb-4 text-foreground hover:text-primary transition-colors">
                  {posts[0].title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {posts[0].excerpt}
                </p>
                <div className="flex items-center text-sm text-muted-foreground mb-6">
                  <Calendar size={16} className="mr-2" />
                  {posts[0].date}
                  <Clock size={16} className="ml-4 mr-2" />
                  {posts[0].readTime}
                </div>
                <Button className="w-fit bg-primary hover:bg-primary/90 text-primary-foreground">
                  Read More
                  <ArrowRight size={16} className="ml-2" />
                </Button>
              </div>
            </div>
          </Card>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.slice(1).map((post) => (
              <Card 
                key={post.title}
                className="group bg-gradient-card border-border/50 overflow-hidden hover:shadow-glow-accent transition-all duration-500 hover:-translate-y-2"
              >
                <div className="h-48 bg-gradient-to-br from-secondary to-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
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
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All Posts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
