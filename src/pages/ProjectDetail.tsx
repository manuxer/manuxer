
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

// Sample project data (expanded version of the data in other files)
const projects = [
  {
    id: 1,
    title: "Finance App Redesign",
    category: "Mobile App",
    client: "FinTech Solutions Inc.",
    duration: "3 months",
    year: "2023",
    role: "Lead UX/UI Designer",
    description: "Redesigning a banking application to improve user experience and accessibility for all users.",
    challenge: "The existing app had poor usability metrics and high drop-off rates during key financial transactions. Users reported confusion with navigation and task completion difficulty.",
    solution: "I conducted extensive user research to identify pain points, then redesigned the information architecture and core user flows. The new design focused on clarity, accessibility, and providing contextual guidance during complex financial tasks.",
    outcome: "The redesigned app saw a 45% increase in user engagement, 32% reduction in support tickets, and a 27% increase in successful transaction completions.",
    imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    processImages: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "E-commerce Platform",
    category: "Web Design",
    client: "StyleBoutique",
    duration: "4 months",
    year: "2023",
    role: "UX Designer & Researcher",
    description: "Creating an intuitive shopping experience with improved conversion rates and user engagement.",
    challenge: "The client's previous website had an outdated design, poor mobile experience, and a complicated checkout process leading to cart abandonment.",
    solution: "I reimagined the entire shopping experience with a focus on product discovery, streamlined checkout, and mobile responsiveness. Applied user-centered design principles to create an intuitive interface that guides users through their shopping journey.",
    outcome: "The new platform achieved a 38% increase in conversion rate, 52% decrease in cart abandonment, and a 64% increase in mobile purchases.",
    imageUrl: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    processImages: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1586282391129-76a6df230234?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Health Tracking Dashboard",
    category: "Web Application",
    client: "HealthMetrics",
    duration: "5 months",
    year: "2022",
    role: "UX/UI Designer",
    description: "Designing a dashboard for health professionals to monitor patient data and trends.",
    challenge: "Healthcare providers were struggling with a complex legacy system that made it difficult to access critical patient information quickly and efficiently.",
    solution: "I developed a comprehensive dashboard that visualizes patient health metrics with clear hierarchy and information architecture. The design incorporates accessibility features and customizable views for different healthcare specialties.",
    outcome: "The new dashboard reduced time spent accessing patient information by 40% and improved diagnostic accuracy according to user feedback. 92% of healthcare providers reported high satisfaction with the new system.",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    processImages: [
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1506784365847-bbad939e9335?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Travel Booking Platform",
    category: "Mobile & Web App",
    client: "WanderWise",
    duration: "6 months",
    year: "2022",
    role: "Product Designer",
    description: "Streamlining the process of booking travel accommodations and experiences.",
    challenge: "The client wanted to create a platform that simplified the complex process of planning and booking travel across multiple services (flights, hotels, activities).",
    solution: "I designed a cross-platform solution that unified the booking experience while maintaining context and continuity. The interface uses progressive disclosure to manage complexity and features personalized recommendations based on user preferences.",
    outcome: "The platform launched to positive user reviews with a 4.7/5 average rating. Users complete bookings 35% faster than industry average, and the company has seen 85% user retention after 3 months.",
    imageUrl: "https://images.unsplash.com/photo-1476900543704-4312b78632f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    processImages: [
      "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
      "https://images.unsplash.com/photo-1616628188539-6be43f0e5f36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1606103920295-592aabd414df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  
  // Find the current project
  const project = projects.find(p => p.id === projectId) || projects[0];
  
  // Calculate next project ID
  const nextProjectId = projectId < projects.length ? projectId + 1 : 1;
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[70vh] relative overflow-hidden">
          <img 
            src={project.imageUrl} 
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white">
            <div className="container-custom">
              <p className="text-sm md:text-base mb-2 opacity-90">{project.category}</p>
              <h1 className="text-3xl md:text-5xl font-semibold mb-2">{project.title}</h1>
            </div>
          </div>
        </div>
        
        {/* Project Info */}
        <section className="py-12 md:py-20">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-24">
              <div className="md:w-2/3">
                <Button asChild variant="ghost" className="mb-6 pl-0 hover:pl-2 transition-all" size="sm">
                  <Link to="/projects">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Projects
                  </Link>
                </Button>
                
                <h2 className="text-3xl font-semibold mb-6">Overview</h2>
                <p className="text-lg mb-6">{project.description}</p>
                
                <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                <p className="mb-6">{project.challenge}</p>
                
                <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
                <p className="mb-6">{project.solution}</p>
                
                <h3 className="text-2xl font-semibold mb-4">Outcome</h3>
                <p className="mb-10">{project.outcome}</p>
                
                {/* Process Images */}
                <div className="mt-12">
                  <h3 className="text-2xl font-semibold mb-6">Design Process</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.processImages.map((img, index) => (
                      <div key={index} className="rounded-lg overflow-hidden">
                        <img 
                          src={img} 
                          alt={`Design process for ${project.title}`}
                          className="w-full h-auto"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-muted rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-medium mb-4">Project Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">Client</dt>
                      <dd className="font-medium">{project.client}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Year</dt>
                      <dd className="font-medium">{project.year}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">Duration</dt>
                      <dd className="font-medium">{project.duration}</dd>
                    </div>
                    <div>
                      <dt className="text-sm text-muted-foreground">My Role</dt>
                      <dd className="font-medium">{project.role}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Next Project */}
        <section className="py-16 bg-muted/30">
          <div className="container-custom text-center">
            <p className="text-sm text-muted-foreground mb-4">Next Project</p>
            <h3 className="text-2xl font-medium mb-6">
              {projects.find(p => p.id === nextProjectId)?.title}
            </h3>
            <Button asChild>
              <Link to={`/projects/${nextProjectId}`}>View Project</Link>
            </Button>
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

export default ProjectDetail;
