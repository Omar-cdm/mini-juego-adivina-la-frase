import { traerObejto } from './api.js';
import { header, sectionHero, sectionChooseCharacter, createCard, sectionGuessPhrase, sectionGameEnd, footer } from './components-root.js';
import { random } from './utils.js';

const root = document.querySelector('#root');

renderLayout()    
comenzarJuego();

function renderLayout() {
    root.innerHTML =  `
        ${header()}
            <main>
                ${sectionHero()}
            </main>
        ${footer()}
    `
};

function comenzarJuego() {
    const botonJugar = document.querySelector('.comenzar-juego');
    botonJugar.addEventListener('click', async () => {
        renderizar(sectionChooseCharacter());
        const objetos = await extraerObjetos()
        mostrarCard(objetos)
        jugar(objetos)
    })
};

async function extraerObjetos() {
    return await traerObejto()
};

function mostrarCard(objetos) {
    const contendor = document.querySelector('.container');
    const arrayElementos = objetos.map((objeto) => {
        return createCard(objeto.portrait_path, objeto.name);
    });
    contendor.innerHTML = arrayElementos.join("");
};

function jugar(personajes) {
    const elegir = document.querySelectorAll('.button');
    const botonJugar = document.querySelector('.jugar');
    botonJugar.addEventListener("click", () => {
        elegir.forEach(boton => {
            if (boton.checked == true) {
                const frasePersonaje = extraerFrasePersonaje(personajes, boton.id);
                const frasesAleatorias = elegirFrasesAleatorias(personajes);
                renderizar(sectionGuessPhrase(boton.id, frasesAleatorias, frasePersonaje));
                verificarEleccion(frasePersonaje);
            };
        })
    })
};

function extraerFrasePersonaje(personajes, nombrePersonaje) {
    let frase 
    personajes.forEach(p => {
        if (p.name == nombrePersonaje) {
            frase =  p.phrases[random(0, p.phrases.length - 1)];
        }
    })
    return frase
};

function elegirFrasesAleatorias(personajes) {
    let personajesRandom = []
    for (let i = 0; i < 4; i++) {
        let elegirRandom = personajes[random(0, personajes.length - 1)]
        const replica = personajesRandom.some(p => p.id == elegirRandom.id)
        if (replica === true) {
            i--
        } else {
            personajesRandom.push(elegirRandom);
        }
    }
    return extraerFrasesRandom(personajesRandom);
};

function extraerFrasesRandom(personajesRandom) {
    let frasesRandom = []
    personajesRandom.forEach(personaje => {
        frasesRandom.push(personaje.phrases[random(0, personaje.phrases.length -1)]);
    });
    return frasesRandom;
};

function verificarEleccion(frase) {
    const botonesFrases = document.querySelectorAll('.boton-frase');
    let contador = 0
    botonesFrases.forEach(boton => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent == frase) {
                e.target.classList.toggle('bg-yellow-100')
                e.target.classList.toggle('bg-green-400')
                reiniciarJuego("Winner");
            } else if (e.target.textContent != frase) {
                contador++
                e.target.classList.toggle('bg-yellow-100')
                e.target.classList.toggle('bg-red-400')
                if (contador == 3) {
                    reiniciarJuego("Sorry, You Lost");
                };
            }
            boton.disabled = true;
        });
    });
};

function renderizar(seccion) {
    const main = document.querySelector('main');
    main.innerHTML = "";
    main.innerHTML = seccion;
};

function reiniciarJuego(resultado) {
    renderizar(sectionGameEnd(resultado));
    const botonReiniciar = document.querySelector('.reiniciar');
    botonReiniciar.addEventListener('click', () => {
        window.location.reload();
    });
    
};


