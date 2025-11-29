import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

type NavItem = { name: string; href: string };

const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Games", href: "#games" },
  { name: "Dev Log", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

// small helper to detect "homepage" in a robust way (handles trailing slash)
const isHomepage = () => {
  if (typeof window === "undefined") return false;
  const p = window.location.pathname.replace(/\/+$/, "");
  return p === "" || p === "/";
};

const saveHashForLater = (hash: string) => {
  try {
    sessionStorage.setItem("scrollToHash", hash);
  } catch (e) {
    // ignore storage errors
  }
};

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();


  const handleClick = (e: React.MouseEvent, item: NavItem) => {
  const hash = item.href; // like "#about"

  if (!hash.startsWith("#")) return;  

  e.preventDefault();

  const onHome = location.pathname === "/";

  if (onHome) {
    // Smooth scroll immediately
    const el = document.querySelector(hash);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    return;
  }

  // NOT on home → navigate to home, store hash for after navigation
  sessionStorage.setItem("scrollToHash", hash);
  navigate("/");
};


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
              <button
                key={item.name}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => handleClick(e, item)}
              >
                {item.name}
              </button>
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
              <button
                key={item.name}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => handleClick(e, item)}
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
