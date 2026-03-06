import { useState } from 'react'
import { SectionHero } from "../../features/hero/Hero.tsx"
import SectionChooseCharacter from '../../features/choose-character/ChooseCharacter.tsx'

export default function Main() {
    const [section, setSection] = useState(true)

    function game(): void {
        setSection(!section)
    }

    return (
        <main>
            {section ? <SectionHero playGame={game} /> : <SectionChooseCharacter/>}
        </main>
    )
}