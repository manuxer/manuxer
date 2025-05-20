
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src="/lovable-uploads/dc5f6271-b4ae-4ce0-b1fe-3878571be0f1.png" 
            alt="Jane Doe Logo" 
            className="h-8 w-auto"
          />
          <span className="font-mono text-xl font-semibold">Jane Doe</span>
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm hover:text-foreground/80 transition-colors">Home</Link>
          <Link to="/projects" className="text-sm hover:text-foreground/80 transition-colors">Projects</Link>
          <Link to="/about" className="text-sm hover:text-foreground/80 transition-colors">About</Link>
          <Link to="/resume" className="text-sm hover:text-foreground/80 transition-colors">Resume</Link>
          <Button asChild size="sm">
            <Link to="mailto:contact@janedoe.com">
              Contact
            </Link>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 w-full h-[calc(100vh-4rem)] bg-background p-6 animate-fade-in">
            <nav className="flex flex-col gap-6">
              <Link 
                to="/" 
                className="text-lg hover:text-foreground/80 transition-colors"
                onClick={toggleMenu}
              >Home</Link>
              <Link 
                to="/projects" 
                className="text-lg hover:text-foreground/80 transition-colors"
                onClick={toggleMenu}
              >Projects</Link>
              <Link 
                to="/about" 
                className="text-lg hover:text-foreground/80 transition-colors"
                onClick={toggleMenu}
              >About</Link>
              <Link 
                to="/resume" 
                className="text-lg hover:text-foreground/80 transition-colors"
                onClick={toggleMenu}
              >Resume</Link>
              <Button className="mt-4" asChild>
                <Link to="mailto:contact@janedoe.com">
                  Contact
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
