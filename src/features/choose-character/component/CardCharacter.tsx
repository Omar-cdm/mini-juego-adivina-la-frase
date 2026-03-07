export const CreateCard: React.FC<{ image: string, title: string }> = ({image, title}) => {
    const url = `https://cdn.thesimpsonsapi.com/${200}${image}`

    return (
        <article className="bg-yellow-100 rounded-xl flex flex-col items-center border-2 border-sky-800 p-2 box-border">
            <header className="w-full flex flex-col items-center">
                <img className="size-26" alt="imagen de personaje" src={url}/>
                <h2 className="w-full truncate text-lg font-semibold text-center">{title}</h2>
            </header>
            <input type="radio" className="hidden peer button" id={title} name="character">
                <label className="bg-orange-400 w-1/2 flex justify-center items-center text-white rounded-xl p-1 box-boder my-2 transition delay-110 duration-400 ease peer-checked:bg-green-600 hover:cursor-pointer hover:bg-green-600 hover:scale-102" htmlFor={title}>
                    <p className="text-sm">Choose</p>
                </label>
            </input>
        </article>
    )
}
