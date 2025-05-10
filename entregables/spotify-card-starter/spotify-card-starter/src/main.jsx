import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import SongCard from "./components/SongCard"; 

const songData = {
  coverArt: 'https://akamai.sscdn.co/uploadfile/letras/fotos/d/7/a/e/d7aed568cdf0d29c0e8f8a71d8fc9414.jpg',
  title: 'twilight zone',
  artist: 'Ariana Grande',
  duration: '3:22',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* Aquí se renderiza tu componente principal App */}
  </React.StrictMode>
);
