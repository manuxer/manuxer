
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
                  I'm Jane Doe, a UX designer passionate about creating 
                  digital experiences that are both beautiful and functional.
                </p>
                <p className="mb-8">
                  With over 5 years in the industry, I've worked with startups, 
                  agencies, and established companies to solve complex design challenges 
                  and create products that users love.
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
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Jane Doe, UX Designer"
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
                  <h3 className="text-xl font-medium mb-4">My Approach</h3>
                  <p className="mb-4">
                    I believe good design starts with understanding user needs. Through research, empathy, and 
                    iteration, I create designs that are not just visually appealing but truly meet user expectations.
                  </p>
                  <p>
                    Accessibility and inclusive design are central to my work. I strive to create products 
                    that can be used by everyone, regardless of their abilities or circumstances.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Experience</h3>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-medium">Senior UX Designer at TechCorp</h4>
                      <p className="text-sm text-muted-foreground mb-2">2021 - Present</p>
                      <p>
                        Leading design for flagship products, conducting user research, and collaborating 
                        with cross-functional teams to deliver exceptional user experiences.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">UX Designer at Design Studio X</h4>
                      <p className="text-sm text-muted-foreground mb-2">2018 - 2021</p>
                      <p>
                        Worked on projects for various clients across finance, healthcare, and e-commerce, 
                        focusing on user-centered design solutions.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium">UI/UX Intern at StartUp Inc.</h4>
                      <p className="text-sm text-muted-foreground mb-2">2017 - 2018</p>
                      <p>
                        Assisted senior designers in creating wireframes, prototypes, and conducting usability testing.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">Master's in Human-Computer Interaction</h4>
                      <p className="text-sm text-muted-foreground">University of Design, 2017</p>
                    </div>
                    <div>
                      <h4 className="font-medium">Bachelor's in Graphic Design</h4>
                      <p className="text-sm text-muted-foreground">Creative Arts University, 2015</p>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-medium mb-4">Skills</h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-4">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      User Research
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Wireframing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Prototyping
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Usability Testing
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Figma
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Adobe XD
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Sketch
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Information Architecture
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      Accessibility
                    </li>
                  </ul>
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
