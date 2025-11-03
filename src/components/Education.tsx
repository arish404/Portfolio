import { GraduationCap, Calendar, MapPin } from "lucide-react";

const Education = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Manakula Vinayagar Institute of Technology",
      location: "Puducherry",
      period: "2021 – 2025",
      score: "CGPA – 8.21",
      color: "from-blue-500 to-cyan-500",
    },
    {
      degree: "Higher Secondary Education",
      institution: "VOC Higher Secondary School",
      location: "Puducherry",
      period: "2019 – 2021",
      score: "86.4%",
      color: "from-cyan-500 to-teal-500",
    },
    {
      degree: "High School Education",
      institution: "Immaculate Heart of Mary High School",
      location: "Puducherry",
      period: "2018 – 2019",
      score: "88.8%",
      color: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Academic background and achievements
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="relative animate-slide-in-right"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-6 top-8 w-5 h-5 rounded-full bg-primary border-4 border-background hidden md:block animate-glow-pulse" />

                <div className="md:ml-20">
                  <div className="glass-card p-8 rounded-2xl hover-lift">
                    <div className={`h-1 bg-gradient-to-r ${edu.color} rounded-full mb-6`} />
                    
                    <h3 className="text-2xl font-bold mb-3">{edu.degree}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <GraduationCap size={18} className="text-primary" />
                        <span>{edu.institution}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin size={18} className="text-accent" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar size={18} className="text-primary" />
                        <span>{edu.period}</span>
                      </div>
                    </div>

                    <div className="inline-block px-4 py-2 bg-primary/20 text-primary rounded-lg font-semibold">
                      {edu.score}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
