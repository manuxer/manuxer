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
import asl from "@/assets/hermes/h26.png";

import h1 from "@/assets/hermes/h1.png";
import h2 from "@/assets/hermes/h2.png";
import h3 from "@/assets/hermes/h3.png";
import h4 from "@/assets/hermes/h4.png";
import h5 from "@/assets/hermes/h5.png";
import h6 from "@/assets/hermes/h6.png";
import h7 from "@/assets/hermes/h7.png";
import h8 from "@/assets/hermes/h8.png";
import h9 from "@/assets/hermes/h9.png";
import h10 from "@/assets/hermes/h10.png";
import h11 from "@/assets/hermes/h11.png";
import h12 from "@/assets/hermes/h12.png";
import h13 from "@/assets/hermes/h13.png";
import h14 from "@/assets/hermes/h14.png";
import h15 from "@/assets/hermes/h15.png";
import h16 from "@/assets/hermes/h16.png";
import h17 from "@/assets/hermes/h17.png";
import h18 from "@/assets/hermes/h18.png";
import h19 from "@/assets/hermes/h19.png";
import h20 from "@/assets/hermes/h20.png";
import h21 from "@/assets/hermes/h21.png";
import h22 from "@/assets/hermes/h22.png";
import h23 from "@/assets/hermes/h23.png";
import h24 from "@/assets/hermes/h24.png";
import h25 from "@/assets/hermes/h25.png";
import h26 from "@/assets/hermes/h26.png";

const projects = [
  {
    id: 11,
    title: "AI Sign Language Interpretation Platform",
    subtitle: "Hermes",
    category: "UX | Product Design | Research | AI Accessibility",
    client: "Amazon - Disability and Leave Services",
    duration: "10 months",
    year: "2025",
    role: "Lead Product Designer, UX Researcher",
    description: "An AI-powered sign language interpretation service supporting Deaf and Hard of Hearing employees across Amazon's global operations",
    overview: "Hermes is an AI-powered Sign Language interpretation service designed to support Deaf and Hard of Hearing (DHH) employees across Amazon's global operations. The platform provides real-time AI-generated sign language interpretation, closed captions, transcription, and translation - scaling access to communication resources where human interpreters remain scarce. As the lead Product Designer, I shaped the end-to-end experience from defining the problem through research, prototyping, usability testing, and delivery of the MLP (Minimum Lovable Product) set for pilot deployment.",
    challenge: "Despite millions spent annually on sign language services, Amazon struggles with a severe shortage of interpreters - particularly for night shifts, training sessions, and high-volume sites. This results in 20-40% unfilled interpretation requests (3P vendor-based), up to 79% unfilled requests in certain use cases, and entire sites experiencing 0% fill rate. The shortage delays onboarding, misses training, and reduces inclusion for 3,500+ DHH associates. Additionally, there is a lack of deaf-culture awareness among managers and the broader workforce, and an absence of standardized tools or workflows to support DHH employees in Start-Up Meetings, New Hire Orientation, trainings, and floor interactions.",
    solution: "We designed Hermes, an AI-driven interpretation platform with AI-generated signing avatar, closed captions, real-time transcription, English ↔ ASL/SEE/PSE translation, and a web-based interface for SUM coordinators and managers. The solution integrates with MAVIS carts and laptops for trainings, allowing sites to reliably support DHH employees regardless of time of day, interpreter availability, or location.",
    outcome: "Hermes MLP product was launched at sites, directly impacting 3,500+ DHH Amazon employees across site operations spanning SUM, onboarding, training, and daily communication. By integrating AI interpretation with existing workflows, Hermes establishes a scalable accessibility foundation for global operations while closing critical gaps in interpreter reliance and advancing workplace inclusion, belonging, and career progression for DHH associates.",
    imageUrl: asl,
    impact: {
      icon: "↗",
      text: "Scaled accessibility support for 3,500+ DHH users, closing critical gaps in sign language interpretation"
    },
    pdfUrl: "",
    research: {
      methodology: "Contextual inquiry across Amazon fulfillment centers, semi-structured interviews with DHH associates and leaders, stakeholder workshops, comparative evaluation of existing ASL avatar technologies, artifact walkthroughs, and experience mapping of the DHH journey through orientation, training, and daily operations",
      participants: {
        deaf_hoh_associates: {
          count: "Multiple",
          demographics: "Deaf and Hard of Hearing associates using ASL, SEE, or PSE across various Amazon locations",
          methods: ["Contextual inquiry sessions", "Semi-structured interviews", "Usability testing", "Journey mapping workshops"]
        },
        managers_leaders: {
          count: "Multiple",
          demographics: "Managers, SUM leaders, Learning Ambassadors, and HR partners",
          methods: ["Stakeholder interviews", "Workflow analysis", "Co-design sessions"]
        },
        interpreters: {
          count: "Multiple",
          demographics: "Remote and in-person interpreters (for benchmarking and validation)",
          methods: ["Expert interviews", "Service benchmarking"]
        }
      },
      keyFindings: [
        {
          finding: "Onboarding delays due to lack of advance notice",
          details: "Sites often receive no advance notice of incoming DHH employees, slowing training and job assignment processes.",
          impact: "Integrated DHH employee notification system into hiring workflow to enable advance preparation"
        },
        {
          finding: "Severe gaps in interpretation access",
          details: "Trainings are often unscheduled or cancelled due to interpreter shortages. Night shift support is almost nonexistent.",
          impact: "Designed 24/7 AI-powered backup to ensure consistent access regardless of shift or location"
        },
        {
          finding: "Low awareness of available tools",
          details: "Managers lacked understanding of available solutions (MAVIS, VRI, etc.). A brief 5-minute demo dramatically increased successful tool usage.",
          impact: "Developed embedded education and onboarding flows into Hermes platform"
        },
        {
          finding: "Communication barrier patterns",
          details: "Employees rely on personal phones, captioning apps, and ad-hoc tools. Clear, large, high-contrast captions are strongly preferred.",
          impact: "Built accessibility-first UI with large, adjustable captions and high contrast options"
        },
        {
          finding: "Mixed use of sign language systems",
          details: "Employees use ASL, SEE, or PSE - requiring adaptable communication modes.",
          impact: "Implemented multi-sign-system support with user preference settings"
        },
        {
          finding: "Preference for in-person interpreters remains strong",
          details: "Facial expressions, body language, and contextual awareness are critical. Limitations of virtual interpreting include background noise, distance to screens, and limited field of view.",
          impact: "Positioned Hermes as supplement, not replacement - focused on high-impact use cases where human interpreters unavailable"
        }
      ],
      insights: [
        "Hermes must supplement - not replace - human interpreters",
        "The most impactful use case is Start-Up Meetings, where real-time information changes frequently",
        "Captions and transcription are equally important for employees who do not use ASL",
        "Avatar comprehension increases significantly when animation is smooth, facial expressions match signing intent, and screen size is large",
        "A successful launch requires manager education and buy-in, not only product deployment",
        "Trust must be built through accuracy, clarity, and cultural authenticity"
      ]
    },
    projectOverview: [
      { src: h1, alt: "project overview" },
      { src: h2, alt: "project overview" },
      { src: h3, alt: "project overview" },
      { src: h4, alt: "project overview" },
      { src: h5, alt: "project overview" },
      { src: h6, alt: "project overview" },
      { src: h7, alt: "project overview" },
      { src: h8, alt: "project overview" },
      { src: h9, alt: "project overview" },
      { src: h10, alt: "project overview" },
      { src: h11, alt: "project overview" },
      { src: h12, alt: "project overview" },
      { src: h13, alt: "project overview" },
      { src: h14, alt: "project overview" },
      { src: h15, alt: "project overview" },
      { src: h16, alt: "project overview" },
      { src: h17, alt: "project overview" },
      { src: h18, alt: "project overview" },
      { src: h19, alt: "project overview" },
      { src: h20, alt: "project overview" },
      { src: h21, alt: "project overview" },
      { src: h22, alt: "project overview" },
      { src: h23, alt: "project overview" },
      { src: h24, alt: "project overview" },
      { src: h25, alt: "project overview" },
      { src: h26, alt: "project overview" }
    ],
    keyFeatures: [
      "AI-generated ASL interpretation avatar",
      "Real-time audio-to-signing pipeline",
      "Closed captions with adjustable size and contrast",
      "Live transcription and real-time translation",
      "English ↔ ASL/SEE/PSE translation support",
      "Web-based session management interface",
      "MAVIS cart integration for large-screen visibility",
      "Rapid feedback mechanism after each session",
      "Manager education and onboarding flows"
    ],
    technologies: ["Gen AI/LLM", "Avatar Animation", "Speech Recognition", "Unreal", "Web Application", "Mobile Optimization", "Accessibility Standards"],
  }
];

