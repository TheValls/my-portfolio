import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import Header from './Header';
import ProjectCard from './ProjectCard'; 
import SkillBar from './SkillBar'; 
import ContactForm from './ContactForm';
import Sidebar from './Sidebar';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ['home', 'projects', 'skills', 'about', 'contact'];

  const projectData = [ { title: "Art Ecom ", description: "Perosnal Art selling Website (Under Devolopment)", imageUrl: "public/image_2025-10-30_21-43-31.png", tech: ["HTML-CSS", "JS", "Three.JS", "GSAP"], liveUrl: "#", githubUrl: "#" }, { title: "ChatWith PDF", description: "Chat with PDF using Contextual AI ----still in Local Host :)", imageUrl: "public/pdf.png", tech: ["Python", "Flask", "JavaScript","Google Gemini w-RAG"], liveUrl: "#", githubUrl: "#" } ];
  const skillData = [ { skill: "HTML5 & CS3", level: "90%" }, { skill: "JavaScript", level: "70%" }, { skill: "Python", level: "80%" },{ skill: "Flirting", level: "0.1%" }, ];
  // ... (skillData array is above this)

  // --- 1. Define aboutContent as JSX ---
  // We use a div with spacing for paragraphs, and <span> for highlights.
  const aboutContent = (
    <div className="flex flex-col space-y-4 text-lg md:text-xl">
      <p>
        MCA student who <span className="text-valorant-red font-semibold">codes by day and respawns by night.</span>
      </p>
      <p>
        <span className="text-valorant-red font-semibold">Frontend dev in the making</span> — breaking layouts and fixing them.
      </p>
      <p>
        Sarcasm? That’s just my default error handler.
      </p>
      <p>
        Perfection is a myth, <span className="text-valorant-red font-semibold">but a good UI isn’t.</span>
      </p>
    </div>
  );
  
const sections = { 
    home: { 
      title: "H S SHREYAS", 
      subtitle: "Aspiring Full-Stack Developer", 
      // Add the new text and classes to match the site's style
      content: <p className="text-lg text-gray-400">Currently debugging both life and JavaScript.</p>
    },
    projects: { title: "PROJECTS", content: ( <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.2 } } }}> {projectData.map((project) => ( <ProjectCard key={project.title} {...project} /> ))} </motion.div> ) }, 
    skills: { title: "SKILLS", content: ( <div> {skillData.map((s) => ( <SkillBar key={s.skill} skill={s.skill} level={s.level} /> ))} </div> ) }, 
    
    // --- 2. Update the 'about' section to render the new JSX variable directly ---
    about: { title: "ABOUT ME", content: aboutContent }, 

    contact: { title: "CONTACT", content: ( <div><h3 className="text-2xl font-bold text-white mb-4">Get In Touch</h3><ContactForm /></div> ) } 
  };
  
  const contentVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }, exit: { opacity: 0, y: -20, transition: { duration: 0.3 } } };
  const mobileMenuVariants = { hidden: { x: '-100%' }, visible: { x: 0, transition: { duration: 0.3, ease: 'easeInOut' } } };
  const handleMobileNavClick = (item) => { setActiveSection(item); setIsMenuOpen(false); };

  return (
    <div className="min-h-screen bg-[#111111] text-gray-200 font-sans relative">
     {/* --- REPLACE IT WITH THIS --- */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          {/* Make sure this src matches your video file in the public folder */}
          <source src="/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/50"></div> 
      </div>
      <Header onContactClick={() => setActiveSection('contact')} />
      {activeSection === 'home' && <Sidebar />}

      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden fixed top-4 right-4 z-50 text-white">
        {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isMenuOpen && ( <motion.nav variants={mobileMenuVariants} initial="hidden" animate="visible" exit="hidden" className="md:hidden fixed inset-0 bg-[#111111]/90 backdrop-blur-md z-40 flex items-center justify-center"> <div className="flex flex-col space-y-8 text-center"> {navItems.map((item) => ( <a key={item} onClick={() => handleMobileNavClick(item)} className={`nav-link font-valorant text-5xl text-white ${activeSection === item ? 'active' : ''}`}>{item.toUpperCase()}</a> ))} </div> </motion.nav> )}
      </AnimatePresence>
      
      {/* The main container for the two-column layout */}
      <div className="relative z-10 flex">
        {/* Fixed Left Navigation */}
        <nav className="hidden md:flex w-1/3 max-w-sm p-12 items-center justify-start fixed top-0 left-0 h-full pt-28">
          <div className="flex flex-col space-y-6">
            {navItems.map((item) => ( <a key={item} onClick={() => setActiveSection(item)} className={`nav-link font-valorant text-5xl text-white ${activeSection === item ? 'active' : ''}`}>{item.toUpperCase()}</a> ))}
          </div>
        </nav>
        
        {/* --- The Definitive Layout Fix ---
            This main content area uses margin-left to create space for the nav.
            It will have consistent width whether the right sidebar is visible or not.
        */}
        <main className="w-full min-h-screen flex items-center justify-center p-6 md:p-12 pt-28 ml-auto md:ml-[33.33%]">
          <div className="w-full max-w-4xl">
            <AnimatePresence mode="wait">
              <motion.div key={activeSection} variants={contentVariants} initial="hidden" animate="visible" exit="exit">
                <h1 className="font-valorant text-6xl md:text-8xl text-white">{sections[activeSection].title}</h1>
                {activeSection === 'home' && ( <h2 className="text-2xl md:text-3xl text-valorant-red mt-2">{sections[activeSection].subtitle}</h2> )}
                <div className="mt-6 text-lg max-w-4xl text-gray-400">
                  {sections[activeSection].content}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}