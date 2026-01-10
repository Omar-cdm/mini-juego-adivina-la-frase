import { random } from './utils.js';

export function header() {
    return `
        <header class="backdrop-blur-md fixed inset-x-1/6 top-2 z-1 rounded-4xl min-w-2/5 min-h-14 px-4 py-2 flex items-center border-2 border-sky-600 animate-entrance-top-to-bottom shadow-xl shadow-sky-500/60 sm:min-h-15 xl:min-h-18">
            <div class="w-full flex justify-between items-center">
                <h1 class="text-lg text-yellow-300 font-bold sm:text-2xl">Min-Game</h1>
                <a href="https://github.com/Omar-cdm/mini-juego-adivina-la-frase">
                    <svg class="size-8 stroke-yellow-200 sm:size-9 xl:size-10" viewBox="0 0 48 48" id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke-linecap:round;stroke-linejoin:round;fill-rule:evenodd;}</style></defs><path class="cls-1" d="M24,2.5a21.5,21.5,0,0,0-6.8,41.9c1.08.2,1.47-.46,1.47-1s0-1.86,0-3.65c-6,1.3-7.24-2.88-7.24-2.88A5.7,5.7,0,0,0,9,33.68c-1.95-1.33.15-1.31.15-1.31a4.52,4.52,0,0,1,3.29,2.22c1.92,3.29,5,2.34,6.26,1.79a4.61,4.61,0,0,1,1.37-2.88c-4.78-.54-9.8-2.38-9.8-10.62a8.29,8.29,0,0,1,2.22-5.77,7.68,7.68,0,0,1,.21-5.69s1.8-.58,5.91,2.2a20.46,20.46,0,0,1,10.76,0c4.11-2.78,5.91-2.2,5.91-2.2a7.74,7.74,0,0,1,.21,5.69,8.28,8.28,0,0,1,2.21,5.77c0,8.26-5,10.07-9.81,10.61a5.12,5.12,0,0,1,1.46,4c0,2.87,0,5.19,0,5.9s.39,1.24,1.48,1A21.5,21.5,0,0,0,24,2.5"/></svg>
                </a>
            </div>
        </header>
    `
};

export function sectionHero() {
    return `
        <section class="h-dvh grid place-items-center seccion-iniciar-juego">
            <div class="flex flex-col items-center gap-8">
                <h1 class="text-3xl text-center text-sky-100 font-bold px-2 box-border sm:text-4xl">Have fun guessing a phrase from your favorite character.</h1>
                <button class="bg-yellow-300 text-xl font-bold w-32 min-h-10 rounded-md transition delay-110 duration-400 ease hover:bg-yellow-400 hover:scale-102 hover:shadow-xl hover:shadow-yellow-400/30 hover:cursor-pointer comenzar-juego">Start</button>
            </div>
        </section>
    `
}

export function sectionChooseCharacter() {
    return `
       <section class="h-dvh flex flex-col justify-center items-center seccion-elegir-personaje">
            <h1 class=" text-center text-2xl text-sky-100 font-bold mb-4 sm:text-3xl">Choose Your Favorite Character</h1>
            <div class="w-full h-1/2 overflow-auto px-4 mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4 container"></div>
            <button class="bg-yellow-300 text-xl font-bold w-32 min-h-10 rounded-md transition delay-110 duration-400 ease hover:bg-yellow-400 hover:scale-102 hover:shadow-xl hover:shadow-yellow-400/30 hover:cursor-pointer jugar">Play</button>
        </section> 
    `
}

export function createCard(image, title) {
    return `
        <article class="bg-yellow-100 rounded-xl flex flex-col items-center border-2 border-sky-800 p-2 box-border">
            <header class="w-full flex flex-col items-center">
                <img class="size-26" alt="imagen de personaje" src="https://cdn.thesimpsonsapi.com/${200}${image}">
                <h2 class="w-full truncate text-lg font-semibold text-center">${title}</h2>
            </header>
            <input type="radio" class="hidden peer button" id="${title}" name="character">
                <label class="bg-orange-400 w-1/2 flex justify-center items-center text-white rounded-xl p-1 box-boder my-2 transition delay-110 duration-400 ease peer-checked:bg-green-600 hover:cursor-pointer hover:bg-green-600 hover:scale-102" for="${title}">
                    <p class="text-sm">Choose</p>
                </label>
            </input>
        </article>
    `
}

export function sectionGuessPhrase(personaje, frasesRandom, fraseElegida) {
    return`
        <section class="h-dvh flex flex-col justify-center items-center">
            <h1 class="text-2xl text-center text-sky-100 font-bold mb-2 sm:text-3xl">¿What phrase does he mention <br>${personaje}?</h1>
            <div class="w-full h-80 overflow-auto px-4 flex flex-col items-center gap-2">${renderFrases(frasesRandom, fraseElegida)}</div>
        </section>
    `
};

export function sectionGameEnd(resultado) {
    return `
        <section class="h-dvh flex flex-col justify-center items-center">
            <h1 class="text-4xl text-center text-sky-100 font-bold mb-8 sm:text-5xl">${resultado}</h1>
            <button class="bg-yellow-300 text-xl font-bold w-32 min-h-10 rounded-md transition delay-110 duration-400 ease hover:bg-yellow-400 hover:scale-102 hover:shadow-xl hover:shadow-yellow-400/30 hover:cursor-pointer reiniciar">Reiniciar</button>
        </section>
    `
};

export function footer() {
    return `
        <footer class="bg-linear-to-b from-transparent to-stone-800 min-w-screen p-2 box-border fixed z-1 bottom-0 flex flex-col">
            <div class="w-full flex justify-center px-2">
                <a class="text-lg text-sky-100 font-bold underline border-r-1 border-sky-100 px-2" href="https://omardev.dev">OmarDev</a>
                <a class="text-lg text-sky-100 font-bold underline px-2" href="https://github.com/Omar-cdm">GitHub</a>
            </div>
            <p class="text-center text-sky-100">Note: This game contains information extracted from <a class="text-sky-100 underline font-semibold" href="https://thesimpsonsapi.com/">The Simpsons Api</a></p>
        </footer>
    `
};

function renderFrases(frases, fraseElegida) {
    let elementosFrases = [];
    frases.splice(random(0, elementosFrases.length - 1), 0, fraseElegida);
    let frase
    frases.forEach(f => {
        frase = `<button class="w-full bg-yellow-100 p-1 box-boder border-1 border-yellow-400 rounded-xl transition delay-110 duration-400 ease hover:cursor-pointer hover:scale-102 sm:w-5/6 boton-frase">${f}</button>`
        elementosFrases.push(frase);
    });
    
    return elementosFrases.join("");
}