import { useParams, Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

// Project data from manuxer.com
const projects = [
  {
    id: 8,
    title: "Communication on Case Status",
    category: "UX | Product Design | Research",
    client: "Amazon - Disability Leave Services (DLS)",
    duration: "8 months",
    year: "2023-2024",
    role: "Lead Product Designer, UX Researcher",
    description: "Improving communication transparency between case managers and employees in the disability leave process",
    overview: "A comprehensive research and design initiative to improve communication between employees on disability leave and their case managers. The project focused on reducing anxiety, increasing transparency, and streamlining the case status communication process.",
    challenge: "Employees on disability leave experienced high levels of anxiety and uncertainty due to poor communication about their case status. Case managers were overwhelmed with redundant inquiries, taking time away from actual case processing. The existing system lacked transparency, leading to employee frustration and decreased trust in the DLS process.",
    solution: "Through extensive research with both employees and case managers, we designed a transparent communication system that provides real-time case status updates, automated notifications, and clear next steps. The solution balances employee need for information with case manager workflow efficiency.",
    outcome: "Reduced case status inquiries by 45%, improved employee satisfaction scores by 60%, and decreased case manager administrative workload by 30%. The new system provided employees with proactive updates while allowing case managers to focus on complex case work.",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
    pdfUrl: "/DLS_Communication_Case_Status.pdf",
    research: {
      methodology: "Mixed-methods research combining quantitative surveys and qualitative interviews",
      participants: {
        employees: {
          count: 47,
          demographics: "Employees on short-term and long-term disability leave across various Amazon sites",
          methods: ["One-on-one interviews (n=12)", "Remote usability testing (n=15)", "Survey responses (n=47)", "Journey mapping sessions (n=8)"]
        },
        caseManagers: {
          count: 18,
          demographics: "DLS case managers with 2-15 years of experience handling disability cases",
          methods: ["Contextual inquiry sessions (n=8)", "Workflow shadowing (n=6)", "Focus groups (n=2 groups, 5-6 participants each)", "Survey responses (n=18)"]
        }
      },
      keyFindings: [
        {
          finding: "Employee Anxiety & Uncertainty",
          details: "78% of employees reported high anxiety levels due to lack of communication about their case status. Many checked their email multiple times daily hoping for updates.",
          impact: "Employees felt 'in the dark' about their financial security and return-to-work timeline"
        },
        {
          finding: "Repetitive Inquiry Burden",
          details: "Case managers spent an average of 12 hours per week responding to status inquiries that could be automated. 65% of inquiries were about basic case status information.",
          impact: "Reduced time available for complex case work and meaningful employee support"
        },
        {
          finding: "Communication Gaps",
          details: "Critical case milestones were processed without employee notification. Employees learned about updates only when they proactively checked or called.",
          impact: "Created perception that 'nothing is happening' even when cases were actively being processed"
        },
        {
          finding: "Trust Issues",
          details: "Lack of transparency led to decreased trust in the DLS system. Employees questioned whether their cases were being handled properly.",
          impact: "Increased escalations and complaints to HR leadership"
        },
        {
          finding: "Information Asymmetry",
          details: "Case managers had detailed system information but lacked easy ways to share appropriate updates with employees. Employees had no visibility into case processing stages.",
          impact: "Misaligned expectations between what employees expected and what case managers could provide"
        }
      ],
      insights: [
        "Employees primarily want to know: 'Is my case being worked on?' and 'When can I expect a decision?'",
        "Case managers are willing to share status updates but need efficient, automated tools",
        "Proactive communication reduces anxiety more effectively than responsive communication",
        "Transparency about process stages helps employees understand realistic timelines",
        "Case managers value tools that reduce their administrative burden while improving employee experience"
      ]
    },
    processImages: [],
  },
  {
    id: 1,
    title: "User Experience Design | NDA",
    category: "UX | Product design | Research",
    client: "Amazon",
    duration: "Ongoing",
    year: "2021 - Present",
    role: "Product, User experience, Interaction designer",
    description: "User experience design and product strategy of enterprise products impacting over 1.5M users at Amazon.",
    challenge: "Designing enterprise products for a massive scale while maintaining usability and meeting the diverse needs of over 1.6 million users across various roles and workflows.",
    solution: "Applied user-centered design principles, conducted extensive research, and created scalable design systems that work across multiple product lines. Collaborated with cross-functional teams to ensure design solutions align with business goals and user needs.",
    outcome: "Successfully delivered user experience design for enterprise products serving 1.6M+ users, improving productivity and user satisfaction across Amazon's internal tools.",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
    processImages: [],
    isNDA: true,
    subProjects: [
      {
        title: "Project Ingress 1",
        description: "Password protected project",
        imageUrl: "/lovable-uploads/dc5f6271-b4ae-4ce0-b1fe-3878571be0f1.png",
        isPasswordProtected: true
      },
      {
        title: "Project Ingress 2",
        description: "Password protected project",
        imageUrl: "/lovable-uploads/dc5f6271-b4ae-4ce0-b1fe-3878571be0f1.png",
        isPasswordProtected: true
      },
      {
        title: "Project Ingress 3",
        description: "Password protected project",
        imageUrl: "/lovable-uploads/dc5f6271-b4ae-4ce0-b1fe-3878571be0f1.png",
        isPasswordProtected: true
      },
      {
        title: "Project Ingress 4",
        description: "Password protected project",
        imageUrl: "/lovable-uploads/dc5f6271-b4ae-4ce0-b1fe-3878571be0f1.png",
        isPasswordProtected: true
      }
    ]
  },
  {
    id: 2,
    title: "Usability Evaluation and Interaction Design",
    category: "UX | Research",
    client: "USPS",
    duration: "Multiple projects",
    year: "2020",
    role: "UX Designer",
    description: "Usability analysis and redesign of the Postal Service website",
    overview: "USPS.com is the digital storefront for United States Postal Service®. The site is an important and ever-growing part of the daily USPS® delivery system, providing 24-hour access to USPS® products and services.",
    challenge: "USPS.com needed continuous improvement to handle increased traffic (especially during COVID), improve customer experience, and reduce burden on Post Office™ locations. The site serves the American public (residential consumers), small and medium businesses, as well as foreign shippers.",
    solution: "Implemented a comprehensive UX strategy including usability testing, heuristic evaluations, and continuous improvement processes. Created Digital Style Guide (DSG) and UX Heuristics to ensure consistent customer experience. Worked with 10 domain-specific teams including Content Strategy, Design, Digital Analytics, and User Experience & UX Design.",
    outcome: "Successfully improved USPS.com's digital experience, helping it handle significant traffic increases during COVID-19. Delivered projects including PO Locator redesign and USPS® Online Postal Store improvements.",
    imageUrl: "https://manuxer.com/files/USPS/Logo/USPS_logo.png",
    processImages: [
      "https://manuxer.com/files/USPS/usps_ux/usps-hero1.png",
      "https://manuxer.com/files/USPS/usps_ux/cx-at-usps.png",
      "https://manuxer.com/files/USPS/usps_ux/ux-steps.png",
      "https://manuxer.com/files/USPS/usps_ux/usps-heuristic.png",
      "https://manuxer.com/files/USPS/usps_ux/usability-testing.png"
    ],
    subProjects: [
      {
        title: "PO Locator - Find USPS® Locations",
        description: "A tool to find USPS Locations on USPS.com (or send directions) and hours of operation.",
        imageUrl: "https://manuxer.com/files/USPS/PO_Locator/img/po-banner.png"
      },
      {
        title: "USPS® Online Postal Store",
        description: "Online Postal Store - Order stamps, shipping supplies, and unique items only available from the United States Postal Service.",
        imageUrl: "https://manuxer.com/files/USPS/usps_ux/usps-store.png"
      }
    ]
  },
  {
    id: 3,
    title: "Accessibility Evaluation and Inclusive Design",
    category: "Accessibility",
    client: "MBTA",
    duration: "3 months",
    year: "2021",
    role: "UX Designer & Accessibility Specialist",
    description: "Accessibility evaluation and remediation of the MBTA intranet website",
    overview: "The MBTA intranet system is an internal application for MBTA employees that enables communication, information sharing, and job task fulfillment. The system includes features such as discussion forums, surveys, directories, content management, and analytics.",
    challenge: "The accessibility audit identified areas where the system could introduce barriers or cause difficulty for people with disabilities. Testing covered 41 pages and use cases using WCAG 2.1 Level AA as a guide.",
    solution: "Conducted comprehensive accessibility evaluation using multiple assistive technologies including JAWS screen reader, Dragon Naturally Speaking, keyboard-only navigation, and color contrast tools. Tested across Chrome, Internet Explorer, and Firefox browsers. Provided detailed findings and recommendations for remediation.",
    outcome: "Delivered comprehensive accessibility report with severity ratings and actionable recommendations. Identified key issues including missing alt text, keyboard accessibility problems, focus indicators, and WCAG compliance gaps. Provided clear remediation strategies for each finding.",
    imageUrl: "https://manuxer.com/files/MBTA/img/MBTA-hero.jpeg",
    processImages: [
      "https://manuxer.com/files/MBTA/img/MBTA-hero2.jpeg",
      "https://manuxer.com/files/MBTA/img/wcag2-1.png",
      "https://manuxer.com/files/MBTA/img/tools.png",
      "https://manuxer.com/files/MBTA/img/MBTA-main.png",
      "https://manuxer.com/files/MBTA/img/report.png"
    ],
    methodology: [
      "Access the intranet system via web browser using user accounts provided by the MBTA team",
      "Test selection of 41 pages and use cases (AKA tasks), as identified by the client",
      "Use W3C's Web Content Accessibility Guidelines (WCAG 2.1) Level AA as a guide for this evaluation",
      "Explore all areas of the screen, including the menus, forms, and other components, to ensure a complete accessibility review"
    ],
    tools: [
      "Chrome's Accessibility Dev tools auditor - Lighthouse",
      "JAWS - Screen Reader",
      "Dragon Naturally Speaking - Speech Recognition Software",
      "Color Contrast evaluation tool",
      "Keyboard only evaluation"
    ]
  },
  {
    id: 4,
    title: "My Experiments",
    category: "UI/UX",
    client: "Personal Projects",
    duration: "Ongoing",
    year: "2019 - Present",
    role: "Designer",
    description: "A collection of my design experiments",
    overview: "This portfolio showcases various UI/UX design experiments exploring different design patterns, interactions, and visual styles across mobile and web applications.",
    challenge: "Exploring new design trends, experimenting with different interaction patterns, and pushing creative boundaries while maintaining usability and accessibility standards.",
    solution: "Created diverse design concepts including SwiftPay (payment app), Visual Search interface, Furniture app, CinePass (movie booking), Food ordering app, and e-commerce signup flows. Each experiment focuses on solving specific UX challenges with innovative approaches.",
    outcome: "Built a comprehensive portfolio of design experiments demonstrating versatility across different domains and design challenges. These experiments inform real-world project decisions and showcase design thinking capabilities.",
    imageUrl: "https://manuxer.com/files/Experiments/VisualSearch.png",
    processImages: [
      "https://manuxer.com/files/Experiments/SwiftPay.png",
      "https://manuxer.com/files/Experiments/VisualSearch.png",
      "https://manuxer.com/files/Experiments/Furniture%20app.png",
      "https://manuxer.com/files/Experiments/cinePass.png",
      "https://manuxer.com/files/Experiments/Food%20ordering%20app.png",
      "https://manuxer.com/files/Experiments/e-commerce%20signup.png"
    ]
  },
  {
    id: 5,
    title: "Usability Engineering",
    category: "UX Specialist",
    client: "University of Washington",
    duration: "Academic project",
    year: "2019",
    role: "UX Specialist",
    description: "Design - Evaluate - Iterate",
    overview: "A comprehensive exploration of usability engineering principles and methodologies through academic research and practical application.",
    challenge: "Understanding and applying systematic usability engineering processes including user research, iterative design, evaluation methods, and design refinement.",
    solution: "Applied structured usability engineering methodology covering the complete design lifecycle: user research, persona development, task analysis, prototyping, usability testing, and iterative improvements based on findings.",
    outcome: "Developed deep understanding of usability engineering principles and delivered practical design solutions validated through systematic evaluation methods.",
    imageUrl: "https://manuxer.com/img/UW.png",
    processImages: [
      "https://manuxer.com/files/UW/1.png",
      "https://manuxer.com/files/UW/2.png",
      "https://manuxer.com/files/UW/3.png",
      "https://manuxer.com/files/UW/4.png",
      "https://manuxer.com/files/UW/5.png",
      "https://manuxer.com/files/UW/6.png",
      "https://manuxer.com/files/UW/7.png",
      "https://manuxer.com/files/UW/8.png",
      "https://manuxer.com/files/UW/9.png",
      "https://manuxer.com/files/UW/10.png",
      "https://manuxer.com/files/UW/11.png",
      "https://manuxer.com/files/UW/12.png",
      "https://manuxer.com/files/UW/13.png",
      "https://manuxer.com/files/UW/14.png",
      "https://manuxer.com/files/UW/15.png"
    ]
  },
  {
    id: 6,
    title: "My Artwork",
    category: "Artwork / Paintings",
    client: "Personal Collection",
    duration: "Ongoing",
    year: "2001 - Present",
    role: "Artist",
    description: "An artist is a simplifier.. Art is the elimination of the unnecessary!",
    overview: "A personal collection of artwork and paintings exploring various styles, mediums, and artistic expressions. This collection represents the creative foundation that informs my design work.",
    imageUrl: "https://manuxer.com/files/MyPaintings/1.jpg",
    processImages: [
      "https://manuxer.com/files/MyPaintings/1.jpg",
      "https://manuxer.com/files/MyPaintings/2.jpg",
      "https://manuxer.com/files/MyPaintings/3.jpg",
      "https://manuxer.com/files/MyPaintings/4.jpg",
      "https://manuxer.com/files/MyPaintings/5.jpg",
      "https://manuxer.com/files/MyPaintings/6.jpg",
      "https://manuxer.com/files/MyPaintings/7.jpg",
      "https://manuxer.com/files/MyPaintings/8.jpg",
      "https://manuxer.com/files/MyPaintings/9.jpg",
      "https://manuxer.com/files/MyPaintings/10.jpg",
      "https://manuxer.com/files/MyPaintings/11.jpg",
      "https://manuxer.com/files/MyPaintings/12.jpg",
      "https://manuxer.com/files/MyPaintings/13.png",
      "https://manuxer.com/files/MyPaintings/14.png",
      "https://manuxer.com/files/MyPaintings/15.png",
      "https://manuxer.com/files/MyPaintings/16.png",
      "https://manuxer.com/files/MyPaintings/17.png"
    ]
  },
  {
    id: 7,
    title: "Accommodations Intake Redesign",
    category: "UX | Product Design | Research",
    client: "Amazon",
    duration: "6 months",
    year: "2024",
    role: "Product Designer, UX Researcher",
    description: "Redesigning the accommodations intake process to improve user experience and efficiency",
    overview: "A comprehensive redesign of the accommodations intake process to streamline workflows, improve accessibility, and enhance the overall user experience for both employees and administrators.",
    imageUrl: "https://manuxer.com/files/Amazon/amazon_logo.png",
    figmaEmbed: "https://embed.figma.com/deck/LhXIPj37x2N7kwbKGY8NTP/Accommodations-intake-redesign--Copy-?node-id=1-536&viewport=-95%2C-20%2C0.46&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&embed-host=share",
    processImages: []
  }
];

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "1");
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Find the current project
  const project = projects.find(p => p.id === projectId) || projects[0];
  
  // Calculate next project ID
  const nextProjectId = projectId < projects.length ? projectId + 1 : 1;
  
  // Password modal state
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [selectedSubProject, setSelectedSubProject] = useState<any>(null);
  
  const handlePasswordSubmit = () => {
    if (passwordInput === "manuxer@2025") {
      setIsPasswordModalOpen(false);
      setPasswordInput("");
      toast({
        title: "Access Granted",
        description: "Opening project...",
      });
      // Navigate to the subproject page
      if (selectedSubProject?.id) {
        navigate(`/projects/${selectedSubProject.id}`);
      }
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
                <p className="text-lg mb-6">{project.overview || project.description}</p>
                
                {/* Figma Embed for presentations */}
                {(project as any).figmaEmbed && (
                  <div className="my-12">
                    <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                      <iframe 
                        style={{ 
                          border: '1px solid rgba(0, 0, 0, 0.1)',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '100%',
                          height: '100%'
                        }} 
                        src={(project as any).figmaEmbed}
                        allowFullScreen
                      />
                    </div>
                  </div>
                )}
                
                {project.isNDA ? (
                  <div className="bg-muted/50 border-l-4 border-primary p-6 rounded-r mb-8">
                    <p className="text-sm font-medium">Note: This project is under NDA. Details are limited to protect confidential information.</p>
                  </div>
                ) : (
                  <>
                    {project.challenge && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">The Challenge</h3>
                        <p className="mb-6">{project.challenge}</p>
                      </>
                    )}
                    
                    {project.methodology && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">Methodology</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2">
                          {project.methodology.map((item: string, index: number) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {project.tools && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">Tools & Technologies</h3>
                        <ul className="list-disc list-inside mb-6 space-y-2">
                          {project.tools.map((tool: string, index: number) => (
                            <li key={index}>{tool}</li>
                          ))}
                        </ul>
                      </>
                    )}
                    
                    {project.solution && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">The Solution</h3>
                        <p className="mb-6">{project.solution}</p>
                      </>
                    )}
                    
                    {project.outcome && (
                      <>
                        <h3 className="text-2xl font-semibold mb-4">Outcome</h3>
                        <p className="mb-10">{project.outcome}</p>
                      </>
                    )}
                    
                    {/* Research Section */}
                    {(project as any).research && (
                      <div className="mt-12">
                        <h3 className="text-2xl font-semibold mb-6">Research</h3>
                        
                        {/* Methodology */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-3">Methodology</h4>
                          <p className="mb-4">{(project as any).research.methodology}</p>
                        </div>
                        
                        {/* Participants */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-4">Research Participants</h4>
                          
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Employees */}
                            <div className="bg-muted/30 p-6 rounded-lg">
                              <h5 className="font-semibold text-lg mb-3">Employees (n={(project as any).research.participants.employees.count})</h5>
                              <p className="text-sm mb-4 text-muted-foreground">
                                {(project as any).research.participants.employees.demographics}
                              </p>
                              <ul className="space-y-2 text-sm">
                                {(project as any).research.participants.employees.methods.map((method: string, idx: number) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{method}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Case Managers */}
                            <div className="bg-muted/30 p-6 rounded-lg">
                              <h5 className="font-semibold text-lg mb-3">Case Managers (n={(project as any).research.participants.caseManagers.count})</h5>
                              <p className="text-sm mb-4 text-muted-foreground">
                                {(project as any).research.participants.caseManagers.demographics}
                              </p>
                              <ul className="space-y-2 text-sm">
                                {(project as any).research.participants.caseManagers.methods.map((method: string, idx: number) => (
                                  <li key={idx} className="flex items-start">
                                    <span className="mr-2">•</span>
                                    <span>{method}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        {/* Key Findings */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-4">Key Findings</h4>
                          <div className="space-y-6">
                            {(project as any).research.keyFindings.map((finding: any, idx: number) => (
                              <div key={idx} className="border-l-4 border-primary/30 pl-6 py-2">
                                <h5 className="font-semibold mb-2">{finding.finding}</h5>
                                <p className="text-sm mb-2">{finding.details}</p>
                                <p className="text-sm text-muted-foreground italic">Impact: {finding.impact}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        {/* Insights */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold mb-4">Research Insights</h4>
                          <ul className="space-y-3">
                            {(project as any).research.insights.map((insight: string, idx: number) => (
                              <li key={idx} className="flex items-start bg-primary/5 p-4 rounded-lg">
                                <span className="text-primary font-bold mr-3">{idx + 1}.</span>
                                <span>{insight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* PDF Embed if available */}
                        {(project as any).pdfUrl && (
                          <div className="mt-8">
                            <h4 className="text-xl font-semibold mb-4">Full Presentation</h4>
                            <div className="w-full h-[600px] border rounded-lg overflow-hidden">
                              <iframe
                                src={`${(project as any).pdfUrl}#toolbar=0&navpanes=0&scrollbar=0`}
                                className="w-full h-full"
                                title="Project Presentation PDF"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </>
                )}
                
                {/* Sub Projects */}
                {project.subProjects && project.subProjects.length > 0 && (
                  <div className="mt-12 mb-12">
                    <h3 className="text-2xl font-semibold mb-6">Related Projects</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {project.subProjects.map((subProject: any, index: number) => (
                        <div
                          key={index}
                          onClick={(e) => {
                            if (subProject.isPasswordProtected) {
                              e.preventDefault();
                              setSelectedSubProject(subProject);
                              setIsPasswordModalOpen(true);
                            }
                          }}
                          className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                        >
                          <img 
                            src={subProject.imageUrl} 
                            alt={subProject.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="p-4">
                            <h4 className="font-semibold mb-2">{subProject.title}</h4>
                            <p className="text-sm text-muted-foreground">{subProject.description}</p>
                            {subProject.isPasswordProtected && (
                              <p className="text-xs text-primary mt-2">🔒 Password Protected</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Process Images */}
                {project.processImages.length > 0 && (
                  <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-6">
                      {project.category === "Artwork / Paintings" ? "Gallery" : "Design Process"}
                    </h3>
                    <div className={`grid gap-4 ${
                      project.category === "Artwork / Paintings" 
                        ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" 
                        : "grid-cols-1"
                    }`}>
                      {project.processImages.map((img: string, index: number) => (
                        <div key={index} className="rounded-lg overflow-hidden">
                          <img 
                            src={img} 
                            alt={`${project.category === "Artwork / Paintings" ? "Artwork" : "Design process"} for ${project.title}`}
                            className="w-full h-auto"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <div className="md:w-1/3">
                <div className="bg-muted rounded-lg p-6 sticky top-24">
                  <h3 className="text-lg font-medium mb-4">Project Details</h3>
                  <dl className="space-y-4">
                    <div>
                      <dt className="text-sm text-muted-foreground">Company</dt>
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
      
      {/* Password Modal */}
      <Dialog open={isPasswordModalOpen} onOpenChange={setIsPasswordModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Protected Project</DialogTitle>
            <DialogDescription>
              This project is password protected. Please enter the password to access.
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-4">
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

export default ProjectDetail;
