import { Github, Linkedin, Mail, Phone, MapPin, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 pt-20 relative">
      {/* Floating elements */}
      <div className="absolute top-40 left-10 w-20 h-20 rounded-full bg-primary/10 blur-3xl animate-float" />
      <div className="absolute bottom-40 right-10 w-32 h-32 rounded-full bg-accent/10 blur-3xl animate-float" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto text-center">
        <div className="animate-fade-in-up">
          <div className="inline-block mb-4 px-4 py-2 glass-card rounded-full text-sm text-primary">
            Full-Stack Developer
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Hi, I'm <span className="gradient-text">Arishkumar</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Computer Science student with hands-on experience in full-stack development,
            backend systems, and web applications. Passionate about building scalable solutions.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin size={20} className="text-primary" />
              <span>Puducherry, India</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Mail size={20} className="text-primary" />
              <span>arishkumar404.s@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Phone size={20} className="text-primary" />
              <span>+91 9952228511</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-4 mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground hover-lift"
              onClick={scrollToContact}
            >
              Get In Touch
            </Button>
            
            <div className="flex items-center gap-2">
              <a
                href="https://github.com/arishkumar404"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover-lift transition-all"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/arishkumar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-full hover-lift transition-all"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="animate-bounce mt-12">
          <ArrowDown size={32} className="mx-auto text-primary/50" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
