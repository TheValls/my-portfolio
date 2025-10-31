import { motion } from 'framer-motion';


export default function SkillBar({ skill, level }) {
  

  const variants = {
    
    hidden: { width: 0 },
    
    visible: {
      width: level,
      transition: { duration: 1.5, ease: "easeOut" }
    }
  };

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-lg font-semibold text-white">{skill}</span>
        <span className="text-sm font-bold text-valorant-red">{level}</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-4 overflow-hidden">
        {}
        <motion.div
          className="bg-valorant-red h-4 rounded-full"
          variants={variants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}