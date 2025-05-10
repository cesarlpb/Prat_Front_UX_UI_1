import BtnDisplay from "./components/BtnDisplay"
import ShowTroll from "./components/ShowTroll"
import { useTroll } from "./hooks/useTroll"
function App() {
  const { state } = useTroll()
  const { isPlaying } = state
  return (
    <>
      <main className="w-screen h-screen bg-blue-200 flex items-center justify-center flex-col">
        <img src="./image-asset.gif" className={isPlaying ? "w-[100px] absolute top-0 left-0" : 'hidden'} />
        <img src="./image-asset.gif" className={isPlaying ? "w-[100px] absolute top-0 right-0": 'hidden'} />
        <img src="./image-asset.gif" className={isPlaying ? "w-[100px] absolute bottom-0 left-0" : 'hidden'} />
        <img src="./image-asset.gif" className={isPlaying ? "w-[100px] absolute bottom-0 right-0" : 'hidden'} />
        <ShowTroll />
        <BtnDisplay />
      </main>
    </>
  )
}

export default App
