
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Header */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2 order-2 md:order-1">
                <h1 className="mb-6">About Me</h1>
                <p className="text-xl mb-4">
                  Hi, I am Manu
                </p>
                <p className="mb-4">
                  My journey began in front-end engineering, where I discovered my true passion, <strong>User Experience Design</strong>. Over time, I've bridged the gap between technology and design, combining analytical thinking with creativity to craft products that truly serve people.
                </p>
                <p className="mb-4">
                  As an <strong>artist at heart</strong>, I developed strong visual literacy: the ability to understand how color, form, and aesthetics shape meaning and emotion. This artistic foundation, paired with my empathy for people, drives me to create experiences that are not only functional but deeply human.
                </p>
                <p className="mb-4">
                  With <strong>14+ years of experience</strong> across tech, consulting, and agency environments, I've learned to thrive in ambiguity - transforming undefined, complex systems into intuitive, inclusive, and scalable experiences that simplify workflows and empower millions of users worldwide. My process is grounded in curiosity, collaboration, and a user-centric mindset that ensures every solution has real impact.
                </p>
                <p className="mb-4">
                  Outside of work, you'll find me on the basketball court, with a paintbrush in hand, or experimenting in the kitchen - constantly exploring new ways to create, connect, and bring ideas to life.
                </p>
                <p className="mb-8">
                  I'm excited to continue <strong>designing experiences that shape the future of AI and human-centered technology</strong>, making life simpler, smarter, and more meaningful for people everywhere.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild>
                    <Link to="/projects">View My Work</Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link to="/resume">
                      <FileText className="mr-2 h-4 w-4" />
                      Resume
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="md:w-1/2 order-1 md:order-2">
                <img 
                  src="https://manuxer.com/img/profile1.png"
                  alt="Manu, UX Designer"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Background */}
        <section className="py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h2 className="mb-8 text-center">My Background</h2>
              
              <div className="space-y-12">
                <div>
                  <p className="italic">
                    "A simple design isn't just an obvious solution - it's one that solves the problem while leaving room for elegance and emotional connection." - manuxer
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium">User Experience Designer</h4>
                      <p className="text-sm text-muted-foreground mb-2">Amazon | Oct 2021 - Present</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Lead and designed employee experience products</li>
                        <li>Part of a multi-disciplinary group responsible for reinventing how millions (1.5M+) navigate and thrive in their working lives at Amazon</li>
                        <li>User Experience & Interaction Design of products used by over 1.6M customers</li>
                        <li>Accessibility evaluation and remediation of the products</li>
                        <li>Delivered diverse inclusive products ranging from employee self-service (AtoZ), self-identification, disability & leave services and other HR & people management applications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">User Experience Specialist</h4>
                      <p className="text-sm text-muted-foreground mb-2">UserWorks Inc. | May 2019 - Sept 2021</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>User research, Usability engineering, Interaction design, and Accessibility consulting</li>
                        <li>Help clients improve a product at any stage in the development lifecycle</li>
                        <li>Research to help understand end user needs</li>
                        <li>Integrate user experience principles into business or development processes</li>
                        <li>User Research & Interaction Design of a non-profit organization involving medical colleges</li>
                        <li>Accessibility - Evaluation and remediation of both internal and public facing applications for State of Massachusetts</li>
                        <li>Usability Evaluation & Interaction design of the USPS® website</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">UI/UX Consultant</h4>
                      <p className="text-sm text-muted-foreground mb-2">Deloitte | March 2016 - January 2018</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Delivered an end to end transaction banking application reflecting stakeholder needs</li>
                        <li>Designed and developed responsive and reusable components with Interaction Design guidelines</li>
                        <li>Created Interaction design mockups of different user journeys</li>
                        <li>Conducted usability tests to evaluate user journey directions</li>
                        <li>Collaborated with design team to conduct research and create personas, user flows, wireframes, and site maps</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium">Senior UI/UX Design Engineer</h4>
                      <p className="text-sm text-muted-foreground mb-2">Infosys Ltd. | Aug 2011 - March 2016</p>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Created user stories, personas, sitemaps, storyboards, wireframes, prototypes and final coding</li>
                        <li>Helped define a design system and advocated its application across different products and platforms</li>
                        <li>Analyzed and incorporated user testing data and qualitative feedback into designs</li>
                        <li>Translated goals and data into User-Centered digital experiences</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">M.S. Human-Computer Interaction</h4>
                      <p className="text-sm text-muted-foreground">University of Maryland, Baltimore County (UMBC) | 2018 - 2019</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Skills</h3>
                  <div className="space-y-4">
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

export default About;
