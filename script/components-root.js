import { random } from './utils.js';

export function header() {
    return `
        <header>
            <div>
                <h1>Min-Game The Simpsons</h1>
            </div>
        </header>
    `
};

export function sectionHero() {
    return `
        <section>
            <h1>Diertete adivinando una frase de tu personaje favorito</h1>
            <button class="comenzar-juego">Jugar</button>
        </section>
    `
}

export function sectionChooseCharacter() {
    return `
       <section>
            <h1>Elige Tu Personaje Favorito</h1>
            <div class="container"></div>
            <button class="jugar">Jugar</button>
        </section> 
    `
}

export function createCard(image, title) {
    return `
        <article>
            <header>
                <img alt="imagen de personaje" src="https://cdn.thesimpsonsapi.com/${200}${image}">
                <h2>${title}</h2>
            </header>
            <input type="radio" class="button" id="${title}" name="mokepon">
                <label for="${title}">
                    <p>Elegir</p>
                </label>
            </input>
        </article>
    `
}

export function sectionGuessPhrase(personaje, frasesRandom, fraseElegida) {
    return`
        <section>
            <h1>Cual es la frase que mensiona ${personaje}</h1>
            <div>${renderFrases(frasesRandom, fraseElegida)}</div>
        </section>
    `
};

export function footer() {
    return `
        <footer>
            <a href="#">OmarDev</a>
            <a href="#">GitHub</a>
            <p>Nota: Este juego contiene informacion extraida de la <strong>The Simpsons Api</strong></p>
        </footer>
    `
};

function renderFrases(frases, fraseElegida) {
    let elementosFrases = [];
    frases.splice(random(0, elementosFrases.length - 1), 0, fraseElegida);
    let frase
    frases.forEach(f => {
        frase = `<button class="boton-frase">${f}</button>`
        elementosFrases.push(frase);
    });
    
    return elementosFrases.join("");
}