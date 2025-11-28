
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText, Menu, X } from "lucide-react";
import manuLogo from "@/assets/manuxer-logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container-custom h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img 
            src={manuLogo} 
            alt="Manuxer Logo" 
            className="h-8 w-auto"
          />
        </Link>

        {/* Mobile menu button */}
        <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/projects" className={`text-sm transition-colors pb-2 border-b-2 ${isActive("/projects") ? "text-foreground border-b-black" : "text-foreground/60 hover:text-foreground/80 border-b-transparent"}`}>Projects</Link>
          <Link to="/about" className={`text-sm transition-colors pb-2 border-b-2 ${isActive("/about") ? "text-foreground border-b-black" : "text-foreground/60 hover:text-foreground/80 border-b-transparent"}`}>About</Link>
          <Link to="/resume" className={`text-sm transition-colors pb-2 border-b-2 ${isActive("/resume") ? "text-foreground border-b-black" : "text-foreground/60 hover:text-foreground/80 border-b-transparent"}`}>Resume</Link>
          <Button asChild size="sm">
            <a href="mailto:manuxdesign@gmail.com">
              Contact
            </a>
          </Button>
        </nav>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden fixed inset-0 top-16 z-50 w-full h-[calc(100vh-4rem)] bg-background p-6 animate-fade-in">
            <nav className="flex flex-col gap-6">
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
                <a href="mailto:manuxdesign@gmail.com">
                  Contact
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
