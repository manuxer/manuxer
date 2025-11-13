
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";

const Resume = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom text-center">
            <h1 className="mb-6">Resume</h1>
            <p className="text-xl max-w-2xl mx-auto text-muted-foreground mb-8">
              My professional background, experience in building 0-1 human-first products
            </p>
            <Button asChild size="lg">
              <a href="/Manu_Resume.pdf" target="_blank">
                <Download className="mr-2 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>
        </section>
        
        {/* Resume Content */}
        <section className="py-16">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto space-y-16">
              {/* Personal Info */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
                <div>
                  <h2 className="text-3xl font-bold">Manu</h2>
                  <p className="text-xl text-muted-foreground">UX & Product Designer</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p>manuxdesign@gmail.com</p>
                  <p><a href="https://www.linkedin.com/in/manu-peethambar/" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/80 transition-colors">LinkedIn</a></p>
                </div>
              </div>
              
              {/* Summary */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-4">About</h3>
                <p>
                  A successful Product and UX design leader with 14 years of design experience who thrives in ambiguity - transforming complex systems into intuitive, inclusive, and scalable experiences. Driving AI, accessibility, and enterprise design strategies that simplify workflows and shape human-first digital ecosystems.
                </p>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Work Experience</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">Lead UX/Product Designer</h4>
                      <p className="text-muted-foreground">Oct 2021 - Present</p>
                    </div>
                    <p className="font-medium mb-2">Amazon</p>
                    <p className="mb-3 text-sm">
                      Led strategy and design execution across enterprise products serving 1.5M+ users translating complexity into clarity, influencing impact on a global scale. Delivered intuitive, inclusive, and scalable solutions that improved productivity and accessibility across Amazon operations.
                    </p>
                    <ul className="list-disc list-outside ml-5 space-y-1 text-sm">
                      <li>Designed and launched 10+ major technology products and workflows across Amazon services delivering measurable impact on efficiency, accessibility, and customer satisfaction</li>
                      <li>Scaled self-service product adoption across 55 countries (87% in the first month), reduced manual dependency by thousands of tickets monthly</li>
                      <li>Led AI & Accessibility innovation, an AI-powered solution to help People with Disabilities (PWDs), and GenAI document extraction and analysis solutions that reduced decision times by 30%</li>
                      <li>Conducted user research and usability testing with diverse user populations to inform design decisions, ensuring global inclusivity</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">User Experience Specialist</h4>
                      <p className="text-muted-foreground">May 2019 - Oct 2021</p>
                    </div>
                    <p className="font-medium mb-2">UserWorks</p>
                    <p className="mb-3 text-sm">
                      Delivered research-driven UX consulting across healthcare, education, and enterprise systems - conducting user research, usability and accessibility evaluations. Influenced data-informed design decisions that improved USPS.com 2.3B+ user sessions/year.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">UX Consultant & Product Designer</h4>
                      <p className="text-muted-foreground">Mar 2016 - Jan 2018</p>
                    </div>
                    <p className="font-medium mb-2">Deloitte</p>
                    <p className="mb-3 text-sm">
                      Led end-to-end product design for Standard Chartered Bank's "Straight2Bank" platform - that improved transaction efficiency, aligned roadmap strategy, and unlocked 4,000+ hours of productivity.
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">UX Consultant & Product Designer</h4>
                      <p className="text-muted-foreground">Aug 2011 - Mar 2016</p>
                    </div>
                    <p className="font-medium mb-2">Infosys</p>
                    <p className="mb-3 text-sm">
                      Led product design for NetBenefits at Fidelity - improving customer engagement by 35% and elevated design consistency across products.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between">
                      <h4 className="font-semibold">M.S. Human-Computer Interaction</h4>
                      <p className="text-muted-foreground">2018 - 2019</p>
                    </div>
                    <p>University of Maryland, Baltimore County (UMBC)</p>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Skills</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Design</h4>
                    <p className="text-sm">Product Design, Interaction Design, Visual Design, Accessible Design</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">User Experience</h4>
                    <p className="text-sm">Prototyping, Journey Mapping, Storyboarding, Information Architecture</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">User Research</h4>
                    <p className="text-sm">User Interviews, Usability Testing, Surveys, A/B Testing, Data Synthesis & Analysis</p>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">Tools</h4>
                    <p className="text-sm">Figma, Adobe Suite, AI design products</p>
                  </div>
                </div>
              </div>
              
              {/* References */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-4">References</h3>
                <p>Available upon request</p>
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

export default Resume;
