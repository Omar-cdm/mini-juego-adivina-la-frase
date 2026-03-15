import { useState } from "react";
import { BtnPhrase } from "./BtnPhrase.tsx";

export const BtnsPhrases: React.FC<{phrases: any[], phraseSelect: string}> = ({phrases, phraseSelect}) => {
    const newPhrases: any[] = [...phrases]
    const [count, setCount] = useState(1)

    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function verify(phrase: string) {
        if(count >= 3) { alert('Perdiste') }
        if(phrase === phraseSelect) {
            console.log('Phrase Correct')
        }
        setCount(count => count + 1)
        console.log(count)
    }
    newPhrases.splice(random(0, newPhrases.length), 0, phraseSelect)

    return (
        <div className="flex flex-col gap-3 my-8">
            {
                newPhrases.map((phrase: string ) => {return <BtnPhrase phrase={phrase} verifyPhrase={verify}/>})
            }
        </div>
    )
} 