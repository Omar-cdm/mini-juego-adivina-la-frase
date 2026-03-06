import  ButtonGithub  from './component/BtnGithub.tsx'

export default function Header() {
    return (
        <header className="backdrop-blur-md fixed inset-x-1/6 top-2 z-1 rounded-4xl min-w-2/5 min-h-14 px-4 py-2 flex justify-between items-center border-2 border-sky-600 shadow-xl shadow-sky-500/60 sm:min-h-15 xl:min-h-18">
            <h1>Min-Game</h1>
            <ButtonGithub />
        </header>
    )
};