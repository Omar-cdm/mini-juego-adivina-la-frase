import { useState } from "react"
import { CreateCard } from "./component/CardCharacter.tsx"

export const SectionChooseCharacter: React.FC<{initGame: (character: string) => void, characters: never[]}> = ({ initGame, characters }) => {
    const [character, setCharacter] = useState("")
    const charactersArray = characters

    function handlePlay() {
        initGame(character)
        console.log(character)
    }

    return (
       <section className="h-dvh flex flex-col justify-center items-center seccion-elegir-personaje">
            <h1 className=" text-center text-2xl text-sky-100 font-bold mb-4 sm:text-3xl">Choose Your Favorite Character</h1>
            <div className="w-full h-1/2 overflow-auto px-4 mb-4 grid grid-cols-2 gap-4 sm:grid-cols-4 container">
                {
                    charactersArray.map((card: any) => {return <CreateCard key={card.id} image={card.portrait_path} title={card.name} selectCharacter={setCharacter} />})
                }
            </div>
            <button className="bg-yellow-300 text-xl font-bold w-32 min-h-10 rounded-md transition delay-110 duration-400 ease hover:bg-yellow-400 hover:scale-102 hover:shadow-xl hover:shadow-yellow-400/30 hover:cursor-pointer jugar" onClick={handlePlay}>Play</button>
        </section> 
    )
}