const ProjectDetailHermes = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "11");
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
        <div className="w-full h-[50vh] md:h-[60vh] relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">Hermes</h1>
            <p className="text-xl text-blue-700">AI Sign Language Interpretation Platform</p>
          </div>
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
            <div className="bg-orange-50 border border-orange-200/50 rounded-2xl p-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
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
                <div className="grid md:grid-cols-3 gap-6">
                  {(project as any).research.participants.deaf_hoh_associates && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">DHH Associates</h4>
                      <p className="text-sm text-muted-foreground mb-4">{(project as any).research.participants.deaf_hoh_associates.demographics}</p>
                      <div className="space-y-2">
                        {(project as any).research.participants.deaf_hoh_associates.methods.map((method: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {(project as any).research.participants.managers_leaders && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Managers & Leaders</h4>
                      <p className="text-sm text-muted-foreground mb-4">{(project as any).research.participants.managers_leaders.demographics}</p>
                      <div className="space-y-2">
                        {(project as any).research.participants.managers_leaders.methods.map((method: string, idx: number) => (
                          <div key={idx} className="flex items-start gap-2 text-sm">
                            <span className="text-primary font-bold">•</span>
                            <span className="text-muted-foreground">{method}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  {(project as any).research.participants.interpreters && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Interpreters</h4>
                      <p className="text-sm text-muted-foreground mb-4">{(project as any).research.participants.interpreters.demographics}</p>
                      <div className="space-y-2">
                        {(project as any).research.participants.interpreters.methods.map((method: string, idx: number) => (
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

        {/* Project Overview Section */}
        <section className="w-full py-16 md:py-24 px-4 md:px-8 lg:px-12 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-12">Project Overview</h2>
            <div className="space-y-8">
              {project.projectOverview && project.projectOverview.map((image, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer rounded-xl overflow-hidden w-full h-96 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
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

export default ProjectDetailHermes;
