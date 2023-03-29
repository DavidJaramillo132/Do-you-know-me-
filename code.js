const questions = [ 
    {
        pregunta: "¿David ya es mayor de edad?",
        respuestaCorrecta: true
    },
    {
        pregunta: "¿David tiene 19 años?",
        respuestaCorrecta: false,

    },
    {
        pregunta: "¿David está soltero?",
        respuestaCorrecta: true,
    },
    {
        pregunta: "¿David vive en Manta?",
        respuestaCorrecta: true,
    },
    {
        pregunta: "Su tío es el alcalde de Manta",
        respuestaCorrecta: false,
    },
    {
        pregunta: "Tu puntaje total es: ",
    },
];

const text = document.getElementById("ques");

const yesBtn = document.querySelector(`.yes-btn`);
const noBtn = document.querySelector(`.no-btn`);


//cambiar pregunta que viene en el primer const
let currentItem = 0;
let puntos = 0;

//carga principal
window.addEventListener("DOMContentLoaded", function(){
    nextQuestion(currentItem);
})

//mostrar pregunta

function nextQuestion(){
    const item = questions[currentItem];
    text.textContent = item.pregunta;
    if (currentItem >= 5) {
        document.getElementById("ques").textContent = `Puntos Totales: ${puntos}`;
    }
};




yesBtn.addEventListener(`click`, function(){
    const item = questions[currentItem];
  if (item.respuestaCorrecta) {
    puntos++;
  }
  currentItem++;
  nextQuestion(currentItem);
})

noBtn.addEventListener(`click`, function(){
    const item = questions[currentItem];
    if (!item.respuestaCorrecta) {
      puntos++;
    }
    currentItem++;
    nextQuestion(currentItem);
    console.log(puntos);
})



