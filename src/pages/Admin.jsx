import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom'; 
import resultado from "../assets/resultados_test.png";
import analisis from '../assets/analisis.png';
import '../stylesheets/home_page/home_page.scss';
import '../stylesheets/admin/foto.scss';

export const HomePage = () => {
  const [showParagraph, setShowParagraph] = useState(false);
  const navigate = useNavigate();

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

  const handleNavigateHome = () => {
    navigate("/"); 
  };

  return (
    <div className="container">
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

          <div className="center_image_container">
            <img src={resultado} alt="Resultados del test" />
          </div>

          <motion.h2
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Análisis de tendencias.
          </motion.h2>
          
          <div className="center_image_container">
            <img src={analisis} alt="Análisis de tendencias" />
          </div>

          <button
            onClick={handleNavigateHome}
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              backgroundColor: "#F4B942",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "bold",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#c28b1d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#F4B942")}
          >
            Volver a Inicio
          </button>
        </>
      )}
    </div>
  );
};

export default HomePage;
