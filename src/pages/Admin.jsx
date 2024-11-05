import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import resultado from "../assets/resultados_test.png";
import analisis from '../assets/analisis.png'
import '../stylesheets/home_page/home_page.scss';
import '../stylesheets/admin/foto.scss';

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
    <div className="container"> {/* Contenedor principal con clase container */}
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleAnimationComplete}
      >
        Resultados
      </motion.h1>

      {showParagraph && (
        <>
          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Te presentamos los resultados del equipo en el test de Spotify Squad Health Check.
          </motion.h2>

          <div className="center_image_container"> {/* Contenedor para centrar la imagen */}
            <img src={resultado} alt="Resultados del test" />
          </div>

          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Análisis de tendencias.
          </motion.h2>
          
          <div className="center_image_container"> {/* Contenedor para centrar la imagen */}
            <img src={analisis} alt="Resultados del test" />
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
