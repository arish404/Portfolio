import { Code2, Database, Wrench, Shield } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming",
      color: "from-blue-500 to-cyan-500",
      skills: ["Python", "Java"],
    },
    {
      icon: Database,
      title: "Web Development",
      color: "from-cyan-500 to-teal-500",
      skills: ["Django", "React", "Node.js", "HTML", "CSS", "SQL"],
    },
    {
      icon: Wrench,
      title: "Tools & Technologies",
      color: "from-teal-500 to-emerald-500",
      skills: ["Git", "PostgreSQL", "Docker"],
    },
    {
      icon: Shield,
      title: "Security & Systems",
      color: "from-emerald-500 to-green-500",
      skills: ["Web Pentesting", "BurpSuite", "Linux Basics"],
    },
  ];

  const softSkills = [
    "Adaptability & Continuous Learning",
    "Cross-Functional Collaboration",
    "Proactive Communication",
    "Problem-Solving Mindset",
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={index}
                className="glass-card p-8 rounded-2xl hover-lift animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                    <Icon className="text-white" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 bg-muted/50 rounded-lg text-sm font-medium border border-border/50 hover:border-primary/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="glass-card p-8 rounded-2xl animate-fade-in">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            <span className="gradient-text">Soft Skills</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {softSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-primary" />
                <span className="text-foreground">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
