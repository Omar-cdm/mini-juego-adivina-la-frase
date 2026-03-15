export const SectionGameEnd: React.FC<{resultado: string}> = ({resultado}) => {
    return (
        <section className="h-dvh flex flex-col justify-center items-center">
            <h1 className="text-4xl text-center text-sky-100 font-bold mb-8 sm:text-5xl">{resultado}</h1>
            <button className="bg-yellow-300 text-xl font-bold w-32 min-h-10 rounded-md transition delay-110 duration-400 ease hover:bg-yellow-400 hover:scale-102 hover:shadow-xl hover:shadow-yellow-400/30 hover:cursor-pointer reiniciar">Reiniciar</button>
        </section>
    )
}