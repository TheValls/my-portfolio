import { motion } from 'framer-motion';

// This component takes two props: `skill` (the name) and `level` (a string like "90%").
export default function SkillBar({ skill, level }) {
  
  // --- LEARNING POINT: VIEWPORT ANIMATIONS ---
  // These are our animation variants.
  const variants = {
    // The 'hidden' state is when the bar is off-screen. Width is 0.
    hidden: { width: 0 },
    // The 'visible' state is when it's on-screen. We animate the width to the `level` prop.
    // The `transition` adds a slight delay and a smooth easing effect.
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
        {/* --- LEARNING POINT ---
          This `motion.div` is the animated bar.
          `initial="hidden"` and `whileInView="visible"` are the magic props.
          It tells Framer Motion: "Start in the 'hidden' state. When this element scrolls into view,
          animate it to the 'visible' state."
          `viewport={{ once: true }}` ensures the animation only runs once.
        */}
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