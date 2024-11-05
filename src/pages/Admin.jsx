// src/pages/home_page.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import resultado from "../assets/resultados_test.png";
import '../stylesheets/home_page/home_page.scss';
import '../stylesheets/admin/foto.scss';

export const HomePage = () => {
  const [showParagraph, setShowParagraph] = useState(false); // Estado para controlar la visibilidad del párrafo

  // Configuración de la animación para el encabezado y el párrafo
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }, // Duración de la animación para ambos
    },
  };

  // Efecto para mostrar el párrafo después de que el encabezado termine
  const handleAnimationComplete = () => {
    setShowParagraph(true); // Muestra el párrafo después de la animación del encabezado
  };

  return (
    <div>
      <motion.h1
        variants={textVariants}
        initial="hidden"
        animate="visible"
        onAnimationComplete={handleAnimationComplete} // Maneja el evento de finalización de la animación
      >
        Resultados
      </motion.h1>
      {showParagraph && ( // Renderiza el párrafo solo si showParagraph es verdadero
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Te presentamos los resultados del equipo en el test de Spotify Squad Health Check.
          <div className='center_image_container'><img src={resultado}/></div>
          
        </motion.p>
      )}

        {showParagraph && ( // Renderiza el párrafo solo si showParagraph es verdadero
        <motion.p
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          Analisis de tendencias.
        </motion.p>
      )}
    </div>
  );
};

export default HomePage;
