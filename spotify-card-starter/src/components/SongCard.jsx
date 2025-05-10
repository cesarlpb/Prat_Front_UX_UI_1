import React from "react";

const SongCard = ({ image, title, artist, duration, play }) => {
  return (
    <div className="group bg-black hover:bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out p-6 w-full max-w-sm">
      {/* Imagen de portada */}
      <div className="relative w-full h-64 mb-4">
        <img
          src={image}
          alt={`Portada de ${title}`}
          className="w-full h-full object-cover rounded-xl"
        />
      </div>

      {/* Info */}
      <div className="flex justify-between items-end">
        <div className="space-y-2">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-gray-300">{artist}</p>
          <p className="text-sm text-gray-400">{duration}</p>
        </div>

        {/* Botón de Play - oculto hasta hover */}
        <button className="opacity-0 group-hover:opacity-100 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center transition duration-300 ease-in-out hover:bg-green-400 self-end">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
            <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default SongCard;
