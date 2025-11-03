import { Target, Zap, Users, Brain } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Looking to contribute to scalable backend solutions and grow into a software engineer role",
    },
    {
      icon: Zap,
      title: "Fast Learner",
      description: "Quick to adapt and continuously learning new technologies and frameworks",
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Strong cross-functional collaboration and proactive communication skills",
    },
    {
      icon: Brain,
      title: "Problem Solver",
      description: "Analytical mindset with proven ability to deliver end-to-end projects",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Passionate developer with a focus on building robust backend systems and modern web applications
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12 animate-fade-in">
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-2xl font-semibold mb-4 text-primary">Career Objective</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Computer Science student with hands-on experience in full-stack development, backend systems,
              and web applications. Skilled in Python, Java, and modern frameworks like Django, React, and
              Spring Boot. Proven ability to deliver end-to-end projects with focus on performance optimization
              and scalability. Looking to contribute to innovative backend solutions and grow into a software
              engineer role where I can make a meaningful impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="glass-card p-6 rounded-xl hover-lift animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default About;
