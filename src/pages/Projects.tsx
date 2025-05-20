
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactButton from "@/components/ContactButton";

// Sample project data (same as in Index)
const projects = [
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

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom text-center">
            <h1 className="mb-6">My Projects</h1>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
              A collection of my recent work across mobile and web platforms, 
              focusing on user experience and interface design.
            </p>
          </div>
        </section>
        
        {/* Projects Grid */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="project-grid">
              {projects.map((project) => (
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

export default Projects;
