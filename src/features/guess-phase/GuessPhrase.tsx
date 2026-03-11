import { BtnsPhrases } from "./component/BtnsPhrases.tsx";

export const SectionGuessPhrase: React.FC<{personaje: string, phrases: any[], phraseSelect: string}> = ({ personaje, phrases, phraseSelect }) => {
    return (
        <section className="h-dvh flex flex-col justify-center items-center">
            <h1 className="text-2xl text-center text-sky-100 font-bold mb-2 sm:text-3xl">¿What phrase does he mention {personaje}?</h1>
            <div className="w-full h-80 overflow-auto px-4 flex flex-col items-center gap-2">
                <BtnsPhrases phrases={phrases} phraseSelect={phraseSelect}/>
            </div>
        </section>
    )
};