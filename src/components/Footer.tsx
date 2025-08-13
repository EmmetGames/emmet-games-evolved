
const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-primary mb-4">
              EMMET<span className="text-accent">GAMES</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Game developer from Melbourne, Australia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="/#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="/#games" className="hover:text-primary transition-colors">Games</a></li>
              <li><a href="/#blog" className="hover:text-primary transition-colors">Dev Log</a></li>
              <li><a href="/#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Emmet Games. All rights reserved. Built with passion for gaming.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;