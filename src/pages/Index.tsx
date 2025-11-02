
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactButton from "@/components/ContactButton";
import { FileText } from "lucide-react";

// Sample project data
const featuredProjects = [
  {
    id: 1,
    title: "User Experience Design | NDA",
    category: "UX | Product design | Research",
    description: "User experience design of enterprise products impacting over 1.6M users",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
  },
  {
    id: 2,
    title: "Usability Evaluation and Interaction Design",
    category: "UX | Research",
    description: "Usability analysis and redesign of the Postal Service website",
    imageUrl: "https://manuxer.com/files/USPS/Logo/USPS_logo.png",
  },
  {
    id: 3,
    title: "Accessibility Evaluation and Inclusive Design",
    category: "Accessibility",
    description: "Accessibility evaluation and remediation of the MBTA intranet website",
    imageUrl: "https://manuxer.com/files/MBTA/img/MBTA-hero.jpeg",
  },
  {
    id: 4,
    title: "My Experiments",
    category: "UI/UX",
    description: "A collection of my design experiments",
    imageUrl: "https://manuxer.com/files/Experiments/VisualSearch.png",
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
                Product, User experience, Interaction designer at Amazon
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">View Work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="mailto:manuxdesign@gmail.com">
                    Get in Touch
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Projects */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom">
            <h2 className="mb-12 text-center">Featured Projects</h2>
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
                <Link to="/projects">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* About Preview */}
        <section className="py-24">
          <div className="container-custom">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="mb-6">About Me</h2>
                <p className="mb-6 text-lg">
                  Product, User experience, and Interaction designer currently working at Amazon, specializing in enterprise products that impact over 1.6M users.
                </p>
                <p className="mb-8 text-lg">
                  I focus on creating inclusive and accessible design solutions through usability engineering, research, and iterative design processes.
                </p>
                <div className="space-y-2 text-sm mb-8">
                  <p>📍 Maryland, USA</p>
                  <p>📧 <a href="mailto:manuxdesign@gmail.com" className="hover:underline">manuxdesign@gmail.com</a></p>
                  <p>📱 <a href="tel:240-408-9520" className="hover:underline">(240) 408-9520</a></p>
                </div>
                <Button asChild>
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <img 
                  src="https://manuxer.com/img/BCard%20copy.png"
                  alt="manuxer, UX Designer"
                  className="w-full h-auto rounded"
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
