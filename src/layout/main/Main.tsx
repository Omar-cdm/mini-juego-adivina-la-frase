import { useState, useEffect } from 'react'
import { SectionHero } from "../../features/hero/Hero.tsx"
import { SectionChooseCharacter } from '../../features/choose-character/ChooseCharacter.tsx'
import { SectionGuessPhrase } from '../../features/guess-phase/GuessPhrase.tsx'

export default function Main() {
    const [section, setSection] = useState('hero')
    const [character, setCharacter] = useState('')
    const [characters, setCharacters] = useState([])

    function filterCharacter(characters: any) {
        setCharacters(characters.filter((objeto: any) => objeto.phrases != "" && objeto.id != 10))
    }

    useEffect(() => {
        const request = new Request("https://thesimpsonsapi.com/api/characters")
        fetch(request)
            .then(res => res.json())
            .then(data => filterCharacter(data.results))

    }, [])

    function initGame(character: string) {
        setSection('guess')
        setCharacter(character)
    }

    return (
        <main>
            { section === 'hero' && <SectionHero playGame={() => { setSection('choose') }}/> }
            { section === 'choose' && <SectionChooseCharacter initGame={initGame} characters={characters}/> }
            { section === 'guess' && <SectionGuessPhrase personaje={character} /> }
        </main>
    )
}