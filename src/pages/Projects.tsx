
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import ContactButton from "@/components/ContactButton";

// Sample project data (same as in Index)
const projects = [
  {
    id: 8,
    title: "Communication on Case Status",
    category: "UX | Product Design | Research",
    description: "Improving communication transparency between case managers and employees in the disability leave process",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
  },
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
  {
    id: 5,
    title: "Usability Engineering",
    category: "UX Specialist",
    description: "Design - Evaluate - Iterate",
    imageUrl: "https://manuxer.com/img/UW.png",
  },
  {
    id: 6,
    title: "My Artwork",
    category: "Artwork / Paintings",
    description: "An artist is a simplifier.. Art is the elimination of the unnecessary!",
    imageUrl: "https://manuxer.com/files/MyPaintings/1.jpg",
  },
  {
    id: 7,
    title: "Accommodations Intake Redesign",
    category: "UX | Product Design | Research",
    description: "Redesigning the accommodations intake process to improve user experience and efficiency",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
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
