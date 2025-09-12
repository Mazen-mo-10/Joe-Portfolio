import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left side - Name and Copyright */}
          <div className="text-center md:text-left">
            <h3 className="font-semibold text-lg gradient-text mb-1">
              Youssef Mostafa Mohamed
            </h3>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved{" "}
            </p>
          </div>

          {/* Center - Navigation Links */}
          <div className="hidden md:flex items-center gap-6">
            {[
              { name: "Home", href: "#home" },
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" },
            ].map((link) => (
              <button
                key={link.name}
                onClick={() =>
                  document
                    .querySelector(link.href)
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Joe-elkade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="http://www.linkedin.com/in/youssef-mostafa-elkade"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:youssefmostafaelkade@gmail.com"
              className="p-2 rounded-full hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
              aria-label="Email Contact"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
