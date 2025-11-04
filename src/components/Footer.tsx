
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-12 mt-24">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 flex items-center gap-2">
            <img 
              src="/lovable-uploads/dc5f6271-b4ae-4ce0-b1fe-3878571be0f1.png" 
              alt="Manuxer Logo" 
              className="h-6 w-auto"
            />
            <Link to="/" className="text-lg font-medium font-mono hover:opacity-80 transition-opacity">
              Manu
            </Link>
            <p className="mt-1 text-sm text-muted-foreground">
              UX Designer based in DMV
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <Link to="/" className="text-sm hover:text-foreground/80 transition-colors">
              Home
            </Link>
            <Link to="/projects" className="text-sm hover:text-foreground/80 transition-colors">
              Projects
            </Link>
            <Link to="/about" className="text-sm hover:text-foreground/80 transition-colors">
              About
            </Link>
            <Link to="/resume" className="text-sm hover:text-foreground/80 transition-colors">
              Resume
            </Link>
            <a 
              href="mailto:manuxdesign@gmail.com" 
              className="text-sm hover:text-foreground/80 transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center md:text-left">
            <p className="text-xs text-muted-foreground">
              © {currentYear} Manu. All rights reserved.
            </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
