
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const HomePage = () => {
  const [showParagraph, setShowParagraph] = useState(false); 

  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, 
    },
  };

  
  const handleAnimationComplete = () => {
    setShowParagraph(true); 
  };

  return (
    <div>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleAnimationComplete} 
      >
        Mide la salud de tu equipo agil
      </motion.h1>
      {showParagraph && ( 
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Te presentamos distintas pruebas para que puedas medir la salud de tu equipo ágil.
        </motion.p>
      )}
    </div>
  );
};

export default HomePage;
