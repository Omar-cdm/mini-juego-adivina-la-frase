export const BtnPhrase: React.FC<{phrase: string, verifyPhrase: (phrase: string) => void }> = ({phrase, verifyPhrase}) => {
    return <button className="w-full bg-yellow-100 p-1 box-boder border-1 border-yellow-400 rounded-xl transition delay-110 duration-400 ease hover:cursor-pointer hover:scale-102 sm:w-5/6 boton-frase" onClick={() => {verifyPhrase(phrase)}}>{phrase}</button>
}