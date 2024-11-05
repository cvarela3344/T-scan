export const json = {
    "locale": "es",
    "title": {
      "es": "Spotify Squad Health Check"
    },
    "logoPosition": "right",
    "pages": [
      {
        "name": "page1",
        "questionTitleLocation": "top",
        "title": {
          "es": "Instrucciones"
        },
        "description": {
          "es": "Para cada frase planteada, seleccione la opción que mejor represente su situación dentro del equipo. La sonrisa de color verde indica que está de acuerdo con lo planteado, la cara triste de color rojo indica que no está de acuerdo, y la cara amarilla indica que está en un punto intermedio. En lo posible, evite seleccionar esta última."
        },
        "navigationButtonsVisibility": "show",
        "elements": [
          {
            "type": "rating",
            "name": "Calidad-tecnica",
            "title": {
              "es": "Calidad Técnica"
            },
            "description": {
              "es": "¡Estamos orgullosos de la calidad de nuestro código! Es claro, fácil de leer y tiene buena cantidad de pruebas realizadas."
            },
            "isRequired": true,
            "rateType": "smileys",
            "scaleColorMode": "colored",
            "autoGenerate": false,
            "rateCount": 3,
            "rateValues": [
              "Item 1",
              "Item 2",
              "Item 3"
            ],
            "displayMode": "buttons"
          },
          {
            "type": "rating",
            "name": "valor",
            "title": {
              "es": "Valor"
            },
            "description": {
              "es": "¡Nuestros entregables son muy buenos! Nos enorgullece y nuestros stakeholders quedan satisfechos."
            },
            "rateType": "smileys",
            "rateCount": 3,
            "rateMax": 3
          },
          {
            "type": "rating",
            "name": "velocidad",
            "title": {
              "es": "Velocidad"
            },
            "description": {
              "es": "Hacemos nuestro trabajo rápidamente. Sin esperas ni retrasos."
            },
            "rateType": "smileys",
            "rateCount": 3,
            "rateMax": 3
          },
          {
            "type": "rating",
            "name": "apoyo",
            "title": {
              "es": "Apoyo"
            },
            "description": {
              "es": "¡Siempre obtenemos gran apoyo y ayuda cuando la solicitamos!"
            },
            "rateType": "smileys",
            "rateCount": 3,
            "rateMax": 3
          },
          {
            "type": "rating",
            "name": "peones-jugadores",
            "title": {
              "es": "Peones o Jugadores"
            },
            "description": {
              "es": "¡Estamos en control de nuestro destino! Decidimos qué hacer y cómo hacerlo."
            },
            "rateType": "smileys",
            "rateCount": 3,
            "rateMax": 3
          }
        ]
      }
    ],
    "sendResultOnPageNext": true,
    "showTitle": false,
    "showCompletedPage": false,
    "allowResizeComment": false
  }