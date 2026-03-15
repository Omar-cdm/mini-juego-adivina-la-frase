export const CreateCard: React.FC<{ character: any, selectCharacter: (n: any) => void, setPhase: (n: any) => void }> = ({character, selectCharacter, setPhase}) => {
    const url = `https://cdn.thesimpsonsapi.com/${200}${character.portrait_path}`

    function random(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return (
        <article className="bg-yellow-100 rounded-xl flex flex-col items-center border-2 border-sky-800 p-2 box-border">
            <header className="w-full flex flex-col items-center">
                <img className="size-26" alt="imagen de personaje" src={url}/>
                <h2 className="w-full truncate text-lg font-semibold text-center">{character.name}</h2>
            </header>
            <input 
                type="radio" 
                id={character.name} 
                name="personaje" 
                className="hidden peer"
                onChange={() => {selectCharacter(character.name); setPhase(character.phrases[random(0, character.phrases.length - 1)])}}
            />
            <label className="bg-orange-400 w-1/2 flex justify-center items-center text-white rounded-xl p-1 box-boder my-2 transition delay-110 duration-400 ease peer-checked:bg-green-600 hover:cursor-pointer hover:bg-green-600" htmlFor={character.name}>
                <p className="text-sm">Choose</p>
            </label>
        </article>
    )
}
