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
import commsImage from "@/assets/comms-case-status.png";

import cs1 from "@/assets/case_status/cs1.png";
import cs2 from "@/assets/case_status/cs2.png";
import cs3 from "@/assets/case_status/cs3.png";
import cs4 from "@/assets/case_status/cs4.png";
import cs5 from "@/assets/case_status/cs5.png";
import cs6 from "@/assets/case_status/cs6.png";
import cs7 from "@/assets/case_status/cs7.png";
import cs8 from "@/assets/case_status/cs8.png";
import cs9 from "@/assets/case_status/cs9.png";
import cs10 from "@/assets/case_status/cs10.png";
import cs11 from "@/assets/case_status/cs11.png";
import cs12 from "@/assets/case_status/cs12.png";
import cs13 from "@/assets/case_status/cs13.png";
import cs14 from "@/assets/case_status/cs14.png";
import cs15 from "@/assets/case_status/cs15.png";
import cs16 from "@/assets/case_status/cs16.png";

const projects = [
  {
    id: 8,
    title: "Communication on case status",
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
    imageUrl: commsImage,
    impact: {
      icon: "↗",
      text: "Reduced inquiries by 45% and improved employee satisfaction by 60%"
    },
    // pdfUrl: "/DLS_Communication_Case_Status.pdf",
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
    journeyWalkthrough: [
      { src: cs1, alt: "Employee case status user journey" },
      { src: cs2, alt: "Employee case status user journey" },
      { src: cs3, alt: "Employee case status user journey" },
      { src: cs4, alt: "Employee case status user journey" },
      { src: cs5, alt: "Employee case status user journey" },
      { src: cs6, alt: "Employee case status user journey" },
      { src: cs7, alt: "Employee case status user journey" },
      { src: cs8, alt: "Employee case status user journey" },
      { src: cs9, alt: "Employee case status user journey" },
      { src: cs10, alt: "Employee case status user journey" },
      { src: cs11, alt: "Employee case status user journey" },
      { src: cs12, alt: "Employee case status user journey" },
      { src: cs13, alt: "Employee case status user journey" },
      { src: cs14, alt: "Employee case status user journey" },
      { src: cs15, alt: "Employee case status user journey" },
      { src: cs16, alt: "Employee case status user journey" }
    ],
    keyFeatures: [
      "Real-time case status updates",
      "Automated proactive notifications",
      "Clear process stage visibility",
      "Mobile-optimized interface",
      "Case manager efficiency tools",
      "Secure messaging system",
      "Timeline transparency"
    ],
    technologies: ["Figma", "Gen AI", "User Research", "Accessibility", "Service design"],
  }
];

const ProjectDetailDLS = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "8");
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

        {/* Research & Discovery Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Research & Discovery</h2>

            <div className="space-y-12 mb-16">
              {/* Methodology */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Methodology</h3>
                <p className="text-muted-foreground leading-relaxed">{(project as any).research.methodology}</p>
              </div>

              {/* Participants */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Research Participants</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {(project as any).research.participants.employees && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Employees</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">{(project as any).research.participants.employees.count}</span>
                        {" "}participants
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">{(project as any).research.participants.employees.demographics}</p>
                      <div className="space-y-2">
                        {(project as any).research.participants.employees.methods.map((method: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {(project as any).research.participants.caseManagers && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Case Managers</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">{(project as any).research.participants.caseManagers.count}</span>
                        {" "}participants
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">{(project as any).research.participants.caseManagers.demographics}</p>
                      <div className="space-y-2">
                        {(project as any).research.participants.caseManagers.methods.map((method: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Key Findings */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Key Findings</h3>
                <div className="space-y-4">
                  {(project as any).research.keyFindings.map((finding: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-orange-400 pl-6 py-3">
                      <h5 className="font-semibold text-foreground mb-2">{finding.finding}</h5>
                      <p className="text-sm text-muted-foreground mb-2">{finding.details}</p>
                      <p className="text-sm font-medium text-orange-600">Design Impact: {finding.impact}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Insights */}
              <div>
                <h3 className="text-xl font-semibold mb-6">Research Insights</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {(project as any).research.insights.map((insight: string, idx: number) => (
                    <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start gap-3">
                        <span className="text-primary font-bold text-lg flex-shrink-0">{idx + 1}</span>
                        <p className="text-sm text-muted-foreground">{insight}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* User Journey Walkthrough Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">User Journey Walkthrough</h2>
            <div className="space-y-8">
              {project.journeyWalkthrough && project.journeyWalkthrough.map((image, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer rounded-xl overflow-hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
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
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-[70vw] h-[70vh] flex items-center justify-center cursor-default" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Expanded view"
              className="w-full h-full object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 p-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
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

export default ProjectDetailDLS;
