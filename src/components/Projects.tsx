import { ExternalLink, TrendingUp } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Job Platform – Full-Stack Job Portal",
      year: "2025",
      technologies: ["Django", "PostgreSQL", "Redis", "Celery"],
      description: "Built a full-stack job portal enabling candidates to apply and employers to manage postings, increasing response efficiency by 40%.",
      achievements: [
        "Integrated Celery + Redis for asynchronous resume scoring, reducing request latency by ~70%",
        "Implemented Redis caching for job listings, cutting database hits by ~60%",
        "Secured employer-only job application visibility with RBAC, improving data privacy compliance by 100%",
      ],
      gradient: "from-blue-500 to-cyan-500",
      link: "https://github.com/arish404/JobPlatform",
    },
    {
      title: "Shopping Mall Management System",
      year: "2025",
      technologies: ["Java Spring Boot", "PostgreSQL"],
      description: "Built a comprehensive mall management system with shop, staff, and sales modules.",
      achievements: [
        "Developed backend services in Spring Boot with PostgreSQL integration",
        "Added admin features for shop registration and activity monitoring",
        "Implemented scalable architecture for multi-tenant support",
      ],
      gradient: "from-cyan-500 to-teal-500",
      link: "https://github.com/arish404/EcommerceSite",
    },
    {
      title: "Chat with PDF – Nirma University Hackathon",
      year: "2023",
      technologies: ["Gemini API", "Streamlit", "Python"],
      description: "Built an AI-powered PDF assistant that answered user queries securely, improving document accessibility.",
      achievements: [
        "Optimized PDF parsing speed by 30% using Gemini API integration",
        "Delivered a user-friendly Streamlit interface for seamless file uploads",
        "Enabled real-time interaction with documents through natural language",
      ],
      gradient: "from-teal-500 to-emerald-500",
      link: "https://github.com/arish404/chat_with_pdf",
    },
    {
      title: "CGPA Tracker – Mini Project",
      year: "2024",
      technologies: ["Python Django", "HTML", "CSS"],
      description: "Developed a web-based grade tracking tool that eliminated manual errors in CGPA calculation.",
      achievements: [
        "Enhanced user experience with clean and responsive interface, cutting student effort by 40%",
        "Improved data accuracy & accessibility with centralized Django ORM backend",
        "Implemented intuitive data visualization for academic performance tracking",
      ],
      gradient: "from-emerald-500 to-green-500",
      link: "https://github.com/arish404/cgpa_calculator",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Real-world applications showcasing my technical expertise
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl overflow-hidden hover-lift animate-scale-in block cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <span className="text-sm text-muted-foreground">{project.year}</span>
                  </div>
                  <ExternalLink className="text-primary" size={24} />
                </div>

                <p className="text-muted-foreground mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="space-y-3">
                  {project.achievements.map((achievement, achIndex) => (
                    <div key={achIndex} className="flex items-start gap-3">
                      <TrendingUp className="text-accent mt-1 flex-shrink-0" size={16} />
                      <span className="text-sm text-muted-foreground">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
