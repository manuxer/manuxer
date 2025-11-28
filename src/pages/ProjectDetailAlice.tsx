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
import aliceIntro from "@/assets/alice.png";
import aliceFlow1 from "@/assets/alice-flow1.png";
import aliceFlow2 from "@/assets/alice-flow2.png";
import aliceFlow3 from "@/assets/alice-flow3.png";
import aliceResponsive from "@/assets/alice-responsive.png";

import alice1 from "@/assets/alice/alice1.png";
import alice2 from "@/assets/alice/alice2.png";
import alice3 from "@/assets/alice/alice3.png";
import alice4 from "@/assets/alice/alice4.png";
import alice5 from "@/assets/alice/alice5.png";
import alice6 from "@/assets/alice/alice6.png";

const projects = [
  {
    id: 9,
    title: "Simplifying disability and leave management using AI",
    category: "UX | Product Design | Research | Gen AI",
    client: "Amazon - Disability Leave Services (DLS)",
    duration: "6 months",
    year: "2024-2025",
    role: "Lead Product Designer, UX Researcher",
    description: "A conversational Gen AI system for streamlining disability and leave services intake at Amazon",
    overview: "This product is a conversational Gen AI solution designed to transform the accommodation and leave request intake process at Amazon. Based on extensive research with employees and operations associates, ALICE provides an intelligent, empathetic chat experience that simplifies a complex bureaucratic process.",
    challenge: "The traditional accommodation and leave request intake process was fragmented, confusing, and time-consuming. Employees struggled to navigate complex forms, understand their options, and provide the correct documentation. Operations associates were overwhelmed with incomplete requests and repetitive questions. This led to delays in processing, employee frustration, and increased administrative burden on DLS teams.",
    solution: "Through comprehensive research involving employees and ops associates at Amazon, we proposed ALICE - a Gen AI-powered conversational assistant that guides users through the intake process naturally. ALICE understands context from employee situations, asks clarifying questions, extracts information from uploaded documents using OCR, and automatically populates requests with accurate information. The system provides personalized guidance based on employee type (associate vs. corporate), condition type, and individual circumstances.",
    outcome: "Research validated strong user need for an AI-assisted intake system. While user acceptance of AI solutions varied - ranging from enthusiastic early adopters to cautious skeptics - the majority of participants saw value in having an intelligent assistant to navigate the complex process. Key benefits include reduced intake time, fewer incomplete requests, and improved employee experience during stressful life events.",
    imageUrl: aliceIntro,
    introImage: : [
      { src: aliceResponsive, alt: "ALICE on both mobile and desktop" }    
    ],
    impact: {
      icon: "↗",
      text: "Streamlined accommodation intake process with 35% of users enthusiastically adopting AI assistance"
    },
    // pdfUrl: "/ALICE_presentation_portfolio.pdf",
    research: {
      methodology: "Mixed-methods research combining interviews, usability testing, and surveys with employees and operations associates",
      participants: {
        employees: {
          count: 52,
          demographics: "Both warehouse associates and corporate employees across multiple Amazon locations in the US, representing diverse accommodation and leave scenarios",
          methods: ["Contextual interviews (n=18)", "Concept testing sessions (n=15)", "Prototype usability testing (n=19)", "Survey responses (n=52)"]
        },
        opsAssociates: {
          count: 14,
          demographics: "DLS operations associates responsible for processing accommodation and leave requests, with 1-10 years of experience",
          methods: ["Workflow analysis sessions (n=8)", "Pain point interviews (n=10)", "Solution co-design workshops (n=6)", "Survey responses (n=14)"]
        }
      },
      keyFindings: [
        {
          finding: "Complex Process Confusion",
          details: "73% of employees found the existing intake process confusing and overwhelming. Many didn't know which type of accommodation or leave to request, or what documentation was required.",
          impact: "High rates of incomplete or incorrect requests, requiring multiple rounds of back-and-forth communication"
        },
        {
          finding: "Documentation Challenges",
          details: "Employees struggled with understanding what medical documentation was needed. 65% of initial requests lacked proper supporting documentation.",
          impact: "Significant delays in case processing and frustrated employees waiting for decisions"
        },
        {
          finding: "Varied AI Acceptance Levels",
          details: "User acceptance of AI solutions ranged significantly: 35% were enthusiastic early adopters, 45% were cautiously optimistic with specific concerns, and 20% were skeptical. Trust, privacy, and accuracy were key concerns.",
          impact: "Need for transparent AI communication, human oversight options, and clear privacy protections in the solution design"
        },
        {
          finding: "Associate vs. Employee Differences",
          details: "Warehouse associates had different needs and technology comfort levels compared to corporate employees. Associates preferred mobile-first, simple interactions with voice input options.",
          impact: "Solution needed to adapt to different user contexts and technology access patterns"
        },
        {
          finding: "Ops Associate Processing Burden",
          details: "Operations associates spent 60% of their time on intake-related issues: clarifying requests, requesting additional documentation, and correcting form errors.",
          impact: "Reduced capacity for complex case work and longer processing times for all requests"
        },
        {
          finding: "Emotional Context Matters",
          details: "Employees are often going through stressful life situations (injury, illness, family care) when requesting accommodations. They valued empathetic, patient guidance.",
          impact: "AI tone and interaction design needed to be supportive and understanding, not robotic or transactional"
        }
      ],
      insights: [
        "Users want AI assistance but with clear human escalation paths for complex situations",
        "Conversational guidance reduces cognitive load during an already stressful time",
        "Document intelligence (OCR + understanding) can eliminate manual form filling",
        "Trust in AI grows when users see accurate, helpful responses in their specific situation",
        "AI acceptance increases when users understand what the AI can/cannot do",
        "Personalization based on employee type and situation improves relevance and adoption"
      ],
      aiAcceptance: {
        enthusiastic: {
          percentage: 35,
          characteristics: "Early adopters who valued efficiency and were comfortable with AI technology",
          feedback: "Loved the idea of not filling out forms manually, appreciated intelligent suggestions"
        },
        cautiouslyOptimistic: {
          percentage: 45,
          characteristics: "Open to AI assistance but had specific concerns about accuracy, privacy, and whether the AI truly understood their situation",
          feedback: "Wanted to see AI responses before submission, valued transparency about AI limitations, needed reassurance about data privacy"
        },
        skeptical: {
          percentage: 20,
          characteristics: "Preferred human interaction, concerned about AI making mistakes in sensitive situations",
          feedback: "Wanted option to bypass AI entirely, needed strong human oversight, valued clear escalation to human case managers"
        }
      }
    },
    journeyWalkthrough: [
      { src: alice1, alt: "ALICE journey walkthrough" },
      { src: alice2, alt: "ALICE journey walkthrough" },
      { src: alice3, alt: "ALICE journey walkthrough" },
      { src: alice4, alt: "ALICE journey walkthrough" },
      { src: alice5, alt: "ALICE journey walkthrough" },
      { src: alice6, alt: "ALICE journey walkthrough" }      
    ],
    keyFeatures: [
      "Conversational Gen AI-powered intake system",
      "Document intelligence with OCR capabilities",
      "Smart recommendations based on employee situation",
      "Personalized guidance for different user types",
      "Multi-request handling recognition",
      "Human escalation pathways",
      "Mobile-optimized interface"
    ],
    technologies: ["Gen AI/LLM", "Document extraction", "Predictive UX", "Intelligent Assistive Interfaces", "Conversation design", "Figma"],
  }
];

