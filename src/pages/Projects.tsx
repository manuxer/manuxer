
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactButton from "@/components/ContactButton";

// Sample project data (same as in Index)
const projects = [
  {
    id: 10,
    title: "Personal information management in AtoZ",
    category: "UX | Product design | Research",
    description: "Self-service personal information management system for Amazon's global workforce, improving discoverability and employee autonomy",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
  },
  {
    id: 7,
    title: "Accommodations intake redesign",
    category: "UX | Product design | Research",
    description: "Redesigning the accommodations intake process to improve user experience and efficiency",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
  },
  {
    id: 9,
    title: "ALICE - Accommodations & leave intake care expert",
    category: "UX | Product design | Research | Gen AI",
    description: "A conversational Gen AI system for streamlining disability and leave services intake, based on research with employees and ops associates",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
  },
  {
    id: 8,
    title: "Communication on case status",
    category: "UX | Product design | Research",
    description: "Improving communication transparency between case managers and employees in the disability leave process",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
  },
  {
    id: 2,
    title: "Usability evaluation and interaction design",
    category: "UX | Research",
    description: "Usability analysis and redesign of the Postal Service website",
    imageUrl: "https://manuxer.com/files/USPS/Logo/USPS_logo.png",
  },
  {
    id: 3,
    title: "Accessibility evaluation and inclusive design",
    category: "Accessibility",
    description: "Accessibility evaluation and remediation of the MBTA intranet website",
    imageUrl: "https://manuxer.com/files/MBTA/img/MBTA-hero.jpeg",
  },
  {
    id: 4,
    title: "My experiments",
    category: "UI/UX",
    description: "A collection of my design experiments",
    imageUrl: "https://manuxer.com/files/Experiments/VisualSearch.png",
  },
  {
    id: 5,
    title: "Usability engineering",
    category: "UX specialist",
    description: "Design - Evaluate - Iterate",
    imageUrl: "https://manuxer.com/img/UW.png",
  },
  {
    id: 6,
    title: "My artwork",
    category: "Artwork / Paintings",
    description: "An artist is a simplifier.. Art is the elimination of the unnecessary!",
    imageUrl: "https://manuxer.com/files/MyPaintings/1.jpg",
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
            <h1 className="mb-6">Work</h1>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground">
              A collection of my work spanning UX research, product design, accessibility, and creative experiments.
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
