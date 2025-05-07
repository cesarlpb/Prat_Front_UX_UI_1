import { useTroll } from "../hooks/useTroll"



export default function BtnDisplay() {
    const{ dispatch } = useTroll()

    const handleAdd = () => {
        dispatch({ type: 'addTroll', payload:{ user:{image:'./Troll.png', url:'./audio.ogg'} } })
    }

    const handleClear = () => {
        dispatch({ type: 'clearTroll' })
    }
    return (
        <div className="w-1/2 h-10 flex justify-between mt-5">
            <button className="h-full w-[45%] bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl uppercase font-bold" onClick={handleAdd}>add troll</button>
            <button className="h-full w-[45%] bg-blue-600 hover:bg-blue-700 text-white text-center rounded-xl uppercase font-bold" onClick={handleClear}>clear troll</button>
        </div>
    )
}
