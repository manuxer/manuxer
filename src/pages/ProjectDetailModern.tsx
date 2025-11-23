import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2, X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import amazonLogo from "@/assets/amazon-phone-logo.png";

// assets from ESS
import ess1 from "@/assets/ess/users.png";
import ess2 from "@/assets/ess/personas.png";
import ess3 from "@/assets/ess/ia.png";
import ess4 from "@/assets/ess/layout.png";
import ess5 from "@/assets/ess/ds.png";
import ess6 from "@/assets/ess/wireframes.png";
import ess7 from "@/assets/ess/hifi.png";
import ess8 from "@/assets/ess/ally.png";
import ess9 from "@/assets/ess/research.png";
import ess10 from "@/assets/ess/process.png";
import ess11 from "@/assets/ess/userflow.png";

const projects = [
  {
    id: 10,
    title: "Personal information management in AtoZ",
    category: "UX | Product Design | Research",
    client: "Amazon",
    duration: "6 months",
    year: "2022-2023",
    role: "Product Designer, UX Researcher",
    description: "Self-service personal information management system for Amazon's global workforce",
    overview: "Designed a comprehensive self-service personal information management system for Amazon's worldwide workforce of 1.6M+ employees. The project aimed to deprecate a third-party tool (PeopleSoft) and build an in-house HCM tool that provides global employees with the ability to manage their personal information through intuitive self-service capabilities.",
    challenge: "Employees' personal information management experience was fragmented across different products and modalities that were inconsistent with each other. Discoverability was a major issue, and employees were bound to rely on HR associates to make changes to their personal information. The existing system lacked a unified, accessible interface for managing diverse types of personal data.",
    solution: "Created a centralized, mobile-first personal information management hub within the AtoZ app. The solution provides employees with one place to manage all their personal information including names, contact details, emergency contacts, addresses, job details, work authorization, and education information. The design emphasizes intuitive information architecture, self-service capabilities, and accessibility across all user segments.",
    outcome: "Successfully enabled self-service personal information management for 1.6M+ global Amazon employees. Deprecated third-party PeopleSoft tool, moving to in-house HCM solution. Improved discoverability through clear information categorization and reduced dependency on HR associates for routine updates.",
    imageUrl: amazonLogo,
    impact: {
      icon: "↗",
      text: "Empowered 1.6M+ users globally with self-service capabilities"
    },
    pdfUrl: "/Port_M_compressed.pdf",
    sections: [
      {
        title: "Research & Discovery",
        images: [
          { src: ess1, alt: "End users" },
          { src: ess2, alt: "Employee personas" }
        ]
      },
      {
        title: "Information Architecture",
        images: [
          { src: ess3, alt: "IA structure" },
          { src: ess11, alt: "User flows" }
        ]
      },
      {
        title: "Design System Integration",
        images: [
          { src: ess5, alt: "Design system components" }
        ]
      },
      {
        title: "Design & Prototyping",
        images: [
          { src: ess6, alt: "Wireframes" },
          { src: ess7, alt: "High fidelity designs" }
        ]
      }
    ],
    keyFeatures: [
      "Centralized personal information hub with clear categorization",
      "Self-service editing and changes",
      "Mobile-optimized responsive design"
    ],
    technologies: ["Amazon Stencil Design System", "Figma", "Mobile-first responsive design", "Accessibility guidelines"],
  }
];

const ProjectDetailModern = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "10");
  const { toast } = useToast();
  const navigate = useNavigate();

  const project = projects.find(p => p.id === projectId) || projects[0];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordSubmit = () => {
    if (passwordInput === "manuxer@2025") {
      setIsPasswordModalOpen(false);
      setPasswordInput("");
      toast({
        title: "Access Granted",
        description: "Opening project...",
      });
    } else {
      toast({
        title: "Access Denied",
        description: "Incorrect password. Please try again.",
        variant: "destructive",
      });
      setPasswordInput("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Image */}
        <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>

        {/* Project Header - Full Width */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <Button asChild variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all" size="sm">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>

            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              <div className="lg:col-span-2">
                <p className="text-sm font-medium text-muted-foreground mb-4">{project.category}</p>
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">{project.title}</h1>
                <p className="text-xl text-muted-foreground max-w-2xl">{project.description}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Company</p>
                  <p className="text-lg font-semibold">{project.client}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Timeline</p>
                  <p className="text-lg font-semibold">{project.duration}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">Year</p>
                  <p className="text-lg font-semibold">{project.year}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">My Role</p>
                  <p className="text-lg font-semibold">{project.role}</p>
                </div>
              </div>
            </div>

            {/* Impact Section */}
            <div className="bg-orange-50 border border-orange-200/50 rounded-2xl p-8 mb-16">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-orange-600 pt-1">{project.impact.icon}</div>
                <div>
                  <h3 className="text-sm font-bold text-orange-600 uppercase tracking-wider mb-2">IMPACT</h3>
                  <p className="text-lg font-semibold text-gray-800">{project.impact.text}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Overview Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{project.overview}</p>
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-3">Challenge</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.challenge}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3">Solution</h3>
                  <p className="text-muted-foreground leading-relaxed">{project.solution}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Design Process Sections with Images */}
        {project.sections && project.sections.map((section, idx) => (
          <section key={idx} className={`w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 ${idx % 2 === 0 ? 'bg-white' : 'bg-muted/30'}`}>
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold mb-12">{section.title}</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {section.images.map((image, imgIdx) => (
                  <div
                    key={imgIdx}
                    className="relative group cursor-pointer rounded-xl overflow-hidden h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                    onClick={() => image.src && setSelectedImage(image.src)}
                  >
                    {image.src ? (
                      <>
                        <img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                          <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </>
                    ) : (
                      <div className="flex flex-col items-center justify-center text-gray-500">
                        <div className="w-12 h-12 bg-gray-400 rounded-lg mb-3"></div>
                        <p className="text-sm font-medium">{image.alt}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* Outcome Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Outcome</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">{project.outcome}</p>

            {/* Key Features */}
            <h3 className="text-2xl font-bold mb-8">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {project.keyFeatures.map((feature, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-6 w-6 rounded-full bg-primary/10 text-primary">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold">{feature}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Technologies */}
            <h3 className="text-2xl font-bold mb-6">Technologies & Tools</h3>
            <div className="flex flex-wrap gap-3 mb-16">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 bg-muted rounded-full text-sm font-medium text-muted-foreground">
                  {tech}
                </span>
              ))}
            </div>

            {/* PDF Link */}
            {project.pdfUrl && (
              <div className="bg-muted/50 rounded-xl p-8 flex items-center justify-between">
                <div>
                  <h4 className="font-semibold mb-1">Full Presentation</h4>
                  <p className="text-sm text-muted-foreground">View the complete case study PDF</p>
                </div>
                <Button onClick={() => window.open(project.pdfUrl, '_blank')}>
                  View PDF
                </Button>
              </div>
            )}
          </div>
        </section>

        <div className="container-custom">
          <ContactButton />
        </div>
      </main>

      <Footer />

      {/* Image Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      )}

      {/* Password Modal */}
      <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
        <DialogContent>
          <div className="space-y-4 py-4">
            <h2 className="text-lg font-semibold">Protected project</h2>
            <Input
              type="password"
              placeholder="Enter password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handlePasswordSubmit();
                }
              }}
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => {
                setIsPasswordModalOpen(false);
                setPasswordInput("");
              }}>
                Cancel
              </Button>
              <Button onClick={handlePasswordSubmit}>
                Submit
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetailModern;
