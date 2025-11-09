
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
                <h1 className="mb-6">About me</h1>
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
                    <Link to="/projects">View my work</Link>
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
        
        {/* Quote Section */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <blockquote className="text-2xl md:text-3xl font-light italic leading-relaxed text-foreground/90">
                "A simple design isn't just an obvious solution - it's one that solves the problem while leaving room for elegance and emotional connection."
                <footer className="mt-6 text-lg font-medium not-italic text-muted-foreground">
                  — manuxer
                </footer>
              </blockquote>
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
