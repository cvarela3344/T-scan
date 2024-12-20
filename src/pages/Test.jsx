import React from 'react';
import Card from '../components/card';

export const Tests = () => {
  const cardsData = [
    { text1: 'Spotify Squad Health Check', text2: 'Introducida por Henrik Kniberg, es una herramienta '+ 
      'diseñada para medir la salud de un equipo o "squad". '+
      'Utiliza sistemas de colores para medir las respuestas.', text3: 'Comenzar', link: '/Spotify' },
    { text1: 'Crisp Happiness Index', text2: 'Principal métrica utilizada por Crisp '+
      'para medir de manera sistemática a los equipos. Escala de 1 a 5', text3: 'Comenzar', link: '/Happiness' },
    { text1: 'Scrum Team Survey', text2: 'Creado como apoyo para equipos Scrum en la mejora continua. '+
      'Ayuda en la creación de workshops para medir la salud del equipo.', text3: 'Comenzar', link: '/detalles/3' },
    { text1: 'Team Barometer', text2: 'Parte de un workshop. Se utilizan colores verde, rojo y amarillo. Se sugiere previo a la reunión.', text3: 'Comenzar', link: '/detalles/4' },
    ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <Card key={index} text1={card.text1} text2={card.text2} text3={card.text3} link={card.link} />
      ))}
    </div>
  );
};

export default Tests;
