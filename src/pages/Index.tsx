
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
    title: "Finance App Redesign",
    category: "Mobile App",
    description: "Redesigning a banking application to improve user experience and accessibility for all users.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Design",
    description: "Creating an intuitive shopping experience with improved conversion rates and user engagement.",
    imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    category: "Web Application",
    description: "Designing a dashboard for health professionals to monitor patient data and trends.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "Mobile & Web App",
    description: "Streamlining the process of booking travel accommodations and experiences.",
    imageUrl: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
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
                Creating impactful digital experiences through thoughtful design
              </h1>
              <p className="text-xl md:text-2xl mb-10 text-muted-foreground">
                UX Designer specializing in creating intuitive, accessible, and beautiful digital products that solve real user problems.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg">
                  <Link to="/projects">View Projects</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link to="/resume">
                    <FileText className="mr-2 h-4 w-4" />
                    Resume
                  </Link>
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
                <h2 className="mb-6">Hi, I'm Jane Doe</h2>
                <p className="mb-6 text-lg">
                  A UX designer with over 5 years of experience creating digital products that balance business goals with user needs.
                </p>
                <p className="mb-8 text-lg">
                  I focus on creating inclusive and accessible design solutions that help people accomplish their goals effectively.
                </p>
                <Button asChild>
                  <Link to="/about">More About Me</Link>
                </Button>
              </div>
              <div className="bg-muted/30 rounded-lg p-4">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Jane Doe, UX Designer"
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
