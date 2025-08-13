import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Games", href: "#games" },
    { name: "Dev Log", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold text-primary">
            EMMET<span className="text-accent">GAMES</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => {
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    if (window.location.pathname !== '/') {
                      window.location.href = `/${item.href}`;
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href.startsWith('#') ? `/${item.href}` : item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  setIsOpen(false);
                  if (item.href.startsWith('#')) {
                    e.preventDefault();
                    if (window.location.pathname !== '/') {
                      window.location.href = `/${item.href}`;
                    } else {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' });
                    }
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;