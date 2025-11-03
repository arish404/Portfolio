import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "arishkumar404.s@gmail.com",
      href: "mailto:arishkumar404.s@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9952228511",
      href: "tel:+919952228511",
      color: "from-cyan-500 to-teal-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Puducherry, India",
      href: null,
      color: "from-teal-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/arish404",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/arishkumar-s-7533b4244/",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Let's discuss how I can contribute to your team
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full max-w-2xl space-y-6 animate-slide-in-left">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  const content = (
                    <div className="flex items-center gap-5 p-4 bg-muted/30 rounded-lg hover:bg-muted/50 transition-all cursor-pointer">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="text-white" size={24} />
                      </div>  
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a key={index} href={info.href}>
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>

              <div className="mt-8 pt-8 border-t border-border/50">
                <h4 className="text-lg font-semibold mb-4">Connect with me</h4>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 glass-card rounded-xl hover-lift transition-all"
                        aria-label={social.label}
                      >
                        <Icon size={24} className="text-primary" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center animate-fade-in">
          <p className="text-muted-foreground">
            © 2025 Arishkumar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
