
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactButton from "@/components/ContactButton";
import { FileText } from "lucide-react";
import manuLogoQr from "@/assets/manu-logo-qr.png";
import manuLogo from "@/assets/manuxer-logo.png";
import amazonLogo from "@/assets/amazon-phone-logo.png";

// Sample project data
const featuredProjects = [
  {
    id: 10,
    title: "Personal information management in AtoZ",
    category: "UX | Product design | Research",
    description: "Self-service personal information management system for Amazon's global workforce",
    imageUrl: amazonLogo,
  },
  {
    id: 2,
    title: "Usability evaluation and interaction design",
    category: "UX | Research",
    description: "Usability analysis and redesign of the Postal Service website",
    imageUrl: "https://manupeethambar.github.io/manuxer/files/USPS/Logo/USPS_logo.png",
  },
  {
    id: 3,
    title: "Accessibility evaluation and inclusive design",
    category: "Accessibility",
    description: "Accessibility evaluation and remediation of the MBTA intranet website",
    imageUrl: "https://manupeethambar.github.io/manuxer/files/MBTA/img/MBTA-hero.jpeg",
  },
  {
    id: 4,
    title: "My experiments",
    category: "UI/UX",
    description: "A collection of my design experiments",
    imageUrl: "https://manupeethambar.github.io/manuxer/files/Experiments/VisualSearch.png",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-24 md:py-32">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="mb-6">
                Hi, I am Manu
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
                Product design leader at Amazon
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">View work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:manuxdesign@gmail.com">
                    Get in touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="mb-12 text-center">Featured projects</h2>
            <div className="project-grid">
              {featuredProjects.map((project) => (
                <ProjectCard 
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  category={project.category}
                  description={project.description}
                  imageUrl={project.imageUrl}
                />
              ))}
            </div>
            <div className="mt-16 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/projects">View all projects</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Preview */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">About me</h2>
                <p className="mb-6 text-lg">
                  Product, User experience, and Interaction designer currently working at Amazon, specializing in enterprise products that impact over 1.6M users.
                </p>
                <p className="mb-8 text-lg">
                  I focus on creating inclusive and accessible design solutions through usability engineering, research, and iterative design processes.
                </p>
                <Button asChild>
                  <Link to="/about">More about me</Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-8 flex items-center justify-center">
                <img 
                  src={manuLogoQr}
                  alt="Manu logo and QR code"
                  className="w-full h-auto max-w-md"
                />
              </div>
            </div>
          </div>
        </section>
        
        <div className="container-custom">
          <ContactButton />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
