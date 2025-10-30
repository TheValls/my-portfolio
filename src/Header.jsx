import { Github, Linkedin, Download, Mail } from 'lucide-react';

export default function Header({ onContactClick }) {
  const socialLinks = [
    { icon: <Github size={24} />, href: 'https://github.com/TheValls', title: 'GitHub' },
    { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/shreyas-hs-629149369/', title: 'LinkedIn' },
    { icon: <Download size={24} />, href: 'src/Full potential resume_20250723_085601_0000.pdf', title: 'Resume' },
    { icon: <Mail size={24} />, action: onContactClick, title: 'Contact Me' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 h-20 px-8 md:px-12 flex justify-between items-center z-30">
      {/* Left Side: Your Branding */}
      <div className="font-valorant text-xl md:text-2xl text-white uppercase tracking-widest">
         <span className="text-valorant-red">✦</span> Portfolio <span className="text-valorant-red"> ✦</span>
      </div>

      {/* Right Side: Your Social Icons */}
      <div className="hidden md:flex items-center space-x-6">
        {socialLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={link.action}
            target={link.href ? '_blank' : undefined}
            rel="noopener noreferrer"
            title={link.title}
            className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
          >
            {link.icon}
          </a>
        ))}
      </div>
    </header>
  );
}