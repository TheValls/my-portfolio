import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// --- LEARNING POINT: PROPS ---
// Look at the function signature: `export default function ProjectCard({ title, description, imageUrl, tech, liveUrl, githubUrl })`.
// The object in the parentheses `{...}` is called "props". It's how a parent component (like App.jsx)
// can send data down to a child component (this ProjectCard).
// This makes our component reusable! We can create many cards with different data.

export default function ProjectCard({ title, description, imageUrl, tech, liveUrl, githubUrl }) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    // We use motion.div to give it a subtle animation when it appears.
    <motion.div
      variants={cardVariants}
      className="bg-gray-800/50 border border-gray-700 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        
        {/* We map over the 'tech' array prop to display the technology tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((t) => (
            <span key={t} className="bg-valorant-red/20 text-valorant-red text-sm font-semibold px-3 py-1 rounded-full">
              {t}
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-4 mt-auto">
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-valorant-red transition-colors"
          >
            <ExternalLink size={20} />
            <span>Live Demo</span>
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-white hover:text-valorant-red transition-colors"
          >
            <Github size={20} />
            <span>Source Code</span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

