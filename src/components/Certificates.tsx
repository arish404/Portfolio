import { Award, CheckCircle } from "lucide-react";

const Certificates = () => {
  const certificates = [
    {
      title: "Python Basics",
      issuer: "Certiport",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Core Java & Web Development",
      issuer: "Capgemini TNS Training",
      color: "from-cyan-500 to-teal-500",
    },
    {
      title: "C Basics",
      issuer: "CISCO",
      color: "from-teal-500 to-emerald-500",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Professional certifications and achievements
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden hover-lift animate-scale-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`h-32 bg-gradient-to-br ${cert.color} flex items-center justify-center relative overflow-hidden`}>
                <Award className="text-white/20 absolute -right-4 -bottom-4" size={120} />
                <Award className="text-white" size={64} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <CheckCircle size={16} className="text-accent" />
                  <span className="text-sm">{cert.issuer}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass-card p-8 rounded-2xl text-center animate-fade-in">
          <p className="text-muted-foreground">
            Continuously learning and expanding my skill set through courses and certifications
          </p>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
