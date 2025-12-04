
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
import essIntro from "@/assets/ess/ess.png";
import aliceIntro from "@/assets/alice.png";
import commsImage from "@/assets/comms-case-status.png";
import asl from "@/assets/hermes/h26.png";

// Sample project data
const featuredProjects = [
  {
    id: 9,
    title: "Simplifying disability & leave management using AI",
    category: "UX | Product design | Research | Gen AI",
    description: "A conversational Gen AI system for streamlining disability and leave services intake, based on research with employees and ops associates",
    imageUrl: aliceIntro,
  },
  {
    id: 11,
    title: "AI Sign Language Interpretation Platform",
    category: "UX | Product Design | Research | AI Accessibility",
    description: "An AI-powered sign language interpretation service supporting workplace accessibility for Amazon's global operations",
    imageUrl: asl,
  },
  {
    id: 10,
    title: "Personal information management in AtoZ",
    category: "UX | Product design | Research",
    description: "Self-service personal information management system for Amazon's global workforce",
    imageUrl: essIntro,
  },
  {
    id: 8,
    title: "Communication on case status",
    category: "UX | Product design | Research",
    description: "Improving communication transparency between case managers and employees in the disability leave process",
    imageUrl: commsImage,
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
