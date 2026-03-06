export const SectionHero: React.FC<{playGame: () => void}> = ({ playGame }) => {

    return (
        <section className="h-dvh grid place-items-center seccion-iniciar-juego">
            <div className="flex flex-col items-center gap-8">
                <h1 className="text-3xl text-center text-sky-100 font-bold px-2 box-border sm:text-4xl">Have fun guessing a phrase from your favorite character.</h1>
                <button className="bg-yellow-300 text-xl font-bold w-32 min-h-10 rounded-md transition delay-110 duration-400 ease hover:bg-yellow-400 hover:scale-102 hover:shadow-xl hover:shadow-yellow-400/30 hover:cursor-pointer" onClick={playGame}>Start</button>
            </div>
        </section>
    )
}