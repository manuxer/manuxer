
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
              My professional background, experience, and skills in UX/UI design.
            </p>
            <Button size="lg">
              <Download className="mr-2 h-4 w-4" />
              Download PDF
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
                  <h2 className="text-3xl font-bold">Manuxer</h2>
                  <p className="text-xl text-muted-foreground">UX Designer</p>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <p>contact@manuxer.com</p>
                  <p>(123) 456-7890</p>
                  <p>New York, NY</p>
                </div>
              </div>
              
              {/* Summary */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-4">Professional Summary</h3>
                <p>
                  UX Designer with 5+ years of experience creating digital products that balance business goals with user needs.
                  Passionate about accessibility and inclusive design. Skilled in research, wireframing, prototyping, and 
                  usability testing. Strong collaboration skills with cross-functional teams.
                </p>
              </div>
              
              {/* Experience */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Work Experience</h3>
                <div className="space-y-8">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">Senior UX Designer</h4>
                      <p className="text-muted-foreground">2021 - Present</p>
                    </div>
                    <p className="font-medium mb-2">TechCorp, New York</p>
                    <ul className="list-disc list-outside ml-5 space-y-1">
                      <li>Lead UX design for flagship products, resulting in 35% increase in user engagement</li>
                      <li>Conducted user research and usability testing to inform design decisions</li>
                      <li>Collaborated with product and engineering teams to ensure design implementation</li>
                      <li>Created and maintained design system to ensure consistency across products</li>
                      <li>Mentored junior designers and provided design leadership</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">UX Designer</h4>
                      <p className="text-muted-foreground">2018 - 2021</p>
                    </div>
                    <p className="font-medium mb-2">Design Studio X, San Francisco</p>
                    <ul className="list-disc list-outside ml-5 space-y-1">
                      <li>Designed user interfaces for clients across finance, healthcare, and e-commerce</li>
                      <li>Created wireframes, prototypes, and high-fidelity designs using Figma and Sketch</li>
                      <li>Conducted competitive analysis and user research to inform design strategies</li>
                      <li>Collaborated with cross-functional teams to deliver successful projects</li>
                    </ul>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between mb-2">
                      <h4 className="font-semibold">UI/UX Intern</h4>
                      <p className="text-muted-foreground">2017 - 2018</p>
                    </div>
                    <p className="font-medium mb-2">StartUp Inc., Boston</p>
                    <ul className="list-disc list-outside ml-5 space-y-1">
                      <li>Assisted senior designers in creating wireframes and prototypes</li>
                      <li>Participated in usability testing and incorporated feedback into designs</li>
                      <li>Contributed to design team meetings and brainstorming sessions</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Education */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Education</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex flex-col md:flex-row justify-between">
                      <h4 className="font-semibold">Master's in Human-Computer Interaction</h4>
                      <p className="text-muted-foreground">2015 - 2017</p>
                    </div>
                    <p>University of Design</p>
                  </div>
                  
                  <div>
                    <div className="flex flex-col md:flex-row justify-between">
                      <h4 className="font-semibold">Bachelor's in Graphic Design</h4>
                      <p className="text-muted-foreground">2011 - 2015</p>
                    </div>
                    <p>Creative Arts University</p>
                  </div>
                </div>
              </div>
              
              {/* Skills */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Skills</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-y-3">
                  <div>
                    <h4 className="font-medium">Design</h4>
                    <ul className="mt-2 text-sm space-y-1">
                      <li>User Research</li>
                      <li>Wireframing</li>
                      <li>Prototyping</li>
                      <li>Visual Design</li>
                      <li>Interaction Design</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Tools</h4>
                    <ul className="mt-2 text-sm space-y-1">
                      <li>Figma</li>
                      <li>Adobe XD</li>
                      <li>Sketch</li>
                      <li>InVision</li>
                      <li>Miro</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Other</h4>
                    <ul className="mt-2 text-sm space-y-1">
                      <li>HTML/CSS</li>
                      <li>Design Systems</li>
                      <li>Accessibility</li>
                      <li>Usability Testing</li>
                      <li>A/B Testing</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Certifications */}
              <div>
                <h3 className="text-xl font-semibold border-b pb-2 mb-6">Certifications</h3>
                <ul className="list-disc list-outside ml-5 space-y-2">
                  <li>Google UX Design Professional Certificate</li>
                  <li>Nielsen Norman Group UX Certification</li>
                  <li>Interaction Design Foundation UX Master Certification</li>
                </ul>
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
