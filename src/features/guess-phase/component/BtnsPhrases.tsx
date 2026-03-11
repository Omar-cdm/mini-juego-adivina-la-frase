import { BtnPhrase } from "./BtnPhrase.tsx";

export const BtnsPhrases: React.FC<{phrases: any[], phraseSelect: string}> = ({phrases, phraseSelect}) => {
    const newPhrases: any[] = [...phrases]

    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function verify(phrase: string) {
        if(phrase === phraseSelect) {
            console.log('Phrase Correct')
        }
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