import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

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

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, item: NavItem) => {
    // DEBUG: inspect values — open DevTools and enable "Preserve log" if you're navigating across pages
    console.log("nav click", { href: item.href, pathname: typeof window !== 'undefined' ? window.location.pathname : 'ssr', hash: typeof window !== 'undefined' ? window.location.hash : '' });

    // Add a breakpoint when DevTools are open
    // eslint-disable-next-line no-debugger
    debugger;

    if (!item.href.startsWith("#")) return; // normal external/internal link

    if (isHomepage()) {
      // already on home: prevent default and smooth scroll
      e.preventDefault();

      const el = document.querySelector(item.href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      } else {
        console.warn(`Element ${item.href} not found — retrying shortly`);
        // retry once after a small delay (useful if content mounts slightly later)
        setTimeout(() => document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" }), 200);
      }
    } else {
      // not on home: store the hash so the homepage can scroll after navigation
      saveHashForLater(item.href);
      // DO NOT preventDefault here — allow browser to navigate to /#hash
      // (if you use a client-side router like next/router you might instead want to call router.push)
    }
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
              <a
                key={item.name}
                href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
                onClick={(e) => handleClick(e, item)}
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
                href={item.href.startsWith("#") ? `/${item.href}` : item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors duration-300"
                onClick={(e) => {
                  setIsOpen(false);
                  handleClick(e, item);
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
