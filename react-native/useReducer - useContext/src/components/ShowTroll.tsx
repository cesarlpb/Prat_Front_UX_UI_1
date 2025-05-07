import { useEffect, useRef } from "react";
import { useTroll } from "../hooks/useTroll"

export default function ShowTroll() {

    const { state, dispatch } = useTroll()
    const { user } = state

    const {isPlaying} = state;

    const audioRef = useRef(new Audio);

    // Efecto para actualizar la URL del audio cuando el objeto user cambia
    useEffect(() => {
        if (user && user.url) {
            audioRef.current.src = user.url;
        }
    }, [user.url]);

    // Función para reproducir o pausar el audio
    const handlePlayPause = () => {
        if (isPlaying) {
            dispatch({ type: 'addTroll', payload:{ user:{image:'./Troll.png', url:'./audio.ogg'} } })
            audioRef.current.pause();
        } else {
            
            dispatch({ type: 'addTroll', payload:{ user:{image:'./pepe.png', url:'./audio.ogg'} } })
            audioRef.current.play();
        }
        dispatch({type: 'playPause', payload:{isPlaying:!isPlaying}})
    };
    return (
        <div className="w-1/2 h-1/2 rounded-4xl bg-white flex">
            <div className="w-1/2 h-full flex items-center justify-center">
                {user.image ? (
                    <img src={user.image} alt="troll" className="w-[80%] max-w-[300px] rounded-full" />
                ) : (
                    <h1 className="text-5xl uppercase font-bold">falta troll</h1>
                )}
            </div>
            <div className="w-1/2 h-full flex items-center justify-center flex-col">
                {user.image && (
                    <>
                        <h2 className="uppercase font-bold text-2xl">{isPlaying ? 'Vale mejor me callo TT' : 'Tengo una cancion para ti UWU'}</h2>
                        <audio ref={audioRef}></audio>
                        <button onClick={handlePlayPause} className=" text-white bg-black p-4 mt-4 rounded-2xl uppercase font-bold">{isPlaying ? 'pause' : 'play'} </button>
                    </>
                )}
            </div>

        </div>
    )
}
