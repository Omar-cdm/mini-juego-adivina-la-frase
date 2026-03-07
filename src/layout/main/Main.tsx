import { useState } from 'react'
import { SectionHero } from "../../features/hero/Hero.tsx"
import { SectionChooseCharacter } from '../../features/choose-character/ChooseCharacter.tsx'
import { SectionGuessPhrase } from '../../features/guess-phase/GuessPhrase.tsx'

export default function Main() {
    const [section, setSection] = useState('hero')

    return (
        <main>
            { section === 'hero' && <SectionHero playGame={() => { setSection('choose') }}/> }
            { section === 'choose' && <SectionChooseCharacter initGame={() => { setSection('guess') }}/> }
            { section === 'guess' && <SectionGuessPhrase personaje='Homero' /> }
        </main>
    )
}