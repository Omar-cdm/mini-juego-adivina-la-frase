import { useState, useEffect } from 'react'
import { SectionHero } from "../../features/hero/Hero.tsx"
import { SectionChooseCharacter } from '../../features/choose-character/ChooseCharacter.tsx'
import { SectionGuessPhrase } from '../../features/guess-phase/GuessPhrase.tsx'

export default function Main() {
    const [section, setSection] = useState('hero')
    const [character, setCharacter] = useState('')
    const [characters, setCharacters] = useState<any[]>([])
    const [phraseSelect, setPhraseSelect] = useState('')
    const [phrasesCharacter, setPhrasesCharacter] = useState<any[]>([])

    function filterCharacter(characters: any) {
        setCharacters(characters.filter((objeto: any) => objeto.phrases != "" && objeto.id != 10))
    }

    useEffect(() => {
        const request = new Request("https://thesimpsonsapi.com/api/characters")
        fetch(request)
            .then(res => res.json())
            .then(data => filterCharacter(data.results))

    }, [])

    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function selectPhrasesRandom(ch: any) {
        const characterNew = characters.filter((c: any) => c.name != ch)
        const array: any[] = []
        const arrayPhrases: any[] = []

        for(let i = 0; i < 4; i++) {
            array.push(characterNew[random(0, characters.length - 1)])
        }

        array.forEach(c => {arrayPhrases.push(c.phrases[random(0, c.phrases.length - 1)])})

        return arrayPhrases
    }

    function initGame(character: string, phrase: string) {
        if(character != '') {
            setSection('guess')
            setCharacter(character)
            setPhraseSelect(phrase)
            setPhrasesCharacter(selectPhrasesRandom(character))
        } else {
            alert('Choose Character')
        }
    }

    return (
        <main>
            { section === 'hero' && <SectionHero playGame={() => { setSection('choose') }}/> }
            { section === 'choose' && <SectionChooseCharacter initGame={initGame} characters={characters}/> }
            { section === 'guess' && <SectionGuessPhrase personaje={character} phrases={phrasesCharacter} phraseSelect={phraseSelect} /> }
        </main>
    )
}