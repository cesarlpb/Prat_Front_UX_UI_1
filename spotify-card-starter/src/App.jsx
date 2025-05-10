import SongCard from './components/SongCard';

const song = {
  title: "Blinding Lights",
  artist: "The Weeknd",
  duration: "3:20",
  image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36"
};

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <SongCard 
        image={song.image}
        title={song.title}
        artist={song.artist}
        duration={song.duration}
      />
    </div>
  );
}

export default App;
