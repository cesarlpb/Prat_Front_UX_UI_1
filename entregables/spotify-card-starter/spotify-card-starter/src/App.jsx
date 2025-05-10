import React from 'react';
import SongCard from './components/SongCard';

const song = {
  // completar con datos de prueba
  coverArt: 'https://akamai.sscdn.co/uploadfile/letras/fotos/d/7/a/e/d7aed568cdf0d29c0e8f8a71d8fc9414.jpg',
  title: 'twilight zone',
  artist: 'Ariana Grande',
  duration: '3:22',
};

function App() {
  return (
    <div className="app-container" style={{
      display: 'flex',
      flex: 1,
      backgroundColor: '#000',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      width: '100vw',
      position: 'fixed',
      top: 0,
      left: 0,
      margin: 0,
      padding: 0,
      overflow: 'hidden',
    }}>
      <SongCard
        coverArt={song.coverArt}
        title={song.title}
        artist={song.artist}
        duration={song.duration}
        onPlay={() => console.log(`Reproduciendo: ${song.title} - ${song.artist}`)}
      />
    </div>
  );
}

export default App;