const ProjectDetailAlice = () => {
  const { id } = useParams<{ id: string }>();
  const projectId = parseInt(id || "9");
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
          {/* Intro image */}
          <div className="max-w-7xl mx-auto">
            <div className="space-y-8">
              {project.introImage && project.introImage.map((image, idx) => (
                <div
                  key={idx}
                  className="relative group cursor-pointer rounded-xl overflow-hidden w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center"
                  onClick={() => setSelectedImage(image.src)}
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
                  {(project as any).research.participants.opsAssociates && (
                    <div className="bg-white border border-gray-200 rounded-xl p-6">
                      <h4 className="font-semibold text-lg mb-3">Operations Associates</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        <span className="font-medium text-foreground">{(project as any).research.participants.opsAssociates.count}</span>
                        {" "}participants
                      </p>
                      <p className="text-sm text-muted-foreground mb-4">{(project as any).research.participants.opsAssociates.demographics}</p>
                      <div className="space-y-2">
                        {(project as any).research.participants.opsAssociates.methods.map((method: string, idx: number) => (
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

              {/* AI Acceptance Breakdown */}
              {(project as any).research.aiAcceptance && (
                <div>
                  <h3 className="text-xl font-semibold mb-6">AI Acceptance Levels</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-6">
                      <div className="text-4xl font-bold text-green-600 mb-2">{(project as any).research.aiAcceptance.enthusiastic.percentage}%</div>
                      <h5 className="font-semibold mb-2">Enthusiastic Adopters</h5>
                      <p className="text-sm text-muted-foreground mb-3">{(project as any).research.aiAcceptance.enthusiastic.characteristics}</p>
                      <p className="text-xs italic text-muted-foreground">"{(project as any).research.aiAcceptance.enthusiastic.feedback}"</p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
                      <div className="text-4xl font-bold text-yellow-600 mb-2">{(project as any).research.aiAcceptance.cautiouslyOptimistic.percentage}%</div>
                      <h5 className="font-semibold mb-2">Cautiously Optimistic</h5>
                      <p className="text-sm text-muted-foreground mb-3">{(project as any).research.aiAcceptance.cautiouslyOptimistic.characteristics}</p>
                      <p className="text-xs italic text-muted-foreground">"{(project as any).research.aiAcceptance.cautiouslyOptimistic.feedback}"</p>
                    </div>
                    <div className="bg-red-50 border border-red-200 rounded-lg p-6">
                      <div className="text-4xl font-bold text-red-600 mb-2">{(project as any).research.aiAcceptance.skeptical.percentage}%</div>
                      <h5 className="font-semibold mb-2">Skeptical</h5>
                      <p className="text-sm text-muted-foreground mb-3">{(project as any).research.aiAcceptance.skeptical.characteristics}</p>
                      <p className="text-xs italic text-muted-foreground">"{(project as any).research.aiAcceptance.skeptical.feedback}"</p>
                    </div>
                  </div>
                </div>
              )}

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
                  onClick={() => setSelectedImage(image.src)}
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

export default ProjectDetailAlice;
